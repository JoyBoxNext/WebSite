import styled from "styled-components";

const HeaderWrapper = styled.div`
  .orange_btn {
    background-color: #ff5314;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 6px 30px;
    &:hover,
    &:active,
    &:focus {
      background-color: #ff5314 !important;
      color: white !important;
    }
  }
  .sm_links_Index,
  .home_tech_Index,
  .index_link {
    display: none;
  }
  .header_button {
    position: relative;
    .badge_title {
      position: absolute;
      bottom: 8px;
      left: 35px;
      width: 17px;
      height: 17px;
      background-color: #ff5314;
      color: #fff;
      border-radius: 2.8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
    }
  }
  .badge {
    color: red;
  }
  .flex {
    display: flex;
  }
  .home_tech {
    display: none;
  }
  .gamer,
  .home,
  .laptop {
    display: block !important;
  }
  @media screen and (max-width: 1120px) {
    .gamer {
      display: none !important;
    }
  }
  @media screen and (max-width: 1070px) {
    .laptop {
      display: none !important;
    }
  }

  @media screen and (max-width: 1025px) {
    .home {
      display: none !important;
    }
  }
  @media screen and (max-width: 600px) {
    .flex {
      display: flex !important;
      flex-direction: column !important;
    }
    .Categories {
      width: 40% !important;
    }
  }

  @media screen and (max-width: 800px) {
    .MenuContainer {
      top: 50% !important;
    }
  }
  @media screen and (max-width: 700px) {
    .MenuContainer {
      top: 40% !important;
    }
  }
  @media screen and (max-width: 550px) {
    .MenuContainer {
      top: 30% !important;
    }
  }
  @media screen and (max-width: 400px) {
    .MenuContainer {
      top: 20% !important;
    }
    .sm_links {
      display: none;
    }
    .sm_links_Index,
    .home_tech_Index {
      display: block;
    }
    .home_tech {
      display: none !important;
    }
    .flex {
      width: 90% !important;
    }
  }
  .MenuContainer {
    background-color: #fff;
    top: 70%;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    left: -1px;
    opacity: 0;
    z-index: 1000 !important;
    padding: 10px;
    visibility: hidden;
    transition: 0.1s;
    &.Active {
      visibility: visible;
      opacity: 1;
    }
    .menuItem {
      z-index: 10000;
      padding: 8px 0;
    }
  }
  .logo {
    height: 50px;
  }
  .orange {
    color: #ff5314;
  }

  @media screen and (max-width: 600px) {
    .header_korzina,
    .header_icon {
      width: 30px !important;
    }
    .logo {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  @media screen and (max-width: 450px) {
    .header_title,
    .header_subtitle {
      font-size: 10px !important;
    }
    .header_korzina,
    .header_icon {
      width: 20px !important;
    }
  }

  @media screen and (max-width: 994px) {
    .inputOrder {
      order: 1;
    }
    .search,
    .input-group {
      margin-top: 30px;
      box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
    }
  }
  .search {
    background-color: #ff5314;
    color: #fff;
    border: 1px solid #ff5314;
    border-radius: 0%;
    &:hover {
      background-color: #ff5314;
      color: #fff !important;
    }
  }
  .input-group {
    border: 2px solid #ff5314;
    border-color: #ff5314;
    padding: 5px 0;
    outline: none;
  }
  .search,
  .input-group {
    z-index: 1001;
    box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  }
  Button {
    box-shadow: none;
    border-radius: 0;
    text-transform: capitalize;
    &:hover {
      color: black !important;
      box-shadow: none;
    }
  }
  .Categories {
    background-color: #ff5314;
    color: white;
    padding: 7px 16px !important;
    &:hover {
      background-color: #ff5314;
      color: white !important;
    }
  }
  .CategoriesMenu {
    width: 500px !important;
  }
  .menuItem {
    width: 250px !important;
  }
  .sm_border {
    border: 1px solid black;
    border-radius: 5px;
  }
  .res_menu {
    display: none;
  }
  .lg_menu {
    display: none;
  }
  @media screen and (max-width: 400px) {
    .korzina {
      width: 10px !important;
    }
  }
  .korzina {
    position: absolute;
    top: 59px;
    left: 0;
    font-weight: bold;
    padding: 10px;
    z-index: 2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    z-index: 1002;
    min-width: 338px;
    max-height: 500px;
    overflow-y: auto !important;

    .title {
      font-size: 11px;
      padding-right: 100px;
      font-weight: bold !important;
      line-height: 100%;
    }
    .aksiya_ {
      font-weight: 500;
      font-size: 14px;
      line-height: 115.5%;
      color: #a8a0a0;
      text-decoration: line-through;
    }
    .aksiya {
      font-size: 7px;
      line-height: 115.5%;
      letter-spacing: 0.025em;
      text-transform: uppercase;
      font-weight: 500;
      background-color: #d3e38c;
      margin-top: 2px;
    }
    .price {
      font-size: 18px;
      line-height: 92%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
    }
    .small_price {
      font-size: 16px;
    }
    .icon {
      color: #ff5314;
      position: absolute;
      right: 0;
      top: 0;
    }
    .delete {
      font-weight: 500;
      font-size: 14px;
      line-height: 115.5%;
      color: #6c6c6c;
      position: absolute;
      right: 0;
      bottom: -10%;
    }
    .photo {
      width: 57px;
      height: 70px;
      object-fit: cover;
    }
    .orange_btn {
      font-size: 11px;
    }
    .post {
      color: #6c6c6c;
      font-weight: 500;
      font-size: 12px;
      line-height: 115.5%;
      text-decoration-line: underline;
      text-align: center;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 1550px) {
    .korzina {
      position: absolute;
      top: 65px;
      width: 338px;
      left: -100px;
      padding: 20px;
    }
  }
  @media screen and (max-width: 1441px) {
    .korzina {
      position: absolute;
      top: 65px;
      left: -100px;
      padding: 20px;
      width: 266px !important;
      max-height: 380px !important;
      .title {
        font-size: 11px;
      }
      .aksiya_ {
        font-size: 10px;
      }
      .aksiya {
        margin-top: 0;
        font-size: 7px;
      }
      .price {
        font-size: 17px;
      }
      .delete {
        font-size: 10px;
      }
      .photo {
        width: 45px;
        height: 51px;
      }
      .orange_btn {
        font-size: 8px;
      }
    }
  }
  @media screen and (max-width: 1310px) {
    .korzina {
      position: absolute;
      width: 350px;
      left: -120px;
    }
  }
  @media screen and (max-width: 1220px) {
    .korzina {
      position: absolute;
      top: 65px;
      left: -100px;
      padding: 15px;
    }
  }
  @media screen and (max-width: 1025px) {
    .korzina {
      position: absolute;
      top: 65px;
      left: -100px;
      padding: 15px;
      width: 310px !important;
      max-height: 380px !important;
      .title {
        font-size: 10px;
      }
      .aksiya_ {
        font-size: 13px;
      }
      .aksiya {
        margin-top: 0;
        font-size: 7px;
      }
      .price {
        font-size: 17px;
      }
      .small_price {
        font-size: 14px !important;
        margin-top: 2px;
      }
      .delete {
        font-size: 13px;
      }
      .photo {
        width: 52px;
        height: 64px;
      }
      .orange_btn {
        font-size: 13px;
      }
    }
  }
  @media screen and (max-width: 990px) {
    .korzina {
      position: absolute;
      top: 65px;
      left: -10px;
      padding: 15px;
    }
  }
  @media screen and (max-width: 880px) {
    .korzina {
      position: absolute;
      top: 65px;
      left: 0;
      padding: 15px;
    }
  }
  @media screen and (max-width: 880px) {
    .korzina {
      position: absolute;
      top: 65px;
      left: -50px;
      padding: 15px;
    }
  }
  @media screen and (max-width: 605px) {
    .lg_menu {
      display: block !important;
    }
  }
  @media screen and (max-width: 600px) {
    .sm_border {
      font-size: 10px;
    }
    .res_padding {
      padding: 0;
    }
    .res_menu {
      display: block;
    }
    .korzina {
      position: absolute;
      top: 59px;
      left: -150px;
      /* width: 400px; */
    }
    .home_tech {
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    .korzina {
      position: absolute;
      top: 59px;
      left: -150px;
      padding: 10px;
      width: 310px !important;
      max-height: 380px !important;
      .title {
        font-size: 10px;
      }
      .aksiya_ {
        font-size: 13px;
      }
      .aksiya {
        margin-top: 0;
        font-size: 7px;
      }
      .price {
        font-size: 17px;
      }
      .small_price {
        font-size: 14px !important;
        margin-top: 2px;
      }
      .delete {
        font-size: 13px;
      }
      .photo {
        width: 52px;
        height: 64px;
      }
      .orange_btn {
        font-size: 13px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .korzina {
      position: absolute;
      top: 59px;
      left: -170px;
      padding: 10px;
      width: 100px !important;
      max-height: 379px !important;
      .title {
        font-size: 10px;
      }
      .aksiya_ {
        font-size: 14px;
      }
      .aksiya {
        margin-top: 0;
        font-size: 7px;
      }
      .price {
        font-size: 22px;
      }
      .small_price {
        font-size: 18px !important;
      }
      .delete {
        font-size: 14px;
      }
      .photo {
        width: 54px;
        height: 66px;
      }
      .orange_btn {
        font-size: 13px;
      }
    }
  }
`;

export default HeaderWrapper;
