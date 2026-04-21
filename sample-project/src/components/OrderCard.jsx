import { useOrder } from '../context/OrderContext';

// Helper: check if an order is valid
const isValidOrder = (order) => {
    if (!order.items || order.items.length === 0) return false;
    const allItemsValid = order.items.every(
        (item) => item.quantity !== undefined && item.quantity > 0
    );
    if (!allItemsValid) return false;
    if (
        order.totalAmount === undefined ||
        order.totalAmount === null ||
        isNaN(order.totalAmount) ||
        order.totalAmount <= 0
    ) return false;
    return true;
};

const OrderCard = ({ order }) => {
    const { markDelivered } = useOrder();

    const customerName = order.customerName && order.customerName.trim() !== ''
        ? order.customerName
        : 'Unknown';

    const isDelivered = order.status === 'delivered';

    return (
        <div data-testid="order-item">
            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>Customer:</strong> {customerName}</p>
            <p><strong>Restaurant:</strong> {order.restaurant}</p>
            <p><strong>Total Amount:</strong> ${Number(order.totalAmount).toFixed(2)}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Delivery Time:</strong> {order.deliveryTime}</p>
            {order.rating !== undefined && order.rating !== null && (
                <p><strong>Rating:</strong> {order.rating}</p>
            )}
            {!isDelivered && (
                <button onClick={() => markDelivered(order.orderId)}>
                    Mark as Delivered
                </button>
            )}
        </div>
    );
};

export { isValidOrder };
export default OrderCard;
