import React from 'react';
import OrderProvier from './context/OrderContext';
import AppRouter from './routers/AppRouter';

const App = () => {
    return (
        <OrderProvier>
            <AppRouter />
        </OrderProvier>
    );
};

export default App;