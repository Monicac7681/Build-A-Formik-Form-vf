import React from 'react';
import './index.css';
import { useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',      
    },
    onSubmit: values =>{
      console.log('form:', values);
      alert(JSON.stringify('Login Successful'));
    },
    validate: values =>{
      let errors = {};
      if(!values.emailField) {
        errors.emailField = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Invalid email address';
      }
     
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
          <div>Username:</div>
          <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div>: null}    
          <div>Password:</div>
          <input type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div id="pswError" style={{color:'red'}}>{formik.errors.pswField}</div>: null}               
          <br/>
          <button type="submit">Submit</button>
          
      </form>      
    </div>
  );
}

export default App;
