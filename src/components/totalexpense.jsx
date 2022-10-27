import React from 'react'

export default function totalExpense() {
    const [expenses, setExpenses] = useState([]);
    const expensesRef = query(collection(db, auth.currentUser.uid), where("type", "==", "expense" ));

    useEffect(() => {
        const getExpenses = async () => {
            const expenses = await getDocs(expensesRef);
            // console.log(expenses.docs.map((doc) => doc.data()));
            setExpenses(expenses.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getExpenses();
    }, []);


    function totalExpense() {
        let total = 0;
            expenses.map((expense) => {
        return total;
    }
    console.log(expenses.map((expense) => expense.price))


    const expensesChart = {
        labels: expenses.map((expense) => expense.category),
        datasets: [{
            label: "Expenses",
            data: expenses.map((expense) => expense.price),
        }]
    }

    console.log(expensesChart)
  return (
    <div>totalExpense</div>
  )
}
