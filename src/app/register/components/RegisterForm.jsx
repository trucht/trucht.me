"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match.")
    .required("Confirm password is required."),
});

const InputField = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => (
  <div className="w-full">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className="w-full h-14 py-4 px-6 rounded-xl text-xs border border-[#32403B] border-opacity-10 placeholder:text-black placeholder:text-opacity-50"
    />
    {error && (
      <div>
        <small className="text-red-500">{error}</small>
      </div>
    )}
  </div>
);

const RegisterForm = () => {
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);

  const checkEmailAvailability = async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isAvailable = email !== "test@example.com";
        resolve(isAvailable);
      }, 1000);
    });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const isAvailable = await checkEmailAvailability(values.email);
        if (!isAvailable) {
          setIsEmailAvailable(false);
          setSubmitting(false);
          return;
        }

        setTimeout(() => {
          alert("Registration successful!");
          setSubmitting(false);
          resetForm();
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="bg-[#F6FBF9] w-full md:w-1/2 xl:w-1/3 p-6 md:p-10 flex flex-col justify-center items-center rounded-[32px]">
      <h2 className="text-[#212B27] text-center text-2xl lg:text-4xl font-bold mb-10">
        Create an account
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full gap-4 flex flex-col items-center"
      >
        <InputField
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="First Name"
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <InputField
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Last Name"
          error={formik.touched.lastName && formik.errors.lastName}
        />
        <InputField
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
          error={formik.touched.email && formik.errors.email}
        />
        <InputField
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          error={formik.touched.password && formik.errors.password}
        />
        <InputField
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm Password"
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        {!isEmailAvailable && (
          <p className="text-[#32403B] text-base text-center">Email is already registered.</p>
        )}
        <button
          type="submit"
          className="h-14 w-2/3 bg-[#84C7AE] text-white rounded-2xl font-semibold mt-10"
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
