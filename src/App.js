import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const initial_expenses = [
  { id: "e6", title: "Taxes", amount: "300", date: new Date(2023, 4, 10) },
  { id: "e5", title: "Rent", amount: "1300", date: new Date(2023, 5, 5) },
  { id: "e4", title: "Taxes", amount: "150", date: new Date(2022, 2, 10) },
  { id: "e3", title: "Rent", amount: "750", date: new Date(2022, 3, 5) },
  { id: "e2", title: "Taxes", amount: "120", date: new Date(2021, 0, 10) },
  { id: "e1", title: "Rent", amount: "600", date: new Date(2021, 1, 5) },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
