import React from "react";
import HomeWrapper from "../Wrappers/HomeWrapper";
import Container from "../Containers/Container";
import NewProductCards from "../Data/NewProductCards";
import LaptopData from "../Data/LaptopData";
import { Button } from "@material-ui/core";
import Link from "next/link";
import Footer from "../Containers/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { home_images } from "../Data/data";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import { useSelector } from "react-redux";
import { homeDatas } from "../Data/homeData";
import Header from "./../Containers/Header/Header";
import { ChooseData } from "./../Data/ChooseData";
import Messeger from "../Components/messeger";
// import Swiper from "react-id-swiper";

export default function Home() {
  const chooseData = () => {
    const action = { type: t.CHOOSE_DATA, payload: ChooseData };
    dispatch(action);
  };

  chooseData();

  const choosedata = useSelector((state) => state.BooksReducer.chooseData);

  const saveChooseDatas = (index) => {
    let a = choosedata?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  const saveRightProduct = (index) => {
    let a = homeDatas?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  const newsData = (index) => {
    let a = NewProductCards?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  const laptopSaveData = (index) => {
    let a = LaptopData?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  return (
    <HomeWrapper>
      <Container>
        <div className="contant">
          <Header />

          {/* Container-1 */}
          <div className="container-1  mt-2">
            <div className="d-flex flex-wrap">
              <div className="flex1 blue" style={{ width: "25%" }}>
                <div className="text">
                  <p className="m-1 top_title1">
                    заголовок редактируется <br /> через админ панель
                  </p>
                  <h1 className="mb-3 big_title">Удиви своих друзей!</h1>
                </div>
                <div className="mini-content p-0">
                  <div className="p-2 pe-0">
                    <p className="textPlayS">PlayStation 5 Digital version</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="title mb-0 text-end small_title d-none">
                        заголовок редактируется через админ панель
                      </p>
                      <p className="title mb-0 text-end samsung_title d-none">
                        с Samsung Galaxy A52
                      </p>
                    </div>
                    <div className="textPrice">
                      <p className="subtitle top_title">
                        редактируется <br /> через админ панель
                      </p>
                      <div className="d-block prices">
                        <p className="oldPrice ">18,577,000</p>
                        <div className="priceDec">
                          <div className="price d-flex">
                            от <p className="priceNum">15,845,000</p> сум
                          </div>
                        </div>
                        <p className="rentPrice d-none">от 1,185,577 сум/мес</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  justify-content-between  w-100">
                    <img
                      className="miniContentLogo h-100"
                      src="logo3.png"
                      alt="photo"
                    />
                    <p className="bottom-text w-auto">
                      Магазин бытовой техники <br /> и электроники
                    </p>
                  </div>
                  <div className="dot_orange dot1"></div>
                  <div className="dot_orange dot2"></div>
                  <div className="dot_orange dot3"></div>
                  <div className="dot_orange dot4"></div>
                </div>
              </div>
              <div className="flex2 d-flex blue" style={{ width: "37.1%" }}>
                <h1 className="threePhone_title">16:9</h1>
                <img
                  className="threePhone"
                  src="threeMobiles.png"
                  alt="phone"
                />
              </div>
              <div className="flex3 orange" style={{ width: "26.7%" }}>
                <div className="h-100 d-flex align-items-center">
                  <h1 className="h2 text-center home_wonder_title">
                    Удивляй! Hayron qil!
                  </h1>
                </div>
              </div>
              <div className="flex4 blue" style={{ width: "11.2%" }}></div>
              <div className="flex5 orange" style={{ width: "62.1%" }}></div>
              <div className="flex6 blue" style={{ width: "26.7%" }}>
                <img className="w-100" src="logo4.png" alt="photo" />
              </div>
              <div className="flex7 orange" style={{ width: "11.2%" }}></div>
              <div className="flex8 blue py-3" style={{ width: "62.1%" }}>
                <div className="buttons">
                  <Button className="btn_links">Скидки</Button>
                  <Button className="btn_links">Подборки</Button>
                  <Button className="btn_links">Товар дня</Button>
                  <Button className="btn_links">Новинки</Button>
                </div>
                <div className="d-none mini-content-flex8">
                  <div className="text">
                    <p className="subtitle m-1 top_title">
                      заголовок редактируется через админ панель
                    </p>
                    <h1 className="title mb-3 big_title">
                      Удиви своих друзей!
                    </h1>
                  </div>
                  <div className="mini-content p-0">
                    <div className="p-1">
                      <p className="title-2 top_title">
                        PlayStation 5 Digital version
                      </p>
                      <div className="d-flex titles-1 justify-content-between align-items-center">
                        <p className="title mb-0 text-end">
                          с Samsung Galaxy A52
                        </p>
                        <p className="title mb-0 text-end small_title">
                          заголовок <br /> редактируется <br /> через админ
                          панель
                        </p>
                      </div>
                      <div className="d-flex priceText justify-content-between">
                        <p className="subtitle top_title">
                          редактируется через админ панель
                        </p>
                        <div className="d-block prices">
                          <p className="oldPrice ">18,577,000</p>
                          <div className="priceDec">
                            <div className="price d-flex">
                              от <p className="priceNum">15,845,000</p>
                            </div>
                          </div>
                          <p className="rentPrice d-none">
                            от 1,185,577 сум/мес
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex  justify-content-between  w-100">
                      <img className="top_title" src="logo3.png" alt="photo" />
                      <p className="bottom-text w-auto">
                        Магазин бытовой техники и электроники
                      </p>
                    </div>
                    <div className="dot_orange dot1"></div>
                    <div className="dot_orange dot2"></div>
                    <div className="dot_orange dot3"></div>
                    <div className="dot_orange dot4"></div>
                  </div>
                </div>
              </div>
              <div className="flex9 orange" style={{ width: "26.7%" }}>
                <p className="d-flex justify-content-center align-items-center p-0 m-0">
                  Магазин бытовой техники и электроники
                </p>
              </div>
              <div className="flex10 blue" style={{ width: "11.2%" }}></div>
            </div>
          </div>

          {/* Container-2 */}
          <div className="container-2 mt-5">
            <h2 className="title-section my-2">Удивляйся и удивляй!</h2>
            <Link href="/productCard">
              <a>
                <div className="cards d-flex justify-content-center">
                  {homeDatas.map((v, i) => {
                    return (
                      <div className={`card m-1 p-3 ${v.className}`} key={i}>
                        <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                          <img
                            className="container2_photo w-100"
                            src={v.img}
                            alt="photo"
                          />
                          <div className="colorBoxes flex-column mb-5">
                            <div className="p-1">
                              <div className="col-3 colorBox black"></div>
                            </div>
                            <div className="p-1">
                              <div className="col-3 colorBox white"></div>
                            </div>
                            <div className="p-1">
                              <div className="col-3 colorBox green"></div>
                            </div>
                            <div className="p-1">
                              <div className="col-3 colorBox gray"></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-dark title fw-bold mt-2">
                          {v.title}
                        </p>
                        <div className="small d-flex p-0 m-0">
                          <p className="oldPrice me-1 m-0 p-0">
                            {v.oldPrice}
                            <span className="sum">сум</span>
                          </p>
                          <div className="badgePrice">
                            <p className="m-0 p-0">{v.badgePrice} сум</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="prices">
                            <p className="m-0 fw-bold">
                              <span className="text-dark">{v.priceBig}</span>
                              <b className="text-dark">{v.price}</b>
                              <small className="text-dark">сум</small>
                            </p>
                            <p className="rentPrice">
                              от {v.rentPrice} сум/мес
                            </p>
                          </div>
                          <button
                            onClick={() => saveRightProduct(i)}
                            className="border-0 bag"
                          >
                            <img
                              className="w-75 mb-2"
                              src="bag.svg"
                              alt="photo"
                            />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </a>
            </Link>
          </div>
          {/* ProductDay */}
          <div className="productDay px-lg-4 mt-5">
            <div className="row justify-content-center p-3 w-100">
              <div className="col-12 col-sm-4 col-md-5 col-lg-5">
                <div className="productDayText m-0 mt-lg-3 ">
                  <div className="row pe-0">
                    <div className="col-6 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <p className="mb-0 left_title">Товар дня</p>
                      <h1 className="mb-0 left_clock fw-bold">17.08</h1>
                      <p className="fw-bold left_subtitle">
                        Ограниченное количество. Предложение действительно
                        только сегодня.
                      </p>
                    </div>
                    <div className="col-6 col-sm-12 col-xl-6 ">
                      <div className="yellowCont">
                        <p>до конца акции</p>
                        <h2>08:03:45</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-7 col-lg-7 col-lg-7 d-flex justify-content-center align-items-center m-0">
                <div className={`productBoard `}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <h2 className="right_title">
                        Samsung side by side-washer
                      </h2>
                      <div className="d-flex align-items-center">
                        <p className="oldPrice mb-0">18,577,000</p>
                        <p className="salePrice my-auto ms-2 mb-0 right_green_price">
                          - 2,732,000
                        </p>
                      </div>
                      <div className="priceContainer d-grid">
                        <div className="bgPrice w-100 rounded">
                          <p className="small">
                            от <span className="price__">15,845,000</span> сум
                          </p>
                        </div>
                        <img
                          className="product_logo h-100"
                          src="logo3.png"
                          alt="photo"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-5 col-xl-6 d-flex justify-content-center align-items-center p-0 ">
                      <img
                        className="productDayWasher w-100"
                        src="productDayWasher.png"
                        alt="Washer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ChooseClients */}
          <div className="choose mt-5">
            <h2 className="title-section my-2 px-2">Выбор покупателей</h2>
            <div className="choose-cards swiper_content">
              <Swiper
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },
                  568: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                  },
                  1060: {
                    slidesPerView: 4,
                  },
                  1590: {
                    slidesPerView: 5,
                  },
                }}
                slidesPerView={5}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                className="mySwiper"
              >
                {choosedata.map((v, i) => {
                  return (
                    <SwiperSlide className=" h-100 p-3" key={i}>
                      <Link href="/productCard">
                        <a>
                          <div className="choose-card p-2">
                            <img
                              className="skidka"
                              src="skidka.svg"
                              alt="photo"
                            />
                            <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                              <img
                                style={{ marginTop: "20px !important" }}
                                src={v.img}
                                alt="photo"
                              />
                              <div className="colorBoxes flex-column mb-5">
                                <div className="p-1">
                                  <div className="col-3 colorBox black"></div>
                                </div>
                                <div className="p-1">
                                  <div className="col-3 colorBox white"></div>
                                </div>
                                <div className="p-1">
                                  <div className="col-3 colorBox green"></div>
                                </div>
                                <div className="p-1">
                                  <div className="col-3 colorBox gray"></div>
                                </div>
                              </div>
                            </div>
                            <p className=" title fw-bold mt-2">{v.title}</p>
                            <div className="small d-flex p-0 m-0">
                              <p className="oldPrice me-1 m-0 p-0">
                                {v.oldPrice}
                                <span className="sum">сум</span>
                              </p>
                              <div className="badgePrice">
                                <p className="m-0 p-0">{v.badgePrice} сум</p>
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
                              <button
                                onClick={() => saveChooseDatas(i)}
                                className="border-0 bag"
                              >
                                <img
                                  className="w-75 mb-2"
                                  src="bag.svg"
                                  alt="photo"
                                />
                              </button>
                            </div>
                            <div className="dot_blue dot1"></div>
                            <div className="dot_blue dot2"></div>
                            <div className="dot_blue dot3"></div>
                            <div className="dot_blue dot4"></div>
                          </div>
                        </a>
                      </Link>
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

          {/* Container-mi */}
          <div>
            <img className="w-100" src="miBand.png" alt="photo" />
          </div>

          {/* New-products */}
          <div className="new-products border rounded-0 w-100 mt-5">
            <h2 className="title-section my-3">Новинки</h2>
            <div className="new-product-cards d-flex p-2">
              {NewProductCards.map((v, i) => {
                return (
                  <Link href="/productCard" key={i}>
                    <a>
                      <div>
                        <div
                          className={`new-product-card text-center p-2 ${v.className}`}
                        >
                          <img
                            style={{ objectFit: "contain" }}
                            className="w-100 h-50 new_photos"
                            src={v.img}
                            alt="photo"
                          />
                          <p className="title text-start fw-bold mt-2">
                            {v.title}
                          </p>
                          <div className="small d-flex ">
                            <p className="oldPrice me-1 m-0 p-0">
                              {v.oldPrice}
                              <span className="sum">сум</span>
                            </p>
                            <div className="badgePrice">
                              <p className="m-0 p-0">{v.badgePrice} сум</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="prices">
                              <p className="m-0 fw-bold">
                                <span>{v.priceBig}</span>
                                <span className="small_price">{v.price}</span>
                                <small className="sum">сум</small>
                              </p>
                              <p className="rentPrice">
                                от {v.rentPrice} сум/мес
                              </p>
                            </div>
                            <button
                              onClick={() => newsData(i)}
                              className="border-0 bag"
                            >
                              <img
                                className="w-75 mb-2"
                                src="bag.svg"
                                alt="photo"
                              />
                            </button>
                          </div>
                          <div className="dot_orange dot1"></div>
                          <div className="dot_orange dot2"></div>
                          <div className="dot_orange dot3"></div>
                          <div className="dot_orange dot4"></div>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="button d-flex justify-content-center my-4">
              <button className="border-0">
                Перейти в раздел <br /> новинки
              </button>
            </div>
          </div>

          {/* Laptops */}
          <div className="laptops w-100 mt-5">
            <h2 className="title-section my-3">Топ предложения - Ноутбуки</h2>
            <div className="laptop-cards swiper_content">
              <Swiper
                slidesPerView={5}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                className="mySwiper"
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1155: {
                    slidesPerView: 5,
                  },
                  1820: {
                    slidesPerView: 6,
                  },
                }}
              >
                {LaptopData.map((v, i) => {
                  return (
                    <SwiperSlide className=" h-100 p-1" key={i}>
                      <Link href="/productCard">
                        <a>
                          <div className="h-100 p-2" key={i}>
                            <div className="laptop-card p-2" key={i}>
                              <img
                                className="discount"
                                src="skidka.svg"
                                alt="photo"
                              />
                              <div className="d-flex flex-column justify-content-center align-items-center">
                                <img
                                  className="acer"
                                  src="acer.svg.svg"
                                  alt="acer"
                                />
                                <img
                                  style={{ marginTop: "70px" }}
                                  src={v.img}
                                  alt="photo"
                                />
                              </div>
                              <Link href="/">
                                <a>
                                  <p className="title fw-bold mt-2">
                                    {v.title}
                                  </p>
                                </a>
                              </Link>
                              <div className="small d-flex p-0 m-0">
                                <p className="oldPrice me-1 m-0 p-0">
                                  {v.oldPrice}
                                  <span className="sum">сум</span>
                                </p>
                                <div className="badgePrice">
                                  <p className="m-0 p-0">{v.badgePrice} сум</p>
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
                                <button
                                  onClick={() => laptopSaveData(i)}
                                  className="border-0 bag"
                                >
                                  <img
                                    className="w-75 mb-2"
                                    src="bag.svg"
                                    alt="photo"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
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
          <div className="button d-flex justify-content-center">
            <button className="border-0">
              Перейти в раздел <br /> ноутбуки
            </button>
          </div>

          {/* //brands */}
          <div className="brands">
            <div className="py-5">
              <h1 className="title-section">Популярные бренды</h1>
              <div className="row flex-wrap justify-content-center align-items-center">
                {home_images.map((value, index) => {
                  return (
                    <div
                      className={`col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center`}
                      key={index}
                    >
                      <img
                        className={`home_photo mt-4 ${value.className}`}
                        src={value.img}
                        alt="photo"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Button className="button_bottom text-center">ЕЩЕ</Button>
              </div>
            </div>
          </div>
        </div>
        <Messeger />
      </Container>
      <Footer />
    </HomeWrapper>
  );
}
