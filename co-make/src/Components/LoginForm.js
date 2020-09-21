import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import formSchema from '../Validation/formSchema';
import * as yup from 'yup';

const Login = (props) => {

    // initial state
    const initialValues = {
        username: '',
        password: '',
    }

    const initialErrors = {
        username: '',
        password: '',
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    //Change function

    const onChange = evt => {
        
        const { name, value } = evt.target
        validateChange(name, value);
        setFormValues({ ...formValues, [name]: value, })
    }

    // yup schema
    useEffect(() => {
        formSchema.isValid(formValues).then((valid) => {
          setButtonDisabled(!valid);
        });
      }, [formValues]);


   const validateChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
      
  };

    //Submit function

    const onSubmit = evt => {
        evt.preventDefault();
        axios.post('',formValues)
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialValues);
            })
            console.log(formValues);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                <input 
                type='text' 
                name='username' 
                placeholder='username' 
                value={formValues.username}
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                <input 
                type='password' 
                name='password' 
                placeholder='password' 
                value={formValues.password}
                onChange={onChange}
                />
            </label>
            <br></br>
            <button type='submit' disabled={buttonDisabled}>Login</button>
            <div className ='errors'>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
            </div>
            <button>Register</button>


        </form>
    )

}

export default Login;