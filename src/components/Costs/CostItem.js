import { useState } from 'react';
import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) => {

    useState(props.description);

    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandker = () => {
        setDescription("New item");
    };

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandker}>Change item</button>
        </Card>
    );
}

export default CostItem;