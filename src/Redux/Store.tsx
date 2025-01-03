import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './Slices/CounterSlice.tsx'
import todoReducer from './Slices/TodoSlice.tsx'
export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})



export type AppStore = typeof Store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>