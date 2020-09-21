import React, { useState, useEffect } from "react";
import axios from "axios";
import formSchema from "../Validation/formSchema";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";

const Register = (props) => {
const history = useHistory();
  
    /////INITAL STATES/////
  const initialValues = {
    username: "",
    fullName: "",
    password: "",
  };

  const initialErrors = {
    username: "",
    fullName: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  /////HELPER FUNCTION/////
  const onChange = (evt) => {
    const { name, value } = evt.target;
    validateChange(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

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

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("", formValues)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialValues);
    });
    console.log(formValues);
    history.push('/')
  };


  /////SIDE EFFECTS/////
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);


  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="fullName"
          placeholder="enter full name"
          value={formValues.fullName}
          onChange={onChange}
        />
      </label>
      <br></br>

      <label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formValues.username}
          onChange={onChange}
        />
      </label>
      <br></br>

      <label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formValues.password}
          onChange={onChange}
        />
      </label>
      <br></br>
      <button disabled={buttonDisabled}>Register</button>
      <div className="errors">
        <p>{errors.fullName}</p>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
      </div>
    </form>
  );
};

export default Register;
