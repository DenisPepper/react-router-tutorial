import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "../../pages/home-page/home-page";
import {CatalogPage} from "../../pages/catalog-page/catalog-page";
import {Footer} from "../footer/footer";
import {Header} from "../header/header";
import {DevPage} from "../../pages/dev-page/dev-page";

export const App = () => {
    return (
        <div className='page-wrapper'>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/catalog' element={<CatalogPage/>}/>
                    <Route path='/dev' element={<DevPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

