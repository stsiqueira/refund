import NumberFormat from 'react-number-format';


const CardItem = ( props ) =>{

  return (
    <div className="Card" onClick={()=> props.ShowDetail(props.refund.id)}>
      <div className="Row Row0" style={{background: props.refund.approved ? 'green' : 'red'}}>

      </div>
      <div className="Row Row1">
        <div className="name">
          <p><span style={{fontWeight:'bold'}}>Name:</span> {props.refund.name}  
          <NumberFormat value={props.refund.phone}  displayType={'text'} format="  +1 (###) ###-####"/>
            </p>
        </div>
        <NumberFormat value={props.refund.totalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2}/>

      </div>
      <div className="Row Row2">
        <p><span style={{fontWeight:'bold'}}>Order number:</span> {props.refund.orderNumber}</p>
        <p><span style={{fontWeight:'bold'}}>Order date:</span>  {props.refund.orderDate}</p>
        <p><span style={{fontWeight:'bold'}}>Call date:</span>  {props.refund.callDate}</p>
      </div>
      <div className="Row Row3">
        <p style={{fontWeight:'bold'}}>Description:</p>
        <p className='description'>{props.refund.description}</p>
      </div>

    </div>
  );
}

export default CardItem;
