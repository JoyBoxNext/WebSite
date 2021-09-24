import Link from "next/link";
import React, { useState } from "react";
import { baraxolkaPhones } from "../Data/data";
import Container from "./../Containers/Container";
import Header from "./../Containers/Header/Header";
import BaraxollaWrapper from "../Wrappers/BaraxolkaWrapper";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import Footer from "../Containers/Footer/Footer";
import Messeger from "../Components/messeger";

const Product = () => {
  const [tabPanel, setTabPanel] = useState(false);
  const tabApp = (id) => {
    setTabPanel(id);
  };

  const baraxolkaSaveDatas = (index) => {
    let a = baraxolkaPhones?.[index];
    const action = { type: t.SAVE_PRODUCT, payload: a };
    dispatch(action);
  };

  return (
    <>
      <Container>
        <Header />
        <BaraxollaWrapper>
          <div className="d-flex">
            <div className="Sidebar">
              <div className="">
                  <div className="baraxolka_padding">
                    <h1 className="title">Барахолка!</h1>
                    <p className="subtitle">
                      Сервис объединяет тысячи частных объявлений и коммерческих
                      предложений от организаций. Легко ориентироваться в
                      обширном информационном пространстве помогают удобный
                      интерфейс и эффективная поисковая система Для просмотра и
                      поиска объявлений регистрация не нужна.
                    </p>

                    <ul className="subtitle">
                      Часто задаваемые вопросы про Смартфоныs
                      <li className="subtitle">— покупателя;</li>
                      <li className="subtitle">— клиента</li>
                      <li className="subtitle">— поставщика услуги;</li>
                      <li className="subtitle">— товар.</li>
                    </ul>
                  </div>
                <div className="d-grid d-md-flex justify-content-center align-items-center">
                  <div
                    className={`btn_bx mx-2 ${tabPanel ? "" : "active"}`}
                    onClick={() => tabApp(0)}
                  >
                    Полная цена
                  </div>
                  <div
                    className={`btn_bx mx-2 my-3 ${tabPanel ? "active" : ""}`}
                    onClick={() => tabApp(1)}
                  >
                    По возрастанию
                  </div>
                  <div className={`btn_bx3 mx-2 ${tabPanel ? "" : ""}`}>
                    По убыванию
                  </div>
                </div>
                <div>
                  <div className={`${tabPanel == 0 ? "d-block" : "d-none"}`}>
                    <div className="row justify-content-center mt-4">
                      {baraxolkaPhones?.map((value, index) => {
                        return (
                          <div
                            className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-3 pt-0 p-0 px-2 baraxolka_product position-relative"
                            key={index}
                          >
                            <Link href="/productCard">
                              <a>
                                <div className="cards_border">
                                  <img src="skidka.svg" alt="photo" />
                                  <div className="px-3">
                                    <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                                      <img
                                        className="baraxolka_photo w-100"
                                        src={value.img}
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
                                    <h5 className="fw-bold my-2 text model fw-bold">
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <p className="mb-0 desc">{value.desc}</p>
                                      <button
                                        onClick={() =>
                                          baraxolkaSaveDatas(index)
                                        }
                                        className="border-0 bag m-0 mb-2"
                                      >
                                        <img
                                          className="w-75 mb-2"
                                          src="bag.svg"
                                          alt="photo"
                                        />
                                      </button>
                                    </div>
                                    <div className="colorBoxes colorBoxes2 d-flex mb-5">
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
                                    <p className={"descripton px-1 mt-2 mb-0"}>
                                      Экран (6.5{`"`}, Super AMOLED, 2400x1080)/
                                      Qualcomm Snapdragon 720G (2 x 2.3 ГГц + 6
                                      x 1.8 ГГц)/ основная квадро-камера: 64 Мп
                                      + 12 Мп + 5 Мп + 5 Мп, фронтальная 32 Мп/
                                      RAM 4 ГБ/ 128 ГБ встроенной памяти +
                                      microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/
                                      ГЛОНАСС/ BDS/ поддержка 2х SIM-карт
                                      (Nano-SIM)/ Android 11.0 (One UI)/ 4500
                                      мА*ч
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                      <Messeger />
                    </div>
                  </div>

                  <div className={`${tabPanel == 1 ? "d-block" : "d-none"}`}>
                    <div className="row justify-content-center mt-4">
                      {baraxolkaPhones?.map((value, index) => {
                        return (
                          <div
                            className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-3 pt-0 p-0 px-2 baraxolka_product position-relative"
                            key={index}
                          >
                            <Link href="/productCard">
                              <a>
                                <div className="cards_border">
                                  <img src="skidka.jpg" alt="photo" />
                                  <div className="px-3">
                                    <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                                      <img
                                        className="baraxolka_photo w-100"
                                        src={value.img}
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
                                    <h5 className="fw-bold my-2 text model fw-bold">
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <p className="mb-0 desc">{value.desc}</p>
                                      <button
                                        // onClick={() => savebaraxolka(index)}
                                        className="border-0 bag m-0 mb-2"
                                      >
                                        <img
                                          className="w-75 mb-2"
                                          src="bag.svg"
                                          alt="photo"
                                        />
                                      </button>
                                    </div>

                                    <p className={"descripton px-2 mt-2"}>
                                      Экран (6.5{`"`}, Super AMOLED, 2400x1080)/
                                      Qualcomm Snapdragon 720G (2 x 2.3 ГГц + 6
                                      x 1.8 ГГц)/ основная квадро-камера: 64 Мп
                                      + 12 Мп + 5 Мп + 5 Мп, фронтальная 32 Мп/
                                      RAM 4 ГБ/ 128 ГБ встроенной памяти +
                                      microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/
                                      ГЛОНАСС/ BDS/ поддержка 2х SIM-карт
                                      (Nano-SIM)/ Android 11.0 (One UI)/ 4500
                                      мА*ч
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                      <Messeger />
                    </div>
                  </div>

                  <div className={`${tabPanel == 2 ? "d-block" : "d-none"}`}>
                    <div className="row justify-content-center mt-4">
                      {baraxolkaPhones?.map((value, index) => {
                        return (
                          <div
                            className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-3 pt-0 p-0 px-2 baraxolka_product position-relative"
                            key={index}
                          >
                            <Link href="/productCard">
                              <a>
                                <div className="cards_border">
                                  <img src="skidka.jpg" alt="photo" />
                                  <div className="px-3">
                                    <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                                      <img
                                        className="baraxolka_photo w-100"
                                        src={value.img}
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
                                    <h5 className="fw-bold my-2 text model fw-bold">
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <p className="mb-0 desc">{value.desc}</p>
                                      <button
                                        // onClick={() => savebaraxolka(index)}
                                        className="border-0 bag m-0 mb-2"
                                      >
                                        <img
                                          className="w-75 mb-2"
                                          src="bag.svg"
                                          alt="photo"
                                        />
                                      </button>
                                    </div>
                                    <p className={"descripton px-2 mt-2"}>
                                      Экран (6.5{`"`}, Super AMOLED, 2400x1080)/
                                      Qualcomm Snapdragon 720G (2 x 2.3 ГГц + 6
                                      x 1.8 ГГц)/ основная квадро-камера: 64 Мп
                                      + 12 Мп + 5 Мп + 5 Мп, фронтальная 32 Мп/
                                      RAM 4 ГБ/ 128 ГБ встроенной памяти +
                                      microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/
                                      ГЛОНАСС/ BDS/ поддержка 2х SIM-карт
                                      (Nano-SIM)/ Android 11.0 (One UI)/ 4500
                                      мА*ч
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                      <Messeger />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaraxollaWrapper>
      </Container>
      <Footer />
    </>
  );
};

{
}

export default Product;
