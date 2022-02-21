import React from "react";
import { Container, Button } from "./components/styledComps";
import Table from "./components/table";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectEmployees } from "./employee/employeeSlice";

const employeeTableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },

  {
    title: "E Mail",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (empObj) => {
      return (
        <td>
          <Link to={`/employee/${empObj.employeeId}/edit`}>
            <Button bgColor="#06b6d4">Edit</Button>
          </Link>
          <Link to={`/employee/${empObj.employeeId}/view`}>
            <Button bgColor="#06b6d4">View Details</Button>
          </Link>
        </td>
      );
    },
  },
];

function App() {
  const employees = useSelector(selectEmployees);

  return (
    <Container>
      <Link to={`/employee/new`}>
        <Button style={{ marginBottom: 16 }} bgColor="#164e63">
          Add New Employee
        </Button>
      </Link>

      <Table columns={employeeTableColumns} dataSource={employees} />
    </Container>
  );
}

export default App;
