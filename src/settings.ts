export type Link =
    './index.html'
    | './catalog.html'
    | '#advantages'
    | '#';

export type LinkName =
    'home'
    | 'catalog'
    | 'advantages'
    | 'stub';

export const AppLink: Record<LinkName, Link> = {
    home: "./index.html",
    catalog: "./catalog.html",
    advantages: "#advantages",
    stub: "#",
} as const;

export const enum AppPath {
    Home = '/',
    Catalog = '/catalog',
}

export interface IAdvantage {
    title: string;
    slogan: string;
    image?: { src: string, alt: string };
    icon?: { src: string, alt: string };
}

export const advantages: IAdvantage[] = [
    {
        title: 'Настоящий городок',
        slogan: 'Седона — не аттракцион для туристов, там течёт своя жизнь',
        image: {src: './images/advantage-1.jpg', alt: 'Фотография местного пейжаза'}
    },
    {
        title: 'Небольшая площадь',
        slogan: 'Все достопримечательности находятся очень близко',
    },
    {
        title: 'Красивая дорога',
        slogan: 'Ехать в Седону из Лас-Вегаса совсем не скучно!',
    },
    {
        title: 'Мало туристов',
        slogan: 'Большинство едет в Гранд Каньон и толпится там',
    },
    {
        title: 'Там есть мост дьявола',
        slogan: 'Да, по нему можно пройти! Если вы осмелитесь, разумеется',
        image: {src: './images/advantage-2.jpg', alt: 'Фотография каньона'},
    },
];

export const advantagesWithIcon: IAdvantage[] = [
    {
        title: 'Жильё',
        slogan: 'Рекомендуем пожить в настоящем мотеле, всё как в кино!',
        icon: {src: './images/motel.svg', alt: 'Дом'}
    },
    {
        title: 'Еда',
        slogan: 'Всегда заказывайтетоповый фирменный бургер, вы не разочаруетесь!',
        icon: {src: './images/food.svg', alt: 'Гамбургер'}
    },
    {
        title: 'Сувениры',
        slogan: 'Не только китайского, но и настоящего местного производства!',
        icon: {src: './images/box.svg', alt: 'Подарочная коробка'}
    },
];
