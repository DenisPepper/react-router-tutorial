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
