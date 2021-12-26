

const CardItem = ( props ) =>{
  return (
    <div className="Card">
      <div className="Row Row1">
        <div className="name">
          <p>Name: {props.refund.name} ({ props.refund.phone })</p>
        </div>
        <p> {props.refund.totalAmount}</p>
      </div>
      <div className="Row Row2">
        <p>Order number: {props.refund.orderNumber}</p>
        <p>Order date: {props.refund.orderDate}</p>
        <p>Call date: {props.refund.callDate}</p>
      </div>
      <div className="Row Row3">
        <p>Description:</p>
        <p>{props.refund.description}</p>
      </div>

    </div>
  );
}

export default CardItem;
