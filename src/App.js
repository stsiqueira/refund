import { useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/Lists/CardList';
import { FaSearch } from "react-icons/fa";
import AddItem from './Components/AddItem/addItem';
import AddRefund from './Components/AddItem/addRefund';

function App() {
  const [text, setText] = useState ("")
  const [add, setAdd] = useState(false)
  const [select, setSelect] = useState("name")
  const [refunds, setRefunds] = useState([])

  const dbURL = "http://localhost:5000/refunds"


  //////////////
  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  const handleSearch = async () => {
    const data = await fetchData(dbURL)
    setRefunds(data)
    if(text){
      const newRefund = data.filter( refund => refund.name.includes(text.toUpperCase()))
      setRefunds(newRefund)
    }
  }

  useEffect(() => {
    const getData = async (url) => {
        const data = await fetchData(url);
       setRefunds(data)
    }
    getData(dbURL);
  },[]);

  return (
    <div className="App">
      <div className="toolBar">
        <div className="search">
          <p>Search:</p>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
          <div className="iconContainer">
            <FaSearch fontSize={13}  onClick={ ()=> handleSearch()}/>
          </div>
        </div>
        <div className="addButton" onClick={()=> setAdd(!add)}>
          <p>{add ? "Cancel" : "Add"}</p>
        </div>
      </div>
        {
          add ? 
          ( <AddRefund setAdd={setAdd} refunds={refunds} setRefunds={setRefunds}/>)
          :""
          
        }
      <CardList refunds={refunds}/>
    </div>
  );
}

export default App;
