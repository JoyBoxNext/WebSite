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
        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 45.3237px;
        line-height: 100%;
    }
    .badge {
        background-color: #D3E38C;
    }
    .firstContainer {
        background-color: #eff9fe;
        .smallimg {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bigimg {
            display: flex !important;
            justify-content: center !important;
            width: 430px !important;
            max-height: 530px;
            margin-left: -100px;
        }
        .colorBoxes {
            display: flex;
            .colorBox {
                border: 2px solid black;
                border-radius: 10px;
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
                background-color: #6EB290;
                height: 40px;
                width: 40px;
            }
            .gray {
                background-color: #EEEDED;
                height: 40px;
                width: 40px;
            }
        }
        .memorie {
            display: flex;
            .whiteBox {
                border: 2px solid black;
                border-radius: 10px;
                background-color: white;
                text-align: center;
                height: 33px;
                width: 65px;
                font-weight: bold;
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
            width: 100%;
            background-color: #FF5314;
            color: white;
            margin-bottom: 20px;
        }
        .link-korzinka {
            text-decoration: underline;
            color: gray;
        }
        .characteristic {
            border: 2px solid blue;
            width: 100%;
            .link-characteristic {
                color: blue !important;
            }
        }
        /* Нечетные строки */
        ul li:nth-child(odd){
	        background: #ceeefc;
            list-style-type: disc;
            list-style-position: inside;
            padding: 5px 0;
            padding-left: 10px;
            font-weight: bold;
        }
        
        /* Четные строки */
        ul li:nth-child(even){
            background: transparent;
            list-style-type: disc;
            list-style-position: inside;
            padding: 5px 0;
            padding-left: 10px;
            font-weight: bold;
        }
    }

    .product-swiper {
        border: 5px solid #2525EB;
        padding: 0;
        .product-swiper-card {
            border-left: 5px solid #2525EB66;
             margin: 0;
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
                max-width: 172px;
                margin: auto !important;
                display: flex;
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
        }
    }
    
    .newProducts {
        display: flex;
        justify-content: center;
        background-color: #FF5314;
        color: white;
        margin: 20px auto;
    }
    
    

    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
    
`;

export default ProductCardWrapper;