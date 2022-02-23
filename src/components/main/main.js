import React, { useState } from "react";
import "./main.css";
import Csv from "./csv.js";

function Main() {
  const [file, setFile] = useState();
  const readFile = (event) => {
    let fileReader = new FileReader();
    fileReader.onload = function () {
      setFile(fileReader.result);
    };
    fileReader.readAsText(event.target.files[0]);
  };
  return (
    <main>
      <section className="main-header container">
        <h1 className="heading-prime">Prova de Conceito</h1>
      </section>
      <section className="main-content">
        <div className="left">
          <h3 className="heading-ter">Drag and Drop</h3>
          <p className="feature-text">
            Experimente nossa nova <span className="drag-n-drop">feature</span>!
          </p>
          <p className="feature-text">
            O <span className="drag-n-drop">drag and drop</span> é uma simples
            ação de "arraste e solte".
          </p>
          <p className="feature-text">
            Selecione seu arquivo e, com o mouse, <span>arraste e solte</span>{" "}
            na caixa ao lado.
          </p>
          <p className="feature-text">Simples assim!</p>
        </div>
        <div className="drag right custom-file-upload">
          {!file ? (
            <label>
              <input type="file" onChange={readFile} />
              ARRASTE e SOLTE seu arquivo ou CLIQUE para abrir
            </label>
          ) : (
            <Csv file={file} />
          )}
        </div>
      </section>
    </main>
  );
}

export default Main;
