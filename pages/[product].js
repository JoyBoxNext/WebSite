import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Header from "../Containers/Header/Header";
import Footer from "../Containers/Footer/Footer";
import ProductWrapper from "../Wrappers/ProductWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import Link from "next/link";
import { rightSide, Slider_bottom } from "../Data/data";
import Container from "../Containers/Container";
import Slider from "@material-ui/core/Slider";
import { useRouter } from "next/router";
import datacategory from "../Data/index";
import dataLeft from "../Data/indexLeft";
import Messeger from "../Components/messeger";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rootSlider: {
    width: 300,
  },
}));

function valuetext(valueSlider) {
  return `${valueSlider}°C`;
}
// Category

const Category = () => {
  const classes = useStyles();
  const [valueSlider, setValueSlider] = React.useState([0, 45]);

  const handleSliderChange = (event, newvalueSlider) => {
    setValueSlider(newvalueSlider);
  };

  const [show2, setShow2] = useState(true);
  const checked = useSelector((state) => state.BooksReducer.chekbox);

  const toggle = (i) => {
    if (checked == -1) {
      const action = { type: t.CHEKED, payload: i };
      dispatch(action);
    } else if (checked > -1) {
      const action = { type: t.CHEKED, payload: i };
      dispatch(action);
    }
  };

  const hide2 = () => {
    setShow2(!show2);
  };

  //============================================================================================================================
  //rightSide
  const rightData = () => {
    const action = { type: "", payload: rightSide };
    dispatch(action);
  };
  rightData();

  const [tabPanel, setTabPanel] = useState(false);
  const tabApp = (id) => {
    setTabPanel(id);
  };
  // =============
  const router = useRouter();
  const category = router.query.product;
  const datas = datacategory[category];
  const categories = dataLeft[category];
  // console.log(datas?.[0].title);
  const datasend = () => {
    const action = { type: t.SEND, payload: datas };
    dispatch(action);
  };
  useEffect(() => {
    datasend();
  }, [datas, datas?.length, datas?.[0].title]);
  datasend();

  const data = useSelector((state) => state.BooksReducer.newFilter);

  //saves
  const saveProduct = (index) => {
    let a = datas?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  const saveRightProduct = (index) => {
    let a = rightSide?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  //masala

  return (
    <>
      <Container>
        <Header />
      </Container>
      <ProductWrapper>
        <div className="d-flex D_flex">
          <div className="LeftSide">
            <div className="container mt-3">
              <div className="left_flex">
                <div className="mt-4" position="static">
                  <div className="d-flex align-items-center">
                    <div
                      className={`btn_light ${
                        tabPanel ? "" : "active b_radius"
                      }`}
                      onClick={() => tabApp(0)}
                    >
                      Полная цена
                    </div>
                    <div
                      className={`btn_light ${
                        tabPanel ? "active b_radius2" : ""
                      }`}
                      onClick={() => tabApp(1)}
                    >
                      Цена в месяц
                    </div>
                  </div>
                </div>
                <div className={`px-2 ${tabPanel == 0 ? "d-block" : "d-none"}`}>
                  <div className="">
                    <p className="mb-1 my-3 fw-bold">Цена</p>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center mt-3">
                        <p className="mb-0 me-2 subtitle">От</p>
                        <input
                          type="text"
                          defaultValue="2.000.000"
                          className="input rounded"
                        />
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <p className="mb-0 mx-2 subtitle">До</p>
                        <input
                          type="text"
                          defaultValue="2.000.000"
                          className="input rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={classes.root}>
                      <Slider
                        className="my-4"
                        value={valueSlider}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                      />
                    </div>
                    <div className="row w-100">
                      {categories?.map((value, index) => {
                        return (
                          <div
                            className="col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12"
                            key={index}
                          >
                            <div className="d-flex justify-content-between mt-4">
                              <p
                                className={`subtitle my-3 ${
                                  show2 ? "" : value.name.className
                                }`}
                              >
                                {value.name.title}
                              </p>
                              {
                                <FontAwesomeIcon
                                  onClick={hide2}
                                  className={`mt-3 mx-3 icon`}
                                  icon={
                                    show2
                                      ? value.name.iconUp
                                      : value.name.iconDown
                                  }
                                />
                              }
                            </div>
                            {value.name.category.map((value, index) => {
                              return (
                                <div
                                  className={`d-flex justify-content-between ${
                                    show2 ? "" : "d-none"
                                  }`}
                                  key={index}
                                >
                                  <div className="d-flex align-items-center mt-2">
                                    <input
                                      type="checkbox"
                                      className="myinput"
                                    />
                                    <p className="mb-0 subtitle ms-2">
                                      {value.title}
                                    </p>
                                  </div>
                                  <div className="">
                                    <p className="my-1 subtitle numbers me-3">
                                      {value.subtitle}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Sidebar">
            <div className="container ">
              <h6 className="text-center mt-4 d-flex justify-content-center align-items-center">
                Сортировать по:{" "}
                <span className="ms-2" style={{ cursor: "pointer" }}>
                  Цене |
                </span>
                <span style={{ cursor: "pointer" }} className="pro_orange ms-2">
                  Цене
                </span>
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="title my-4">Удивляйся и удивляй!</h1>
              </div>
              <div className="row justify-content-center">
                {data?.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={`col-10 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 px-1 mb-3 d-flex flex-wrap card_product position-relative ${value.className}`}
                    >
                      <div className="cards_border mb-4">
                        <img className="skidka" src="skidka.jpg" alt="photo" />
                        <div className="px-2">
                          <div className="d-flex justify-content-center align-items-center mt-2">
                            <Link href="/productCard">
                              <a>
                                <img
                                  className="phone_photo mt-1"
                                  src={value.img}
                                  alt="photo"
                                />
                              </a>
                            </Link>
                            <div className="colorBoxes flex-column">
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
                        </div>
                        <h5 className="fw-bold subtitle datas_subtitle p-2 mb-0 pb-0">
                          {value.title}
                        </h5>
                        <div className="d-flex align-items-center ms-2">
                          <p className="mb-0 bg_success aksiya__">
                            {value.aksiya_}
                          </p>
                          <p className="mb-0 text_secondary aksiya ms-4">
                            {value.aksiya}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center ">
                          <div>
                            <h4 className="fw-bold mb-0">
                              <span className="big_text mb-0 ms-1">
                                {value.big_price}
                              </span>
                              <span className="small_price">{value.price}</span>
                            </h4>
                            <p className="mb-0 desc ms-2 mt-1 mb-2">
                              {value.desc}
                            </p>
                          </div>
                          <button
                            onClick={() => saveProduct(index)}
                            className="border-0 save_btn"
                          >
                            <img
                              className="w-75 mb-2 save_product"
                              src="save_orange.png"
                              alt="photo"
                            />
                          </button>
                        </div>
                        <p className={"descripton px-2"}>
                          Экран (6.5{`"`}, Super AMOLED, 2400x1080)/ Qualcomm
                          Snapdragon 720G (2 x 2.3 ГГц + 6 x 1.8 ГГц)/ основная
                          квадро-камера: 64 Мп + 12 Мп + 5 Мп + 5 Мп,
                          фронтальная 32 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти
                          + microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/ ГЛОНАСС/
                          BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 11.0
                          (One UI)/ 4500 мА*ч
                        </p>
                      </div>
                    </div>
                  );
                })}
                {data?.length === 0 ? (
                  <h3 className="fw-bold text-center text-secondary">
                    Product not found
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* ============== */}
            <div className="sidebar_boxes d-flex justify-content-center align-items-center">
              <p className="small_boxes">1</p>
              <p className="small_boxes">2</p>
              <p className="small_boxes">3</p>
              <p className="small_boxes">4</p>
            </div>
            <p className="avto_text">автопродление страницы</p>
            <div>
              {Slider_bottom.map((value, index) => {
                return (
                  <div className="sidebar_bottom" key={index}>
                    <h4 className="sidebarBottom_title fw-bold mt-4 mb-5">
                      {value.text}
                    </h4>
                    {value.titles.map((value, index) => {
                      return (
                        <div className="d-flex" key={index}>
                          <img
                            className="sidebarBottom_photo me-2"
                            src={value.img}
                            alt="finger"
                          />
                          <p className="sidebarBottom_subtitle fw-bold">
                            {value.subtitle}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rightSide mt-5 px-2">
            <div className="row w-100 mt-5 m-0">
              <p className="top mb-0 mt-3">ТОП-5</p>
              {rightSide.map((value, index) => {
                return (
                  <div
                    className={`col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12 mb-4 p-0 m-0 ${value.className}`}
                    key={index}
                  >
                    {/* <hr className="d-none d-xl-flex" /> */}
                    <Link href="/productCard">
                      <a>
                        <div className="right_flex d-flex">
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              className="me-2 phone"
                              src={value.img}
                              alt="photo"
                            />
                          </div>
                          <div>
                            <h5 className="fw-bold mt-3 subtitle">
                              {value.title}
                            </h5>
                            <div className="d-flex">
                              <p className="mb-0 bg_success aksiya__ me-2">
                                {value.aksiya_}
                              </p>
                              <p className="mb-0 text_secondary aksiya ms-2">
                                {value.aksiya}
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <h4 className="fw-bold price mb-0">
                                  <span className="big_text mb-0">
                                    {value.big_price}
                                  </span>
                                  {value.price}
                                </h4>
                                <p className="mb-0 desc">{value.desc}</p>
                              </div>
                              <button
                                onClick={() => saveRightProduct(index)}
                                className="border-0 bag2 p-0"
                                style={{
                                  margin: "10px 0 0 10px !important",
                                }}
                              >
                                <img
                                  className="w-75 mt-0"
                                  src="bag.svg"
                                  alt="photo"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Messeger />
      </ProductWrapper>
      <Footer />
    </>
  );
};

{
}

export default Category;
