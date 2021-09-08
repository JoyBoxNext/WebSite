import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderWrapper from './HeaderWrapper';
import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }
    return (
        <HeaderWrapper>
            <div className="d-flex justify-content-between align-items-center">
                <img className="logo" src="logo.png" alt="" />
                <div className="input-group search w-50">
                    <span class="input-group-text border-0 m-0 p-0" id="basic-addon1"><Button className="search text-white rounded-0 px-5"><FontAwesomeIcon className="me-1" icon={faSearch} /><p className="m-0">Поиск</p></Button></span>
                    <input type="text" class="form-control rounded-0" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="d-flex">
                    <Button className="d-block">
                        <img src="IconPerson.svg" alt="" />
                        <p className="m-0">Покупателям</p>
                    </Button>
                    <Button className="d-block">
                        <img src="iconBasket.svg" alt="" />
                        <p className="m-0">Корзина</p>
                    </Button>
                </div>
            </div>
            <div className="w-100">
                <Button
                    className="Categories"
                    aria-controls="menu"
                    disableRipple
                    onClick={handleOpenMenu}
                    variant="contained">
                    <img className="me-1" src="iconCategories.svg" alt="" />
                    Категории
                    <img className="ms-1" src="iconCtegories2.svg" alt="" />
                </Button>
                <Menu
                    className="CategoriesMenu"
                    style={{ marginTop: '40px' }}
                    id='menu'
                    onClose={handleMenuClose}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/"><a>Акции</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Смартфоны</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Техника для кухни</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Техника для дома</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Ноутбуки, Пк, Планшеты</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Телевизоры, аудиотехника</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Для геймеров</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Смарт-гаджеты</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Фото, Видео, авто</a></Link></MenuItem>
                    <MenuItem style={{ width: '300px' }} className="menuItem" onClick={handleMenuClose}><Link href="/test"><a>Дом, Сад</a></Link></MenuItem>
                </Menu>
                {/* active o'rnatish kere va responsiveni to'g'irlash kere */}
                <Button className="border-end border-dark rounded-0 px-4">Скидки</Button>
                <Button className="border-end border-dark rounded-0 px-4">Смартфоны</Button>
                <Button className="border-end border-dark rounded-0 px-4">ТВ</Button>
                <Button className="border-end border-dark rounded-0 px-4">Техника для кухни</Button>
                <Button className="border-end border-dark rounded-0 px-4">Техника для дома</Button>
                <Button className="border-end border-dark rounded-0 px-4">Ноутбук, ПК, планшет</Button>
                <Button className="border-end border-dark rounded-0 px-4">Для геймеров</Button>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
