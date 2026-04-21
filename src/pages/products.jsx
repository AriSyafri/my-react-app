import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";

const products = [
    {
        id: 1,
        name: "Baju 1",
        price: 100000,
        image: "/images/clothes.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum voluptatem maiores, iste incidunt  qui amet animi?"
    },
    {
        id: 2,
        name: "Baju 2",
        price: 200000,
        image: "/images/clothes.jpg",
        description: "iste incidunt  qui amet animi?"
    },
    {
        id: 3,
        name: "Baju 3",
        price: 250000,
        image: "/images/clothes.jpg",
        description: "iste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animi?"
    },
];

const email = localStorage.getItem("email");


const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [] );
    }, []);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
      if(cart.length > 0) {
        const sum = cart.reduce((acc, item ) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty; 
          }, 0);  
          setTotalPrice(sum);
          localStorage.setItem("cart", JSON.stringify(cart));
      }
    }, [cart]);
    
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, { id, qty: 1}]);
        }
    };

    //useRef
    const cartRef = useRef([]);

    const handlerAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);
    // console.log(totalPriceRef);

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <Fragment>
          <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
            {email}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>LogOut</Button>
          </div>

        <div className="flex justify-center py-5">
            <div className="flex flex-wrap w-4/6">
                { products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header 
                            image={product.image}
                        />
                        <CardProduct.Body title={product.name}>
                            {product.description}</CardProduct.Body>
                        <CardProduct.Footer 
                            price={product.price}
                            id={product.id} 
                            handleAddToCart={handleAddToCart}
                        />
                    </CardProduct>    
                ))}
            </div>

            <div className="w-2/6">
                <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                <table className="mb-2 text-left border-separate table-auto border-spacing-x-5">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = products.find(
                                (product) => product.id === item.id
                            );
                            return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>
                                        RP{" "}
                                        {product.price.toLocaleString("id-ID", {
                                            styles: "currency",
                                            currency: "IDR",
                                        })}
                                    </td>
                                    
                                    <td>{item.qty}</td>
                                    <td>Rp{" "}{(item.qty * product.price).toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "IDR",
                                    })}</td>
                                </tr>
                            )
                        })}
                        <tr ref={totalPriceRef}>
                            <td colSpan={3}>
                                <b>Price</b>
                            </td>
                            <td>
                                <b>
                                    RP. 
                                    {(totalPrice).toLocaleString ("id-ID", {
                                        styles: "currency",
                                        currency: "IDR",
                                    })}
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        

        </Fragment>
    );
};

export default ProductPage;