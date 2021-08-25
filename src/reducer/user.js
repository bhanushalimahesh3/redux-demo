import { createSlice, current } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userData:null,
        filters:{
            name:''
        }
    },
    reducers:{

        onFilterInputChange: (state, {type, payload}) => {
            state.filters.name = payload.value
        },

        onSearch: (state, {type, payload}) => {           
        },

        onUserListAPI: (state, {type, payload}) => {  
            state.userData = payload.value         
        },

    }
});

export const { onSearch, onFilterInputChange, onUserListAPI } = userSlice.actions;

export default userSlice.reducer;