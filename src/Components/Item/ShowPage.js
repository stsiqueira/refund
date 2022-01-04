import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { fetchData } from '../services/SpecialFunctions';
import CardItem from './CarItem';





const ShowPage = ( props ) =>{
const [refund, setRefund] = useState( () => props.refunds.filter( refund => refund.id === props.showPageID) )


  const ApproveRefund = (id) => {
  }

  return (
    <div className="Card">
      <h2>Order Detail {refund ? refund.name : "aa"}</h2>

      <div className="button">
                <button onClick={()=> props.setShowPage(false)}> never mind</button>
                <button onClick={()=> ApproveRefund()}> approve </button>

      </div>

    </div>
  );
}

export default ShowPage;
