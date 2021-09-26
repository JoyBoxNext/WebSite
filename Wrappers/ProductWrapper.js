import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;

  .Sidebar {
    .sidebar_boxes {
      display: none !important;
      border-bottom: 2px solid #969696;
      width: 359px;
      margin: auto;

      .small_boxes {
        width: 40px;
        height: 40px;
        background-color: #fff;
        color: #2525eb;
        border: 3px solid #2525eb;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 8px;
        font-weight: bold;
        font-size: 17.1264px;
        line-height: 100%;
        border-radius: 5px;

        &.active {
          background: #2525eb;
          color: #fff;
        }
      }
    }
    .avto_text {
      display: none;
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      line-height: 100%;
      text-align: center;
      margin: 20px 0;
    }
  }

  .btn_light {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px 24px;
    background-color: #fff;
    color: #ff5314;
    cursor: pointer;
    height: 38px;

    &.active {
      background-color: #ff5314;
      color: white;
      border: none;
      padding: 7px 24px;
      border-radius: 5px 0 0 5px;
    }
    &.b_radius2 {
      border-radius: 0 5px 5px 0;
    }
    &.b_radius {
      border-radius: 5px 0 0 5px;
    }
  }
  .save_btn {
    background-color: transparent !important;
  }

  @media screen and (max-width: 500px) {
    .button {
      font-size: 10px;
    }
    .modal_product {
      h3 {
        font-size: 18px;
      }
      .input::placeholder {
        font-size: 10px !important;
      }
    }
  }
  .PrivateTabIndicator-colorSecondary-5 {
    display: none !important;
  }
  .MuiTabs-flexContainer {
    display: flex;
    justify-content: space-around !important;
    align-items: center !important;
    padding: 0 !important;
    width: 300px;
  }
  .MuiPaper-elevation4 {
    box-shadow: none;
    padding: 0 !important;
    border: none !important;
    outline: none;
  }
  .MuiBox-root-11,
  .MuiBox-root-31 {
    padding: 0px !important;
  }
  .MuiAppBar-colorPrimary {
    background: white !important;
  }
  .MuiAppBar-colorPrimary {
    width: 310px;
    height: 35px !important;
    border-bottom: 0px !important;
  }
  .MuiTabs-root {
    display: block;
  }
  .MuiTab-root {
    width: 100px !important;
    font-size: 13px;
    min-height: 35px;
    margin: 0;
    padding: 0;
    background: transparent !important;
  }
  .MuiTab-root:nth-child(1) {
    background: #ff5314 !important;
    color: #fff;
    border-radius: 10px 0 0 10px;
  }
  .MuiTab-root:nth-child(2) {
    background: #fff !important;
    color: #ff5314;
    border: 1px solid rgba(168, 160, 160, 1);
    border-radius: 0 5px 5px 0;
  }
  .MuiTabs-scroller {
    border-radius: 5px;
  }
  .subtitle {
    font-weight: 700;
    font-size: 15px;
    color: rgba(0, 0, 0, 1);
  }
  .datas_subtitle {
    height: 55px !important;
  }
  @media screen and (max-width: 1025px) {
    .LeftSide {
      margin-top: 30px !important;
    }
  }
  .LeftSide {
    width: 340px;
    margin-top: 130px;
    .input {
      width: 68%;
      border: none;
      outline: none;
      background-color: rgba(234, 231, 231, 1);
      padding: 8px 4px;
      font-weight: bold;
      &::placeholder {
        font-weight: bold;
        color: black;
      }
    }
    .btn_secondary {
      background-color: rgba(234, 231, 231, 1);
    }
    .checkbox {
      width: 20px;
      height: 20px;
      background-color: #ff5314 !important;
    }
    .box {
      width: 20px;
      height: 20px;
      border: 1px solid #eae7e7;
      background: #eae7e7;
      outline: none;
      border-radius: 2px;
      &.active {
        background-color: #ff5314 !important;
        border: none;
      }
    }
    .icon {
      color: #ff5314 !important;
      cursor: pointer;
    }
    .orange_btn {
      background-color: #fff;
      color: #ff5314;
      border: 1px solid rgba(0, 0, 0, 0.4);
      padding: 6px 20px;
      font-size: 12px;
      border-radius: 0 5px 5px 0;
      &.active {
        background-color: #ff5314;
        padding: 7px 20px;
        border: none;
        color: #fff;
        border-radius: 5px 0 0 5px;
      }
    }
  }
  .Sidebar {
    flex: 3 !important;
    .sidebarBottom_title {
      font-size: 42px;
      line-height: 100%;
    }
    .sidebarBottom_photo {
      width: 16px;
      height: 28px;
    }
    .border_ {
      border-bottom: 3px solid #969696;
      width: 402px;
      margin: auto;
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

    .card_product {
      margin-bottom: 30px;
      height: 315px;
      .cards_border {
        border: 3px solid #2525eb;
        background-color: white;
        width: 100%;
        z-index: 600;
        position: relative;
        transition: 0.5s;
        height: 100%;
        overflow: hidden;

        .skidka {
          width: 135px;
          height: 33.43px;
        }
        .phone_photo {
          width: 140px;
          height: 140px;
          object-fit: contain;
        }
        .descripton {
          font-size: 9px;
          color: #8d8989;
          text-transform: uppercase;
          transition: 1s;
        }

        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 450px;
          z-index: 700;
        }
      }
    }

    /* @media screen and (max-width: 1445px) {
      .card_product {
        .cards_border {
          height: 55% !important;
          &:hover .descripton {
            visibility: visible;
            position: absolute;
            z-index: 700;
          }
          &:hover {
            height: 400px !important;
            z-index: 700;
          }
        }
      }
    } */

    @media screen and (max-width: 1900px) {
      .sidebarBottom_title,
      .sidebarBottom_subtitle {
        font-size: 38px !important;
      }
    }
    @media screen and (max-width: 1720px) {
      .sidebarBottom_title,
      .sidebarBottom_subtitle {
        font-size: 34px !important;
      }
    }
    @media screen and (max-width: 1550px) {
      .sidebarBottom_title,
      .sidebarBottom_subtitle {
        font-size: 30px !important;
      }
    }
    @media screen and (max-width: 1440px) {
      .sidebarBottom_title,
      .sidebarBottom_subtitle {
        font-size: 27px !important;
      }
    }

    @media screen and (max-width: 1320px) {
      .sidebarBottom_title,
      .sidebarBottom_subtitle {
        font-size: 23px !important;
      }
    }

    @media screen and (max-width: 1195px) {
      .cards_border {
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 500px !important;
          z-index: 700;
        }
      }
      .sidebarBottom_title,
      .sidebarBottom_subtitle {
        font-size: 20px !important;
      }
    }

    @media screen and (max-width: 1027px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 440px !important;
          z-index: 700;
        }
      }
      .sidebarBottom_title {
        font-size: 42px !important;
        line-height: 100% !important;
        font-weight: bold !important;
      }
      .sidebarBottom_subtitle {
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 37px !important;
        line-height: 100% !important;
      }
      .sidebar_bottom {
        margin-left: 50px !important;
      }
    }
    @media screen and (max-width: 990px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 420px !important;
          z-index: 700;
        }
      }
      .sidebarBottom_title {
        font-size: 38px !important;
      }
      .sidebarBottom_subtitle {
        font-size: 32px !important;
      }
      .sidebar_bottom {
        margin-left: 60px !important;
      }
    }

    @media screen and (max-width: 900px) {
      .sidebarBottom_title {
        font-size: 32px !important;
      }
      .sidebarBottom_subtitle {
        font-size: 28px !important;
      }
      .sidebar_bottom {
        margin-left: 80px !important;
      }
    }

    @media screen and (max-width: 800px) {
      .sidebarBottom_title {
        font-size: 28px !important;
      }
      .sidebarBottom_subtitle {
        font-size: 22px !important;
      }
      .sidebar_bottom {
        margin-left: 80px !important;
      }
    }

    @media screen and (max-width: 766px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 440px !important;
          z-index: 700;
        }
      }
      .sidebarBottom_title {
        font-size: 24px !important;
      }
      .sidebarBottom_subtitle {
        font-size: 18px !important;
      }
      .sidebar_bottom {
        margin-left: 50px !important;
      }
    }
    @media screen and (max-width: 575px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 420px !important;
          z-index: 700;
        }
      }
      .sidebarBottom_title {
        font-size: 25px !important;
      }
      .sidebarBottom_subtitle {
        font-size: 20px !important;
      }
      .sidebar_bottom {
        margin-left: 30px !important;
      }
    }
    .title {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 42px;
      font-weight: 700;
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
    .subtitle {
      font-weight: 700;
      font-size: 14.2732px;
    }
    .aksiya__ {
      font-size: 10.285px;
    }
    .aksiya {
      font-size: 8.22803px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    .small_price,
    .big_text {
      font-weight: bold;
      line-height: 92%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: #000000;
    }
    .small_price {
      font-size: 20px;
    }
    .big_text {
      font-size: 25px;
    }
    .desc {
      color: rgba(168, 160, 160, 1);
      border-bottom: 1px solid rgba(200, 200, 200, 1);
      font-weight: 500;
      font-size: 10.285px;
      line-height: 115.5%;
      /* or 12px */
      letter-spacing: 0.025em;
      text-decoration-line: underline;
    }
  }

  @media screen and (max-width: 1100px) {
    .rightSide {
      display: none !important;
    }
  }

  .rightSide {
    flex: 1;
    margin-top: 90px !important;
    .border_top {
      border-top: 1px solid rgba(190, 186, 186, 1);
    }
    .top {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 100%;
    }
    .phone {
      width: 84.1px;
      height: 116px;
      margin-top: 15px;
    }

    .desc {
      font-size: 12px;
      color: rgba(168, 160, 160, 1);
    }
    .subtitle {
      font-size: 16px;
    }
    .bg_success {
      color: rgba(168, 160, 160, 1);
      font-weight: 500;
      font-size: 14px;
      text-decoration: line-through 1px #a8a0a0;
    }
    .aksiya {
      background-color: #e2e38c;
      font-size: 11px;
      font-weight: 500;
    }
    .price {
      font-size: 17px;
    }
    .big_text {
      font-size: 25px;
    }
  }

  //media 1440px rightside
  @media screen and (max-width: 1445px) {
    .rightSide {
      .phone {
        width: 64px !important;
        height: 81px !important;
      }
      .subtitle {
        font-size: 12.5px !important;
        line-height: 100% !important;
      }
      .aksiya__,
      .aksiya {
        line-height: 100% !important;
        font-weight: 500 !important;
      }
      .aksiya {
        font-size: 8px !important;
      }
      .aksiya__ {
        font-size: 10px !important;
      }
      .desc {
        font-weight: 500 !important;
        font-size: 10px !important;
        line-height: 115.5% !important;
        margin-top: 3px !important;
      }
      .rightSide {
        .bag2 {
          width: 23px !important;
          height: 23px !important;
        }
      }
    }
    /* .Sidebar {
      .cards_border {
        width: 184px !important;
      }
      .phone_photo {
        width: 80px !important;
        height: 100px !important;
        margin-top: 25px !important;
      }
      .skidka {
        width: 100px !important;
        height: 24px !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
      }
      .colorBoxes {
        margin: 20px 0 !important;
        .colorBox {
          width: 13px !important;
          height: 13px !important;
        }
      }
      .datas_subtitle,
      .aksiya,
      .aksiya {
        line-height: 115.5%;
        text-transform: uppercase;
        font-weight: 500;
      }
      .datas_subtitle {
        font-size: 10px;
        letter-spacing: -0.03em;
        font-weight: bold;
        height: 35px !important;
      }
      .aksiya__ {
        font-size: 7px;
        color: #a8a0a0;
      }
      .aksiya {
        font-size: 6px;
        letter-spacing: 0.025em;
      }
      .big_text {
        font-size: 18px;
        line-height: 92%;
        letter-spacing: -0.03em;
      }
      .small_price {
        font-size: 16px;
      }
      .desc {
        font-size: 7px;
      }
    } */
  }
  .colorBoxes {
    margin-bottom: 65px;
  }

  //inputs=====
  .myinput {
    width: 20px;
    height: 20px;
    cursor: pointer;
    box-shadow: none !important;
    outline: none !important;
  }
  .myinput[type="checkbox"]:before {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    content: "";
    background: #eae7e7 !important;
  }
  .myinput[type="checkbox"]:after {
    position: relative;
    display: block;
    left: 0px;
    top: -20px;
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border: 1px solid #eae7e7 !important;
    content: "";
    background-repeat: no-repeat;
    background-position: center;
  }
  .myinput[type="checkbox"]:checked:after {
    background-color: #ff5314;
  }
  /* Large checkboxes */
  .myinput.large {
    height: 22px;
    width: 22px;
  }
  .myinput.large[type="checkbox"]:before {
    width: 20px;
    height: 20px;
  }
  .myinput.large[type="checkbox"]:after {
    top: -20px;
    width: 16px;
    height: 16px;
  }
  .text {
    font-weight: bold;
    font-size: 32.0473px;
    line-height: 100%;
  }
  .li {
    font-weight: bold;
    font-size: 42px;
    line-height: 100%;
  }
  .pro_orange {
    background-color: #ff5314;
    color: white;
    padding: 2px 10px;
  }
  .numbers {
    color: rgba(85, 85, 85, 1);
  }

  .MuiSlider-root {
    color: #ff5314 !important;
  }
  .MuiSlider-thumb {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 5px;
  }

  //slider
  @media screen and (max-width: 1025px) {
    .MuiSlider-root {
      width: 450px !important;
    }
    .s_13,
    .s_14,
    .s_15,
    .s_16 {
      display: none !important;
    }
    .sidebar_boxes {
      display: flex !important;
      .sidebar_bottom {
        display: block !important;
      }
    }
    .border_ {
      width: 359px !important;
    }
  }
  @media screen and (max-width: 500px) {
    .MuiSlider-thumb {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 8px !important;
    }
    .Sidebar {
      width: 480px !important;
    }
    .left_flex {
      width: 480px !important;
    }
    .MuiSlider-root {
      width: 95% !important;
    }
    .s_5,
    .s_6,
    .s_7,
    .s_8,
    .s_9,
    .s_10,
    .s_11,
    .s_12,
    .s_13,
    .s_14,
    .s_15,
    .s_16 {
      display: none !important;
    }
    .border_ {
      width: 80% !important;
    }
    .sidebar_boxes {
      display: none !important;
    }
    .sidebar_bottom {
      display: block !important;
    }
    .border_ {
      width: 359px !important;
    }
    .avto_text {
      display: block !important;
    }
  }
  @media screen and (max-width: 471px) {
    .Sidebar {
      width: 460px !important;
    }
    .left_flex {
      width: 460px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
  }

  @media screen and (max-width: 450px) {
    .Sidebar {
      width: 440px !important;
    }
    .left_flex {
      width: 440px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
    .border_ {
      width: 350px !important;
    }
  }

  @media screen and (max-width: 430px) {
    .Sidebar {
      width: 420px !important;
    }
    .left_flex {
      width: 420px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
  }

  @media screen and (max-width: 400px) {
    .Sidebar {
      width: 390px !important;
    }
    .left_flex {
      width: 390px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
    .border_ {
      width: 300px !important;
    }
  }

  @media screen and (max-width: 370px) {
    .Sidebar {
      width: 360px !important;
    }
    .left_flex {
      width: 360px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
    .border_ {
      width: 260px !important;
    }
  }

  @media screen and (max-width: 350px) {
    .Sidebar {
      width: 340px !important;
    }
    .left_flex {
      width: 340px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
  }

  @media screen and (max-width: 330px) {
    .Sidebar {
      width: 320px !important;
    }
    .left_flex {
      width: 320px !important;
    }
    .MuiSlider-root {
      width: 90% !important;
    }
  }
  .MuiSlider-valueLabel {
    left: -5px !important;
  }
  @media screen and (max-width: 1850px) {
    .li {
      font-size: 42px;
    }
  }
  @media screen and (max-width: 1441px) {
    .li {
      font-size: 30px;
    }
    @media screen and (max-width: 1200px) {
      .D_flex {
        display: flex;
        flex-wrap: wrap;
      }
      .LeftSide {
        flex: 150px;
      }
      .Sidebar {
        flex: 1;
      }
      .rightSide {
        flex: 1;
      }
    }
    @media screen and (max-width: 1025px) {
      .D_flex {
        display: grid !important;
        flex-wrap: wrap;
      }
      .LeftSide {
        width: 100%;
      }
      .Sidebar {
        flex: 1;
      }
      .rightSide {
        flex: 1;
      }
    }
    @media screen and (max-width: 1024px) {
      .bottom_text {
        display: none;
      }
      .bottom_block_text {
        display: block !important;
      }
      .text {
        font-size: 25px;
      }
      .li {
        font-size: 18px;
      }
      .right_flex {
        border: 3px solid #2525eb;
        padding: 20px;
      }
      .rightSide {
        margin-top: 0;
      }
    }
    @media screen and (max-width: 855px) {
      .li {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 760px) {
      .D_flex {
        flex-wrap: wrap;
      }
      .LeftSide {
        flex: 1;
        .container {
        }
      }
      .Sidebar {
        width: 100%;
      }
      .rightSide {
        flex: 1;
      }
      .text {
        font-size: 20px;
      }
      .li {
        font-size: 17px;
      }
    }
    @media screen and (max-width: 510px) {
      .text {
        font-size: 16px;
      }
      .li {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 385px) {
      .li {
        font-size: 11px !important;
      }
    }
  }
  .filter_sm {
    display: none;
    border: 1px solid black;
    padding: 5px 28px;
    border-radius: 7px;
    background-color: white;
  }
  @media screen and (max-width: 520px) {
    .filter_sm {
      display: block !important;
    }
    .left_access {
    }
  }
  .left_access {
    display: block;
  }
`;

export default ProductWrapper;
