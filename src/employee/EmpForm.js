import { useEffect, useState } from "react";
import { Container, Button, Input } from "../components/styledComps";
import { addEmployee, selectEmployees, updateEmployee } from "./employeeSlice";
import {
  mutateName,
  mutateContact,
  mutateEmail,
  mutateDesignation,
  mutateCompany,
  mutateEmployeeId,
  mutateSalary,
  mutateInterests,
  selectCurrentFormInfo,
  emptyForm,
  populateForEdit,
} from "./empFormSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const MutateEmp = () => {
  const { empId } = useParams();

  const navigate = useNavigate();

  const formInfo = useSelector(selectCurrentFormInfo);
  const allEmployees = useSelector(selectEmployees);

  const dispatch = useDispatch();

  useEffect(() => {
    if (empId) {
      const empToEdit = allEmployees.filter((item) => item.employeeId == empId);

      dispatch(populateForEdit(empToEdit[0]));
    } else {
      dispatch(emptyForm());
    }
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const existingEmp = allEmployees.find(
      (item) => item.employeeId == formInfo.employeeId
    );

    if (existingEmp) {
      alert("Employee Id already exists please use different id.");
      return;
    }

    if (
      formInfo.name == "" ||
      formInfo.email == "" ||
      formInfo.employeeId == ""
    ) {
      alert("Please provide name, email and employee id.");
      return;
    }

    if (empId) {
      dispatch(updateEmployee(formInfo));
    } else {
      dispatch(addEmployee(formInfo));
    }
    dispatch(emptyForm());

    navigate("/");
  };

  const handleInterestsChange = (e) => {
    const selectedValues = [];

    for (var i = 0; i < e.target.selectedOptions.length; i++) {
      const valueForUse = e.target.selectedOptions[i].value;
      selectedValues.push(valueForUse);
    }

    dispatch(mutateInterests(selectedValues));
  };

  return (
    <Container>
      <form
        style={{
          width: "50%",
          display: "grid",
          gridTemplateColumns: "40% 60%",
          rowGap: 16,
        }}
        onSubmit={(e) => onFormSubmit(e)}
      >
        <label>Name</label>
        <Input
          value={formInfo.name}
          onChange={(e) => dispatch(mutateName(e.target.value))}
          type="text"
        ></Input>
        <label>Contact</label>
        <Input
          value={formInfo.contact}
          onChange={(e) => dispatch(mutateContact(e.target.value))}
          type="number"
        ></Input>
        <label>Email</label>
        <Input
          value={formInfo.email}
          onChange={(e) => dispatch(mutateEmail(e.target.value))}
          type="text"
        ></Input>
        <label>Designation</label>
        <Input
          value={formInfo.designation}
          onChange={(e) => dispatch(mutateDesignation(e.target.value))}
          type="text"
        ></Input>
        <label>Company</label>
        <Input
          value={formInfo.company}
          onChange={(e) => dispatch(mutateCompany(e.target.value))}
          type="text"
        ></Input>
        <label>Employee ID</label>
        <Input
          value={formInfo.employeeId}
          onChange={(e) => dispatch(mutateEmployeeId(e.target.value))}
          type="number"
        ></Input>
        <label>Salary - {formInfo.salary}</label>
        <Input
          value={formInfo.salary}
          onChange={(e) => dispatch(mutateSalary(e.target.value))}
          type="range"
          min="10000"
          max="1000000"
        ></Input>

        <label>Interests</label>
        <select
          value={formInfo.interests}
          style={{ padding: 8, borderRadius: 3, border: "1px solid #d4d4d4" }}
          name="interests"
          id="interests"
          multiple
          onChange={(e) => handleInterestsChange(e)}
        >
          <option value="swimming">Swimming</option>
          <option value="sailing">Sailing</option>
          <option value="cricket">Cricket</option>
        </select>
        <Button bgColor="#06b6d4" type="submit">
          Save
        </Button>
        <Button bgColor="#475569" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default MutateEmp;
