import CardProduct from "../components/Fragments/CardProduct";

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
]

const ProductPage = () => {
    
    return (
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
    );
};

export default ProductPage;