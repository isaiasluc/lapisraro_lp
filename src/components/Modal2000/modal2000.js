import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "../../assets/2000/1.jpg";
import imageTwo from "../../assets/2000/2.jpg";
import imageThree from "../../assets/2000/3.jpg";
import imageFour from "../../assets/2000/4.jpg";
import "../../pages/Home/styles.css";

const Modal2000 = () => {
  const legendas = ['Legenda 1', 'Legenda 2', 'Legenda 3', 'Legenda 4'];
  
  const [value, setValue] = useState(0);
  const [legenda, setLegenda] = useState(legendas[0]);

  const onChange = (value) => {
    setValue(value);
    setLegenda(legendas[value]);
  };

  return (
    <div className="modal" style={{ backgroundColor: "#1DAA7D" }}>
      <div className="modal-padding" style={{ padding: "10px 30px" }}>
        <h2
          id="simple-modal-title"
          style={{ color: "white", marginBottom: "20px" }}
        >
          Década de 2000
        </h2>
        <row>
          <div className="top-modal d-flex">
            <div className="col-12 photo-card">
              <Carousel value={value} onChange={onChange} centered>
                <img src={imageOne} alt="teste" />
                <img src={imageTwo} alt="teste" />
                <img src={imageThree} alt="teste" />
                <img src={imageFour} alt="teste" />
              </Carousel>
            </div>
            <div className="col photo-columns">
              <div className="coluna-fotos">
                <Dots
                  value={value}
                  onChange={onChange}
                  thumbnails={[
                    <img
                      key={1}
                      className="photo-1-2000"
                      src={imageOne}
                      alt="teste"
                    />,
                    <img
                      key={2}
                      className="photo-2-2000"
                      src={imageTwo}
                      alt="teste"
                    />,
                    <img
                      key={3}
                      className="photo-3-2000"
                      src={imageThree}
                      alt="teste"
                    />,
                    <img
                      key={4}
                      className="photo-4-2000"
                      src={imageFour}
                      alt="teste"
                    />,
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="legenda">
            {legenda}
          </div>
        </row>
      </div>
    </div>
  );
};

export default Modal2000;
