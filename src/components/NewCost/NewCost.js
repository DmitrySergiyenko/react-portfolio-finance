import CostForm from './CostForm';
import './NewCost.css';


const NewCost = (props) => {

    const saveConstDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }

        console.log(costData);

        props.onAddCost(costData);
    };

    return (
        <div className='new-cost'>
            <CostForm
                onSaveCostData={saveConstDataHandler}
            />
        </div>
    )
};

export default NewCost;