import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Food Delivery Orders</h1>
            <nav>
                <Link to="/orders">Orders</Link>
                {' | '}
                <Link to="/filter">Filter</Link>
                {' | '}
                <Link to="/stats">Stats</Link>
            </nav>
        </div>
    );
};

export default Home;
