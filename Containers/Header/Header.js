import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as t from "../../redux/Types";
import Link from "next/link";
import { useSelector } from "react-redux";
import { links, pages } from "../../Data/HeaderData";
import HeaderWrapper from "./HeaderWrapper";
import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { dispatch } from "../../redux/Store";
import { useRouter } from "next/dist/client/router";
import Badge from "@material-ui/core/Badge";
import ModalProduct from "../../Components/ModalProduct";

const Header = () => {
  const [openSave, setOpenSave] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //====================================================================================================
  //===phonesData===
  const data = useSelector((state) => state.BooksReducer.phonesdata);
  const array = data?.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  //===baraxolkaData===
  const baraxolkaData = useSelector(
    (state) => state.BooksReducer.baraxolkaData
  );
  const arraybaraxolka = baraxolkaData?.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  //===rightData===
  const rightDatas = useSelector((state) => state.BooksReducer.rightData);
  const arrayRightSide = rightDatas?.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  //===homeData===
  const homeDatas = useSelector((state) => state.BooksReducer.homeData);
  const arrayHomeDatas = homeDatas?.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  //===chooseData===
  const ChooseData = useSelector((state) => state.BooksReducer.chooseData);
  const arrayChooseData = ChooseData.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  //===newsData===
  const newsData = useSelector((state) => state.BooksReducer.newsData);
  const arrayNewsData = newsData.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  //===notebook===
  const noteBook = useSelector((state) => state.BooksReducer.notebookData);
  const arrayNoteBook = noteBook.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  //=========================================================================================================

  const datas = () => {
    const action = {
      type: t.BOOKS_DATA,
      payload: array,
      payload2: arraybaraxolka,
      payload3: arrayRightSide,
      payload4: arrayHomeDatas,
      payload5: arrayChooseData,
      payload6: arrayNewsData,
      payload7: arrayNoteBook,
    };
    dispatch(action);
  };

  useEffect(() => {
    datas();
  }, [
    searchTerm,
    array.length,
    arraybaraxolka.length,
    arrayRightSide.length,
    arrayHomeDatas.length,
    arrayChooseData.length,
    arrayNewsData.length,
    arrayNoteBook.length,
  ]);

  const produktdata = useSelector((state) => state.BooksReducer.filterdata);

  const newsFilterData = useSelector((state) => state.BooksReducer.newsFilter);

  const baraxolkaFilterdata = useSelector(
    (state) => state.BooksReducer.baraxolkaFilterdata
  );
  const rightFilterData = useSelector(
    (state) => state.BooksReducer.rightFilter
  );

  const homeProductFilterData = useSelector(
    (state) => state.BooksReducer.homeFilter
  );

  const chooseFilterData = useSelector(
    (state) => state.BooksReducer.chooseFilter
  );

  const notebookFilter = useSelector(
    (state) => state.BooksReducer.notebookFilter
  );

  const saveProduct = () => {
    setOpenSave(!openSave);
    const data = produktdata.filter((v) => v.save);
    const baraxolkaFilterdatasave = baraxolkaFilterdata.filter((v) => v.save);
    const rightFilterDataSave = rightFilterData.filter((v) => v.save);
    const homeProductFilterDataSave = homeProductFilterData.filter(
      (v) => v.save
    );
    const chooseFilterDataSave = chooseFilterData.filter((v) => v.save);
    const newsFilterDataSave = newsFilterData.filter((v) => v.save);
    const notebookFilterSave = notebookFilter.filter((v) => v.save);

    const action = {
      type: t.SAVE_PRODUCT,
      payload: data,
      payload2: baraxolkaFilterdatasave,
      payload3: rightFilterDataSave,
      payload4: homeProductFilterDataSave,
      payload5: chooseFilterDataSave,
      payload6: newsFilterDataSave,
      payload7: notebookFilterSave,
    };
    dispatch(action);
  };

  const savedData = useSelector((state) => state.BooksReducer.saveProduct);

  const baraxolkaSaveProduct = useSelector(
    (state) => state.BooksReducer.baraxolkaSaveProduct
  );

  const rightSaveProduct = useSelector(
    (state) => state.BooksReducer.rightSideProduct
  );

  const homeSaveProduct = useSelector(
    (state) => state.BooksReducer.homeProduct
  );

  const chooseSaveProduct = useSelector(
    (state) => state.BooksReducer.chooseProduct
  );

  const newsSaveProduct = useSelector(
    (state) => state.BooksReducer.newsProduct
  );

  const notebookSaveProduct = useSelector(
    (state) => state.BooksReducer.notebookProduct
  );

  const indexdata = useSelector((state) => state.BooksReducer.index);

  const datalfilter = savedData.filter((v) => v.save);
  const [indexs, setindexs] = useState(-1);
  useEffect(() => {
    saveProduct();
  }, [
    indexdata,
    savedData.length,
    indexs,
    datalfilter.length,
    baraxolkaSaveProduct.length,
    rightSaveProduct.length,
    homeSaveProduct.length,
    chooseSaveProduct.length,
    newsSaveProduct.length,
    notebookSaveProduct.length,
  ]);

  const deleteProduct = (index) => {
    setindexs(index);
    datalfilter[index].save = !datalfilter[index].save;
  };
  const deleteProduct2 = (index) => {
    setindexs(index);
    baraxolkaSaveProduct[index].save = !baraxolkaSaveProduct[index].save;
  };
  const deleteProduct3 = (index) => {
    setindexs(index);
    rightSaveProduct[index].save = !rightSaveProduct[index].save;
  };
  const deleteProduct4 = (index) => {
    setindexs(index);
    homeSaveProduct[index].save = !homeSaveProduct[index].save;
  };
  const deleteProduct5 = (index) => {
    setindexs(index);
    chooseSaveProduct[index].save = !chooseSaveProduct[index].save;
  };
  const deleteProduct6 = (index) => {
    setindexs(index);
    newsSaveProduct[index].save = !newsSaveProduct[index].save;
  };
  const deleteProduct7 = (index) => {
    setindexs(index);
    notebookSaveProduct[index].save = !notebookSaveProduct[index].save;
  };

  const [openInput, setOpenInput] = useState(false);
  const open = () => {
    setOpenInput(!openInput);
  };

  return (
    <HeaderWrapper>
      <div className=" pt-4">
        <div className="row justify-content-center align-items-center w-100">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
            <Link href="/">
              <a>
                <img className="w-100 logo" src="logo.png" alt="photo" />
              </a>
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 order-3 order-sm-3 order-md-3 order-lg-0 inputOrder">
            <div className="d-flex justify-content-center align-items-center">
              <Button className="search px-5">Поиск</Button>
              <input
                className="w-100 input-group"
                type="text"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 order-0 order-sm-0 order-md-0 order-lg-3 iconsOrder">
            <div className="d-flex position-relative justify-content-end">
              <Button className="d-block">
                <img className="header_icon" src="IconPerson.svg" alt="photo" />
                <p className="m-0">Покупателям</p>
              </Button>
              <Button className="d-block" onClick={saveProduct}>
                <img
                  className="header_korzina"
                  src="iconBasket.svg"
                  alt="photo"
                />
                <p className="m-0">
                  <Badge
                    badgeContent={
                      savedData.length +
                      baraxolkaSaveProduct.length +
                      rightSaveProduct.length +
                      homeSaveProduct.length
                    }
                    color="error"
                  >
                    Корзина
                  </Badge>
                </p>
              </Button>
              <div className={`korzina ${openSave ? "d-none" : "d-block"}`}>
                {datalfilter?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative">
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold ">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.big_price}
                            </span>
                            {value.price}
                          </h6>
                          <div>
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteProduct(index)}
                              className="text-end border-bottom delete mt-3"
                            >
                              удалить
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {baraxolkaSaveProduct?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative">
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.big_price}
                            </span>
                            {value.price}
                          </h6>
                          <div>
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteProduct2(index)}
                              className="text-end border-bottom delete mt-3"
                            >
                              удалить
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {rightSaveProduct?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative">
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.big_price}
                            </span>
                            {value.price}
                          </h6>
                          <div>
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteProduct3(index)}
                              className="text-end border-bottom delete mt-3"
                            >
                              удалить
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {homeSaveProduct?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.priceBig}
                            </span>
                            {value.price}
                          </h6>
                        </div>
                        <div>
                          <h6
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteProduct4(index)}
                            className="text-end border-bottom delete mt-3"
                          >
                            удалить
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {chooseSaveProduct?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.priceBig}
                            </span>
                            {value.price}
                          </h6>
                        </div>
                        <div>
                          <h6
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteProduct5(index)}
                            className="text-end border-bottom delete mt-3"
                          >
                            удалить
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {newsSaveProduct?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.priceBig}
                            </span>
                            {value.price}
                          </h6>
                        </div>
                        <div>
                          <h6
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteProduct6(index)}
                            className="text-end border-bottom delete mt-3"
                          >
                            удалить
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {notebookSaveProduct?.map((value, index) => (
                  <div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <img className="photo me-2" src={value.img} alt="photo" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="pe-4 p-xxl-0">
                            <p className="mb-0 title fw-bold">{value.title}</p>
                          </div>
                          <FontAwesomeIcon
                            className="icon text-end"
                            icon={faAngleDown}
                          />
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                            <p className="mb-0 aksiya">{value.aksiya}</p>
                          </div>
                          <h6 className="fw-bold mb-0">
                            <span className="big_text mb-0 price">
                              {value.priceBig}
                            </span>
                            {value.price}
                          </h6>
                        </div>
                        <div>
                          <h6
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteProduct7(index)}
                            className="text-end border-bottom delete mt-3"
                          >
                            удалить
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button onClick={open} className="orange_btn">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 mt-3 d-flex justify-content-center flex-wrap align-items-center">
          <div>
            <Button
              className="Categories"
              aria-controls="menu"
              disableRipple
              onClick={handleOpenMenu}
              variant="contained"
            >
              <img className="me-1" src="iconCategories.svg" alt="photo" />
              Категории
              <img className="ms-1" src="iconCtegories2.svg" alt="photo" />
            </Button>
            <Menu
              className="CategoriesMenu"
              style={{ marginTop: "40px" }}
              id="menu"
              onClose={handleMenuClose}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
            >
              {pages.map((value, index) => {
                return (
                  <MenuItem
                    key={index}
                    style={{ width: "300px" }}
                    className="menuItem"
                    onClick={handleMenuClose}
                  >
                    <Link href="/">
                      <a>{value.page}</a>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          {/* active o'rnatish kere va responsiveni to'g'irlash kere */}
          <div className="d-flex flex-wrap">
            {links.map((value, index) => {
              return (
                <Link href={value.href} key={index}>
                  <a>
                    <Button
                      style={{ zIndex: "100" }}
                      className={`border_links border-dark rounded-0 px-4 ${
                        value.className
                      } ${router.pathname === value.href ? "active" : ""}`}
                    >
                      {value.link}
                    </Button>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <ModalProduct openInput={openInput} open={open} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
