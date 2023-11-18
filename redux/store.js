import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {imagesReducer} from '../features/IMAGES/imagesSlice'
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { favoritesReducer } from '../features/favorite/favoriteSlice'; 
import{
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage  from "@react-native-async-storage/async-storage";

const config= {
    key:'root',
    storage: AsyncStorage,
    debug: true,
}


export const store = configureStore({
    reducer: persistCombineReducers(config,{
        images: imagesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        favorites: favoritesReducer,
    }),
    // middleware: (...getDefaultMiddleware)=> 
    //    getDefaultMiddleware({
    //     serializableCheck:{
    //         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER]
    //     }

    //    })
    middleware: [...getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })],

    

})

export const persistor=persistStore(store);
   
        
        
    