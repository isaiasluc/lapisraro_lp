import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "@brainhubeu/react-carousel/lib/style.css";
import "./styles.css";
import Modal1970 from "../../components/modal1970";
import Modal1980 from "../../components/modal1980";
import Modal1990 from "../../components/modal1990";
import Modal2000 from "../../components/modal2000";
import Modal2010 from "../../components/modal2010";
import Modal2020 from "../../components/modal2020";

function Home() {
  const [open1970, setOpen1970] = useState(false);
  const [open1980, setOpen1980] = useState(false);
  const [open1990, setOpen1990] = useState(false);
  const [open2000, setOpen2000] = useState(false);
  const [open2010, setOpen2010] = useState(false);
  const [open2020, setOpen2020] = useState(false);

  const handleOpen1970 = () => {
    setOpen1970(true);
  };

  const handleClose1970 = () => {
    setOpen1970(false);
  };

  const handleOpen1980 = () => {
    setOpen1980(true);
  };

  const handleClose1980 = () => {
    setOpen1980(false);
  };

  const handleOpen1990 = () => {
    setOpen1990(true);
  };

  const handleClose1990 = () => {
    setOpen1990(false);
  };

  const handleOpen2000 = () => {
    setOpen2000(true);
  };

  const handleClose2000 = () => {
    setOpen2000(false);
  };

  const handleOpen2010 = () => {
    setOpen2010(true);
  };

  const handleClose2010 = () => {
    setOpen2010(false);
  };

  const handleOpen2020 = () => {
    setOpen2020(true);
  };

  const handleClose2020 = () => {
    setOpen2020(false);
  };

  return (
    <>
      <div className="first-screen">
        <div className="row">
          <div className="col d-flex flex-row-reverse unimed">
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
      <div className="container">
        <div className="second-screen">
          <div className="row">
            <div className="col-12 top-text">
              Década de <span>1970</span>
              <br />
              <span className="d-flex lower-text">A Fundação</span>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex">
              <div className="left-bar d-flex">
                <div className="left-green-bar"></div>
                <div className="left-green-circles"></div>
              </div>
            </div>
            <div
              className="col-4 col-sm-12 mid-text"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              Em abril de 1971, um grupo de 152 médicos reunidos em assembleia
              na Associação Médica de Minas Gerais (AMMG) fundou a Mediminas,
              uma cooperativa de trabalho médico.
              <br />
              <br />
              Em outubro de 1975, foi aprovada a integração ao Sistema Unimed e
              passamos a adotar oficialmente o nome de Unimed-BH.
              <br />
              <br />
              <button className="btn" onClick={handleOpen1970}>
                <div className="button-text">
                  <span className="icone"></span>
                  <span>Clique e veja mais</span>
                </div>
              </button>
              <Modal
                open={open1970}
                onClose={handleClose1970}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Modal1970 />
              </Modal>
            </div>
            <div
              className="col-4 bar-1970"
              style={{ marginTop: "200px" }}
            ></div>
          </div>
        </div>
        <div className="third-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#F69653" }}>
              Década de <span>1980</span>
              <br />
              <span className="d-flex lower-text">
                Reestruturar para avançar
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex">
              <div className="left-bar d-flex">
                <div className="left-orange-bar"></div>
                <div className="left-orange-circles"></div>
              </div>
            </div>
            <div
              className="col-4 col-sm-12 mid-text"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              O início dos anos 1980 veio marcado por um contexto nacional de
              retração econômica. Para enfrentar a crise, a Unimed-BH precisou
              fazer ajustes e estruturar novos processos.
              <br />
              <br />
              <button
                className="btn"
                onClick={handleOpen1980}
                style={{ background: "#F69653" }}
              >
                <div className="button-text">
                  <span className="icone"></span>
                  <span>Clique e veja mais</span>
                </div>
              </button>
              <Modal
                open={open1980}
                onClose={handleClose1980}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Modal1980 />
              </Modal>
            </div>
            <div
              className="col-4 bar-1980"
              style={{ marginTop: "200px" }}
            ></div>
          </div>
        </div>
        <div className="fourth-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#62457F" }}>
              Década de <span>1990</span>
              <br />
              <span className="d-flex lower-text">
                O inicio de uma nova era
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex">
              <div className="left-bar d-flex">
                <div className="left-purple-bar"></div>
                <div className="left-purple-circles"></div>
              </div>
            </div>
            <div
              className="col-4 mid-text anos1990"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              A conjuntura de incertezas do início da década de 1990 fez com que
              a Unimed-BH redirecionasse o foco para os planos individuais e
              familiares e de pequenas e médias empresas.
              <br />
              <br />
              Uma nova sede, na Av. Francisco Sales, começou a ser construída e
              foi neste período também que a Cooperativa realizou seu primeiro
              processo eleitoral para escolha da diretoria.
              <br />
              <br />
              <button
                className="btn"
                onClick={handleOpen1990}
                style={{ background: "#62457F" }}
              >
                <div className="button-text">
                  <span className="icone"></span>
                  <span>Clique e veja mais</span>
                </div>
              </button>
              <Modal
                open={open1990}
                onClose={handleClose1990}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Modal1990 />
              </Modal>
            </div>
            <div
              className="col-4 bar-1990"
              style={{ marginTop: "200px" }}
            ></div>
          </div>
        </div>
        <div className="fifth-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#1DAA7D" }}>
              Década de <span>2000</span>
              <br />
              <span className="d-flex lower-text">
                A profissionalização da cooperativa
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex">
              <div className="left-bar d-flex">
                <div className="left-light-green-bar"></div>
                <div className="left-light-green-circles"></div>
              </div>
            </div>
            <div
              className="col-4 mid-text anos2000"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              A Unimed-BH passou por um reposicionamento de marca, apoiado no
              conceito de oferecer soluções em saúde, e criou os planos
              coparticipativos Unipart e Unifácil.
              <br />
              <br />
              Em 2002, os cooperados aprovaram a estratégia dos Serviços
              Próprios e, em 2004, inauguramos nossa primeira unidade
              hospitalar: a Maternidade Unimed – Unidade Grajaú.
              <br />
              <br />
              Intensificamos as ações de responsabilidade social com a criação
              do Instituto Unimed-BH em 2003.
              <br />
              <br />
              No relacionamento com os médicos cooperados, um marco importante
              foi a criação dos benefícios do Pró-Família e da Previdência
              Unimed-BH.
              <br />
              <br />
              <button
                className="btn"
                onClick={handleOpen2000}
                style={{ background: "#1DAA7D" }}
              >
                <div className="button-text">
                  <span className="icone"></span>
                  <span>Clique e veja mais</span>
                </div>
              </button>
              <Modal
                open={open2000}
                onClose={handleClose2000}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Modal2000 />
              </Modal>
            </div>
            <div
              className="col-4 bar-2000"
              style={{ marginTop: "200px" }}
            ></div>
          </div>
        </div>
        <div className="sixth-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#B35FA5" }}>
              Década de <span>2010</span>
              <br />
              <span className="d-flex lower-text">
                Crescimento e participação
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex">
              <div className="left-bar d-flex">
                <div className="left-pink-bar"></div>
                <div className="left-pink-circles"></div>
              </div>
            </div>
            <div
              className="col-4 mid-text anos2010"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              A década de 2010 foi um momento de expansão na história da
              Unimed-BH. Nesse período, incorporamos a singular de Betim,
              assumimos a gestão do Hospital Infantil São Camilo Unimed e
              inauguramos novas unidades dos Serviços Próprios.
              <br />
              <br />
              Alcançamos a marca de mais de 1 milhão de clientes e também nos
              tornamos referência em inovação.
              <br />
              <br />
              Em 2014 foi lançado o “Por Dentro da Nossa Unimed”, contribuindo o
              aumento da transparência e da participação dos médicos.
              <br />
              <br />
              <button
                className="btn"
                onClick={handleOpen2010}
                style={{ background: "#B35FA5" }}
              >
                <div className="button-text">
                  <span className="icone"></span>
                  <span>Clique e veja mais</span>
                </div>
              </button>
              <Modal
                open={open2010}
                onClose={handleClose2010}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Modal2010 />
              </Modal>
            </div>
            <div
              className="col-4 bar-2010"
              style={{ marginTop: "200px" }}
            ></div>
          </div>
        </div>
        <div className="seventh-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#C2DB79" }}>
              Década de <span>2020</span>
              <br />
              <span className="d-flex lower-text">
                O normal que temos agora
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex" style={{ height: "300px" }}>
              <div className="left-bar d-flex">
                <div className="left-ultra-light-green-bar"></div>
                <div className="left-ultra-light-green-circles"></div>
              </div>
            </div>
            <div
              className="col-4 mid-text anos2020"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              O início da década foi marcado pela pandemia do novo coronavírus e
              a Unimed-BH cuidou de desenvolver ações coordenadas para todos os
              seus públicos de relacionamento.
              <br />
              <br />
              Os eventos que tradicionalmente eram promovidos ao longo do ano
              ganharam versões on-line, inclusive as assembleias gerais, que
              registraram recorde de participação.
              <br />
              <br />
              Em 2021, a Cooperativa celebra seus 50 anos de fundação.
              <br />
              <br />
              <button
                className="btn"
                onClick={handleOpen2020}
                style={{ background: "#C2DB79" }}
              >
                <div className="button-text">
                  <span className="icone"></span>
                  <span>Clique e veja mais</span>
                </div>
              </button>
              <Modal
                open={open2020}
                onClose={handleClose2020}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Modal2020 />
              </Modal>
            </div>
            <div
              className="col-4 bar-2020"
              style={{ marginTop: "200px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
