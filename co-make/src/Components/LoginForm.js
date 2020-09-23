import React, { useState, useEffect } from "react";
import axios from "axios";
import formSchema from "../Validation/formSchema";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ListingStyle, CardStyle } from "../styles/EverythingElseStyles";

const Login = () => {
  /////INITAL STATES/////
  const initialValues = {
    username: "",
    password: "",
    phone: "",
    primaryemail: "",
  };

  const initialErrors = {
    username: "",
    password: "",
    phone: "",
    primaryemail: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();

  /////HELPER FUNCTION/////
  const onChange = (evt) => {
    evt.persist();
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
      .post(
        "https://bw-comakeapp-java.herokuapp.com/login",
        `grant_type=password&username=${formValues.username}&password=${formValues.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        history.push("/listings");
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
    <ListingStyle>
      <br />
      <CardStyle>
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
          <label>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={formValues.phone}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            <input
              type="text"
              name="primaryemail"
              placeholder="email"
              value={formValues.primaryemail}
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
      </CardStyle>
    </ListingStyle>
  );
};

export default Login;
