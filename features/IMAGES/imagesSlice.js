import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';


export const fetchImageById = createAsyncThunk(
    'image/fetchImageById',
    async (imageId) => {
        try {
            // const response = await fetch(`http://172.20.10.3:3000/image/${imageId}`);
            const response=await fetch('http://localhost:3000/image/652224f5d51f3736c92cd29e')
            if (!response.ok) {
                console.log('Network request failed:', response.status, response.statusText);
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
const imageSlice = createSlice({
    name: 'image',
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
            console.log("Redux state after payload", state);
        },
        [fetchImageById.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const imageReducer = imageSlice.reducer; 
