import {PageTitle} from "../../components/page-header/page-title";
import {Advantages} from "../../components/block-advantages/advantages/advantages";
import {HotelSearch} from "../../components/hotel-search/hotel-search";
import {Subscribe} from "../../components/subscribe/subscribe";

const PAGE_HEADER_TEXT = 'Домашная страница города Седона';

export const HomePage = () => {
    return (
        <main className='page-content'>
            <PageTitle text={PAGE_HEADER_TEXT} isVisuallyHidden/>
            <Advantages />
            <HotelSearch />
            <Subscribe />
        </main>
    );
}
