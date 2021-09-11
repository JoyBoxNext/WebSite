import React from 'react'
import HomeWrapper from '../Wrappers/HomeWrapper';
import Container from '../Containers/Container';
import Header from '../Containers/Header/Header';
import NewProductCards from '../Data/NewProductCards';
import LaptopData from '../Data/LaptopData';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import Footer from '../Containers/Footer/Footer';
import ChooseData from '../Data/ChooseData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { home_images } from '../Data/data';

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation"
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



export default function Home() {

  return (<HomeWrapper>
    <Container>
      <div className="contant">
        <Header />

        {/* Container-1 */}
        <div className="container-1">
          <div className="d-flex flex-wrap">
            <div className="flex1 blue" style={{ width: '25%' }}>
              <div className="text">
                <p className="subtitle m-1">заголовок редактируется <br /> через админ панель</p>
                <h1 className="title mb-3">Удиви своих друзей!</h1>
              </div>
              <div className="mini-content p-0">
                <div className="p-1">
                  <p className="title">PlayStation 5 Digital version</p>
                  <div className="d-flex justify-content-between">
                    <p className="subtitle">редактируется через админ панель</p>
                    <div className="d-block">
                      <p className="oldPrice">18,577,000</p>
                      <div className="priceDec">
                        <div className="price d-flex">от <p className="priceNum">15,845,000</p> сум</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between  w-100">
                  <img src="logo3.png" alt="" />
                  <p className="bottom-text w-auto">Магазин бытовой техники <br /> и электроники</p>
                </div>
              </div>
            </div>
            <div className="flex2 d-flex blue" style={{ width: '40%' }}>
              <h1>16:9</h1>
              <img src="threeMobiles.png" alt="" />
            </div>
            <div className="flex3 orange" style={{ width: '25%' }}>
              <div className="h-100 d-flex align-items-center">
                <h1 className="h2 text-center">Удивляй! Hayron qil!</h1>
              </div>
            </div>
            <div className="blue" style={{ width: '10%' }}></div>
            <div className="orange" style={{ width: '65%' }}></div>
            <div className="flex6 blue" style={{ width: '25%' }}>
              <img className="w-100" src="logo4.png" alt="" />
            </div>
            <div className="orange" style={{ width: '10%' }}></div>
            <div className="flex8 blue py-3" style={{ width: '65%' }}>
              <div className="">
                <Button>Скидки</Button>
                <Button>Подборки</Button>
                <Button>Товар дня</Button>
                <Button>Новинки</Button>
              </div>
            </div>
            <div className="orange" style={{ width: '25%' }}></div>
            <div className="blue" style={{ width: '10%' }}></div>
          </div>
        </div>

        {/* Container-2 */}
        <div className="container-2 mt-5">
          <h2 className="title-section my-2">Удивляйся и удивляй!</h2>
          <div className="cards d-flex">
            {ChooseData.map((v, i) => {
              return (
                <div className="card p-2" key={i}>
                  <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                    <img src={v.img} alt="" />
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
                  <Link href="/"><a><p className=" title fw-bold mt-2">{v.title}</p></a></Link>
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
              )
            })}
          </div>

        </div>

        {/* ProductDay */}
        <div className="productDay mt-5">
          <div className="productDayText">
            <p>Товар дня</p>
            <h1>17.08</h1>
            <p>Ограниченное количество. Предложение действительно только сегодня.</p>
            <div className="yellowCont">
              <p>до конца акции</p>
              <h2>08:03:45</h2>
            </div>
          </div>
          <div className="productBoard">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h2>Samsung side by side-washer</h2>
                <div className="d-flex">
                  <p className="oldPrice mb-0">18,577,000</p>
                  <p className="salePrice my-auto ms-2 mb-0">- 2,732,000</p>
                </div>
                <div className="bgPrice">
                  <p className="price small">от <span className="price">15,845,000</span> сум</p>
                </div>
                <img src="logo3.png" alt="" />
              </div>
              <div className="col-6 d-flex align-items-center p-0 ">
                <img className="productDayWasher w-100" src="productDayWasher.png" alt="Washer" />
              </div>
            </div>
          </div>
        </div>

        {/* ChooseClients */}
        <div className="choose mt-5 border">  
          <h2 className="title-section my-3 px-4">Выбор покупателей</h2>
          <div className="choose-cards swiper_content">
            <Swiper breakpoints={{ 
              "300": {
                "slidesPerView": 1,
                "spaceBetween": 20
              },
              "768": {
                "slidesPerView": 2,
                "spaceBetween": 40
              },
              "1024": {
                "slidesPerView": 4,
                "spaceBetween": 50
              },
              "1920": {
                "slidesPerView": 5,
                "spaceBetween": 50
              }
            }}
              slidesPerView={5} spaceBetween={0} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}
              navigation={true} className="mySwiper">

              {ChooseData.map((v, i) => {
                return <SwiperSlide className=" h-100 p-3" key={i}>
                  <Link href="/productCard"><a>
                    <div className="choose-card p-2">
                      <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                        <img src={v.img} alt="" />
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
                  </a></Link>
                </SwiperSlide>
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
        <div className="container-mi d-flex mt-5 w-100">
          <div className=" d-flex">
            <img className="miicon" src="miicon.png" alt="" />
            <p className="text-white d-flex align-items-center m-2">НОВЫЕ СМАРТ ЧАСЫ! <br />MI BAND 5 GLOBAL</p>
          </div>
          <div className="img">
            <img className="" src="mipicture1.png" alt="" />
            <img className="" src="mipicture2c.png" alt="" />
          </div>
        </div>

        {/* New-products */}
        <div className="new-products border rounded-0 w-100 mt-5">
          <h2 className="title-section my-3">Новинки</h2>
          <div className="new-product-cards d-flex p-2">
            {NewProductCards.map((v, i) => {
              return (<div className="new-product-card p-2" key={i}>
                <img src={v.img} alt="" />
                <Link href="/productCard"><a>
                  <p className=" title fw-bold mt-2">{v.title}</p>
                </a></Link>
                <div className="small d-flex">
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
              )
            })}
          </div>
          <div className="button d-flex justify-content-center my-4">
            <button className="border-0">Перейти в раздел <br /> новинки</button>
          </div>
        </div>

        {/* Laptops */}
        <div className="laptops w-100 mt-5">
          <h2 className="title-section my-3">Топ предложения - Ноутбуки</h2>
          <div className="laptop-cards swiper_content">
            <Swiper slidesPerView={5} spaceBetween={0} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}
              navigation={true} className="mySwiper">

              {LaptopData.map((v, i) => {
                return <SwiperSlide className=" h-100 p-3" key={i}>
                  <Link href="/productCard"><a>
                    <div className=" h-100 p-3" key={i}>
                      <div className="laptop-card p-2" key={i}>
                        <img className="w-100" src={v.img} alt="" />
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
                  </a></Link>
                </SwiperSlide>
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


        <div className="brands">
          <div className="py-5">
            <h1 className="title-section">Популярные бренды</h1>
            <div className="row justify-content-center align-items-center">
              {home_images.map((value, index) => {
                return (
                  <div className={`col-xl-2 ${value.className}`} key={index} >
                    <img className="home_photo" src={value.img} alt="photo" />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <Button className="button_bottom text-center">ЕЩЕ</Button>
            </div>
          </div>
        </div>


        <div className="my-2">
          <div className="border_ my-4"></div>
          <div className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              className="icon me-3"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="icon me-3"
              icon={faTelegram}
            />
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  </HomeWrapper >
  )
}
