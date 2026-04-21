import Button from "../Elements/Button";
const CardProduct = (props) => {
    
    const { children } = props;

    return (
        <div className="flex flex-col justify-between w-full mx-2 my-2 bg-gray-800 border border-gray-700 rounded-lg shadow max-w-64">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img 
                src= {image} 
                alt="product"
                className="object-cover w-full p-8 rounded-t-lg h-60" 
            />
        </a>
    );
};

const Body = (props) => {
    const {
        children,
        title
    } = props;
    return (
        <div className="h-full px-5 pb-5">
            <a href="#">
                <h5 className="pb-4 text-xl font-semibold tracking-tight text-white">{title.substring(0,15)} ...</h5>
                <p className="text-sm text-white">{children.substring(0,80)}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {
        price,
        handleAddToCart,
        id
    } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span 
                className="text-sm font-bold text-white">
                    $ {price.toLocaleString('id-ID', { styles: "currency", currency: "USD"})}
            </span>
            <Button classname="text-sm bg-blue-600" onClick={() => handleAddToCart(id)}>Add to card</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;