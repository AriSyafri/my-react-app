import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";


const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const username = useLogin();

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