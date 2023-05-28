import {PageTitle} from "../../components/page-header/page-title";

const PAGE_HEADER_TEXT = 'Домашная страница города Седона';

export const HomePage = () => {
    return (
        <main className='page-content container'>
            <PageTitle text={PAGE_HEADER_TEXT} isVisuallyHidden/>
            main
        </main>
    );
}
