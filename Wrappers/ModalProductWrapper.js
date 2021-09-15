import styled from "styled-components";

const ModalProductWrapper = styled.div`
  .modal_product {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 0.1);
    backdrop-filter: blur(5px);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    z-index: 10000;
    &.active {
      opacity: 1;
      visibility: visible;
      backdrop-filter: blur(10px);
    }
    .input_group {
      border-radius: 30px;
      border: 3px dashed #2525eb;
      position: relative;
      .button {
        position: absolute;
        bottom: -15px;
        left: 30%;
        background-color: #ff5314;
        color: white;
        border-radius: 10px;
        &:hover,
        &:focus,
        &:active {
          background-color: #ff5314 !important;
          color: white !important;
        }
      }
      .times {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #91d9f8;
        border: 2px solid black;
        border-radius: 5px !important;
        .icon {
          font-weight: bold;
          font-size: 25px;
        }
      }
    }
    input {
      border-radius: 20px;
    }
  }
`;
export default ModalProductWrapper;
