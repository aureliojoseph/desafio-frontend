import React from "react";

// para receber o CSV
const DataGrid = ({ csv }) => {
  if (!csv) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          {/* para mapear e trazer a quantidade de itens do header */}
          {csv.header.map((headerName) => (
            <th key={headerName}>{headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* para mapear e trazer a quantidade de linhas do data */}
        {csv.data.map((row, index) => (
          <tr key={index}>
            {/* para mapear e trazer a quantidade de colunas do data */}
            {row.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
