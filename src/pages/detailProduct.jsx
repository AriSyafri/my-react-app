
import { useParams } from "react-router-dom";


const DetailProductPage = () => {
    const { id } = useParams();
    return (
        <div>
            <div>Detail : {id}</div>
        </div>
    )
}

export default DetailProductPage;