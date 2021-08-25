import { createSlice, current } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
    name:'authentication',
    initialState:{
        inputs:{
            email:'',
            password:''
        },
        isAuthenticated:false  
    },
    reducers: {
        onInputChange: (state, {type, payload}) => {
            state.inputs[payload.ele] = payload.value
        },
        onSubmit: (state) => {
            state.isAuthenticated = true
        }

    }
});

// Action creators are generated for each case reducer function
export const { onInputChange, onSubmit } = authenticationSlice.actions;

export default authenticationSlice.reducer;

    