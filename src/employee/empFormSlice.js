import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  contact: "",
  email: "",
  designation: "",
  company: "",
  employeeId: "",
  salary: "",
  interests: [],
};

export const employeeInfoSlice = createSlice({
  name: "employeeInfo",
  initialState,
  reducers: {
    mutateName: (state, action) => {
      state.name = action.payload;
    },
    mutateContact: (state, action) => {
      state.contact = action.payload;
    },
    mutateEmail: (state, action) => {
      state.email = action.payload;
    },
    mutateDesignation: (state, action) => {
      state.designation = action.payload;
    },
    mutateCompany: (state, action) => {
      state.company = action.payload;
    },
    mutateEmployeeId: (state, action) => {
      state.employeeId = action.payload;
    },
    mutateSalary: (state, action) => {
      state.salary = action.payload;
    },
    mutateInterests: (state, action) => {
      state.interests = action.payload;
    },
    emptyForm: (state) => {
      state.name = "";
      state.contact = "";
      state.email = "";
      state.designation = "";
      state.company = "";
      state.employeeId = "";
      state.salary = "";
      state.interests = [];
    },
    populateForEdit: (state, action) => {
      state.name = action.payload.name;
      state.contact = action.payload.contact;
      state.email = action.payload.email;
      state.designation = action.payload.designation;
      state.company = action.payload.company;
      state.employeeId = action.payload.employeeId;
      state.salary = action.payload.salary;
      state.interests = action.payload.interests;
    },
  },
});

export const selectCurrentFormInfo = (state) => state.employeeInfoSlice;

export const {
  mutateName,
  mutateContact,
  mutateEmail,
  mutateDesignation,
  mutateCompany,
  mutateEmployeeId,
  mutateSalary,
  mutateInterests,
  emptyForm,
  populateForEdit,
} = employeeInfoSlice.actions;

export default employeeInfoSlice.reducer;
