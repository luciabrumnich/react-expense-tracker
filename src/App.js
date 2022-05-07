import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "expense1", amount: "100", date: new Date(2022, 6, 6) },
    { id: "e2", title: "expense2", amount: "200", date: new Date(2022, 7, 5) },
    { id: "e3", title: "expense3", amount: "150", date: new Date(2022, 1, 5) },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
