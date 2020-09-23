import React, { useState, useEffect } from "react";
import axios from "axios";
import formSchema from "../Validation/formSchema";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import {
  ListingStyle,
  CardStyle,
  StyledH1,
} from "../styles/EverythingElseStyles";

const Register = (props) => {
  /////INITAL STATES/////
  const initialValues = {
    username: "",
    phone: "",
    password: "",
    primaryemail: "",
  };

  const initialErrors = {
    username: "",
    fullName: "",
    password: "",
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
      .post("https://bw-comakeapp-java.herokuapp.com/createnewuser", {
        username: formValues.username,
        phone: formValues.phone,
        password: formValues.password,
        primaryemail: formValues.primaryemail,
      })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialValues);
        console.log("hi");
      });
  };

  /////SIDE EFFECTS/////
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <ListingStyle>
      <StyledH1>Register</StyledH1>
      <br />
      <CardStyle>
        <form onSubmit={onSubmit}>
          <label>
            <input
              type="text"
              name="phone"
              placeholder="enter full phone"
              value={formValues.phone}
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
          <button disabled={buttonDisabled}>Register</button>
          <div className="errors">
            <p>{errors.fullName}</p>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
          </div>
        </form>
      </CardStyle>
    </ListingStyle>
  );
};

export default Register;
