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
    descriptionUnderlined?: boolean;
}

export const advantages: IAdvantage[] = [
    {
        descriptionUnderlined: true,
        title: 'Настоящий городок',
        slogan: 'Седона — не аттракцион для\n туристов, там течёт своя\n жизнь',
        image: {src: './images/advantage-1.jpg', alt: 'Фотография местного пейжаза'}
    },
    {
        descriptionUnderlined: true,
        title: 'Небольшая площадь',
        slogan: 'Все достопримечательности\n находятся очень близко',
    },
    {
        descriptionUnderlined: true,
        title: 'Красивая дорога',
        slogan: 'Ехать в Седону из Лас-Вегаса\n совсем не скучно!',
    },
    {
        descriptionUnderlined: true,
        title: 'Мало туристов',
        slogan: 'Большинство едет в Гранд\n Каньон и толпится там',
    },
    {
        descriptionUnderlined: true,
        title: 'Там есть мост дьявола',
        slogan: 'Да, по нему можно пройти!\n Если вы осмелитесь,\n разумеется',
        image: {src: './images/advantage-2.jpg', alt: 'Фотография каньона'},
    },
];

export const advantagesWithIcon: IAdvantage[] = [
    {
        title: 'Жильё',
        slogan: 'Рекомендуем пожить\n в настоящем мотеле,\n всё как в кино!',
        icon: {src: './images/motel.svg', alt: 'Дом'}
    },
    {
        title: 'Еда',
        slogan: 'Всегда заказывайте\n топовый фирменный бургер,\n вы не разочаруетесь!',
        icon: {src: './images/food.svg', alt: 'Гамбургер'}
    },
    {
        title: 'Сувениры',
        slogan: 'Не только китайского,\n но и настоящего местного\n производства!',
        icon: {src: './images/box.svg', alt: 'Подарочная коробка'}
    },
];
