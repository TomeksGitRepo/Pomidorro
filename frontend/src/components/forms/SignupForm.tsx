"use client";

import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

const SignupForm = () => {
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
    <div className="z-30 flex flex-col justify-evenly">
      <div className="container max-w-sm rounded-2xl bg-slate-300/60 p-4">
        <form
          className="flex flex-col justify-between"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col justify-between">
            <label className="mb-2 text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-lg border border-slate-400 p-2.5 text-sm focus:border-primary focus:ring-4 focus:ring-primary"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-1 text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col justify-between">
            <div className="my-1 flex flex-row justify-between">
              <label className="mb-2 text-xl" htmlFor="password">
                Password
              </label>
            </div>
            <input
              className="mb-1 rounded-lg border border-slate-400 p-2.5 text-sm invalid:text-red-600 focus:ring-4 valid:focus:border-primary valid:focus:ring-primary invalid:focus:ring-red-600"
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
              <div className="mt-1 text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <Button
            className="my-2 w-full rounded border-none bg-primary px-4 py-2 font-bold text-white"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
