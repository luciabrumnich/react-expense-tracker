import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "expense1", amount: "100", date: new Date(2022, 6, 6) },
    { id: "e2", title: "expense2", amount: "200", date: new Date(2022, 7, 5) },
    { id: "e3", title: "expense3", amount: "150", date: new Date(2022, 1, 5) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("Data arrived in App component");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
