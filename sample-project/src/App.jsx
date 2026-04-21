import React from 'react';
import OrderProvider from './context/OrderContext';
import AppRouter from './routers/AppRouter';

const App = () => {
    return (
        <OrderProvider>
            <AppRouter />
        </OrderProvider>
    );
};

export default App;