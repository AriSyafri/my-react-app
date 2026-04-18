import Button from "../components/Elements/Button";

const ProductPage = () => {
    
    return (
        <div className="flex justify-center py-5">
            <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                <a href="#">
                    <img 
                        src="/images/clothes.jpg" 
                        alt="product"
                        className="p-8 rounded-t-lg" 
                    />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-white">Baju Paket A</h5>
                        <p className="text-white text-m">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum voluptatem maiores, iste incidunt  qui amet animi?</p>
                    </a>
                </div>
                
                <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">Rp. 1.000.000</span>
                    <Button classname="bg-blue-600">Add to card</Button>
                </div>

            </div>
        </div>
    );
};

export default ProductPage;