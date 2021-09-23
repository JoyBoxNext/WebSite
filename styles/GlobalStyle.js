import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        overflow-x: hidden;
        padding: 0 !important;
        margin: 0 !important;
    }
    *{
      box-sizing: border-box;
      transition: .1s;
    }
    a {
        color: black;
        text-decoration: none;
        &:hover {
            color: black;
        }
    }
    ul,li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    
    //Swiper
    #app { height: 100% }
    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    background: #fff;



    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    }
    
    .swiper-button-next, .swiper-button-prev {
        border: 2px solid black !important;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-button-next{
        right: -2%;
    }
    .swiper-button-prev{
        left: -2%;
    }
    .swiper-button-prev::after{
         content: "";
    }
    .swiper-button-next::after{
        content: "";
    }
    .swiper_content {
        position: relative;
        .button_prev{
            display: flex;
            align-items: center;
            justify-content: center;
            right: auto;
            left: -2%;
            top: 49.5%;
            transform: translateY(-50%);
            position: absolute;
            font-size: 20px;
            color: black;
            background-color: #91D9F8;
            border-radius: 5px;
            width: 40px;
            height: 40px;
            z-index: 1;
        }
        .button_next{
            display: flex;
            align-items: center;
            justify-content: center;
            right: auto;
            right: -2%;
            top: 49.5%;
            transform: translateY(-50%);
            position: absolute;
            font-size: 20px;
            color: black;
            background-color: #91D9F8;
            border-radius: 5px;
            width: 40px;
            height: 40px;
            z-index: 1;
        }
        .swiper-slide {
        }
    }
    .swiper {
        overflow: hidden;
        position: unset;
    }

    .bag {
        background-color: #FF5314 !important;
        padding: 20px !important;
        margin: auto !important;
        border-radius: 50% !important;
        position: relative !important;
        img {
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 18px !important;
            object-fit: cover !important;
        }
    }
    .colorBoxes {
        max-height: 80px;
        .colorBox {
                border: 1px solid black;
                border-radius: 4px;
        }
        .black {
            background-color: black;
            height: 20px;
            width: 20px;            
        }
        .white {
            background-color: white;
            height: 20px;
            width: 20px;
        }
        .green {
            background-color: #6EB290;
            height: 20px;
            width: 20px;
        }
        .gray {
            background-color: #EEEDED;
            height: 20px;
            width: 20px;
        }
    }
    .border_ {
      border-bottom: 3px solid #969696;
      width: 40%;
      margin: auto;
    }

    #nprogress{
  height: 100vh !important;
  .spinner{
    top:0;
    right: 0;
    width: 100% !important;
    height: 100vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #33333333;
    .spinner-icon{
      width: 60px !important;
      height: 60px !important;
    }
  }
}
.MuiAppBar-colorPrimary {
    background-color: transparent !important;
  }
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
        left: 25%;
        background-color: #ff5314;
        color: white;
        border-radius: 10px;
      }
      .times {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #91d9f8;
        border: 2px solid black;
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

export default GlobalStyle;
