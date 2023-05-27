import {PageHeader} from "../../components/page-header/page-header";

const PAGE_HEADER_TEXT = 'Домашная страница города Седона';

export const HomePage = () => {
    return (
        <main>
            <PageHeader text={PAGE_HEADER_TEXT} isVisuallyHidden/>
        </main>
    );
}
