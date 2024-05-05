// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/rootReducer';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import { useDispatch, useSelector, useStore } from "react-redux";

// Function to create the store
const makeStore = () => configureStore({
    reducer: rootReducer,
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

// Export the wrapper with the correct typing
// export const wrapper = createWrapper<ReturnType<typeof makeStore>>(makeStore, {debug: true});
export default makeStore;
