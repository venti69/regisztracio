import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Link to="/">Home</Link>
            {isLoggedIn ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </div>
    );
};

export default Navbar;
