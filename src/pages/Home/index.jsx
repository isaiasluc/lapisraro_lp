import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Home() {
  return (
    <>
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
            <div className="col-3 d-flex">
              <div className="left-bar d-flex">
                <div className="left-green-bar"></div>
                <div className="left-green-circles"></div>
              </div>
              <div
                className="col-3 mid-text"
                style={{ fontSize: "14px", marginTop: "200px" }}
              >
                Em abril de 1971, um grupo de 152 médicos reunidos em assembleia
                na Associação Médica de Minas Gerais (AMMG) fundou a Mediminas,
                uma cooperativa de trabalho médico.
                <br />
                <br />
                Em outubro de 1975, foi aprovada a integração ao Sistema Unimed
                e passamos a adotar oficialmente o nome de Unimed-BH.
                <br />
                <br />
                <button>
                  <div className="button-text">
                    <span className="icone"></span>
                    <span>Clique e veja mais</span>
                  </div>
                </button>
              </div>
              <div
                className="col-3 bar-1970"
                style={{ marginTop: "200px" }}
              ></div>
            </div>
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
            <div className="col-3 d-flex">
              <div className="left-bar d-flex">
                <div className="left-orange-bar"></div>
                <div className="left-orange-circles"></div>
              </div>
              <div
                className="col-3 mid-text"
                style={{ fontSize: "14px", marginTop: "200px" }}
              >
                O início dos anos 1980 veio marcado por um contexto nacional de
                retração econômica. Para enfrentar a crise, a Unimed-BH precisou
                fazer ajustes e estruturar novos processos.
                <br />
                <br />
                <button style={{ background: "#F69653" }}>
                  <div className="button-text">
                    <span className="icone"></span>
                    <span>Clique e veja mais</span>
                  </div>
                </button>
              </div>
              <div
                className="col-3 bar-1980"
                style={{ marginTop: "200px" }}
              ></div>
            </div>
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
            <div className="col-3 d-flex">
              <div className="left-bar d-flex">
                <div className="left-purple-bar"></div>
                <div className="left-purple-circles"></div>
              </div>
              <div
                className="col-3 mid-text"
                style={{ fontSize: "14px", marginTop: "200px" }}
              >
                A conjuntura de incertezas do início da década de 1990 fez com
                que a Unimed-BH redirecionasse o foco para os planos individuais
                e familiares e de pequenas e médias empresas.
                <br />
                <br />
                Uma nova sede, na Av. Francisco Sales, começou a ser construída
                e foi neste período também que a Cooperativa realizou seu
                primeiro processo eleitoral para escolha da diretoria.
                <br />
                <br />
                <button style={{ background: "#62457F" }}>
                  <div className="button-text">
                    <span className="icone"></span>
                    <span>Clique e veja mais</span>
                  </div>
                </button>
              </div>
              <div
                className="col-3 bar-1990"
                style={{ marginTop: "200px" }}
              ></div>
            </div>
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
            <div className="col-3 d-flex">
              <div className="left-bar d-flex">
                <div className="left-light-green-bar"></div>
                <div className="left-light-green-circles"></div>
              </div>
              <div
                className="col-3 mid-text"
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
                <button style={{ background: "#1DAA7D" }}>
                  <div className="button-text">
                    <span className="icone"></span>
                    <span>Clique e veja mais</span>
                  </div>
                </button>
              </div>
              <div
                className="col-3 bar-2000"
                style={{ marginTop: "200px" }}
              ></div>
            </div>
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
            <div className="col-3 d-flex">
              <div className="left-bar d-flex">
                <div className="left-pink-bar"></div>
                <div className="left-pink-circles"></div>
              </div>
              <div
                className="col-3 mid-text"
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
                Em 2014 foi lançado o “Por Dentro da Nossa Unimed”, contribuindo
                o aumento da transparência e da participação dos médicos.
                <br />
                <br />
                <button style={{ background: "#B35FA5" }}>
                  <div className="button-text">
                    <span className="icone"></span>
                    <span>Clique e veja mais</span>
                  </div>
                </button>
              </div>
              <div
                className="col-3 bar-2010"
                style={{ marginTop: "200px" }}
              ></div>
            </div>
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
            <div className="col-3 d-flex" style={{ height: "300px" }}>
              <div className="left-bar d-flex">
                <div className="left-ultra-light-green-bar"></div>
                <div className="left-ultra-light-green-circles"></div>
              </div>
              <div
                className="col-3 mid-text"
                style={{ fontSize: "14px", marginTop: "200px" }}
              >
                O início da década foi marcado pela pandemia do novo coronavírus
                e a Unimed-BH cuidou de desenvolver ações coordenadas para todos
                os seus públicos de relacionamento.
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
                <button style={{ background: "#C2DB79" }}>
                  <div className="button-text">
                    <span className="icone"></span>
                    <span>Clique e veja mais</span>
                  </div>
                </button>
              </div>
              <div
                className="col-3 bar-2020"
                style={{ marginTop: "200px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
