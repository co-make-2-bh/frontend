import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import { ContextObject } from "../contexts/context";
import { CardStyle, ListingStyle, StyledH1 } from '../styles/EverythingElseStyles';

// import { CardStyle } from "./ListingCard"; to be delted
// import { ListingStyle, StyledH1 } from "./ListingPage"; to be deleted

import * as yup from "yup";
import IssueSchema from '../Validation/IssueSchema';
import axios from "axios";

export default function CreateIssueForm() {
  // const { issues, addIssues, username, getIssues } = useContext(ContextObject);

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
  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [buttonDisabled, setButtonDisabled] = useState(true);


  const formSubmit = (evt) => {
    // e.preventDefault();
    // axiosWithAuth()
    //   .post("/api/", {
    //     title: formValues.title,
    //     categoryId: formValues.categoryId,
    //     description: formValues.description,
    //     imageURL: formValues.imageURL,
    //     username: username,
    //   })
    //   .then((res) => {
    //     addIssues([res.data, ...issues]);
    //     getIssues();
    //     history.push("/listings");
    //   })
    //   .catch((err) => console.log(err));
    
    evt.preventDefault();
    axios
      .post("", formValues)
      .then((res) => {
        history.push("/listings");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialValues);
      });
    console.log(formValues);

  };

  const onChange = (evt) => {
    const { name, value, } = evt.target;
    validateChange(name, value,);
    setFormValues({ ...formValues, [name]: value });
  };

  const validateChange = (name, value,) => {
    yup
      .reach(IssueSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
      console.log(buttonDisabled)
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
        <button
          onClick={() => {
            history.push("/listings");
          }}
        >
          Back
        </button>
        <form onSubmit={formSubmit}>
          <label htmlFor="title">
            Title:
            <input type="text" name="title" value={formValues.title} onChange={onChange} />
          </label>
          <label htmlFor="name">
            Your name:
            <input type="text" name="name" value={formValues.name} onChange={onChange} />
          </label>
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
          <button type="submit" disabled={buttonDisabled}>Submit</button>
          <div className='errorMessage'>
          <p>{errors.title}</p>
          <p>{errors.name}</p>
          <p>{errors.description}</p>
          </div>

        </form>
      </CardStyle>
    </ListingStyle>
  );
}
