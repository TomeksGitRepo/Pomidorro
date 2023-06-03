"use client";

import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SigninForm = () => {
  let passwordInput = useRef({} as HTMLInputElement);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (

    <div className="flex flex-col justify-evenly"> 
    <div className="container p-4 bg-slate-300/30 max-w-sm rounded-2xl">
      <form
        className="flex flex-col justify-between"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col justify-between">
          <label className="text-xl mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-slate-400 rounded-lg focus:ring-4 focus:ring-primary focus:border-primary p-2.5 text-sm"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 mt-1">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between my-1">
            <label className="text-xl mb-2" htmlFor="password">
              Password
            </label>
            <Button
            variant="text"
            >
              Forgot password?
            </Button>
          </div>
          <input
            className="border border-slate-400 rounded-lg focus:ring-4 valid:focus:ring-primary valid:focus:border-primary p-2.5 text-sm mb-4 invalid:text-red-600 invalid:focus:ring-red-600"
            ref={(elem) => {
              if (elem !== null) passwordInput.current = elem;
            }}
            id="password"
            name="password"
            type="password"
            onChange={(event) => {
              formik.handleChange(event);
              passwordInput?.current?.setCustomValidity(
                formik.errors.password ? formik.errors.password : ""
              );
            }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button
          className="bg-primary text-white font-bold py-2 px-4 rounded w-full border-none my-2"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
    <div className="container p-4 bg-slate-300/30 max-w-sm rounded-2xl mt-2">
      <Typography variant="body1" className="text-left">
        Don't have an account? 
      </Typography>
      <Button
        variant="text"
        className="text-center w-full hover:bg-transparent"
      >Create new account</Button>
    </div>
    </div>
  );
};

export default SigninForm;
