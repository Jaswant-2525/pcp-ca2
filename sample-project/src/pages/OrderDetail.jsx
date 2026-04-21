import { useParams, Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { isValidOrder } from '../components/OrderCard';

const OrderDetail = () => {
    const { id } = useParams();
    const { state } = useOrder();

    if (state.loading) {
        return <p>Loading...</p>;
    }

    const order = state.order.find(
        (o) => String(o.orderId) === String(id) && isValidOrder(o)
    );

    if (!order) {
        return (
            <div>
                <h1>Order not found</h1>
                <Link to="/orders">Back to Orders</Link>
            </div>
        );
    }

    const customerName = order.customerName && order.customerName.trim() !== ''
        ? order.customerName
        : 'Unknown';

    return (
        <div>
            <h1>Order Detail</h1>
            <Link to="/orders">Back to Orders</Link>

            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>Customer:</strong> {customerName}</p>
            <p><strong>Restaurant:</strong> {order.restaurant}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Delivery Time:</strong> {order.deliveryTime}</p>
            <p><strong>Total Amount:</strong> ${Number(order.totalAmount).toFixed(2)}</p>
            {order.rating !== undefined && order.rating !== null && (
                <p><strong>Rating:</strong> {order.rating}</p>
            )}

            <h2>Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${Number(item.price).toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>${(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetail;
