import { configureStore } from "@reduxjs/toolkit";
import { settingReducer } from "./redux/reduxSlices";
import { sessionReducer } from "./redux/sessionSlice";
import { timerReducer } from "./redux/timerSlice";
export default configureStore({
    reducer: {
        setting: settingReducer,
        session: sessionReducer,
        timer:   timerReducer,
    },
});
