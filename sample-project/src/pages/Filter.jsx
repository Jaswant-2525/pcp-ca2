import { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { isValidOrder } from '../components/OrderCard';
import OrderCard from '../components/OrderCard';
import { Link } from 'react-router-dom';

const Filter = () => {
    const { state } = useOrder();
    const [query, setQuery] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (state.loading) {
        return <p>Loading...</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const validOrders = state.order.filter(isValidOrder);

    const filtered = submitted && query.trim() !== ''
        ? validOrders.filter(
            (o) => o.restaurant.toLowerCase().includes(query.trim().toLowerCase())
        )
        : [];

    return (
        <div>
            <h1>Filter Orders</h1>
            <nav>
                <Link to="/">Home</Link>
                {' | '}
                <Link to="/orders">Orders</Link>
                {' | '}
                <Link to="/stats">Stats</Link>
            </nav>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search by restaurant name..."
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setSubmitted(false); }}
                />
                <button type="submit">Search</button>
            </form>

            {submitted && query.trim() !== '' && (
                filtered.length > 0
                    ? filtered.map((order) => (
                        <OrderCard key={order.orderId} order={order} />
                    ))
                    : <p>No results Found</p>
            )}
        </div>
    );
};

export default Filter;
