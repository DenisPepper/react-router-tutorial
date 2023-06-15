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

export type AdvantageBackgroundType = 'main' | 'option' | 'option-lighter'

export interface IAdvantage {
    title: string;
    slogan: string;
    image?: { src: string, alt: string };
    icon?: { src: string, alt: string };
    descriptionUnderlined?: boolean;
    background: AdvantageBackgroundType;
}

export const advantages: IAdvantage[] = [
    {
        background: "main",
        descriptionUnderlined: true,
        title: 'Настоящий городок',
        slogan: 'Седона — не аттракцион для туристов, там течёт своя жизнь',
        image: {src: './images/advantage-1.jpg', alt: 'Фотография местного пейжаза'}
    },
    {
        background: "option-lighter",
        descriptionUnderlined: true,
        title: 'Небольшая площадь',
        slogan: 'Все достопримечательности находятся очень близко',
    },
    {
        background: "option",
        descriptionUnderlined: true,
        title: 'Красивая дорога',
        slogan: 'Ехать в Седону из Лас-Вегаса совсем не скучно!',
    },
    {
        background: "option-lighter",
        descriptionUnderlined: true,
        title: 'Мало туристов',
        slogan: 'Большинство едет в Гранд Каньон и толпится там',
    },
    {
        background: "main",
        descriptionUnderlined: true,
        title: 'Там есть мост дьявола',
        slogan: 'Да, по нему можно пройти! Если вы осмелитесь, разумеется',
        image: {src: './images/advantage-2.jpg', alt: 'Фотография каньона'},
    },
];

export const advantagesWithIcon: IAdvantage[] = [
    {
        background: "option",
        title: 'Жильё',
        slogan: 'Рекомендуем пожить в настоящем мотеле, всё как в кино!',
        icon: {src: './images/motel.svg', alt: 'Дом'}
    },
    {
        background: "option-lighter",
        title: 'Еда',
        slogan: 'Всегда заказывайте топовый фирменный бургер, вы не разочаруетесь!',
        icon: {src: './images/food.svg', alt: 'Гамбургер'}
    },
    {
        background: "option",
        title: 'Сувениры',
        slogan: 'Не только китайского, но и настоящего местного производства!',
        icon: {src: './images/box.svg', alt: 'Подарочная коробка'}
    },
];

export interface IHotel {
    image: string;
    name: string;
    type: 'Гостиница' | '';
    minPrice: number;
    isFavorite: boolean;
    rating: string;
    starsCount: number;
}

export const hotels: IHotel[] = [
    {
        image: './images/hotel-1.jpg',
        name: 'Amara Resort & Spa',
        type: 'Гостиница',
        minPrice: 4000,
        isFavorite: false,
        rating: '8,5',
        starsCount: 4,
    },
    {
        image: './images/hotel-2.jpg',
        name: 'Villas at Poco Diablo',
        type: 'Гостиница',
        minPrice: 5000,
        isFavorite: true,
        rating: '9,2',
        starsCount: 4,
    },
    {
        image: './images/hotel-3.jpg',
        name: 'Desert Quail Inn',
        type: 'Гостиница',
        minPrice: 2500,
        isFavorite: false,
        rating: '6,9',
        starsCount: 3,
    },
    {
        image: './images/hotel-4.jpg',
        name: 'GreenTree Inn',
        type: 'Гостиница',
        minPrice: 1500,
        isFavorite: false,
        rating: '5,0',
        starsCount: 2,
    },
];

export interface IFeature {
    name: string;
    view: string;
    isChecked: boolean;
    value: string;
}

export const features: IFeature[] = [
    {name: 'feature', value: 'pool', view: 'Бассейн', isChecked: true},
    {name: 'feature', value: 'parking', view: 'Парковка', isChecked: true},
    {name: 'feature', value: 'wifi', view: 'Wi-Fi', isChecked: false},
];

export interface IHotelType {
    name: string;
    value: string;
    isChecked: boolean;
    view: string;
}

export const hotelTypes: IHotelType[] = [
    {name: 'hotel-type', value: 'hotel', view: 'Гостиница', isChecked: true},
    {name: 'hotel-type', value: 'motel', view: 'Мотель', isChecked: false},
    {name: 'hotel-type', value: 'apartments', view: 'Апартаменты', isChecked: false},
];

export interface IPagination {
    value: string;
    isCurrent?: boolean;
    isDotted?: boolean;
}

export const paginationItems: IPagination[] = [
    {
        value: '1',
        isCurrent: true,
    },
    {
        value: '2',
    },
    {
        value: '3',
    },
    {
        value: '4',
    },
    {
        value: '...',
        isDotted: true,
    },
    {
        value: '10',
    },
];

export type UserActionsIcon = './images/search.svg' | './images/heart.svg';

export interface IUserAction {
    innerObject: 'button' | 'anchor';
    icon?: UserActionsIcon;
    ariaLabel?: string;
}

export const userActions: IUserAction[] = [
    {
        icon: './images/search.svg',
        innerObject: 'button',
        ariaLabel: 'Найти отель по названию',
    },
    {
        icon: './images/heart.svg',
        innerObject: 'anchor',
        ariaLabel: 'Перейти на страницу избранных отелей',
    },
];
