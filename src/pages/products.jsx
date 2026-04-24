import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

// const token = localStorage.getItem("token");


const ProductPage = () => {
    // const [cart, setCart] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem("cart")) || [] );
    // }, []);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, [])

    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    const handleDeleteToCart = (id) => {
        const itemInCart = cart.find(item => item.id === id);
    
        if (itemInCart) {
            if (itemInCart.qty > 1) {
                // Jika qty masih lebih dari 1, cukup kurangi
                setCart(
                    cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
                );
            } else {
                // Jika qty sudah 1 dan diklik kurang, maka HAPUS (filter)
                setCart(cart.filter(item => item.id !== id));
            }
        }
    };

    return (
        <Fragment>
          <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
            {username}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>LogOut</Button>
          </div>

        <div className="flex justify-center py-5">
            <div className="flex flex-wrap w-4/6">
                { products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header 
                            image={product.image}
                            id={product.id}
                        />
                        <CardProduct.Body title={product.title}>
                            {product.description}</CardProduct.Body>
                        <CardProduct.Footer 
                            price={product.price}
                            id={product.id} 
                            handleDeleteToCart= {handleDeleteToCart}
                        />
                    </CardProduct>    
                ))}
            </div>

            <div className="w-2/6">
                <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                <TableCart products={products} />
            </div>

        </div>
        

        </Fragment>
    );
};

export default ProductPage;