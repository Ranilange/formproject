import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

const Register = () => {
    const schema = Yup.object().shape({
        username: Yup.string()
            .required("enter username")
            .min(6, "the username should have 8 charcters"),
        password: Yup.string()
            .required("enter password")
            .min(8, "the password should have 8 charcters"),
        password2: Yup.string()
            .required("enter password")
            .min(8, "the password should have 8 charcters")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
    });

    const [userName, setUserName] = useState("");
    return (
        <div>
            <h1>login</h1>
            <Formik
                validationSchema={schema}
                initialValues={{
                    username: "",
                    password: "",
                    password2: "",
                    checkbox: false,
                }}
                onSubmit={(values) => alert("hello" + JSON.stringify(values))}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={handleChange}
                            value={values.username}
                            onBlur={handleBlur}
                        />
                        <p>{errors.username && touched.username && errors.username}</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                        />
                        <p>{errors.password && touched.password && errors.password}</p>
                        <h1>enter password agian</h1>
                        <input
                            type="password"
                            name="password2"
                            placeholder="password"
                            onChange={handleChange}
                            value={values.password2}
                            onBlur={handleBlur}
                        />
                        <p>{errors.password2 && touched.password2 && errors.password2}</p>

                        <label>
                            <input type="checkbox" name="checkbox" onChange={handleChange} />i
                            agree to the terms
                        </label>
                        <br></br>

                        {values.checkbox ? (
                            <button
                                type="submit"
                                onClick={() => setUserName(values.username)}
                            >
                                login
                            </button>
                        ) : (
                            <div></div>
                        )}
                    </form>
                )}
                
            </Formik>
            <h1>Welcome, {userName}</h1>
        </div>
    );
};

export default Register;
