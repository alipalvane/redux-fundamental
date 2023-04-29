import {configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:"counter",
    initialState : {counter:0},
    reducers:{
        inc(state, action){
             state.counter++
        },
        dec(state, action){
             state.counter--
        },
        add(state, action){
             state.counter += action.payload
        },
        reset(state,action){
            state.counter = 0
        }
    }
}) 
export const actions = counterSlice.actions
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store