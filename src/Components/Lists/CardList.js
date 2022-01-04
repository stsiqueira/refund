import { useState } from "react";
import CardItem from "../Item/CarItem";


const CardList = ( props ) =>{

  return (
    <div className="Cards">
      {
        props.refunds.map((refund, index)=>{

          return(
            <div key={refund.id}>
              <p >{
                index == 0 ?
                refund.callDate
                : props.refunds[index].callDate == props.refunds[index-1].callDate ? "" : refund.callDate
                }</p>

              <CardItem refund={refund}  ShowDetail={props.ShowDetail}/>
            </div>
          )

        })

      }

    </div>
  );
}

export default CardList;
