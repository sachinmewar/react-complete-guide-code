import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

/*
event.target.value always returns a string. therefore
we initialize use state with an empty string.
*/

/*
In above code we can go for one state intead of these three states

const [userInput, setUserInput] = useState({
  enteredTitle: '';
  enteredAmount: '';
  enteredDate: '';
});

const titleChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value;
  })
  /*
  Here we need to basically update all state even 
  when only one state changes. If we update only one
  object we will basically dump other keys.
  Because react will not merge this with previous state
  it just replace previous state with new state.
  We can use spread operator which will pulls previous state
  and copy it to new state and then we just overwrite
  enteredTitle.
}

The above approach may fail in niche case.
So whats the problem ?
Updating state that depends on previous state.
Whenever we update states and we depend on previous
state we should use an anonymous function.

setUserInput((prevState) => {
  return(...prevState, enteredTitle: event.target.value);
});

In many cases both will work fine. As react schedule
state updates. It doesn't perform them instantly.
So if we cshedule a lot of updates at the same time
we could be depending on outdated state. In this approach re
react will guarentee that the state snapshot it gives to us 
in this inner funtion will always be a latest state
snapshot.
*/

/*
Since we passed the titleChangeHandler funtion to
the onChange event through this onChange react will
make sure or actually the browser itself will make 
sure  that we get such an event object when this
change event occurs.
*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
