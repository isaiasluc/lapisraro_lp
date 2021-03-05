import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <div className="first-screen">
        <div className="logo-unimed" />
        <div className="left-text">
          <span>
            Cuidar da vida sempre foi e sempre será o que move a Unimed-BH.
          </span>
        </div>
        <div className="left-text-bottom">
          <span>
            Nestes 50 anos, pautamos nossa atuação pelo compromisso com a melhor
            assistência em saúde para os nossos clientes e pela valorização
            contínua do trabalho médico. Nossa vocação maior é cuidar de
            pessoas.
          </span>
        </div>
        <div className="first-screen-image" />
      </div>
    </div>
  );
}

export default Home;
