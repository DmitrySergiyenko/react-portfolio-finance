import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: "Fridge",
    amount: 1099.99
  },
  {
    id: 'c2',
    date: new Date(2022, 2, 25),
    description: "MacBook",
    amount: 1254.72
  },
  {
    id: 'c3',
    date: new Date(2021, 3, 8),
    description: "Monitor",
    amount: 249.99
  },
  {
    id: 'c4',
    date: new Date(2020, 3, 8),
    description: "PC",
    amount: 1549.59
  },

]; 

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {

    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });

    //setCosts([cost, ...costs]); doesn't work correct

    console.log(cost);
    
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
