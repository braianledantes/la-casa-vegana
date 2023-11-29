import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout";
import { CartPreview, Contact, Events, Home, Menu } from "../pages";
import { ItemDetailContainer } from "../components/ItemDetailContainer";

export function MainRouter() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/menu' element={<Menu />} />
                    <Route exact path='/category/:categoryName' element={<Menu />} />
                    <Route exact path='/menu/:id' element={<ItemDetailContainer />} />
                    <Route exact path='/events' element={<Events />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/cart' element={<CartPreview />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}