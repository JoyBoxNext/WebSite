import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as t from "../../redux/Types";
import Link from "next/link";
import { useSelector } from "react-redux";
import { links, pages } from "../../Data/HeaderData";
import HeaderWrapper from "./HeaderWrapper";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { dispatch } from "../../redux/Store";
import Badge from "@material-ui/core/Badge";
import ModalProduct from "../../Components/ModalProduct";
import ActiveLink from "../../activeLink";

const Header = () => {
  const [openInput, setOpenInput] = useState(false);

  const [openSave, setOpenSave] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [anchorEl, setAnchorEl] = useState(false);

  const open = () => {
    setOpenInput(!openInput);
  };

  const handleOpenMenu = () => {
    setAnchorEl(!anchorEl);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //====================================================================================================
  //===phonesData===
  const newdata = useSelector((state) => state.BooksReducer.newdata);
  const filterNewData = newdata?.filter((value) =>
    value?.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  const filterdata = () => {
    const action = { type: t.SEND_FILTER, payload: filterNewData };
    dispatch(action);
  };

  //==========================================================================================================
  const saveProduct = () => {
    setOpenSave(!openSave);
  };
  const indeX = useSelector((state) => state.BooksReducer.index);
  useEffect(() => {
    filterdata();
  }, [
    newdata?.length,
    newdata?.[0]?.title,
    filterNewData?.length,
    filterNewData?.[0]?.title,
    indeX,
  ]);

  const savedataproduct = useSelector((state) => state.BooksReducer.savedata);
  const deleteProduct = (index) => {
    const action = { type: "DELETE", payload: index };
    dispatch(action);
  };

  return (
    <HeaderWrapper>
      <div className="pt-4">
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
            <div className="d-flex align-items-center position-relative justify-content-end">
              <Button className="d-block">
                <img className="header_icon" src="IconPerson.svg" alt="photo" />
                <p className="m-0 header_title">Покупателям</p>
              </Button>
              <Button className="d-block" onClick={saveProduct}>
                <img
                  className="header_korzina"
                  src="iconBasket.svg"
                  alt="photo"
                />
                <p className="m-0 header_subtitle">
                  <Badge
                    badgeContent={savedataproduct?.length}
                    color="secondary"
                  >
                    Корзина
                  </Badge>
                </p>
              </Button>
              <div className={`korzina ${openSave ? "d-none" : "d-block"}`}>
                {savedataproduct?.map((value, index) => (
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
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {savedataproduct.length === 0 ? (
                    "Корзина пустой"
                  ) : (
                    <button onClick={open} className="orange_btn mt-3">
                      Оформить заказ
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 mt-3 d-flex  align-items-center category">
          <div className="flex position-relative">
            <Button
              className="Categories mb-3"
              aria-controls="menu"
              disableRipple
              onClick={handleOpenMenu}
              variant="contained"
            >
              <img className="me-1" src="iconCategories.svg" alt="photo" />
              Категории
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
              {links.map((value, index) => {
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
        <ModalProduct openInput={openInput} open={open} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
