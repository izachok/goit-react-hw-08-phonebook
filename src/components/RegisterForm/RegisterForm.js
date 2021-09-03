import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import FormButton from '../FormButton/FormButton';
import React from 'react';
import { authOperations } from '../../redux/auth';
import s from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';

export default function RegisterForm() {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string()
            .min(7, 'Password should be at least 7 symbols')
            .max(15, 'Password should be maximum 15 symbols')
            .required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(authOperations.register(values));
          resetForm();
        }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name:
            <Field className={s.fieldInput} name="name" type="text" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.validatorError}
            />
          </label>
          <label className={s.label}>
            Email:
            <Field className={s.fieldInput} name="email" type="email" />
            <ErrorMessage
              name="email"
              component="span"
              className={s.validatorError}
            />
          </label>
          <label className={s.label}>
            Password:
            <Field className={s.fieldInput} name="password" type="password" />
            <ErrorMessage
              name="password"
              component="span"
              className={s.validatorError}
            />
          </label>
          <FormButton type="submit">Register</FormButton>
        </Form>
      </Formik>
    </div>
  );
}
