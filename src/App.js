import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import { useState } from 'react';

function App() {
 const [first, setfirst] = useState('')
 const [items,setItems]=useState([])


const listofItems = () => {
  setItems((olditems)=>{
    return [...olditems,first]

  });
 
};



 const deleteitem = () => {
 console.log('deleted');
 setItems((olditems)=>{
  return olditems.filter((arrElem,index)=>{
    return index!==id;
  })
 })
}



//  const addnew=(event)=>{
//    setfirst(event.target.value)
//  }

  return (
    <div className="App">
     {/* <Message name="new" heroname="newwt"/>
     <Greet name="new" heroname="newwt"/> */}
     {/* <NameList/> */}

     <input placeholder='add item'></input>
     <button onClick={listofItems}>+</button>

     <ol>

    
     {
      items.map((itemval,index) => {
        return  (
        <>
        
        <li>{itemval}</li>;
        <button onClick={deleteitem}>-</button>
        </>)
      })
     }

    
     </ol>

    </div>
  );
}

export default App;
