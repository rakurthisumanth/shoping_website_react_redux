import { createSlice } from "@reduxjs/toolkit"

let initialState=[]

const registration=createSlice({
    name:'register',
    initialState,
    reducers:{
        addPeople(state,action){
            state.push(action.payload)
        }
    }
})

export const {addPeople}=registration.actions

export default registration.reducer