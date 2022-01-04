import { useEffect, useState } from 'react';
import CardList from './Lists/CardList';
import { FaSearch } from "react-icons/fa";
import AddRefund from './AddItem/addRefund';
import ShowPage from './Item/ShowPage';
import { fetchData } from './services/SpecialFunctions';

function Home() {
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
          <p>Add</p>
        </div>
      </div>
        {
          add ? 
          ( <AddRefund setAdd={setAdd} refunds={refunds} setRefunds={setRefunds}/>)
          :""
        }
        {
          showPage ? 
          <ShowPage setShowPage={setShowPage} refunds={refunds} setRefunds={setRefunds} showPageID={showPageID} />
          :
          <CardList refunds={refunds} ShowDetail={ShowDetail}/>
        }
        
    </div>
  );
}

export default Home;