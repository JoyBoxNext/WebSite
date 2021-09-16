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
  .logo {
    height: 50px;
  }
  .orange {
    color: #ff5314;
  }
  .border_links {
    border-right: 1px solid black;
    &.active {
      background-color: #ffe5dc;
      color: rgba(0 0 0 0);
    }
  }
  @media screen and (max-width: 600px) {
    .border_links {
      border: 1px solid black;
      border-radius: 5px;
      margin: 15px 8px 0px 0px;
    }
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
    &:hover {
      background-color: #ff5314;
      color: white !important;
    }
  }
  .CategoriesMenu {
    width: 500px !important;
  }
  .menuItem {
    width: 300px !important;
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
  .korzina {
    position: absolute;
    top: 59px;
    left: 0;
    font-weight: bold;
    padding: 20px;
    z-index: 2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    z-index: 1002;
    min-width: 350px;

    .title {
      font-size: 11px;
      padding-right: 100px;
    }
    .aksiya_ {
      font-weight: 500;
      font-size: 14.5px;
      color: #a8a0a0;
      text-decoration: line-through;
    }
    .aksiya {
      font-weight: 500;
      font-size: 7px;
      background-color: #d3e38c;
    }
    .price {
      font-size: 23px;
    }
    .icon {
      color: #ff5314;
      position: absolute;
      right: 0;
      top: 0;
    }
    .delete {
      color: #6c6c6c;
      position: absolute;
      right: 0;
      bottom: -10%;
    }
    .photo {
      width: 50px;
      height: auto;
    }
  }
  @media screen and (max-width: 1550px) {
    .korzina {
      position: absolute;
      top: 65px;
      width: 350px;
      left: -100px;
      padding: 20px;
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
  }
  @media screen and (max-width: 500px) {
    .korzina {
      position: absolute;
      top: 59px;
      left: -150px;
      /* width: 320px; */
      padding: 10px;
    }
  }
`;

export default HeaderWrapper;
