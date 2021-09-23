import styled from "styled-components";

const BaraxollaWrapper = styled.div`
  width: 100%;
  .PrivateTabIndicator-colorSecondary-5 {
    display: none !important;
  }
  .text {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: 100%;
  }

  .MuiTabs-flexContainer {
    background: white !important;
    color: #000;
    box-shadow: none !important;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
  }
  .baraxolka_photo {
    width: 144px;
    height: 183px;
    object-fit: contain;
  }
  @media screen and (max-width: 700px) {
    .baraxolka_padding {
      padding: 20px 0 !important;
    }
    .container {
      padding: 0 !important;
    }
  }
  .Sidebar {
    width: 100%;
    .baraxolka_padding {
      padding: 25px 45px;
    }
    .item_one {
      background-color: #ff5314;
      color: #fff !important;
    }
    .item_two {
      color: #ff5314;
      border: 1px solid #ff5314;
      margin: 10px 0;
    }
    .item_three {
      border: 1px solid #a6a6a6;
      color: #000;
      margin-top: 5px;
    }
    .title {
      font-weight: bold;
      font-size: 42.0473px;
      line-height: 100%;
    }
    .subtitle {
      font-size: 14.2732px;
      line-height: 222.5%;
      font-weight: bold;
      letter-spacing: -0.03em;
    }
    .border_ {
      border-bottom: 3px solid #969696;
      width: auto;
      margin: auto;
    }
    @media screen and (min-width: 1450px) {
      .baraxolka_padding {
        padding: 0 !important;
      }
      .border_ {
        width: 420px !important;
      }
    }
    @media screen and (min-width: 1000px) {
      .baraxolka_padding {
        padding: 0 !important;
      }
      .border_ {
        width: 420px !important;
      }
    }
    .icon {
      width: 30.2px;
      height: 30px;
    }
    ul {
      .li {
        font-weight: bold;
        font-size: 24.0473px;
        line-height: 100%;
      }
    }

    .baraxolka_product {
      height: 390px;
      .cards_border {
        border: 3px solid #2525eb;
        background-color: white;
        width: 100%;
        z-index: 600;
        position: relative;
        transition: 0.5s;
        height: 100%;
        overflow: hidden;
        .colorBoxes2 {
          display: none !important;
        }
        .descripton {
          font-size: 11px;
          color: rgba(141, 137, 137, 1);
          text-transform: uppercase;
          transition: 1s;
          line-height: 11px;
        }
        &:hover .colorBoxes {
          display: none;
        }
        &:hover .colorBoxes2 {
          display: flex !important;
          margin: 0 !important;
        }
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 520px;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 1450px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 510px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 1400px) {
      .cards_border {
        height: 96% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 480px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      .cards_border {
        height: 95% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 470px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 992px) {
      .cards_border {
        height: 95% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 490px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 765px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 530px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 570px) {
      .cards_border {
        height: 95% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 460px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .cards_border {
        height: 95% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 470px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 380px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 550px !important;
          z-index: 700;
        }
      }
    }

    .text_secondary {
      background-color: #e2e38c;
      font-weight: 500;
      font-size: 15.285px;
    }
    .bg_success {
      color: rgba(168, 160, 160, 1);
      font-weight: 500;
      font-size: 16.285px;
      text-decoration: line-through 1px rgba(0, 0, 0, 1);
    }
    .model {
      font-size: 15px;
      text-transform: uppercase;
    }
    .aksiya__ {
      font-weight: 500;
      font-size: 10.8783px;
    }
    .aksiya {
      font-weight: 500;
      font-size: 8.70261px;
      text-transform: uppercase;
      line-height: 115.5%;
      letter-spacing: 0.025em;
    }
    .price,
    .big_text {
      font-weight: bold;
      line-height: 92%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: #000000;
    }
    .price {
      font-size: 21px;
      .big_text {
        font-size: 27px;
      }
    }
    .save_btn {
      background: transparent;
    }
    .desc {
      color: rgba(168, 160, 160, 1);
      border-bottom: 1px solid rgba(200, 200, 200, 1);
      font-weight: 500;
      font-size: 10.8783px;
      line-height: 115.5%;
      /* or 12px */
      letter-spacing: 0.025em;
      text-decoration-line: underline;
    }
  }
  .bag {
    margin-bottom: 15px !important;
    margin: 0 !important;
    &:hover {
      background-color: #ff5314;
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    .MuiTabs-flexContainer {
      display: grid !important;
    }
  }
  @media screen and (max-width: 450px) {
    .MuiTabs-flexContainer {
      display: grid !important;
    }
    .MuiAppBar-colorPrimary {
      width: 345px !important;
    }
  }
  .PrivateTabIndicator-root-2 {
    display: none !important;
  }
  .btn_bx,
  .btn_bx2,
  .btn_bx3 {
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 165px;
    text-align: center;
    font-weight: bold;
  }
  .active {
    background-color: #ff5314;
    color: #fff !important;
  }
  .btn_bx {
    border: 1px solid #ff5314;
    color: #ff5314;
  }
  .btn_bx3 {
    border: 1px solid #a6a6a6;
    color: #a6a6a6;
  }
`;
export default BaraxollaWrapper;
