import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../Containers/Header/Header";
import Footer from "../Containers/Footer/Footer";
import ProductWrapper from "../Wrappers/ProductWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import Link from "next/link";
import { bigCategores, phones, rightSide } from "../Data/data";
import { bottomText } from "../Data/ProductData";
import Container from "../Containers/Container";
import Slider from "@material-ui/core/Slider";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { useRouter } from "next/router";
import datacategory from "../Data/index";
import dataLeft from "../Data/indexLeft";

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
  const [value, setValue] = React.useState(0);
  const [valueSlider, setValueSlider] = React.useState([0, 45]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSliderChange = (event, newvalueSlider) => {
    setValueSlider(newvalueSlider);
  };

  const [show, setShow] = useState(true);
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

  const hide = () => {
    setShow(!show);
  };

  const hide2 = () => {
    setShow2(!show2);
  };
  //============================================================================================================================
  //phonesData
  const phoneData = () => {
    const action = { type: t.PHONES_DATA, payload: phones };
    dispatch(action);
  };
  phoneData();

  const data = useSelector((state) => state.BooksReducer.filterdata);

  const saveProduct = (index) => {
    data[index].save = !data[index].save;
    const action = { type: "A", payload: index };
    dispatch(action);
  };

  //============================================================================================================================
  //rightSide
  const rightData = () => {
    const action = { type: t.RIGHT_DATA, payload: rightSide };
    dispatch(action);
  };
  rightData();

  const rightSelectorData = useSelector(
    (state) => state.BooksReducer.rightFilter
  );

  const saveRightProduct = (index) => {
    rightSelectorData[index].save = !rightSelectorData[index].save;
    const action = { type: "A", payload: index };
    dispatch(action);
    console.log(rightSelectorData[index].save, index);
  };

  // =============
  const router = useRouter();
  const category = router.query.product;
  const datas = datacategory[category];
  const categories = dataLeft[category];
  // const datasend = () => {
  //   const action = { type: "SEND", payload: datas };
  //   dispatch(action);
  // }
  // useEffect(() => {
  //   datasend();
  // }, []);
  // console.log(datacategory);

  const [tabPanel, setTabPanel] = useState(false);

  const tabApp = (id) => {
    setTabPanel(id);
  };

  return (
    <>
      <Container>
        <Header />
      </Container>
      <ProductWrapper>
        <div className="d-flex D_flex">
          <div className="LeftSide">
            <Zoom>
              <div className="container mt-3">
                <div className={classes.root}>
                  <div className="mt-4" position="static">
                    <div className="d-flex align-items-center">
                      <div className="btn_orange" onClick={() => tabApp(0)}>
                        Полная цена{" "}
                      </div>
                      <div className="btn_light" onClick={() => tabApp(1)}>
                        Цена в месяц{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-2 ${tabPanel == 0 ? "d-block" : "d-none"}`}
                  >
                    <div className="">
                      <p className="mb-1 my-3 fw-bold">Цена</p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center mt-3">
                          <p className="mb-0 me-2 subtitle">От</p>
                          <input
                            type="text"
                            value="3.000.000"
                            className="input rounded"
                          />
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          <p className="mb-0 mx-2 subtitle">До</p>
                          <input
                            type="text"
                            value="3.000.000"
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
                        {bigCategores.map((value, index) => {
                          return (
                            <div
                              className="col-sm-6 col-lg-12 col-xl-12 col-xxl-12"
                              key={index}
                            >
                              <div className="d-flex mt-4">
                                <p className="mb-0 subtitle me-4 mb-3">
                                  {value.title}
                                </p>
                                {show ? (
                                  <FontAwesomeIcon
                                    onClick={hide}
                                    className={`mt-1 ms-5 icon`}
                                    icon={value.icon}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    onClick={hide}
                                    className={`mt-1 ms-5 icon`}
                                    icon={faAngleDown}
                                  />
                                )}
                              </div>
                              {value.category.map((value, index) => {
                                return (
                                  <div
                                    className={`d-flex align-items-center ${show ? "" : "d-none"
                                      }`}
                                    key={index}
                                  >
                                    <button
                                      onClick={() => toggle(index)}
                                      className={` box me-2 ${checked == index ? "active" : ""
                                        }`}
                                    ></button>
                                    <p className="my-1 subtitle">
                                      {value.subtitle}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}

                        {categories?.map((value, index) => {
                          return (
                            <div className="col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12" key={index}>
                              <div className="d-flex justify-content-between mt-4">
                                <p className="subtitle my-3">
                                  {value.name.title}
                                </p>
                                {show2 ? (
                                  <FontAwesomeIcon
                                    onClick={hide2}
                                    className={`mt-3 mx-3 icon`}
                                    icon={value.name.icon}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    onClick={hide2}
                                    className={`mt-3 mx-3 icon`}
                                    icon={faAngleDown}
                                  />
                                )}
                              </div>
                              {value.name.category.map((value, index) => {
                                return (
                                  <div
                                    className={`d-flex justify-content-between ${show2 ? "" : "d-none"
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
                  <div
                    className={`px-2 ${tabPanel == 1 ? "d-block" : "d-none"}`}
                  >
                    <div className="">
                      <p className="mb-1 my-3 fw-bold">Цена</p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center mt-3">
                          <p className="mb-0 me-2 subtitle">От</p>
                          <input
                            type="text"
                            value="2.000.000"
                            className="input rounded"
                          />
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          <p className="mb-0 mx-2 subtitle">До</p>
                          <input
                            type="text"
                            value="2.000.000"
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
                        {bigCategores.map((value, index) => {
                          return (
                            <div
                              className="col-sm-6 col-lg-12 col-xl-12 col-xxl-12"
                              key={index}
                            >
                              <div className="d-flex mt-4">
                                <p className="mb-0 subtitle me-4 mb-3">
                                  {value.title}
                                </p>
                                {show ? (
                                  <FontAwesomeIcon
                                    onClick={hide}
                                    className={`mt-1 ms-5 icon`}
                                    icon={value.icon}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    onClick={hide}
                                    className={`mt-1 ms-5 icon`}
                                    icon={faAngleDown}
                                  />
                                )}
                              </div>
                              {value.category.map((value, index) => {
                                return (
                                  <div
                                    className={`d-flex align-items-center ${show ? "" : "d-none"
                                      }`}
                                    key={index}
                                  >
                                    <button
                                      onClick={() => toggle(index)}
                                      className={` box me-2 ${checked == index ? "active" : ""
                                        }`}
                                    ></button>
                                    <p className="my-1 subtitle">
                                      {value.subtitle}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}

                        {categories?.map((value, index) => {
                          return (
                            <div
                              className="col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12"
                              key={index}
                            >
                              <div className="d-flex justify-content-between mt-4">
                                <p className="subtitle my-3">
                                  {value.name.title}
                                </p>
                                {show2 ? (
                                  <FontAwesomeIcon
                                    onClick={hide2}
                                    className={`mt-3 mx-3 icon`}
                                    icon={value.name.icon}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    onClick={hide2}
                                    className={`mt-3 mx-3 icon`}
                                    icon={faAngleDown}
                                  />
                                )}
                              </div>
                              {value.name.category.map((value, index) => {
                                return (
                                  <div
                                    className={`d-flex justify-content-between ${show2 ? "" : "d-none"
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
            </Zoom>
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
              <Fade left>
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="title my-4">Удивляйся и удивляй!</h1>
                </div>
              </Fade>
              <div className="row justify-content-center">
                {datas?.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="col-10 col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 px-1 mb-3 card_product position-relative"
                    >
                      <div className="cards_border mb-4">
                        <img
                          className="skidka"
                          src="skidka.jpg"
                          alt="photo"
                        />
                        <div className="px-3">
                          <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                            <Link href="/productCard">
                              <a>
                                <img
                                  className="me-3 phone_photo"
                                  src={value.img}
                                  alt="photo"
                                />
                              </a>
                            </Link>
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
                        </div>
                        <h5 className="fw-bold my-2 subtitle">
                          {value.title}
                        </h5>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 bg_success aksiya__">
                            {value.aksiya_}
                          </p>
                          <p className="mb-0 text_secondary aksiya ms-4">
                            {value.aksiya}
                          </p>
                        </div>
                        <h4 className="fw-bold price mb-0 mt-2">
                          <span className="big_text mb-0">
                            {value.big_price}
                          </span>
                          {value.price}
                        </h4>
                        <div className="d-flex justify-content-between align-items-center ">
                          <p className="mb-0 desc">{value.desc}</p>
                          <button
                            onClick={() => saveProduct(index)}
                            className="border-0 bag"
                          >
                            <img
                              className="w-75 mb-2"
                              src="bag.svg"
                              alt="photo"
                            />
                          </button>
                        </div>
                        <p className={"descripton px-2"}>
                          Экран (6.5{`"`}, Super AMOLED, 2400x1080)/ Qualcomm
                          Snapdragon 720G (2 x 2.3 ГГц + 6 x 1.8 ГГц)/
                          основная квадро-камера: 64 Мп + 12 Мп + 5 Мп + 5 Мп,
                          фронтальная 32 Мп/ RAM 4 ГБ/ 128 ГБ встроенной
                          памяти + microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/
                          ГЛОНАСС/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/
                          Android 11.0 (One UI)/ 4500 мА*ч
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="my-2 bottom_text">
                  <h1 className="text my-4">
                    Часто задаваемые вопросы про Смартфоны
                  </h1>
                  <ul>
                    {bottomText.map((value, index) => {
                      return (
                        <li className="li p-2" key={index}>
                          <img className="me-2" src={value.img} alt="photo" />
                          {value.title}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-4">
                    <div className="border_"></div>
                    <div className="d-flex justify-content-center align-items-center  my-4">
                      <Link href="https://www.instagram.com/?hl=ru">
                        <a>
                          <img
                            className="icon me-3 fs-3"
                            src="instagram.png"
                            alt="instagram"
                          />
                        </a>
                      </Link>
                      <Link href="https://web.telegram.org">
                        <a>
                          <img
                            className="icon me-3 fs-3"
                            src="telegram.png"
                            alt="telegram"
                          />
                        </a>
                      </Link>
                      <Link href="https://www.facebook.com">
                        <a>
                          <img
                            className="icon fs-3"
                            src="facebook.png"
                            alt="facebook"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide mt-5 px-2">
            <Fade bottom cascade>
              <div className="row w-100 mt-5">
                {rightSelectorData.map((value, index) => {
                  return (
                    <div
                      className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12 mb-4"
                      key={index}
                    >
                      <hr className="d-none d-xl-flex" />
                      <div className="right_flex d-xxl-flex">
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            className="me-3 phone"
                            src={value.img}
                            alt="photo"
                          />
                        </div>
                        <div>
                          <h5 className="fw-bold my-2 subtitle">
                            {value.title}
                          </h5>
                          <div className="d-flex justify-content-between">
                            <p className="mb-0 bg_success aksiya__">
                              {value.aksiya_}
                            </p>
                            <p className="mb-0 text_secondary aksiya">
                              {value.aksiya}
                            </p>
                          </div>
                          <h4 className="fw-bold price mb-0">
                            <span className="big_text mb-0">
                              {value.big_price}
                            </span>
                            {value.price}
                          </h4>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0 desc">{value.desc}</p>
                            <button
                              onClick={() => saveProduct(index)}
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
                    </div>
                  );
                })}
              </div>
            </Fade>
          </div>
          <div className="my-2 d-none bottom_block_text  d-flex justify-content-center align-items-center m-auto">
            <Zoom bottom>
              <h1 className="text my-4 ">
                Часто задаваемые вопросы про Смартфоны
              </h1>
            </Zoom>
            <ul className="m-auto">
              {bottomText.map((value, index) => {
                return (
                  <li className="li" key={index}>
                    <img className="me-1" src={value.img} alt="photo" />
                    {value.title}
                  </li>
                );
              })}
            </ul>
            <Fade top>
              <div className="mt-4">
                <div className="border_"></div>
                <div className="d-flex justify-content-center align-items-center  my-4">
                  <Link href="https://www.instagram.com/?hl=ru">
                    <a>
                      <img
                        className="icon me-3 fs-3"
                        src="instagram.png"
                        alt="instagram"
                      />
                    </a>
                  </Link>
                  <Link href="https://web.telegram.org">
                    <a>
                      <img
                        className="icon me-3 fs-3"
                        src="telegram.png"
                        alt="telegram"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com">
                    <a>
                      <img
                        className="icon fs-3"
                        src="facebook.png"
                        alt="facebook"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </ProductWrapper>
      <Fade bottom>
        <Container>
          <Footer />
        </Container>
      </Fade>
    </>
  );
};

{
}

export default Category;
