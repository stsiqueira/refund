import { useState } from "react"

const AddItem = ( props ) =>{
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [orderDate, setOrderDate] = useState()
    const [orderNumber, setOrderNumber] = useState()
    const [description, setDescription] = useState()
    const [totalAmount, setTotalAmount] = useState()

    const addRefund = (event) => {
        event.preventDefault();
        const date = new Date();
        const newRefund = {
          name:name,
          phone:phone,
          orderNumber:orderNumber,
          orderDate:orderDate,
          description:description,
          totalAmount:totalAmount,
          
        }
        console.log(newRefund)
        props.setRefunds([...props.refunds, newRefund])


        props.setAdd(false)
      }
    return (
      <div className="Card">
        <form onSubmit={addRefund} className="formRow">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                </label>
                <label>
                    Phone:
                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}  />
                </label>
                <label>
                    Order Number:
                    <input type="text" value={orderNumber} onChange={(e)=> setOrderNumber(e.target.value)} />
                </label>
                <label>
                    Order Date:
                    <input type="date" value={orderDate} onChange={(e)=> setOrderDate(e.target.value)} />
                </label>
                <div className="description">
                    <label>
                        Description:
                        <textarea rows={4} value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    </label>
                </div>
                <div className="totalAmount">
                    <label>
                        Total:
                        <input type="number" maxLength={6} value={totalAmount} onChange={(e)=> setTotalAmount(e.target.value)}/>
                    </label>
                </div>
                <div className="button">
                    <button onClick={()=> props.setAdd(false)}> Cancel</button>
                    <input type="submit" value="Confirm" />
                </div>
        </form>
  
      </div>
    );
  }
  
  export default AddItem;
  