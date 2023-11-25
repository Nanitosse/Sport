import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

// export const fetchImages = createAsyncThunk(
//     'images/fetchImages',
//     async () => {
//         try {
//             const response = await fetch('http://localhost:3000');
//             if (!response.ok) {
//                 return Promise.reject(
//                     'Unable to fetch, status: ' + response.status
//                 );
//             }
//             const data = await response.json();
//             return data;
//         }catch(error){
//             throw error
//         }
//     }
// );
export const fetchImageById = createAsyncThunk(
    'images/fetchImageById',
    async (imageId) => {
        try {
            const response = await fetch(`http://172.20.10.4:3000/images/${imageId}`);
            if (!response.ok) {
                return Promise.reject(
                    'Unable to fetch image, status: ' + response.status
                );
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error fetching image:',error)
            throw error;
        }
    }
);

// const imagesSlice = createSlice({
//     name: 'images',
//     initialState: { isLoading: true, errMess: null, imagesArray: [] },
//     reducers: {},
//     extraReducers: {
//         [fetchImages.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchImages.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errMess = null;
//             state.imagesArray = action.payload;
//         },
//         [fetchImages.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errMess = action.error
//                 ? action.error.message
//                 : 'Fetch failed';
//         }
//     }
// });
const imagesSlice = createSlice({
    name: 'images',
    initialState: { isLoading: true, errMess: null, imagesArray:[] },
    reducers: {},
    extraReducers: {
       
        [fetchImageById.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchImageById.fulfilled]: (state, action) => {
            console.log('server respones', action.payload);
            state.isLoading = false;
            state.errMess = null;
            state.imagesArray = [action.payload]; 
        },
        [fetchImageById.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const imagesReducer = imagesSlice.reducer; 
