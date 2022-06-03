import CostForm from './CostForm';
import { useState } from 'react';
import './NewCost.css';


const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveConstDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }

        console.log(costData);

        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }
    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Add new</button>}
            {isFormVisible && <CostForm
                onSaveCostData={saveConstDataHandler}
                onCancel = {cancelCostHandler}
            />}

        </div>
    )
};

export default NewCost;