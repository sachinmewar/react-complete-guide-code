/* 
useState is a react hook.

All these react hook can be recognized by the fact that they start with the word use.

All these react hook must be called directly inside the component function and they could
not be called outside of these function, there is one exception.
*/



import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  /*useState will return an array in which first
  index is the value and second is the function. 
  (updating funtion)
  */
 const [title, setTitle] = useState(props.title);
 /*
 The first value title is the pointer at that managed value initially at props.title
 and the second element is a function which we can call to set a new title.
 */ 

 /*
 On reloading page this below console.log will be called 4 times. As 4 seperate instances will be created.
 */
/*
State really is seperated on a per component instance basis.
*/
 console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
/*
Here above clickHandler is a function and we donot pass parenthesis because the function will then
executed before returning the JSX Code. So JS will execute this before this line of 
code is being passed which is not a requirement as it is too early.
*/

/*
React once execute everything it never repeats that. React goes through all that when the
application is initially rendered. So we need a way to tell react that something
changes and that a certain components should be re-evaluated.
 That's where react introduces state. 
*/

/* 
Why when changing a state we use setTitle('updated') and not just title = 'updated' ?

The reason for this is because calling that function does not just assign new value to some 
variable but instead it is a special variable which is managed by react somewhere in memory 
and when we call this state updating function. This special variable will not just receive a new  
value but the component function in which  we called this state updating function will be executed again. 
*/