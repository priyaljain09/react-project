  import {useState, useEffect, useRef } from "react";
  import './Hook.css';

  function createInitialTodos() {
    const initialTodos = [];
    return initialTodos;
  }

  export default function App(){
    const [todos, setTodos] = useState(createInitialTodos);
    const [text, setText] = useState('');
    const[count, setcounter] = useState(0)
    const [data, setdata] = useState("Hello!")
    useEffect(() => {
        console.log("Welcome")
    },[data,count])
    function updateCount(){
        setcounter(count+1)
    }
    function updateData(){
        setdata("Welcome")
    }
    const refElement = useRef("");
    //const[name, setname] = useState(" ")
    console.log(refElement)
    function Reset(){
        setText("")
        refElement.current.focus()
    }
    function Add(){
        setText('');
            setTodos([{
                id: todos.length,
                text: text
                }, ...todos]);
           //     refElement.current.setTodos()
    }
    function handleInput(){
        refElement.current.style.color="black"
        refElement.current.style.backgroundColor="cyan"
      //  refElement.current.reset()
    }
    return(
        <>
        <center>
        <h1>Hooks</h1>
        <div className="Update">
        
        <h2>{count}</h2>
        <h2>{data}</h2>
        <button onClick={updateCount}>Click me</button>
         <button onClick={updateData}> Update</button> 
         </div>
        {/* useRef */}
        <div className="Add">
          
        <input ref={refElement}
             type="text" 
             placeholder="Enter your name"
             value={text} 
             onChange={(e) => setText(e.target.value)}
             id="enter"
            name="enter"></input><br></br>
        <button onClick={Reset}>Reset</button>
        <button onClick={Add}>Add</button>
        <button onClick={handleInput}>Handle Input</button>
        <ul type="none">
        {todos.map(item => (
          <li className='item' key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      </div>
      </center>
        </>
    )
  }


