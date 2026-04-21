import { useOrder } from '../context/OrderContext';
import { isValidOrder } from '../components/OrderCard';
import OrderList from '../components/OrderList';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { state } = useOrder();

    if (state.loading) {
        return <p>Loading orders...</p>;
    }

    // Show only valid pending (non-delivered) orders
    const pendingOrders = state.order
        .filter(isValidOrder)
        .filter((o) => o.status !== 'delivered');

    return (
        <div>
            <h1>Orders</h1>
            <nav>
                <Link to="/">Home</Link>
                {' | '}
                <Link to="/filter">Filter</Link>
                {' | '}
                <Link to="/stats">Stats</Link>
            </nav>
            <OrderList orders={pendingOrders} />
        </div>
    );
};

export default Orders;
