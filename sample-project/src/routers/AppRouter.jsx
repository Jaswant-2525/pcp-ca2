import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import Filter from '../pages/Filter';
import Stats from '../pages/Stats';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order/:id" element={<OrderDetail />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
