import * as yup from "yup";

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Please tell me what's your Name"),
  lastName: yup.string().required("Please tell me what's your Last Name"),
  email: yup
    .string()
    .email("Please enter Valid email adress")
    .required("Please enter email adress"),
  date: yup.date().required("Please enter event date"),
});
