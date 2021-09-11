import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import LaptopData from '../Data/LaptopData';
import Link from 'next/link';
import Container from '../Containers/Container';

const TestWrapper = styled.div`
/* box-sizing: border-box; */
max-width: 100%;
margin: 0;
button:not(:disabled), 
    [type=button]:not(:disabled), 
    [type=reset]:not(:disabled), 
    [type=submit]:not(:disabled) 
    {
    cursor: pointer;
    display: block;
    width: 60px;
    background-color: blue;
    height: 60px;
    border: 1px solid black;
    border-radius: 5px;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    color: black;
    -webkit-font-smoothing: antialiased;
}
.laptop-card {
            border: 2px solid #2525EB;
                max-width: 230px;
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
                    margin: auto !important;
                    display: flex;
                }
                .bag {
                    background-color: #FF5314;
                }
        }
`;

const Test = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <TestWrapper>
            <Container>
                <Slider className="text-center p-5" {...settings}>
                    {LaptopData.map((v, i) => {
                        return (<div className=" h-100 p-3" key={i}>
                            <div className="laptop-card p-2" key={i}>
                                <img src={v.img} alt="" />
                                <Link href="/test"><a>
                                    <p className=" title fw-bold mt-2">{v.title}</p>
                                </a></Link>
                                <div className="small d-flex p-0 m-0">
                                    <p className="oldPrice me-1 m-0 p-0">{v.oldPrice}<span className="sum">сум</span></p>
                                    <div className="badgePrice">
                                        <p className="m-0 p-0">{v.badgePrice} сум</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="prices">
                                        <p className="m-0 fw-bold"><span>{v.priceBig}</span>{v.price}<small>сум</small></p>
                                        <p className="rentPrice">от {v.rentPrice} сум/мес</p>
                                    </div>
                                    <div className="bag">
                                        <img src="bag.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </Slider>
            </Container>
        </TestWrapper>
    )
}

export default Test;
