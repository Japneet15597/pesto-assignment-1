import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      const indexOfObj = state.findIndex(
        (item) => item.employeeId == action.payload.employeeId
      );
      state.splice(indexOfObj);
    },
    updateEmployee: (state, action) => {
      const indexOfObj = state.findIndex(
        (item) => item.employeeId == action.payload.employeeId
      );

      state[indexOfObj] = action.payload;
    },
  },
});

export const selectEmployees = (state) => state.employees;

export const { addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
