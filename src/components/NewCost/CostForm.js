import { useState } from 'react';
import './CostForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    /*     const [userInput, setUserInput] = useState({
            name: '',
            amount: '',
            date: '',
        }); */

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
        /* setUserInput({
            ...userInput,
            name: event.target.value,

        }) */
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)

        /* setUserInput({
            ...userInput,
            amount: event.target.value
        }) */

        /*         setUserInput((previousState) => {
                    return {
                        ...previousState,
                        name: event.target.value
                    }
                }) */
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        /*         setUserInput({
                    ...userInput,
                    date: event.target.value
                }) */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        //console.log(costData);
        //send data to newCost and after to App
        props.onSaveCostData(costData);
        //link
        setInputName('');
        setInputAmount('');
        setInputDate('');


    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='name'
                        value={inputName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        placeholder='amount'
                        min='0.01'
                        step='0.01'
                        value={inputAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Date</label>
                    <input type='date'
                        min='2020-01-01'
                        step='2022-12-31'
                        value={inputDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;