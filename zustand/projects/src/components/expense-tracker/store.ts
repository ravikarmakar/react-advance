import { create } from "zustand";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpenses: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],

  addExpenses: (expense: Expense) => {
    set((state) => ({
      expenses: [...state.expenses, expense],
    }));
  },
  removeExpense: (id: number) => {
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    }));
  },
}));

export default useExpenseStore;
