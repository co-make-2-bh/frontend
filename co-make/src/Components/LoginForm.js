import React, { useState, useEffect } from "react";
import axios from "axios";
import formSchema from "../Validation/formSchema";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Login = (props) => {
  /////INITAL STATES/////
  const initialValues = {
    username: "",
    password: "",
  };

  const initialErrors = {
    username: "",
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
      .then((res) => {
        // Need history.push history.push("/register"); --- test it out when we get the backend link -- or we can use the <Link Route
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialValues);
      });
    console.log(formValues);
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
      <button type="submit" disabled={buttonDisabled}>
        Login
      </button>
      <Link to="/register">
      <button>Register</button>
      </Link>
      <div className="errors">
        <p>{errors.username}</p>
        <p>{errors.password}</p>
      </div>
    </form>
  );
};

export default Login;
