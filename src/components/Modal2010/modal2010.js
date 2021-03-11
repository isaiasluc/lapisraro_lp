import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "../../assets/2010/1.JPG";
import imageTwo from "../../assets/2010/2.jpg";
import imageThree from "../../assets/2010/3.jpg";
import imageFour from "../../assets/2010/4.jpg";
import "../../pages/Home/styles.css";

const Modal2010 = () => {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="modal" style={{ backgroundColor: "#B35FA5" }}>
      <div style={{ padding: "50px" }}>
        <h2
          id="simple-modal-title"
          style={{ color: "white", marginBottom: "20px" }}
        >
          Década de 2010
        </h2>
        <row>
          <div className="d-flex">
            <div className="col-9 photo-card">
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
                      className="photo-1-2010"
                      src={imageOne}
                      alt="teste"
                    />,
                    <img
                      key={2}
                      className="photo-2-2010"
                      src={imageTwo}
                      alt="teste"
                    />,
                    <img
                      key={3}
                      className="photo-3-2010"
                      src={imageThree}
                      alt="teste"
                    />,
                    <img
                      key={4}
                      className="photo-4-2010"
                      src={imageFour}
                      alt="teste"
                    />,
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="legenda">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </row>
      </div>
    </div>
  );
};

export default Modal2010;
