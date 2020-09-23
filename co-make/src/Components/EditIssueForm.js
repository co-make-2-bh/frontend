import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ContextObject } from "../contexts/context";
import {
  CardStyle,
  ListingStyle,
  StyledH1,
  ButtonHover,
} from "../styles/EverythingElseStyles";

export default function EditIssueForm() {
  const initialValues = {
    title: "",
    name: "",
    description: "",
  };
  const { issues, addIssues, getIssues } = useContext(ContextObject);
  const [formValues, setFormValues] = useState(initialValues);
  const history = useHistory();
  const params = useParams();
  const id = params.id;
  console.log("test", formValues);

  useEffect(() => {
    axiosWithAuth()
      .get(`/issues/issue/${id}`)
      .then((response) => {
        console.log("edit", response);
        setFormValues(response.data);
      });
  }, [issues, id]);

  const formSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .put(`/issues/issue/${id}`, {
        title: formValues.title,
        description: formValues.description,
      })
      .then((response) => {
        addIssues([response.data, ...issues]);
        console.log("editform", issues);
        getIssues();
        history.push(`/listings`);
      })
      .catch((error) => {
        alert(
          `Oops.. Looks like there was an error. ${error.response.data.message}`
        );
      })
      .finally(() => {
        setFormValues(initialValues);
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    // validateChange(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <ListingStyle>
      <StyledH1>Edit Issue</StyledH1>
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
            {/* Title: */}
            <input
              type="text"
              name="title"
              placeholder='Edit title here'
              defaultValue={formValues.title}
              value={formValues.title}
              onChange={onChange}
            />
          </label>
          
          <label htmlFor="description">
            Description:
            <textarea
              cols="50"
              rows="20"
              style={{ resize: "none" }}
              name="description"
              defaultValue={formValues.description}
              value={formValues.description}
              onChange={onChange}
            />
          </label>
          <ButtonHover>Submit</ButtonHover>
        </form>
      </CardStyle>
    </ListingStyle>
  );
}
