const links = [
  { link: "Скидки", href: "/baraxolka" },
  { link: "Смартфоны", href: "/phones" },
  { link: "ТВ", href: "/tv" },
  {
    link: "Техника для кухни",
    href: "/kitchen",
  },
  {
    link: "Аксессуары",
    href: "/homeTech",
    className: "link2 d-block d-md-none",
  },
  {
    link: "Техника для дома",
    href: "/homeTech",
    className: "link3 d-none d-lg-block",
  },
  {
    link: " Ноутбук, ПК, планшет",
    href: "/laptops",
    className: "link4 d-none d-xl-block",
  },
  {
    link: "Для геймеров",
    href: "/gamers",
    className: "link5 d-none d-xxl-block gamer",
  },
];

const pages = [
  { page: "Акции", href:"/baraxolka" },
  { page: "Смартфоны", href:"/phones" },
  { page: "Техника для кухни", href:"/kitchen" },
  { page: "Техника для дома", href:"/homeTech" },
  { page: "Телевизоры, аудиотехника", href:"/tv" },
  { page: "Смарт-гаджеты", href:"/laptops" },
  { page: "Фото, Видео, авто", href:"/" },
  { page: "Дом, Сад", href:"/" },
];

export { links, pages };
