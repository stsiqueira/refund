import { useState } from "react";
import CardItem from "../Item/CarItem";


const CardList = ( props ) =>{

  return (
    <div className="Cards">
      {
        props.refunds.map((refund)=>{
          return(
            <CardItem refund={refund} key={refund.orderNumber}/>
          )

        })

      }

    </div>
  );
}

export default CardList;
