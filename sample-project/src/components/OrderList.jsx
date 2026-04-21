import OrderCard, { isValidOrder } from './OrderCard';

const OrderList = ({ orders }) => {
    const validOrders = orders.filter(isValidOrder);

    if (validOrders.length === 0) {
        return <p>No orders to display.</p>;
    }

    return (
        <div>
            {validOrders.map((order) => (
                <OrderCard key={order.orderId} order={order} />
            ))}
        </div>
    );
};

export default OrderList;
