import styled from "styled-components";

const HomeWrapper = styled.div`
  font-family: "roboto", sans-serif;
  .blue {
    background-color: #2525eb;
  }
  .orange {
    background-color: #ff5314;
  }

  .container-1 {
    color: white;
    .threePhone {
      width: 250px !important;
    }

    @media screen and (max-width: 1200px) {
      .threePhone {
        width: 180px !important;
        height: 80%;
        margin-top: 25px;
      }
      .threePhone_title {
        font-size: 32px !important;
      }
      .flex3 .home_wonder_title {
        font-size: 40px !important;
      }
      .btn_links {
        font-size: 14px !important;
        padding: 0 22px !important;
      }
      .productDayText .left_clock {
        font-size: 10px !important;
      }
    }

    @media screen and (min-width: 1025px) {
      .mini-content {
        border: 6px solid #fff !important;
      }
    }

    @media screen and (max-width: 1025px) {
      .top_title {
        display: none;
      }
      .big_title {
        font-size: 17px !important;
      }
      .small_title {
        font-size: 5px !important;
        display: block !important;
      }
      .oldPrice {
        text-align: right !important;
        margin-top: 10px !important;
      }
      .price {
        display: flex !important;
        justify-content: center !important;
        align-content: center !important;
      }
      .btn_links {
        font-size: 11px !important;
        padding: 0 15px !important;
      }
    }

    @media screen and (max-width: 1000px) {
      .threePhone {
        width: 150px !important;
        height: 60%;
        margin-top: 50px;
      }
      .flex2 .threePhone_title {
        font-size: 26px !important;
      }
      .flex3 .home_wonder_title {
        font-size: 30px !important;
      }
    }

    @media screen and (max-width: 830px) {
      .threePhone {
        width: 200px !important;
        height: 65%;
        margin-top: 60px;
      }
      .flex2 .threePhone_title {
        font-size: 22px !important;
      }
      .btn_links {
        font-size: 14px !important;
        padding: 0 12px !important;
      }
      .title-section {
        font-size: 20px !important;
      }
    }

    @media screen and (max-width: 720px) {
      .threePhone {
        width: 140px !important;
        height: 55%;
      }
      .flex2 .threePhone_title {
        font-size: 18px !important;
      }
      .flex3 .home_wonder_title {
        font-size: 20px !important;
      }
      .big_title {
        font-size: 14px !important;
      }
      .priceNum {
        font-size: 14px !important;
      }
      .samsung_title {
        font-size: 10px !important;
      }
      .btn_links {
        font-size: 10px !important;
        padding: 0 8px !important;
      }
    }

    @media screen and (max-width: 600px) {
      .threePhone {
        width: 120px !important;
        height: 50%;
      }
      .flex2 .threePhone_title {
        font-size: 12px !important;
      }
    }

    .blue {
      background-color: #2525eb;
    }
    .orange {
      background-color: #ff5314;
    }
    .flex1 {
      .text {
        padding: 10px 20px;
        .subtitle {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 11.3714px;
          line-height: 100%;
        }
        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 29.974px;
          line-height: 100%;
          text-transform: uppercase;
        }
      }

      .mini-content {
        border: none;
        padding: 8px;

        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 13.0968px;
          line-height: 100%;
        }
        .subtitle {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 11.3714px;
          line-height: 100%;
        }
        .oldPrice {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 11px;
          line-height: 100%;
          text-decoration-line: line-through;
          padding: 0;
          margin: 0;
          margin-bottom: 3px;
        }
        .priceDec {
          background-color: #ff5314;
          padding: 7px 4px;
          .price {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 10.3361px;
            line-height: 100%;
            padding: 0;
            margin: 0;
            .priceNum {
              font-style: normal;
              font-weight: bold;
              font-size: 16.0455px;
              line-height: 100%;
              letter-spacing: 0.045em;
              text-transform: lowercase;
              padding: 0;
              margin: 0;
            }
          }
        }
        .bottom-text {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 7px;
          line-height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0;
          margin: 0;
        }
        img {
        }
      }
    }
    .flex2 {
      border: 2px solid #fff;
      .threePhone_title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 100%;
        display: flex;
        align-items: flex-end;
      }
    }
    .flex3 {
      .home_wonder_title {
        font-style: normal;
        font-weight: bold;
        font-size: 52px;
        line-height: 100%;
      }
    }
    .flex8 {
      display: flex;
      justify-content: space-around;
      Button {
        background-color: transparent;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        border-radius: 0;
        color: white;
        text-transform: capitalize;
        padding: 0 35px;
        font-weight: lighter;
      }
    }
  }

  //productDay
  .productDay {
    background-image: url("BgProductDay.png");
    background-size: cover;
    width: 100% !important;
    height: 350px;
    /* padding: 30px; */
    display: flex;
    h2 {
      font-size: 29px;
    }
    .productDayText {
      width: 100%;
      margin: 68px 70px 66px 64px;
    }
    .productBoard {
      width: 90%;
      height: 299px;
      background-color: white;
      margin: 25px 100px 25px 0;
      padding: 30px 40px !important;
      .oldPrice {
        font-size: 20px;
        text-decoration: line-through;
        font-weight: bold;
      }
      .salePrice {
        font-size: 12px;
        font-weight: bold;
        background-color: #d3e38c;
        padding: 2px 5px;
        color: black !important;
      }
      .bgPrice {
        background-color: #ff5314;
        color: white;
        padding: 5px 15px;
        margin-top: 10px;
        .small {
          font-size: 12px !important;
          padding: 0;
          margin: 0;
        }
        .price {
          font-size: 22px;
          margin: 0;
          padding: 0;
        }
      }

      .productDayWasher {
        width: 100% !important;
      }
    }
    .yellowCont {
      background-color: #fff9b0;
      display: inline-block;
      padding: 7px 15px;
      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  //Container-2
  .container-2 {
    background: url("/Korobka.png"), #2525eb;
    background-size: 100% 100%;
    color: white;
    padding: 30px 30px;
    margin-bottom: 30px;
    .container2_photo {
      width: 100% !important;
    }
    .cards {
      margin-bottom: 30px;
      .card {
        border: 2px solid #ff8253;
        /* max-width: 230px; */
        margin: auto;
        .title {
          line-height: 16px !important;
          font-size: 12px;
          margin-bottom: 10px !important;
          padding: 0 !important;
          margin: 0 !important;
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
          span {
            font-size: 25px;
          }
          .rentPrice {
            font-size: 10px;
            text-decoration: underline;
            color: gray;
          }
        }
        img {
          /* max-height: 206px; */
          max-width: 172px;
          margin: auto !important;
          display: flex;
        }
        .bag {
          background-color: #ff5314;
        }
      }
    }
  }

  //ChooseClients
  .choose {
    margin-bottom: 30px;
    .choose-card {
      border: 10px solid #ff8253;
      margin: auto;
      position: relative;
      .title {
        line-height: 16px !important;
        font-size: 12px;
        margin-bottom: 10px !important;
        padding: 0 !important;
        margin: 0 !important;
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
        span {
          font-size: 25px;
        }
        .rentPrice {
          font-size: 10px;
          text-decoration: underline;
          color: gray;
        }
      }
      img {
        max-width: 162px;
        margin: auto !important;
        display: flex;
      }
      .bag {
        background-color: #ff5314;
      }
      .dot_blue {
        width: 10px;
        height: 10px;
        background-color: #2525eb;
      }
      .dot1 {
        position: absolute;
        top: -10px;
        left: -10px;
      }
      .dot2 {
        position: absolute;
        top: -10px;
        right: -10px;
      }
      .dot3 {
        position: absolute;
        bottom: -10px;
        left: -10px;
      }
      .dot4 {
        position: absolute;
        bottom: -10px;
        right: -10px;
      }
    }
  }

  //Container-mi
  .container-mi {
    background-color: #a8c9c8;
    height: 90px;
    position: relative !important;

    .miicon {
      margin: 25px 12px;
    }
    .img {
      position: absolute !important;
      right: 0px !important;
      display: flex;
      img {
        max-width: 100% !important;
        object-fit: cover;
      }
    }
  }

  //New-Products
  .new-products {
    padding: 0 30px;
    margin-bottom: 30px;
    .new-product-cards {
      border: 5px solid #2525eb;
      padding: 0 !important;
      .new-product-card {
        border: 2.5px solid #2525eb66;
        /* max-width: 230px; */
        margin: 0;
        border-top: 0;
        border-bottom: 0;
        position: relative;
        .title {
          line-height: 16px;
          font-size: 14px;
          margin-bottom: 10px !important;
        }
        .small {
          .oldPrice {
            font-size: 10px;
            text-decoration: line-through;
            color: gray;
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
          span {
            font-size: 25px;
          }
          .rentPrice {
            font-size: 10px;
            text-decoration: underline;
            color: gray;
          }
        }
        img {
          max-height: 206px;
          max-width: 172px;
        }
        .dot_orange {
          width: 5px;
          height: 5px;
          background-color: #ff5314;
        }
        .dot1 {
          position: absolute;
          left: -5px;
          top: -5px;
        }
        .dot2 {
          position: absolute;
          right: -5px;
          top: -5px;
        }
        .dot3 {
          position: absolute;
          left: -5px;
          bottom: -5px;
        }
        .dot4 {
          position: absolute;
          right: -5px;
          bottom: -5px;
        }
      }
    }
    .button {
      button {
        padding: 10px 35px;
        background-color: #ff5314;
        color: white;
        font-weight: bold;
        border-radius: 15px;
      }
    }
  }

  //Laptops
  .laptops {
    padding: 0 16px;
    margin-bottom: 30px;
    .laptop-card {
      border: 2px solid #2525eb;
      /* max-width: 230px; */
      margin: auto;
      .title {
        line-height: 16px !important;
        font-size: 12px;
        margin-bottom: 10px !important;
        padding: 0 !important;
        margin: 0 !important;
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
        span {
          font-size: 25px;
        }
        .rentPrice {
          font-size: 10px;
          text-decoration: underline;
          color: gray;
        }
      }
      img {
        max-height: 206px;
        max-width: 172px;
        margin: auto !important;
        display: flex;
      }
      .bag {
        background-color: #ff5314;
      }
    }
  }
  .bag {
    background-color: #ff5314;
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
  @media screen and (max-width: 1200px) {
    .new-products .title {
      font-size: 13px !important;
    }
    .new_photos {
      width: 150px !important;
    }
    .oldPrice,
    .salePrice .badgePrice {
      font-size: 14px !important;
    }
  }
  @media screen and (max-width: 1025px) {
    .five {
      display: none !important;
    }
  }
  @media screen and (max-width: 1000px) {
    .new-products .title {
      font-size: 12px !important;
    }
    .new_photos {
      width: 130px !important;
    }
    .oldPrice,
    .salePrice,
    .badgePrice,
    .sum {
      font-size: 12px !important;
    }
    .small_price {
      font-size: 12px;
    }
    .rentPrice {
      font-size: 11px;
    }
    .bag {
      padding: 15px;
    }
    .left_title {
      font-size: 12px;
    }
    .left_clock {
      font-size: 25px;
    }
    .left_subtitle {
      font-size: 14px;
    }
    .yellowCont p {
      font-size: 14px;
    }
    .yellowCont h2 {
      font-size: 25px;
    }
    .right_title {
      font-size: 25px;
    }
  }
  .title-section {
    font-size: 45px;
    font-weight: bold;
  }

  .brands {
    .button_bottom {
      padding: 10px 35px;
      background-color: #ff5314;
      color: white;
      font-weight: bold;
      border-radius: 15px;
      width: auto;
      border: none;
    }
    //Slick
  }
  
`;

export default HomeWrapper;
