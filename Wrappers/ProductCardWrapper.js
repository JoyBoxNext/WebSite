import styled from "styled-components";

const ProductCardWrapper = styled.div`
  Button {
    box-shadow: none;
    border-radius: 0;
    &:hover {
      box-shadow: none;
    }
  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 45.3237px;
    line-height: 100%;
  }
  .badge {
    background-color: #d3e38c;
  }
  .firstContainer {
    background-color: #eff9fe;
    .colorTextWidth {
      min-width: 160px;
    }
    .smallimg {
      display: flex;
      flex-direction: column;
      img {
        width: 40px;
        height: 40px;
      }
      .active {
        border: 1px solid blue;
      }
    }
    .bigimg {
      width: 250px;
    }
    .colorBoxes {
      display: flex;
      .colorBox {
        border: 2px solid black;
        border-radius: 10px;
      }
      .colorBox:hover {
        border: 2px solid #ff5314;
        transform: translateY(-3px);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10.0619px;
      }
      .colorBox {
        padding: 8px;
      }
      .black {
        background-color: black;
        height: 40px;
        width: 40px;
      }
      .white {
        background-color: white;
        height: 40px;
        width: 40px;
      }
      .green {
        background-color: #6eb290;
        height: 40px;
        width: 40px;
      }
      .gray {
        background-color: #eeeded;
        height: 40px;
        width: 40px;
      }
    }
    .colorHover {
    }
    .memorie {
      display: flex;
      .whiteBox {
        border: 2.7px solid black;
        border-radius: 5.6px;
        background-color: white;
        text-align: center;
        height: 33px;
        width: 65px;
        font-weight: bold;
      }
      .whiteBox:hover {
        background-color: #ff5314;
        color: white;
      }
    }
    .prices {
      h4 {
        text-decoration: line-through;
        color: gray;
      }
      .rentPrice {
        text-decoration: underline;
        color: gray;
      }
    }
    Button {
      background-color: #ff5314;
      color: white;
      margin-bottom: 20px;
    }
    .link-korzinka {
      text-decoration: underline;
      color: #2525EB;
    }
    .link-korzinka2 {
      text-decoration: underline;
      color: gray;
    }
    .characteristic {
      border: 2.3px solid #2525eb;
      border-radius: 3.5px;
      width: 100%;
      .link-characteristic {
        color: blue !important;
      }
      .buttonBottom {
        display: flex;
        align-items: center !important;
        justify-content: center;
        border: 3px solid black;
        border-radius: 8px;
        background-color: #91d9f8;
        margin: 8px auto -16px;
        max-width: 38px;
        height: 38px;
        font-size: 30px;
      }
    }
    /* Нечетные строки */
    ul li:nth-child(odd) {
      background: #ceeefc;
      list-style-type: disc;
      list-style-position: inside;
      padding: 5px 0;
      padding-left: 10px;
      font-weight: bold;
    }

    /* Четные строки */
    ul li:nth-child(even) {
      background: transparent;
      list-style-type: disc;
      list-style-position: inside;
      padding: 5px 0;
      padding-left: 10px;
      font-weight: bold;
    }
  }

  .product-swiper {
    border: 6px solid #2525eb;
    padding: 0;
    position: relative;
    .product-swiper-card {
      border-left: 5px solid #2525eb66;
      margin-left: -2.5px !important;
      margin: 0;
      .title {
        font-weight: bold !important;
        font-size: 11px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .small {
        .oldPrice {
          font-size: 10px;
          text-decoration: line-through;
          color: gray;
          padding: 0;
          margin: 0;
          .sum {
            font-size: 8px;
            text-decoration: none !important;
            text-decoration: transparent !important;
          }
        }
        .badgePrice {
          font-size: 8px;
          background-color: #d3e38c;
          padding: 2px 5px;
          color: black !important;
        }
      }
      .prices {
        margin-top: -8px !important;
        .fw-bold {
          margin-bottom: -3px !important;
        }
        span {
          margin: 0 !important;
          padding: 0 !important;
          font-size: 25px;
        }
        .rentPrice {
          font-size: 10px;
          text-decoration: underline;
          color: gray;
        }
      }
      img {
        max-width: 172px;
        margin: auto !important;
        display: flex;
      }
    }
    .dot_orange {
      width: 6px;
      height: 6px;
      background-color: #ff5314;
    }
    .dot1 {
      position: absolute;
      left: -6px;
      top: -6px;
      background-color: #ff5314;
    }
    .dot2 {
      position: absolute;
      right: -6px;
      top: -6px;
      background-color: #ff5314;
    }
    .dot3 {
      position: absolute;
      left: -6px;
      bottom: -6px;
      background-color: #ff5314;
    }
    .dot4 {
      position: absolute;
      right: -6px;
      bottom: -6px;
      background-color: #ff5314;
    }
  }

  .newProducts {
    display: flex;
    border-radius: 12px;
    justify-content: center;
    background-color: #ff5314;
    color: white;
    margin: 20px auto;
    padding: 14px 40px;
    max-width: 210px;
    font-weight: bold;
    font-size: 13px;
    line-height: 115.5%;
    text-align: center;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    &:hover,
    &:focus,
    &:active {
      background-color: #ff5314;
      color: #fff;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1920px) and (min-width: 1440px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      align-items: end;
      font-size: 14px;
      .p-text {
        font-weight: bold;
        font-size: 15px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .badge {
        display: none;
      }
      .contant-title-1 {
        display: flex;
        justify-content: space-between;
        .badge {
          order: 2;
          height: 30px;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        display: flex;
        align-items: center;
        h1 {
          font-size: 35px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }
        .badge {
          display: flex;
          max-width: 207px;
          height: 25px;
          font-weight: bold;
          font-size: 12px;
          line-height: 115.5%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0 20px;
        }
      }
    }
    .firstContainer {
      background-color: #eff9fe;
      .firstContainerMacbook {
        display: flex !important;
        flex-wrap: wrap;
        .images {
          width: 420px;
          display: flex !important;
        }
        .colorMemories {
          width: 300px;
          display: block;
          flex-wrap: wrap;
          .row {
            display: block;
          }
          .colorBoxes,
          .memorie {
            display: flex;
            flex-wrap: nowrap;
            .BoxPad {
              padding: 8px;
            }
          }
        }

        .priceButton {
          display: flex;
          flex-wrap: wrap;
          .prices {
            display: block;
            .oldPrice {
              font-size: 20px;
              line-height: 115.5%;
              text-decoration-line: line-through;
              text-transform: uppercase;
            }
            .badge {
              font-size: 13px;
              line-height: 115.5%;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              max-height: 23px;
            }
            .price {
              /* max-width: 80% !important; */
              .bigPrice {
                font-size: 50px;
                line-height: 92%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
              }
            }
            .rentPrice {
              display: block !important;
              font-size: 14px;
            }
          }
          .button {
            display: flex;
            flex-wrap: wrap;
            width: 90% !important;
            .checkout {
              width: 100% !important;
              font-size: 15px;
              max-height: 50px;
              border-radius: 5px;
            }
            .link-korzinka2 {
              font-size: 12px;
            }
          }
        }
      }

      @media screen and (min-width: 800px) {
        .characteristic-container {
          width: 30% !important;
        }
      }

      .characteristic-container {
        .characteristic {
          /* max-width: 100%; */
        }
        .link-korzinka {
          display: none;
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: flex;
      }
      .swiper-pagination {
        display: none;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 900px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      align-items: end;
      font-size: 14px;
      .p-text {
        font-weight: bold;
        font-size: 15px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .badge {
        display: none;
      }
      .contant-title-1 {
        display: flex;
        justify-content: space-between;
        .badge {
          order: 2;
          height: 30px;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        display: flex;
        align-items: center;
        h1 {
          font-size: 35px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }
        .badge {
          display: flex;
          max-width: 207px;
          height: 25px;
          font-weight: bold;
          font-size: 12px;
          line-height: 115.5%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0 20px;
        }
      }
    }
    .firstContainer {
      background-color: #eff9fe;
      .firstContainerMacbook {
        display: flex !important;
        flex-wrap: wrap;
        .images {
          width: 480px;
          display: flex !important;
        }
        .colorMemories {
          width: 300px;
          display: block;
          flex-wrap: wrap;
          .row {
            display: block;
          }
          .colorBoxes,
          .memorie {
            display: flex;
            flex-wrap: nowrap;
          }
          .BoxPad {
            padding: 8px;
          }
        }

        .priceButton {
          display: flex;
          flex-wrap: wrap;
          .prices {
            display: block;
            .oldPrice {
              font-size: 20px;
              line-height: 115.5%;
              text-decoration-line: line-through;
              text-transform: uppercase;
            }
            .badge {
              font-size: 13px;
              line-height: 115.5%;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              max-height: 23px;
            }
            .price {
              .bigPrice {
                font-size: 50px;
                line-height: 92%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
              }
            }
            .rentPrice {
              display: block !important;
              font-size: 14px;
            }
          }
          .button {
            width: 90% !important;
            display: flex;
            flex-wrap: wrap;
            .checkout {
              width: 100% !important;
              font-size: 15px;
              max-height: 50px;
              border-radius: 5px;
            }
            .link-korzinka2 {
              font-size: 12px;
            }
          }
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: flex;
      }
      .swiper-pagination {
        display: none;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 900px) {
    .bigimg {
      width: 300px !important;
    }
    .characteristic-container {
      .link-korzinka {
        display: none;
      }
    }
  }
  @media screen and (max-width: 660px) and (min-width: 600px) {
    .bigimg {
      width: 200px !important;
    }
  }
  @media screen and (max-width: 345px) and (min-width: 300px) {
    .bigimg {
      width: 180px !important;
    }
  }
  @media screen and (min-width: 720px) {
    .smallimg {
      width: 100px;
      align-items: center;
      margin-top: 60px !important;
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 1200px) {
    .firstContainer {
      .characteristic-container {
        width: 30% !important;
      }
    }
  }

  @media screen and (max-width: 900px) and (min-width: 600px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      align-items: end;
      font-size: 14px;
      .p-text {
        font-weight: bold;
        font-size: 15px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .badge {
        display: none;
      }
      .contant-title-1 {
        display: flex;
        justify-content: space-between;
        .badge {
          order: 2;
          height: 30px;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        h1 {
          font-size: 25px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }
        .badge {
          display: flex;
          max-width: 207px;
          font-weight: bold;
          font-size: 17.1429px;
          line-height: 115.5%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }
      }
    }
    .firstContainer {
      background-color: transparent;
      .firstContainerIpad {
        display: flex !important;
        .images {
          display: flex !important;
          .smallimg {
          }
          .bigimg {
            /* width: 300px !important; */
            flex: 1 !important;
            margin: 60px !important;
          }
        }
        .colorMemories {
          display: block;
          .BoxPad {
            padding: 4px;
            .whiteBox {
            }
          }
          .row {
            display: block;
          }
          .colorBoxes,
          .memorie {
            display: flex;
            flex-wrap: nowrap;
          }
        }

        .priceButton {
          display: flex;
          flex-wrap: wrap;
          .prices {
            display: block;
            .oldPrice {
              font-size: 15px;
              line-height: 115.5%;
              text-decoration-line: line-through;
              text-transform: uppercase;
            }
            .badge {
              font-size: 10px;
              line-height: 115.5%;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              max-height: 23px;
            }
            .price {
              .bigPrice {
                font-size: 30px;
                line-height: 92%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
              }
            }
            .rentPrice {
              display: block !important;
              font-size: 14px;
            }
          }
          .button {
            display: flex;
            flex-wrap: wrap;
            .checkout {
              width: 70% !important;
              font-size: 15px;
              max-height: 50px;
              border-radius: 5px;
            }
            .link-korzinka2 {
              font-size: 12px;
            }
          }
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: flex;
      }
      .swiper-pagination {
        display: none;
        justify-content: center;
      }
      .colorMemories {
        .colorBoxes {
          padding: 4px !important;
        }
        .memorie {
          padding: 4px !important;
        }
      }
    }
  }

  @media screen and (max-width: 600px) and (min-width: 0px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      align-items: end;
      font-size: 14px;
      .p-text {
        order: 2;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 13.8982px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      h1 {
        order: 3;
      }
      .badge {
        order: 1;
        margin: auto 0 !important;
      }
      .contant-title-1 {
        display: flex;
        justify-content: space-between;
        .badge {
          order: 2;
          height: 17px;
          display: flex;
          align-items: center !important;
          margin: 0 !important;
          margin-top: 44px !important;
        }
      }
      .contant-title-2 {
        h1 {
          font-size: 25px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }
        .badge {
          display: none;
        }
      }
    }
    .firstContainer {
      background-color: transparent;
      .images {
        max-width: 335px;
        display: flex !important;
        margin: auto !important;
        margin-top: 0 !important;
      }
      .colorMemories {
        .colorBoxes,
        .memorie {
          display: flex;
          flex-wrap: wrap;
        }
        .whiteBox {
          height: 28px;
          width: 55px;
        }
        .BoxPad {
          padding: 8px;
        }
        .colorText {
          font-size: 14px !important;
          width: 100% !important;
        }
      }

      .priceButton {
        display: flex;
        flex-wrap: wrap;
        margin: auto !important;

        .prices {
          display: block;
          .oldPrice {
            font-size: 11px;
            line-height: 115.5%;
            text-decoration-line: line-through;
            text-transform: uppercase;
          }
          .badge {
            font-size: 9px;
            line-height: 115.5%;
            letter-spacing: 0.025em;
            text-transform: uppercase;
          }
          .price {
            max-width: 40% !important;
            .bigPrice {
              font-size: 39px;
              line-height: 92%;
              letter-spacing: -0.03em;
              text-transform: uppercase;
            }
          }
        }
        .button {
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px !important;
          margin-bottom: 0 !important;
          .checkout {
            font-size: 12px;
            max-height: 50px;
            border-radius: 5px;
            margin-bottom: 0 !important;
          }
          .link-korzinka2 {
            font-size: 12px;
          }
        }
      }
      .characteristic-container {
        .link-korzinka {
          display: none;
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: none;
      }
      .swiper-pagination {
        display: flex !important;
        justify-content: center;
      }
      .swiper-pagination-bullet {
        background-color: gray !important;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .contant-title-1 {
      .badge {
        /* display: none; */
      }
    }
  }
`;

export default ProductCardWrapper;
