import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: yup
    .string()
    .required("Please type in a message and I will get back to you"),
});
