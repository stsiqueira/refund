import { useState } from "react"
import { Formik } from 'formik';

const AddRefund = ( props ) =>{
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [orderDate, setOrderDate] = useState()
    const [orderNumber, setOrderNumber] = useState()
    const [description, setDescription] = useState()
    const [totalAmount, setTotalAmount] = useState()

    const addRefund = (event) => {
        event.preventDefault();
        props.setAdd(false)
      }
    return (
        <div>
          <Formik
            initialValues={{ 
              name:'', 
              phone:'', 
              orderDate:'',  
              description: '', 
              orderNumber: 0, 
              totalAmount: 0, 
            }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
                ) {
                errors.name = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              }, 400);
            }}
          >

          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
              <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              />
              {errors.name && touched.name && errors.name}

              <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
              Submit
              </button>
              </form>
          )}
          </Formik>
  
      </div>
    );
  }
  
  export default AddRefund;
  

