import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        title: "Baju 1",
        price: "100.000",
        image: "/images/clothes.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum voluptatem maiores, iste incidunt  qui amet animi?"
    },
    {
        id: 2,
        title: "Baju 2",
        price: "200.000",
        image: "/images/clothes.jpg",
        description: "iste incidunt  qui amet animi?"
    },
    {
        id: 3,
        title: "Baju 3",
        price: "250.000",
        image: "/images/clothes.jpg",
        description: "iste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animiiste incidunt  qui amet animi?"
    },
];

const email = localStorage.getItem("email");


const ProductPage = () => {
    
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };
    
    return (
        <Fragment>
          <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
            {email}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>LogOut</Button>
          </div>

        <div className="flex justify-center py-5">
            { products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header 
                        image={product.image}
                    />
                    <CardProduct.Body title={product.title}>
                        {product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>    
            )) }
        </div>

        <div className="flex justify-center w-100">
            <Counter />
        </div>
        </Fragment>
    );
};

export default ProductPage;