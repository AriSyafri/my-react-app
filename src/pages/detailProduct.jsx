
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../services/product.service";


const DetailProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProducts(id, (data) => {
            setProduct(data);
        });
    }, [id]);

    console.log(product);

    return (
        <div>
            <div>Detail : {id}</div>
        </div>
    )
}

export default DetailProductPage;