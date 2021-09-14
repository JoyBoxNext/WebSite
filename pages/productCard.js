import React, { useState } from "react";
import ProductCardWrapper from "../Wrappers/ProductCardWrapper";
import Header from "../Containers/Header/Header";
import Container from "../Containers/Container";
import Footer from "../Containers/Footer/Footer";
import { Button } from "@material-ui/core";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ProductSwiperData from "../Data/ProductSwiperData";
import ModalProduct from "../Components/ModalProduct";

const ProductCard = () => {
  // =============
  const [openInput, setOpenInput] = useState(true);
  const open = () => {
    setOpenInput(!openInput);
  };

  return (
    <ProductCardWrapper>
      <Container>
        <div className="contant">
          {/* <Header /> */}
          <div className="contant-title mb-4">
            <div className="contant-title-1">
              <p className="p-text mt-5 fw-bold mb-0">
                Электроника * смартфоны
              </p>
              <p className="badge rounded-0 text-dark m-0 ms-3 p-2">
                Выбор покупателей
              </p>
            </div>
            <div className="contant-title-2">
              <h1 className="">Samsung a52 4/256 dual sim onyx black</h1>
              <p className="badge rounded-0 text-dark p-2">Выбор покупателей</p>
            </div>
          </div>
          <div className="firstContainer">
            <div className="d-flex flex-wrap">
              <div className="firstContainerIpad firstContainerMacbook">
                <div className="images d-flex">
                  <div className=" smallimg d-flex justify-content-start">
                    <img className="active" src="p1small1.png" alt="" />
                    <img src="p1small2.png" alt="" />
                    <img src="p1small3.png" alt="" />
                  </div>
                  <div className="mx-auto">
                    <img className="bigimg" src="p1samsung.png" alt="" />
                  </div>
                </div>
                <div className="row colorMemories mt-3">
                  <div className="col-6 col-sm-">
                    <p className="">
                      Цвет товара: <span>Черный</span>
                    </p>
                    <div className="colorBoxes">
                      <div className="p-2">
                        <div className="d-flex align-items-center justify-content-center colorBox black"></div>
                      </div>
                      <div className="p-2">
                        <div className="colorBox white"></div>
                      </div>
                      <div className="p-2">
                        <div className="colorBox green"></div>
                      </div>
                      <div className="p-2">
                        <div className="colorBox gray"></div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-6 col-sm-">
                    <p className="">Память:</p>
                    <div className="row">
                      <div className="memorie">
                        <div className="p-2">
                          <div className="col-4 whiteBox">64</div>
                        </div>
                        <div className="p-2">
                          <div className="col-4 whiteBox">128</div>
                        </div>
                        <div className="p-2">
                          <div className="col-4 whiteBox">256</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row priceButton">
                    <div className="prices col-sm- mt-4">
                      <div className="d-flex justify-content-between">
                        <h4 className="oldPrice">16 800 000</h4>
                        <p className="badge d-flex align-items-center rounded-0 text-dark m-0">
                          1 330 000 сум
                        </p>
                      </div>
                      <h3 className="price fw-bold">
                        <span className="bigPrice">15</span>,470,999
                      </h3>
                      <p className="rentPrice">от 1 362 000 сум/мес</p>
                    </div>
                    <div className="button col-sm- d-flex flex-wrap">
                      <Button className="checkout">Оформить заказ</Button>
                      <Link href="/">
                        <a className="link-korzinka">Перейти в корзину</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="characteristic-container py-5 ">
                <div className="characteristic mb-3">
                  <ul>
                    <li>экран: 6.53{`"`} (2340×1080) 60 Гц</li>
                    <li>оперативная память: 4 ГБ</li>
                    <li>память: 64 ГБ, слот для карты памяти</li>
                    <li>3 камеры: 48 МП, 2 МП, 2 МП</li>
                    <li>аккумулятор: 6000 мА·ч</li>
                    <li>процессор: Qualcomm Snapdragon 662</li>
                    <li>SIM-карты: 2 (nano SIM)</li>
                  </ul>
                  <div className="buttonBottom">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
                <Link href="/">
                  <a className="link-korzinka text-primary">
                    Все характеристики
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* fitstcontanerFinish */}
          <div className="secondContainer">
            <h1 className="py-5">С этим товаром покупают</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-12 product-swiper swiper_content">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    className="mySwiper"
                    pagination={{ clickable: false }}
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        // "spaceBetween": 20
                      },
                      768: {
                        slidesPerView: 2,
                        // "spaceBetween": 40
                      },
                      1024: {
                        slidesPerView: 4,
                        // "spaceBetween": 50
                      },
                      1920: {
                        slidesPerView: 5,
                        // "spaceBetween": 50
                      },
                    }}
                  >
                    {ProductSwiperData.map((v, i) => {
                      return (
                        <SwiperSlide className=" h-100" key={i}>
                          <div className="product-swiper-card p-3 text-start">
                            <img src={v.img} alt="" />
                            <p className=" title fw-bold mt-2">{v.name}</p>
                            <div className="small d-flex p-0 m-0">
                              <p className="oldPrice me-1 m-0 p-0">
                                {v.oldPrice}
                                <span className="sum">сум</span>
                              </p>
                              <div className="badgePrice">
                                <p className="m-0 p-0">{v.badge} сум</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div className="prices">
                                <p className="m-0 fw-bold">
                                  <span>{v.priceBig}</span>
                                  {v.price}
                                  <small>сум</small>
                                </p>
                                <p className="rentPrice">
                                  от {v.rentPrice} сум/мес
                                </p>
                              </div>
                              <div className="bag">
                                <img
                                  className="w-auto h-auto"
                                  src="icon.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className="button_next">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="button_prev">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                </div>
              </div>
            </div>
            <Button className="newProducts">Перейти в раздел новинки</Button>
          </div>
          <div className="my-2">
            <div className="border_ my-4"></div>
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="icon me-3" icon={faInstagram} />
              <FontAwesomeIcon className="icon me-3" icon={faTelegram} />
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </div>
          </div>
          <div
            className={`row modal_product justify-content-center align-items-center }`}
          >
            <div className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 ">
              <div className="p-4 bg-white  input_group">
                <h3 className="text-center fw-bold">Оставь заявку</h3>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Твоё имя *"
                />
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Твой номер телефона *"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Твой номер телеграм *"
                />
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Button className="button">Оставить заявку</Button>
                  <Button className="times">
                    <b>
                      <FontAwesomeIcon icon={faTimes} />
                    </b>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <ModalProduct />
          <Footer />
        </div>
      </Container>
    </ProductCardWrapper>
  );
};

export default ProductCard;
