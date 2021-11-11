import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("requerido"),
      lastName: Yup.string()
        .max(10, "Debe tener 10 caracteres o menos")
        .required("requerido"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
  });
  return (
    <div>
      <h1>Formik basic toturial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
