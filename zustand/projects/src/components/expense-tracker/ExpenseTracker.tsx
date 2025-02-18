import { useState } from "react";
import useExpenseStore from "./store";

const ExpenseTracker = () => {
  const { expenses, addExpenses, removeExpense } = useExpenseStore();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") return;

    addExpenses({ id: Date.now(), description, amount: +amount });

    setDescription("");
    setAmount("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Expense Tracker
        </h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Expense Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : +e.target.value)
            }
            placeholder="Amount"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddExpense}
            className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            Add Expense
          </button>
        </div>

        <ul className="space-y-4 mb-6">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">
                {expense.description}: ₹{expense.amount.toFixed(2)}
              </span>
              <button
                onClick={() => removeExpense(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800">
            Total Expenses: ₹
            {expenses
              .reduce((total, expense) => total + expense.amount, 0)
              .toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
