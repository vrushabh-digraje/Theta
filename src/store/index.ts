import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import uiReducer from './uiSlice';

/**
 * Configure the global Redux store.
 */
export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

/**
 * Type representing the application's root state.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type representing the application dispatch function.
 */
export type AppDispatch = typeof store.dispatch;

// Custom typed hooks for safety and convenience throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
