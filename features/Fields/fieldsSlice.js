import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from   '../../shared/baseUrl';

export const fetchFields = createAsyncThunk(
    'fields/fetchFields',
    async () => {
        const response = await fetch(baseUrl + 'fields');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const fieldsSlice = createSlice({
    name: 'fields',
    initialState: { isLoading: true, errMess: null, fieldsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchFields.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchFields.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.fieldsArray = action.payload;
        },
        [fetchFields.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const fieldsReducer = fieldsSlice.reducer;