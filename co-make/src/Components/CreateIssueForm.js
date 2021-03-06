import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ContextObject } from "../contexts/context";
import {
  CardStyle,
  ListingStyle,
  StyledH1,
  ButtonHover,
  ErrorColor,
} from "../styles/EverythingElseStyles";

import * as yup from "yup";
import IssueSchema from "../Validation/IssueSchema";

export default function CreateIssueForm() {
  const { issues, addIssues, getIssues } = useContext(ContextObject);

  const initialValues = {
    title: "",
    name: "",
    description: "",
  };

  const initialErrors = {
    title: "",
    name: "",
    description: "",
  };

  const history = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/issues/issue", {
        title: formValues.title,
        categoryId: formValues.categoryId,
        description: formValues.description,
      })
      .then((res) => {
        console.log("created", res.config.data);
        addIssues([res.config.data, ...issues]);
        getIssues();
        history.push("/listings");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialValues);
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validateChange(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const validateChange = (name, value) => {
    yup
      .reach(IssueSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
    console.log(buttonDisabled);
  };

  useEffect(() => {
    IssueSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <ListingStyle>
      <StyledH1>Add New Issue</StyledH1>
      <CardStyle>
        <ButtonHover
          onClick={() => {
            history.push("/listings");
          }}
        >
          Back
        </ButtonHover>
        <form onSubmit={formSubmit}>
          <label htmlFor="title">
            
            <input
              type="text"
              name="title"
              placeholder="Enter title here"
              value={formValues.title}
              onChange={onChange}
            />
          </label>
          {/* <label htmlFor="name">
            Your name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={onChange}
            />
          </label> */}
          <label htmlFor="description">
            Description:
            <textarea
              cols="50"
              rows="20"
              style={{ resize: "none" }}
              name="description"
              value={formValues.description}
              onChange={onChange}
            />
          </label>
          <ButtonHover type="submit" disabled={buttonDisabled}>
            Submit
          </ButtonHover>
          <div className="errorMessage">
            <ErrorColor>{errors.title}</ErrorColor>
            <ErrorColor>{errors.name}</ErrorColor>
            <ErrorColor>{errors.description}</ErrorColor>
          </div>
        </form>
      </CardStyle>
    </ListingStyle>
  );
}
