import { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './Components/services/SpecialFunctions';
import Router from './Components/Router/Router';

function App() {
  const [text, setText] = useState ("")
  const [add, setAdd] = useState(false)
  const [showPage, setShowPage] = useState(false)
  const [showPageID, setShowPageID] = useState(0)
  const [select, setSelect] = useState("name")
  const [refunds, setRefunds] = useState([])

  const dbURL = "http://localhost:5000/refunds"



  const handleSearch = async (search) => {
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

  const ShowDetail = (id) => {
    setShowPageID(id)
    setShowPage(true)
  }

  return (
    <Router />
  );
}

export default App;
