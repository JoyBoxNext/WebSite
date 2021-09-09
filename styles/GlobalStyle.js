import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* max-width: 1400px !important; */
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
        right: -1%;
    }
    .swiper-button-prev{
        left: -1%;
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
            left: -1%;
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
            right: -1%;
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
        background-color: #FF5314;
        padding: 20px;
        margin: auto;
        border-radius: 50%;
        position: relative;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
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
      width: 402px;
      margin: auto;
    }
`;

export default GlobalStyle;