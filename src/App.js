import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import classes from './App.module.css'

const Todo = () => {
  // const dispatch = useDispatch()
  // const todos = useSelector(state => state.todos)
  // const deleteClick = id => dispatch({
  //     type: 'DELETE',
  //     id
  // })
  // if(!todos || !todos.length) {
  //   return <p>No Todo word</p>
  // }

  const Checked = (e) => {
    console.log(e.target.Checked);
    if(e.target.Checked) {
      e.target.parentElement.type.handleClick()
    } else {
      e.target.parentElement.type.deleteClick()
    }
  }

  // const styles = `${classes.ul} ${classes.input ? classes.li : ''}`
  // return (
    // <ul className={classes.ul}>
    //   <li  className={classes.li}>
    //     {todos.map(todo => <li>{todo.label}
    //       <input className={classes.input} onClick={Checked} type="checkbox"/>
    //     <button onClick={() => deleteClick(todo.id)}>Delete</button></li>)}
    //   </li>
    // </ul>
  //     )
    }
    
    const TodoInput = () => {
      const dispatch = useDispatch()
      const [addTodo, setAddTodo] = useState()
      const handleChange = event => setAddTodo(event.target.value);
      const handleClick = () => dispatch({
        type: 'ADD_TODO',
        payload: {
          label: addTodo,
          id: Math.ceil(Math.random() * 100),
        }
      })
      const ldispatch = useDispatch()
      const todos = useSelector(state => state.todos)
      const deleteClick = id => ldispatch({
        type: 'DELETE',
        id
      })
      return (
        <>
    <ul className={classes.ul}>
      <li  className={classes.li}>
        {todos.map(todo => <li>{todo.label}
          <input className={classes.input}  type="checkbox"/>
        <button onClick={() => deleteClick(todo.id)}>Delete</button></li>)}
      </li>
    </ul>
    <input value={addTodo} onChange={handleChange} type="text"/>
    <button onClick={handleClick}>Start</button>
    </>
  )  
}

const Counter = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const increment = () => dispatch({type: 'increment'})
  const dencrement = () => dispatch({type: 'decrement'})
  return (
    <div>
        {state}
      <button onClick={increment}>+</button>
      <button onClick={dencrement}>-</button>
    </div>
  )
}

function App() {
  return (
    <div>
        <p>
          TODOS
        </p>
        {/* <Todo/> */}
        <Counter/>
        {/* <TodoInput/> */}
      </div>
    )
  }
  
  export default App;
  