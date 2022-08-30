import { Formik, Field } from "formik";
import * as Yup from "yup";
import React from "react";

const Contact = () => {
    const schema = Yup.object().shape({
        firstname: Yup.string().required("Pls enter an firstname"),
        reason: Yup.string().required("enter reason").max(100, "the reason should contain less 100 characters"),
        hearFrom: Yup.string().required("select option")
      });
    return (
        <div>
            <h1>Contact</h1>
            <Formik
                initialValues={{ firstname: "", reason: "" }}
                onSubmit={(values) => alert(JSON.stringify(values))}
                validationSchema={schema}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    handleBlur,
                    touched,
                }) => (
                    <form action="" onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="firstname"
                            onChange={handleChange}
                            value={values.firstname}
                            onBlur={handleBlur}
                        ></input>
                        <p style={{ color: "red" }}>
                            {errors.firstname && touched.firstname && errors.firstname}
                        </p>
                        <input
                            type="text"
                            name="reason"
                            value={values.reason }
                            placeholder="reason of contact"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></input>
                        <p style={{ color: "red" }}>
                            {errors.reason && touched.reason && errors.reason}
                        </p>
                        <span>How did you hear from us?</span>
                        <Field  as="select" 
                                name="hearFrom" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >
                            
                            <option value="friends">Friends</option>
                            <option value="internet">Internet</option>
                            <option value="other">Other</option>
                            
                        </Field>
                        <p style={{ color: "red" }}>
                            {errors.hearFrom && touched.hearFrom && errors.hearFrom}
                        </p>
                        
                        <button type="submit">submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
