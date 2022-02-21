import { useEffect } from "react";
import { Container, DetailCard, Button } from "../components/styledComps";
import { selectEmployees, deleteEmployee } from "./employeeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  emptyForm,
  populateForEdit,
  selectCurrentFormInfo,
} from "./empFormSlice";

const ViewEmp = () => {
  const { empId } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formInfo = useSelector(selectCurrentFormInfo);

  const allEmployees = useSelector(selectEmployees);

  useEffect(() => {
    if (empId) {
      const empToEdit = allEmployees.filter((item) => item.employeeId == empId);

      dispatch(populateForEdit(empToEdit[0]));
    } else {
      dispatch(emptyForm());
    }
  }, []);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to Delete this Employee?")) {
      return;
    }
    dispatch(deleteEmployee(empId));
    navigate("/");
  };

  return (
    <Container>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Name - </span>
        {formInfo.name}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Contact - </span>
        {formInfo.contact}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Email - </span>
        {formInfo.email}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Designation - </span>
        {formInfo.designation}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Company - </span>
        {formInfo.company}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Employee ID - </span>
        {formInfo.employeeId}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Salary - </span>
        {formInfo.salary}
      </DetailCard>
      <DetailCard>
        <span style={{ fontWeight: "bold" }}>Interests - </span>
        {formInfo.interests.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </DetailCard>
      <div>
        <Button bgColor="#dc2626" onClick={handleDelete}>
          Delete
        </Button>
        <Button bgColor="#475569" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </Container>
  );
};

export default ViewEmp;
