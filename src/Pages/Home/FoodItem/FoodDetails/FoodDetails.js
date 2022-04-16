import { useParams } from 'react-router-dom';
import useFoodItems from '../../../hooks/FoodItems/useFoodItems';

const FoodDetail = () => {
    const {fooddetailId} = useParams();
    const [foodItems, setFoodItems] = useFoodItems();
    return (
        <div>
            <h2>this is food details:{fooddetailId}</h2>
            <h2>{foodItems.length}</h2>
        </div>
    );
};

export default FoodDetail;