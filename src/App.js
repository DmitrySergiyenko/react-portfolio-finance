import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 12),
      description: "Fridge",
      amount: 999.99
    },
    {
      id: 'c2',
      date: new Date(2022, 2, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      id: 'c3',
      date: new Date(2022, 3, 8),
      description: "Monitor",
      amount: 249.99
    }
  ];  

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('APP');
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
