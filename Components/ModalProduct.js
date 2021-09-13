import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const ModalProduct = ({ openInput }) => {
  return (
    <div
      className={`row modal_product justify-content-center align-items-center ${
        openInput ? "active" : ""
      }`}
    >
      <div className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
        <div className="p-4 bg-white  input_group">
          <h3 className="text-center fw-bold">Оставь заявку</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Твоё имя *"
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="Твой номер телефона *"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Твой номер телеграм *"
          />
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Button className="button">Оставить заявку</Button>
            <Button className="times">
              <b>
                <CloseIcon className="icon fw-bold" />
              </b>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
