import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: number,
    status: "idle" | 'loading' | 'failed'
}
const initialState: CounterState = { value: 0, status: 'idle' }

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: state => {
            state.value += 1
        },
        decrease: state => {
            state.value -= 1
        },
        increaseByAmount: (state, Action) => {
            state.value += Action.payload
        },
        decreaseByAmount: (state, Action) => {
            state.value -= Action.payload
        }
    }
})


export const { increase, decrease, increaseByAmount, decreaseByAmount } = CounterSlice.actions
export default CounterSlice.reducer;