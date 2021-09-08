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
            border: 3px solid blue   ;
        }
    }
    .swiper {
        overflow: hidden;
        position: unset;
    }
`;

export default GlobalStyle;