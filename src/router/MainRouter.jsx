import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout";
import { CartPreview, Contact, Events, Home, Menu, MenuItemDetails } from "../pages";

export function MainRouter() {
    return (
        <BrowserRouter>
            <MainLayout cartCount={2}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/menu' element={<Menu />} />
                    <Route exact path='/category/:categoryName' element={<Menu />} />
                    <Route exact path='/menu/:id' element={<MenuItemDetails />} />
                    <Route exact path='/events' element={<Events />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/cart' element={<CartPreview />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}