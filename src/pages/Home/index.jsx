import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "@brainhubeu/react-carousel/lib/style.css";
import "./styles.css";
import Modal1970 from "../../components/Modal1970/modal1970";
import Modal1980 from "../../components/Modal1980/modal1980";
import Modal1990 from "../../components/Modal1990/modal1990";
import Modal2000 from "../../components/Modal2000/modal2000";
import Modal2010 from "../../components/Modal2010/modal2010";
import Modal2020 from "../../components/Modal2020/modal2020";
import DotList1970 from "../../components/DotList1970";
import DotList1980 from "../../components/DotList1980";
import DotList1990 from "../../components/DotList1990";
import DotList2000 from "../../components/DotList2000";
import DotList2010 from "../../components/DotList2010";
import DotList2020 from "../../components/DotList2020";
import Circle1970 from '../../components/Circle1970';
import Circle1980 from '../../components/Circle1980';
import Circle1990 from '../../components/Circle1990';
import Circle2000 from '../../components/Circle2000';
import Circle2010 from '../../components/Circle2010';
import Circle2020 from '../../components/Circle2020';

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
      <div id="first-screen" className="first-screen">
        <div className="row">
          <div className="col d-flex flex-row-reverse unimed">
            <div className="logo-unimed" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-3">
            <div className="left-text">
              <span>
                Cuidar da vida sempre foi e sempre ser?? o que move a Unimed-BH.
              </span>
            </div>
            <div className="left-text-bottom">
              <span>
                Nestes 50 anos, pautamos nossa atua????o pelo compromisso com a
                melhor assist??ncia em sa??de para os nossos clientes e pela
                valoriza????o cont??nua do trabalho m??dico. Nossa voca????o maior ??
                cuidar de pessoas.
              </span>
            </div>
          </div>
          <div className="col-9">
            <div className="first-screen-image">
              <Circle1970 />
              <Circle1980 />
              <Circle1990 />
              <Circle2000 />
              <Circle2010 />
              <Circle2020 />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="second-screen" className="second-screen">
          <div className="row">
            <div className="col-12 top-text">
              D??cada de <span>1970</span>
              <br />
              <span className="d-flex lower-text">A Funda????o</span>
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
              className="col-4 col-sm-12 mid-text anos1970"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              Em abril de 1971, um grupo de 152 m??dicos reunidos em assembleia
              na Associa????o M??dica de Minas Gerais (AMMG) fundou a Mediminas,
              uma cooperativa de trabalho m??dico.
              <br />
              <br />
              Em outubro de 1975, foi aprovada a integra????o ao Sistema Unimed e
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
            {/*<div
              className="col-4 bar-1970"
              style={{ marginTop: "200px" }}
            ></div>*/}
            <div
              className="col-4 d-flex flex-row bar-1970"
              style={{ marginTop: "200px" }}
            >
              <DotList1970 backgroundColor="#005F54" />
            </div>
          </div>
        </div>
        <div id="third-screen" className="third-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#F69653" }}>
              D??cada de <span>1980</span>
              <br />
              <span className="d-flex lower-text">
                Reestruturar para avan??ar
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
              className="col-4 col-sm-12 mid-text anos1980"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              O in??cio dos anos 1980 veio marcado por um contexto nacional de
              retra????o econ??mica. Para enfrentar a crise, a Unimed-BH precisou
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
            {/*<div
              className="col-4 bar-1980"
              style={{ marginTop: "200px" }}
            ></div>*/}
            <div
              className="col-4 d-flex flex-row bar-1980"
              style={{ marginTop: "200px" }}
            >
              <DotList1980 backgroundColor="#F69653" />
            </div>
          </div>
        </div>
        <div id="fourth-screen" className="fourth-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#62457F" }}>
              D??cada de <span>1990</span>
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
              A conjuntura de incertezas do in??cio da d??cada de 1990 fez com que
              a Unimed-BH redirecionasse o foco para os planos individuais e
              familiares e de pequenas e m??dias empresas.
              <br />
              <br />
              Uma nova sede, na Av. Francisco Sales, come??ou a ser constru??da e
              foi neste per??odo tamb??m que a Cooperativa realizou seu primeiro
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
            {/*<div
              className="col-4 bar-1990"
              style={{ marginTop: "200px" }}
            ></div>*/}
            <div
              className="col-4 d-flex flex-row bar-1990"
              style={{ marginTop: "200px" }}
            >
              <DotList1990 backgroundColor="#62457F" />
            </div>
          </div>
        </div>
        <div id="fifth-screen" className="fifth-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#1DAA7D" }}>
              D??cada de <span>2000</span>
              <br />
              <span className="d-flex lower-text">
                A profissionaliza????o da cooperativa
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
              className="col-4 col-sm-12 mid-text anos2000"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              A Unimed-BH passou por um reposicionamento de marca, apoiado no
              conceito de oferecer solu????es em sa??de, e criou os planos
              coparticipativos Unipart e Unif??cil.
              <br />
              <br />
              Em 2002, os cooperados aprovaram a estrat??gia dos Servi??os
              Pr??prios e, em 2004, inauguramos nossa primeira unidade
              hospitalar: a Maternidade Unimed ??? Unidade Graja??.
              <br />
              <br />
              Intensificamos as a????es de responsabilidade social com a cria????o
              do Instituto Unimed-BH em 2003.
              <br />
              <br />
              No relacionamento com os m??dicos cooperados, um marco importante
              foi a cria????o dos benef??cios do Pr??-Fam??lia e da Previd??ncia
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
            {/*<div
              className="col-4 bar-2000"
              style={{ marginTop: "200px" }}
            ></div>*/}
            <div
              className="col-4 d-flex flex-row bar-2000"
              style={{ marginTop: "200px" }}
            >
              <DotList2000 backgroundColor="#1DAA7D" />
            </div>
          </div>
        </div>
        <div id="sixth-screen" className="sixth-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#B35FA5" }}>
              D??cada de <span>2010</span>
              <br />
              <span className="d-flex lower-text">
                Crescimento e participa????o
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
              A d??cada de 2010 foi um momento de expans??o na hist??ria da
              Unimed-BH. Nesse per??odo, incorporamos a singular de Betim,
              assumimos a gest??o do Hospital Infantil S??o Camilo Unimed e
              inauguramos novas unidades dos Servi??os Pr??prios.
              <br />
              <br />
              Alcan??amos a marca de mais de 1 milh??o de clientes e tamb??m nos
              tornamos refer??ncia em inova????o.
              <br />
              <br />
              Em 2014 foi lan??ado o ???Por Dentro da Nossa Unimed???, contribuindo o
              aumento da transpar??ncia e da participa????o dos m??dicos.
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
            {/*<div
              className="col-4 bar-2010"
              style={{ marginTop: "200px" }}
            ></div>*/}
            <div
              className="col-4 d-flex flex-row bar-2010"
              style={{ marginTop: "200px" }}
            >
              <DotList2010 backgroundColor="#B35FA5" />
            </div>
          </div>
        </div>
        <div id="seventh-screen" className="seventh-screen">
          <div className="row">
            <div className="col-12 top-text" style={{ color: "#C2DB79" }}>
              D??cada de <span>2020</span>
              <br />
              <span className="d-flex lower-text">
                O normal que temos agora
              </span>
            </div>
          </div>
          <div className="row">
            <div
              className="col-4 col-md-4 col-lg-4 col-xl-4 col-sm-12 d-flex"
              style={{ height: "300px" }}
            >
              <div className="left-bar d-flex">
                <div className="left-ultra-light-green-bar"></div>
                <div className="left-ultra-light-green-circles"></div>
              </div>
            </div>
            <div
              className="col-4 mid-text anos2020"
              style={{ fontSize: "14px", marginTop: "200px" }}
            >
              O in??cio da d??cada foi marcado pela pandemia do novo coronav??rus e
              a Unimed-BH cuidou de desenvolver a????es coordenadas para todos os
              seus p??blicos de relacionamento.
              <br />
              <br />
              Os eventos que tradicionalmente eram promovidos ao longo do ano
              ganharam vers??es on-line, inclusive as assembleias gerais, que
              registraram recorde de participa????o.
              <br />
              <br />
              Em 2021, a Cooperativa celebra seus 50 anos de funda????o.
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
            {/*<div
              className="col-4 bar-2020"
              style={{ marginTop: "200px" }}
            ></div>*/}
            <div
              className="col-4 d-flex flex-row bar-2020"
              style={{ marginTop: "200px" }}
            >
              <DotList2020 backgroundColor="#C2DB79" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
