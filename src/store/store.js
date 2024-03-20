import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import registrationSlice from "./registrationSlice";


const store=configureStore({
    reducer:{
        cart:cartSlice,
        register:registrationSlice

    }
})


export default store