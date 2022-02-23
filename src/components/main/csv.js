import React from "react";
import DataGrid from "./datagrid";
import "./datagrid.css";

// para converter os dados em texto, do arquivo CSV
const parseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  };

  // para definir primeira linha = header; demais será o content data
  const [header, ...content] = text.split("\n"); // "split \n" para dividir cada item por linha

  // "split ," para transformar em array
  result.header = header.split(",");

  // "for each" para separar cada item com ","
  content.forEach((item) => {
    result.data.push(item.split(","));
  });
  return result;
};

function Csv(props) {
  if (!props.file) {
    return null;
  }
  const file = parseCSV(props.file);

  return (
    <div className="Csv">
      <DataGrid csv={file} />
    </div>
  );
}

export default Csv;
