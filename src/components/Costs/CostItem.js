import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) => {

    /*     useState(props.description);
    
        const [description, setDescription] = useState(props.description); */

    /*     const changeDescriptionHandker = () => {
            setDescription("New item");
        };
     */
    return (
        <li>
            <Card className='cost-item'>
                <CostDate date={props.date} />
                <div className='cost-item__description'>
                    <h2>{props.description}</h2>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={changeDescriptionHandker}>Change item</button> */}
            </Card>
        </li>
    );
}

export default CostItem;