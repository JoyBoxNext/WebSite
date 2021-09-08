import HomeWrapper from '../Wrappers/HomeWrapper';
import Container from '../Containers/Container';
import Header from '../Containers/Header/Header';
import NewProductCards from '../Data/NewProductCards';
import LaptopData from '../Data/LaptopData';
import { Button } from '@material-ui/core';

export default function Home() {
  return (<HomeWrapper>
    <Container>
      <div className="contant">
        <Header />
        {/* <div className="container-grid">
          <div className="item  d-flex item_1 blue">
            <div className="miniContainer">
              <div className="num num1">
                <p className="p-0 m-0">заголовок редактируется через админ панель</p>
                <p className="udivi">Удиви своих друзей!</p>
              </div>
              <div className="num num2">
                <p>PlayStation 5 Digital version</p>
                <p>редактируетсячерез админ панель</p>
                <p className="polPrice d-flex justify-content-end">18,577,000</p>
                <div className="Price d-flex justify-content-end">
                  <p>от15,845,000</p>
                </div>
                <p className="d-flex justify-content-end">Магазин бытовой техники и электроники</p>
                <img src="logo3.png" alt="" />
              </div>
              <div className="num num3">
                <img className="threeMobiles" src="threeMobiles.svg" alt="" />
                <p className="udivi threeMobiles">16:9</p>
              </div>
            </div>
          </div>
          <div className="item item_2 orange px-0 d-flex align-items-center">
            <p className="hayron">Удивляй! Hayron qil!</p>
          </div>
          <div className="item item_3 blue">3</div>
          <div className="item item_4 orange">4</div>
          <div className="item item_5 blue p-0 m-0">
            <img src="logo2.svg" alt="" />
          </div>
          <div className="item item_6 orange">6</div>
          <div className="item item_7 blue">
            <div className="">
              <button className="bg-transparent text-white border-0 border-start border-dark">Скидки</button>
              <button className="bg-transparent text-white border-0 border-start border-dark">Подборки</button>
              <button className="bg-transparent text-white border-0 border-start border-dark">Товар дня</button>
              <button className="bg-transparent text-white border-0 border-start border-dark">Новинки</button>

            </div>
          </div>
          <div className="item item_8 orange">8</div>
          <div className="item item_9 blue">9</div>
        </div> */}

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
                <p className="   fw-bold mt-2">{v.title}</p>
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
                  <div className="bag rounded-circle my-auto p-auto p-2  d-flex align-items-center">
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
        <div className="laptops border rounded w-100 mt-5">
          <h2 className="title-section my-3">Топ предложения - Ноутбуки</h2>
          <div className="laptop-cards d-flex">
            {LaptopData.map((v, i) => {
              return (<div className="new-product-card p-2" key={i}>
                <img src={v.img} alt="" />
                <p className="   fw-bold mt-2">{v.title}</p>
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
                  <div className="bag rounded-circle my-auto p-auto p-2  d-flex align-items-center">
                    <img src="bag.svg" alt="" />
                  </div>
                </div>
              </div>

              )
            })}
            <div className="laptop-card">
              <img src="laptop.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </HomeWrapper >
  )
}
