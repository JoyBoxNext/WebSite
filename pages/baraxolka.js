import {
    faFacebook,
    faInstagram,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { phones } from "../Data/data";
import Container from "./../Containers/Container";
import Header from "./../Containers/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BaraxolkaWrapper from "../Wrappers/BaraxolkaWrapper";
import Footer from "../Containers/Footer/Footer";
import Link from 'next/link';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Product = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Header />
            <BaraxolkaWrapper>
                <div className="d-flex">
                    <div className="Sidebar">
                        <div className="container">
                            <div className="p-3">
                                <h1 className="title">Барахолка!</h1>
                                <p className="subtitle">
                                    Сервис объединяет тысячи частных объявлений и коммерческих
                                    предложений от организаций. Легко ориентироваться в обширном
                                    информационном пространстве помогают удобный интерфейс и
                                    эффективная поисковая система Для просмотра и поиска
                                    объявлений регистрация не нужна.
                                </p>

                                <ul className="subtitle">
                                    Часто задаваемые вопросы про Смартфоныs
                                    <li className="subtitle">— покупателя;</li>
                                    <li className="subtitle">— клиента</li>
                                    <li className="subtitle">— поставщика услуги;</li>
                                    <li className="subtitle">— товар.</li>
                                </ul>
                            </div>
                            <div className={classes.root}>
                                <AppBar className="shadow-none" position="static">
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="simple tabs example"
                                    >
                                        <Tab
                                            className="item_one rounded mx-2"
                                            label="Полная цена"
                                            {...a11yProps(0)}
                                        />
                                        <Tab
                                            className="item_two rounded mx-2"
                                            label="По возрастанию"
                                            {...a11yProps(1)}
                                        />
                                        <Tab
                                            className="item_three rounded mx-2"
                                            label="По убыванию"
                                            {...a11yProps(2)}
                                        />
                                    </Tabs>
                                </AppBar>
                                <TabPanel className="" value={value} index={0}>
                                    <div className="row justify-content-center">
                                        {phones.map((value, index) => {
                                            return (
                                                <div
                                                    className="col-12 col-lg-6 col-xl-4 col-xxl-3 cards_border  mb-3 pt-0 p-0"
                                                    key={index}
                                                >
                                                    <img className="" src="skidka.jpg" alt="photo" />
                                                    <div className="px-3">
                                                        <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                                                            <Link href="/productCard"><a>
                                                                <img
                                                                    className="me-3 "
                                                                    src="SwiperProduct3.png"
                                                                    alt="photo"
                                                                />
                                                            </a></Link>
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
                                                            <div className="bag save_btn">
                                                                <img src="bag.svg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
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
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </BaraxolkaWrapper>
            <Footer />
        </Container>
    );
};

{
}

export default Product;