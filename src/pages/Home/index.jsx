import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <div className="first-screen">
        <div className="row">
          <div className="col d-flex flex-row-reverse">
            <div className="logo-unimed" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-3">
            <div className="left-text">
              <span>
                Cuidar da vida sempre foi e sempre será o que move a Unimed-BH.
              </span>
            </div>
            <div className="left-text-bottom">
              <span>
                Nestes 50 anos, pautamos nossa atuação pelo compromisso com a
                melhor assistência em saúde para os nossos clientes e pela
                valorização contínua do trabalho médico. Nossa vocação maior é
                cuidar de pessoas.
              </span>
            </div>
          </div>
          <div className="col-9">
            <div className="first-screen-image" />
          </div>
        </div>
      </div>
      <div className="second-screen">
        <div className="row">
          <div className="col-12 top-text">
            Década de <span>1970</span>
            <br />
            <span className="d-flex flex-row-reverse lower-text">
              A Fundação
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-3 d-flex">
            <div className="left-bar">
              <div className="left-green-bar"></div>
              <div className="left-green-circles"></div>
            </div>
            <div className="col-3 mid-text" style={{ fontSize: '14px', marginTop: '200px'}}>
              Em abril de 1971, um grupo de 152 médicos reunidos em assembleia
              na Associação Médica de Minas Gerais (AMMG) fundou a Mediminas,
              uma cooperativa de trabalho médico.
              <br />
              <br />
              Em outubro de 1975, foi aprovada a integração ao Sistema Unimed e
              passamos a adotar oficialmente o nome de Unimed-BH.
              <br />
              <br />
              <button>
                <span className="icone"></span><span>Clique e veja mais</span></button>
            </div>
            <div className="col-3 bar-1970" style={{ marginTop: '200px'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
