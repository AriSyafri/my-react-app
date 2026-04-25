import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [totalCart, setTotalCart] = useState();

    const cart = useSelector((state) => state.cart.data);
    
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    return (
        <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
            {username}

            <Button classname="ml-5 bg-black" onClick={handleLogout}>LogOut</Button>
            <div className="flex items-center p-2 ml-5 bg-gray-800 rounded-md">
                {totalCart}
            </div>

            <button 
                className="p-2 px-10 mx-5 text-white bg-black rounded"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? "Light" : "Dark"}
            </button>

        </div>
    );
};

export default Navbar;