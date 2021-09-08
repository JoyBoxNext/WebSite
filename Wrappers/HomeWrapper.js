import styled from "styled-components";

const HomeWrapper = styled.div`
    font-family: 'roboto' ,sans-serif;
    .blue {
        background-color: #2525EB;
    }
    .orange {
        background-color: #FF5314;
    }

    .container-1 {
        color: white;
        .blue {
            background-color: #2525EB;
        }
        .orange {
            background-color: #FF5314;
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
                border: 6px solid #fff !important;
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
                    font-size: 9.50027px;
                    line-height: 100%;
                    text-decoration-line: line-through;
                    padding: 0;
                    margin: 0;
                    margin-bottom: 3px;
                }
                .priceDec {
                    background-color: #FF5314;
                    padding: 7px 4px;
                    .price {
                        font-family: Roboto;
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
                /* position: absolute;
                bottom: 0;
                left: 0; */
            }
            }
        }
        .flex2 {
            border: 2px solid #fff;
            h1 {
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 35.6082px;
                line-height: 100%;
                display: flex;
                align-items: flex-end;
            }
        }
        .flex3 {
            h1 {
                font-style: normal;
                font-weight: bold;
                font-size: 52.1266px !important;
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
        background-image: url('BgProductDay.png');
        background-size: cover;
        width: 100% !important;
        height: 350px;
        /* padding: 30px; */
        display: flex;
        h2 {
            font-size: 29px;
        }
        .productDayText {
            width: 562px;
            margin: 68px 70px 66px 64px;
        }
        .productBoard {
            width: 808px;
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
                background-color: #D3E38C;
                padding: 2px 5px;
                color: black !important;
            }
            .bgPrice {
                background-color: #FF5314;
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
            }
        }
        .yellowCont {
            background-color: #FFF9B0;
            display: inline-block;
            padding: 7px 15px ;
            p {
                margin: 0;
                padding: 0;

            }
        }
    }
    //Container-2
    .container-2 {
        background: url("/Korobka.png"), #2525EB;
        background-size: 100% 100%;
        color: white;
        padding: 0 30px;
        margin-bottom: 30px;
        .title-section {
            font-size: 45px;
            font-weight: bold;
        }
        .cards {
            
        }
    }

    


    //Container-mi
    .container-mi {
        background-color: #A8C9C8;
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
        .title-section {
            font-size: 45px;
            font-weight: bold;
        }
        .new-product-cards {
            border: 5px solid #2525EB;
            padding: 0 !important;
            .new-product-card {
                border: 2px solid #2525EB66;
                max-width: 230px;
                margin: 0;
                border-top: 0;
                border-bottom: 0;
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
                        background-color: #D3E38C;
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
                .bag {
                    background-color: #FF5314;
                }
            }
        }
        .button {
            button {
                padding: 10px 35px;
                background-color: #FF5314;
                color: white;
                font-weight: bold;
                border-radius: 15px;
            }
        }
    }
    .laptops {
        padding: 0 30px;
        margin-bottom: 30px;
        .title-section {
            font-size: 45px;
            font-weight: bold;
        }
    }
`;


export default HomeWrapper;