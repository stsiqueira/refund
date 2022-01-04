import { useState } from "react"
import { addData } from "../services/SpecialFunctions"

const AddRefund = ( props ) =>{
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [orderDate, setOrderDate] = useState()
    const [orderNumber, setOrderNumber] = useState()
    const [description, setDescription] = useState()
    const [totalAmount, setTotalAmount] = useState()

    const dbURL = "http://localhost:5000/refunds"

    const addRefund = (event) => {
      const newDate = new Date()

        event.preventDefault();
        const newRefund = {
          name: name,
          phone: phone,
          orderDate: orderDate,
          callDate: `${newDate.getFullYear()}-${(newDate.getMonth()+1)}-${newDate.getDate()}`,
          orderNumber: orderNumber,
          description: description,
          totalAmount: totalAmount,
          status: "awaiting approval",
        }
        addData( dbURL , newRefund )
        props.setRefunds([...props.refunds, newRefund])
        props.setAdd(false)
      }
    return (
        <div className="form">
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
                <label className="description">
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
  
  export default AddRefund;
  

