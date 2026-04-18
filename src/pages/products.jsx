import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header 
                    image="/images/clothes.jpg"
                />
                <CardProduct.Body title="Baju A">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum voluptatem maiores, iste incidunt  qui amet animi?</CardProduct.Body>
                <CardProduct.Footer price="100.000"></CardProduct.Footer>
            </CardProduct>
            
            <CardProduct>
                <CardProduct.Header 
                    image="/images/clothes.jpg"
                />
                <CardProduct.Body title="Baju b">
                    Lorem ipsum dolor, sit amet consectetur </CardProduct.Body>
                <CardProduct.Footer price="500.000"></CardProduct.Footer>
            </CardProduct>
            
            <CardProduct>
                <CardProduct.Header 
                    image="/images/clothes.jpg"
                />
                <CardProduct.Body title="Baju b">
                    Lorem ipsum dolor, sit amet consectetur </CardProduct.Body>
                <CardProduct.Footer price="500.000"></CardProduct.Footer>
            </CardProduct>
            
            <CardProduct>
                <CardProduct.Header 
                    image="/images/clothes.jpg"
                />
                <CardProduct.Body title="Baju b">
                    Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur </CardProduct.Body>
                <CardProduct.Footer price="500.000"></CardProduct.Footer>
            </CardProduct>
        </div>
    );
};

export default ProductPage;