import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

/*
As in our code we have a App component which is parent of Expenses and NewExpense component
Now the Expenses and NewExpense component are not directly connented with each other
Therefore, they cannot communicate with each other directly as we donot have
any direct communication between sibling elements.
We can only communicate from parent to child and from child to parent.

 NewExpense generates the data and Expenses component needs data.
 So we can now store our states in the nearest component so in the 
 parent component which have access to both the components directly or indirectly.
 In this case the App component. 

 So we can utilize parent component which has access to both involved component
 by lifting our states up. So by passing our generated data from
 the new expense to the app component.

 lifting the state up is just sending data from child to parent.
*/