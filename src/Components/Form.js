import React, { useState } from "react";
import classes from "./Form.module.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import axios from "axios";

const Form = () => {
  const [dataError, setDataError] = useState(false);

  const onSubmit = (values, actions) => {
    axios
      .post("http://localhost:3001", values)
      .then((res) => {})
      .catch((error) => {
        setDataError(true);
      });
    actions.resetForm("");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <>
      {!dataError ? (
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name </label>
            <input
              value={values.firstName}
              onChange={handleChange}
              data-testid="firstName"
              id="firstName"
              type="text"
              placeholder="First Name"
              onBlur={handleBlur}
              className={
                errors.firstName && touched.firstName ? "input-error" : ""
              }
            />
            {errors.firstName && touched.firstName && (
              <p className={classes.error}>{errors.firstName}</p>
            )}
            <label htmlFor="lastName">Last Name </label>
            <input
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
              type="text"
              placeholder="Last Name"
              onBlur={handleBlur}
              className={
                errors.lastName && touched.lastName ? "input-error" : ""
              }
            />
            {errors.lastName && touched.lastName && (
              <p className={classes.error}>{errors.lastName}</p>
            )}
            <label htmlFor="email">Email </label>
            <input
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Email"
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && (
              <p className={classes.error}>{errors.email}</p>
            )}
            <label htmlFor="eventDate">Event Date </label>
            <input
              value={values.date}
              onChange={handleChange}
              id="date"
              type="date"
              onBlur={handleBlur}
              data-testid="date-element"
              className={errors.date && touched.date ? "input-error" : ""}
            />
            {errors.date && touched.date && (
              <p className={classes.error}>{errors.date}</p>
            )}
            <button data-testid="button" disabled={isSubmitting} type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div data-testid="error" className={classes.dataError}>
          <p>
            There is an problem with sending your data, Please reload the page
            and try again
          </p>
        </div>
      )}
    </>
  );
};

export default Form;
