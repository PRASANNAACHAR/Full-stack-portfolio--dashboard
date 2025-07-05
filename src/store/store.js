import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";
import forgotResetPassReducer from "./slices/forgotResetPasswordSlice";
import messagesReducer from "./slices/messagesSlice";
import timelineReducer from './slices/timelineSlice'
import skillReducer from './slices/SkillSlice'
import  softwareApplicationReducer  from "./slices/softwareApplicationSlice";
import projectReducer from "./slices/projectSlice";


export const store = configureStore({
    reducer:{
        user: userReducer,
        forgotPassword: forgotResetPassReducer,
        messages: messagesReducer,
        timeline: timelineReducer,
        skill: skillReducer,
        application: softwareApplicationReducer,
        project: projectReducer,
    },
});