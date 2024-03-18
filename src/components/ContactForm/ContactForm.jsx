import css from './ContactForm.module.css';
// import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from 'react';

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    number: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      name: "",
      number: "",
    });
  };

  return (
    <form className={css.formBox} onSubmit={handleSubmit}>
      <label className={css.labelBox}>
      <span>Name</span>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      </label>
      <label className={css.labelBox}>
      <span>Number</span>
      <input
        type="text"
        name="number"
        value={values.number}
        onChange={handleChange}
      />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};


export default ContactForm
