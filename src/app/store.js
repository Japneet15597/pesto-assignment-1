import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../employee/employeeSlice";
import employeeInfoReducer from "../employee/empFormSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    employeeInfoSlice: employeeInfoReducer,
  },
});
