import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../Slice/userSlice";

const Store=configureStore({
    reducer:{
        userInfo:userReducer,
}       
})
export default Store