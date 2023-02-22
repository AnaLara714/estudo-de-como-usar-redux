import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlicer"; 
import projectsReducer from "./projects";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    projects: projectsReducer,
  },
});

//tipagem
export type RootState = ReturnType<typeof store.getState>

export default store;
//guarda o estado 