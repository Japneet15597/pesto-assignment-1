const Table = (props) => {
  return (
    <table
      cellSpacing={0}
      cellPadding={0}
      style={{
        border: "1px solid #d4d4d4",
        borderRadius: 4,
        boxShadow: "0px 2px 5px #e2e8f0",
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: "#f8fafc",
          }}
        >
          {props.columns.map((item, index) => {
            return (
              <th
                key={index}
                style={{
                  padding: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRight: `${
                    index == props.columns.length - 1 ? "" : "1px solid #d4d4d4"
                  }`,
                }}
              >
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody
        style={{
          borderTopWidth: "1px",
          borderBottomWidth: "1px",
        }}
      >
        {props.dataSource.map((dataSource) => {
          return (
            <tr key={dataSource.key}>
              {props.columns.map((column, index) => {
                if (column.render) {
                  return column.render(dataSource);
                } else {
                  return (
                    <td
                      key={index}
                      style={{
                        padding: 8,
                        borderRight: `${
                          index == props.columns.length - 1
                            ? ""
                            : "1px solid #d4d4d4"
                        }`,
                      }}
                    >
                      {dataSource[column.dataIndex]}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
