import { configureStore } from '@reduxjs/toolkit';
import {fieldsReducer} from '../../features/Fields/fieldsSlice'
import { commentsReducer } from '../../features/comments/commentsSlice';
import { partnersReducer } from '../../features/partners/partnersSlice';


export const store = configureStore({
    reducer: {
        fields: fieldsReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        
    }
});