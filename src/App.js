import Costs from "./components/Costs/Costs";


const App = () => {

  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: "Fridge",
      amount: 999.99
    },
    {
      date: new Date(2022, 2, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      date: new Date(2022, 3, 8),
      description: "Monitor",
      amount: 249.99
    }
  ];

  return (
    <div>
      <h1>React</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
