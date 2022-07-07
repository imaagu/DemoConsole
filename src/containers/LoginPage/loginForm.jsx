import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { EyeIcon } from "../../assets/icons/index";

const LoginForm = ({ onSubmit }) => {
  const [isVisible, setVisibiity] = useState(false);

  const handleVisible = () => {
    setVisibiity(!isVisible);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(fields) => {
        onSubmit(fields);
      }}
    >
      {({ errors, touched }) => (
        <Form className="login100-form ">
          <span className="login100-form-title p-b-26">Login</span>
          <span className="login100-form-title p-b-48"></span>

          <div className=" login-form-div" style={{ marginBottom: '2rem' }}>
            <div className="row login_div_bottom">
              <div className="col-10">
                {' '}
                <Field
                  name="username"
                  type="text"
                  placeholder="Username"
                  className={
                    'form-control  login-form-box-field' +
                    (errors.username && touched.username
                      ? ' is-invalid error-text-color'
                      : '')
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback "
                />
              </div>{' '}
            </div>
          </div>
          <div className=" login-form-div" style={{ marginBottom: '2rem' }}>
            <div className="row login_div_bottom">
              <div className="col-10">
                {' '}
                <Field
                  id="pass"
                  name="password"
                  type={isVisible ? 'text' : 'password'}
                  placeholder={'Enter Password'}
                  className={
                    'form-control login-form-box-field' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />{' '}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-1">
                {' '}
                <div
                  className={
                    isVisible
                      ? 'text-right text-primary'
                      : 'text-right text-secondary'
                  }
                  onClick={handleVisible}
                >
                  {' '}
                  <EyeIcon />{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button id="login_btn" type="Login" className="login100-form-btn">
                Login
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
