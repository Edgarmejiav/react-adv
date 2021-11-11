import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components/index";
/* import { MyCheckbox } from "../components/MyCheckbox";
import { MySelect } from "../components/MySelect ";
import { MyTextInput } from "../components/MyTextInput"; */
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik basic toturial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
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
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida.")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Fernando"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Herrera"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="jonh@google.com"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Develper</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>
            <MyCheckbox label="Termns & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
