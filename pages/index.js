import React, { useEffect, useState } from "react";
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
// import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import {
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import { useSelector } from "react-redux";
import { homeDatas } from "../Data/homeData";
import Header from "./../Containers/Header/Header";
import { ChooseData } from "./../Data/ChooseData";
import Messeger from "../Components/messeger";
import { linksIndex, pages } from "../Data/HeaderData";
import ActiveLink from "../activeLink";
import HeaderWrapper from "../Containers/Header/HeaderWrapper";
import { getBrands, getCategories, getProducts } from "../api";

// import Swiper from "react-id-swiper";
SwiperCore.use([Scrollbar]);

export default function Home({ baraxolkaData }) {
  const [brands, setBrands] = useState([]);

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

  //////=====/////
  const [anchorEl, setAnchorEl] = useState(false);

  const handleOpenMenu = () => {
    setAnchorEl(!anchorEl);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getProducts();
    getCategories();
    getBrands().then((data) => {
      console.log(data);

      setBrands(data.data);
    });
  }, []);

  return (
    <HomeWrapper>
      <Container baraxolkaData={baraxolkaData}>
        <div className="contant">
          <Header />
          <HeaderWrapper>
            <div className="w-100 mt-3 d-flex  align-items-center category">
              <div className="flex position-relative">
                <Button
                  className="Categories mb-3"
                  aria-controls="menu"
                  disableRipple
                  onClick={handleOpenMenu}
                  variant="contained"
                  style={{ display: "none" }}
                >
                  <img className="me-1" src="iconCategories.svg" alt="photo" />
                  ??????????????????
                  <img className="ms-1" src="iconCtegories2.svg" alt="photo" />
                </Button>
                <div
                  className={`MenuContainer position-absolute ${
                    anchorEl ? "Active" : ""
                  }`}
                >
                  {pages.map((value, index) => {
                    return (
                      <div key={index} className="menuItem">
                        <Link href={value.href}>
                          <div style={{ cursor: "pointer" }}>
                            <a>{value.page}</a>
                            <FontAwesomeIcon
                              className="icon_right position-absolute"
                              style={{ right: "10px", color: "#606060" }}
                              icon={faAngleRight}
                            />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex flex-wrap">
                  {linksIndex.map((value, index) => {
                    return (
                      <Link href={value.href} key={index}>
                        <a>
                          <ActiveLink
                            href={value.href}
                            onClick={handleMenuClose}
                            style={{ zIndex: "100" }}
                            className={`${value.className}`}
                          >
                            {value.link}
                          </ActiveLink>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </HeaderWrapper>

          {/* Container-1 */}
          <div className="container-1  mt-2">
            <div className="d-flex flex-wrap">
              <div className="flex1 blue" style={{ width: "25%" }}>
                <div className="text">
                  <p className="m-1 top_title1">
                    ?????????????????? ?????????????????????????? <br /> ?????????? ?????????? ????????????
                  </p>
                  <h1 className="mb-3 big_title">?????????? ?????????? ????????????!</h1>
                </div>
                <div className="mini-content p-0">
                  <div className="p-2 pe-0">
                    <p className="textPlayS">PlayStation 5 Digital version</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="title mb-0 text-end small_title d-none">
                        ?????????????????? ?????????????????????????? ?????????? ?????????? ????????????
                      </p>
                      <p className="title mb-0 text-end samsung_title d-none">
                        ?? Samsung Galaxy A52
                      </p>
                    </div>
                    <div className="textPrice">
                      <p className="subtitle top_title">
                        ?????????????????????????? <br /> ?????????? ?????????? ????????????
                      </p>
                      <div className="d-block prices">
                        <p className="oldPrice ">18,577,000</p>
                        <div className="priceDec">
                          <div className="price d-flex">
                            ????{" "}
                            <p className="priceNum">
                              <span className="priceNumBig">15</span>,845,000
                            </p>{" "}
                            ??????
                          </div>
                        </div>
                        <p className="rentPrice d-none">???? 1,185,577 ??????/??????</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  justify-content-between  w-100">
                    <img
                      className="miniContentLogo h-100"
                      src="logothird.png"
                      alt="photo"
                    />
                    <p className="bottom-text w-auto">
                      ?????????????? ?????????????? ?????????????? <br /> ?? ??????????????????????
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
                    ??????????????! Hayron qil!
                  </h1>
                </div>
              </div>
              <div className="flex4 blue" style={{ width: "11.2%" }}></div>
              <div className="flex5 orange" style={{ width: "62.1%" }}></div>
              <div className="flex6 blue" style={{ width: "26.7%" }}>
                <img className="w-100" src="logofourth.png" alt="photo" />
              </div>
              <div className="flex7 orange" style={{ width: "11.2%" }}></div>
              <div className="flex8 blue" style={{ width: "62.1%" }}>
                <div className="buttons">
                  <Button className="btn_links btn_links1">????????????</Button>
                  <Button className="btn_links">????????????????</Button>
                  <Button className="btn_links">?????????? ??????</Button>
                  <Button className="btn_links">??????????????</Button>
                </div>
                <div className="d-none mini-content-flex8">
                  <div className="text">
                    <h1 className="title mb-3 pe-2 big_title">
                      ?????????? ?????????? ????????????!
                    </h1>
                  </div>
                  <div className="mini-content p-0">
                    <div className="p-1">
                      <div className="d-flex titles-1 justify-content-between align-items-center">
                        <p className="title mb-0 text-end">
                          ?? Samsung Galaxy A52
                        </p>
                        <p className="title mb-0 text-end small_title">
                          ?????????????????? <br /> ?????????????????????????? <br /> ?????????? ??????????
                          ????????????
                        </p>
                      </div>
                      <div className="d-flex priceText justify-content-between">
                        <p className="subtitle top_title">
                          ?????????????????????????? ?????????? ?????????? ????????????
                        </p>
                        <div className="d-block prices">
                          <p className="oldPrice ">18,577,000</p>
                          <div className="priceDec">
                            <div className="price d-flex">
                              ????{" "}
                              <p className="priceNum">
                                <span className="priceNumBig">15</span>,845,000
                              </p>
                            </div>
                          </div>
                          <p className="rentPrice d-none">
                            ???? 1,185,577 ??????/??????
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex  justify-content-between  w-100">
                      <img
                        className="top_title"
                        src="logothird.png"
                        alt="photo"
                      />
                      <p className="bottom-text w-auto">
                        ?????????????? ?????????????? ?????????????? ?? ??????????????????????
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex9 orange" style={{ width: "26.7%" }}>
                <p className="d-flex justify-content-center align-items-center p-0 m-0">
                  ?????????????? ?????????????? ?????????????? ?? ??????????????????????
                </p>
              </div>
              <div className="flex10 blue" style={{ width: "11.2%" }}></div>
            </div>
          </div>

          {/* Container-2 */}
          <div className="container-2 mt-5">
            <h2 className="title-section my-2">?????????????????? ?? ??????????????!</h2>
            <Link href="/productCard">
              <a>
                <div className="cards d-flex justify-content-center">
                  {homeDatas.map((v, i) => {
                    return (
                      <div className={`card mx-2 p-3 ${v.className}`} key={i}>
                        <img
                          className="skidka_card"
                          src="sale.svg"
                          alt="sale"
                        />
                        <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                          <img
                            className="container2_photo"
                            style={{
                              marginTop: "20px !important",
                              width: "100px",
                              height: "127px",
                              objectFit: "contain",
                            }}
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
                        <p className="text-dark title fw-bold mt-1 mb-0">
                          {v.title}
                        </p>
                        <div className="small d-flex p-0 m-0">
                          <p className="oldPrice me-3 mt-1 m-0 p-0">
                            {v.oldPrice}
                          </p>
                          <div className="badgePrice mt-1">
                            <p className="m-0 p-0">{v.badgePrice} ??????</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="prices">
                            <p className="m-0 fw-bold">
                              <span className="text-dark m-0 p-0">
                                {v.big_price}
                              </span>
                              <b className="text-dark">{v.price}</b>
                              <small className="text-dark">??????</small>
                            </p>
                            <p className="rentPrice mb-0">
                              ???? {v.rentPrice} ??????/??????
                            </p>
                          </div>
                          <button
                            onClick={() => saveRightProduct(i)}
                            className="border-0 bag"
                          >
                            <img
                              className="w-75 mb-2 "
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
          {/*   -Tel */}
          <div className="container-2-Tel d-none mt-5">
            <h2 className="title-section my-2">?????????????????? ?? ??????????????!</h2>
            <div className="cards d-flex justify-content-center">
              <Swiper
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },
                }}
                slidesPerView={5}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={false}
                // pagination={{
                //   type: "progressbar",
                // }}
                scrollbar={{
                  hide: false,
                }}
                className="mySwiper position-relative"
              >
                {homeDatas.map((v, i) => {
                  return (
                    <SwiperSlide className="h-100" key={i}>
                      <div className={`card mx-2 p-3`}>
                        <img
                          className="skidka_card"
                          src="sale.svg"
                          alt="sale"
                        />
                        <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                          <img
                            className="container2_photo"
                            style={{
                              marginTop: "20px !important",
                              width: "100px",
                              height: "127px",
                              objectFit: "contain",
                            }}
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
                        <p className="text-dark title fw-bold mt-1 mb-0">
                          {v.title}
                        </p>
                        <div className="small d-flex p-0 m-0">
                          <p className="oldPrice me-3 mt-1 m-0 p-0">
                            {v.oldPrice}
                          </p>
                          <div className="badgePrice mt-1">
                            <p className="m-0 p-0">{v.badgePrice} ??????</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="prices">
                            <p className="m-0 fw-bold">
                              <span className="text-dark m-0 p-0">
                                {v.big_price}
                              </span>
                              <b className="text-dark">{v.price}</b>
                              <small className="text-dark">??????</small>
                            </p>
                            <p className="rentPrice mb-0">
                              ???? {v.rentPrice} ??????/??????
                            </p>
                          </div>
                          <button
                            onClick={() => saveRightProduct(i)}
                            className="border-0 bag"
                          >
                            <img
                              className="w-75 mb-2 "
                              src="bag.svg"
                              alt="photo"
                            />
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* ProductDay */}
          <div className="productDay px-lg-4 mt-5">
            <div className="row justify-content-center p-3 w-100">
              <div className="col-12 col-sm-4 col-md-5 col-lg-4 d-flex align-items-center">
                <div className="productDayText m-0 ">
                  <div className="row pe-0">
                    <div className="col-7 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <p className="mb-2 left_title">?????????? ??????</p>
                      <h1 className="mb-2 left_clock fw-bold">17.08</h1>
                      <p className="fw-bold left_subtitle mb-3">
                        ???????????????????????? ????????????????????. <br /> ??????????????????????
                        ?????????????????????????? ???????????? ??????????????.
                      </p>
                    </div>
                    <div className="col-5 p-0 ">
                      <div className="yellowCont">
                        <p>???? ?????????? ??????????</p>
                        <h2>08:03:45</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-7 col-lg-8 d-flex justify-content-center align-items-center m-0">
                <div className={`productBoard`}>
                  <div className="row w-100 justify-content-between m-0 align-items-center">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <p className="right_title m-0 mb-2">
                        Samsung side by side-washer
                      </p>
                      <div className="d-flex align-items-center">
                        <p className="oldPrice m-0">18,577,000</p>
                        <div className="sale_price_div ms-2">
                          <p className="salePrice my-auto m-0">- 2,732,000</p>
                        </div>
                      </div>
                      <div className="priceContainer my-2 m-md-0">
                        <div className="bgPrice m-0 me-2">
                          <p className="small">????</p>
                          <div className="price__">
                            15,845,000 <p className="summ"> ??????</p>
                          </div>
                        </div>
                        <img
                          className="product_logo"
                          src="logothird.png"
                          alt="photo"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center p-0 ">
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
            <h2 className="title-section my-2 px-2">?????????? ??????????????????????</h2>
            <div className="choose-cards swiper_content">
              <Swiper
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },
                  550: {
                    slidesPerView: 2,
                  },
                  760: {
                    slidesPerView: 3,
                  },
                  1060: {
                    slidesPerView: 4,
                  },
                  1400: {
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
                    <SwiperSlide className="h-100 p-3" key={i}>
                      <Link href="/productCard">
                        <a>
                          <div className="choose-card p-2">
                            <img className="skidka" src="sale.svg" alt="sale" />
                            <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                              <img
                                style={{ marginTop: "20px !important" }}
                                className="choose_photo"
                                src={v.img}
                                alt="photo"
                              />
                              <div className="colorBoxes flex-column mb-5 ms-1">
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
                              <p className="oldPrice me-3 m-0 p-0 mt-1">
                                {v.oldPrice}
                                <span className="sum">??????</span>
                              </p>
                              <div className="badgePrice mt-1">
                                <p className="m-0 p-0">{v.badgePrice} ??????</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div className="prices">
                                <p className="m-0 fw-bold b">
                                  <span>{v.big_price}</span>
                                  {v.price}
                                  <small>??????</small>
                                </p>
                                <p className="rentPrice">
                                  ???? {v.rentPrice} ??????/??????
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
          {/* chooseTel */}
          <div className="chooseTel d-none mt-5">
            <h2 className="title-section my-2 px-2">?????????? ??????????????????????</h2>
            <div className="choose-cards">
              {choosedata.map((v, i) => {
                return (
                  <Link href="/productCard" key={i}>
                    <a>
                      <div className={`choose-card p-2 ${v.className}`}>
                        <img className="skidka" src="sale.svg" alt="sale" />
                        <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                          <img
                            style={{ marginTop: "20px !important" }}
                            className="choose_photo"
                            src={v.img}
                            alt="photo"
                          />
                          <div className="colorBoxes flex-column mb-5 ms-1">
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
                          <p className="oldPrice me-3 m-0 p-0 mt-1">
                            {v.oldPrice}
                            <span className="sum">??????</span>
                          </p>
                          <div className="badgePrice mt-1">
                            <p className="m-0 p-0">{v.badgePrice} ??????</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="prices">
                            <p className="m-0 fw-bold b">
                              <span>{v.big_price}</span>
                              {v.price}
                              <small>??????</small>
                            </p>
                            <p className="rentPrice">
                              ???? {v.rentPrice} ??????/??????
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
                );
              })}
              <div className="button_next">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="button_prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
            </div>
          </div>

          {/* Container-mi */}
          <div className="miBand">
            <img className="w-100" src="miBand.png" alt="photo" />
          </div>
          <div className="miBand2 d-none">
            <img className="w-100" src="miBand2.png" alt="photo" />
          </div>

          {/* New-products */}
          <div className="new-products border rounded-0 w-100 mt-5">
            <h2 className="title-section my-3">??????????????</h2>
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
                            <p className="oldPrice me-3 ms-1 m-0 p-0">
                              {v.oldPrice}
                              <span className="sum">??????</span>
                            </p>
                            <div className="badgePrice">
                              <p className="m-0 p-0">{v.badgePrice} ??????</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="prices">
                              <p className="m-0 fw-bold">
                                <span>{v.big_price}</span>
                                <b className="small_price">{v.price}</b>
                                <small className="sum">??????</small>
                              </p>
                              <p className="rentPrice ">
                                ???? {v.rentPrice} ??????/??????
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
              <Button className="border-0">
                ?????????????? ?? ???????????? <br /> ??????????????
              </Button>
            </div>
          </div>

          {/* New-products-Tel*/}
          <div className="new-products-Tel d-none w-100 mt-5">
            <h2 className="title-section my-3">??????????????</h2>
            <div className="new-product-cards d-flex p-2">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                slidesPerView={5}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={false}
                className="mySwiper"
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  750: {
                    slidesPerView: 3,
                  },
                  950: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                  1800: {
                    slidesPerView: 6,
                  },
                }}
              >
                {NewProductCards.map((v, i) => {
                  return (
                    <SwiperSlide className=" h-100" key={i}>
                      <Link href="/productCard" key={i}>
                        <a>
                          <div>
                            <div className={`new-product-card text-center p-2`}>
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
                                <p className="oldPrice me-3 ms-1 m-0 p-0">
                                  {v.oldPrice}
                                  <span className="sum">??????</span>
                                </p>
                                <div className="badgePrice">
                                  <p className="m-0 p-0">{v.badgePrice} ??????</p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="prices">
                                  <p className="m-0 fw-bold">
                                    <span>{v.big_price}</span>
                                    <b className="small_price">{v.price}</b>
                                    <small className="sum">??????</small>
                                  </p>
                                  <p className="rentPrice ">
                                    ???? {v.rentPrice} ??????/??????
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
                            </div>
                          </div>
                        </a>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="dot_orange dot1"></div>
              <div className="dot_orange dot2"></div>
              <div className="dot_orange dot3"></div>
              <div className="dot_orange dot4"></div>
            </div>
            <div className="button d-flex justify-content-center my-4">
              <Button className="border-0">
                ?????????????? ?? ???????????? <br /> ??????????????
              </Button>
            </div>
          </div>

          {/* Laptops */}
          <div className="laptops w-100 mt-5">
            <h2 className="title-section my-3">?????? ?????????????????????? - ????????????????</h2>
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
                  550: {
                    slidesPerView: 2,
                  },
                  750: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1155: {
                    slidesPerView: 5,
                  },
                  1930: {
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
                                src="sale.svg"
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
                              <p className="title fw-bold mt-2">{v.title}</p>
                              <div className="small d-flex p-0 m-0">
                                <p className="oldPrice me-3 ms-1 m-0 p-0">
                                  {v.oldPrice}
                                  <span className="sum">??????</span>
                                </p>
                                <div className="badgePrice">
                                  <p className="m-0 p-0">{v.badgePrice} ??????</p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="prices">
                                  <p className="m-0 fw-bold">
                                    <span>{v.big_price}</span>
                                    {v.price}
                                    <small>??????</small>
                                  </p>
                                  <p className="rentPrice ms-1">
                                    ???? {v.rentPrice} ??????/??????
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

          {/* LaptopsTel */}
          <div className="laptopsTel d-none w-100 mt-5">
            <h2 className="title-section my-3">?????? ?????????????????????? - ????????????????</h2>
            <div className="laptop-cards">
              {LaptopData.map((v, i) => {
                return (
                  <Link href="/productCard" key={i}>
                    <a>
                      <div className="h-100" key={i}>
                        <div
                          className={`laptop-card p-2 ${v.className}`}
                          key={i}
                        >
                          <img
                            className="discount"
                            src="sale.svg"
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
                          <p className="title fw-bold mt-2">{v.title}</p>
                          <div className="small d-flex p-0 m-0">
                            <p className="oldPrice me-3 ms-1 m-0 p-0">
                              {v.oldPrice}
                              <span className="sum">??????</span>
                            </p>
                            <div className="badgePrice">
                              <p className="m-0 p-0">{v.badgePrice} ??????</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="prices">
                              <p className="m-0 fw-bold">
                                <span>{v.big_price}</span>
                                {v.price}
                                <small>??????</small>
                              </p>
                              <p className="rentPrice ms-1">
                                ???? {v.rentPrice} ??????/??????
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
                );
              })}
              <div className="button_next">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="button_prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
            </div>
          </div>
          <div className="button d-flex justify-content-center">
            <Button className="border-0">
              ?????????????? ?? ???????????? <br /> ????????????????
            </Button>
          </div>

          {/* //brands */}
          <div className="brands">
            <div className="py-5">
              <h1 className="title-section">???????????????????? ????????????</h1>
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
                <Button className="button_bottom text-center">??????</Button>
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
