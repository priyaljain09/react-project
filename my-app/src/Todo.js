import { useState} from 'react';
import './Todo.css';

function createInitialTodos() {
  const initialTodos = [];
 
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');
  const person = {
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }};  
    const toolbar = () => {
        if(text == ''){
            alert("Please Enter Your Name");
        }
        else if(text == 'Priya'){
            alert("Theif")
        }
        else if(text == 'Navneet'){
            alert("Mentor")
            setText('');
            setTodos([{
                id: todos.length,
                text: text
                }, ...todos]);
        }
        else if(text == 'Ayushi'){
            alert("Partner")
            setText('');
            setTodos([{
                id: todos.length,
                text: text
                }, ...todos]);
        }
        else{
            setText('');
            setTodos([{
                id: todos.length,
                text: text
                }, ...todos]);
              }}  
  return (
    <>
    <div className='Heading'>
      <center>
        <h1> TodoList</h1>
        <div className='Box'>
        <input
        className='Add'
        placeholder='Enter name '
        id="enter"
        name="enter"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={toolbar}>Add</button>
      </div>
      <div className='List'>
      <ul type="none">
        {todos.map(item => (
          <li className='item' key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      </div>
      </center>
      </div>
    </>
  );
}
