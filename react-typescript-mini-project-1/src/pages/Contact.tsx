import React, { useState } from "react";
import { toast } from "sonner";
import InputField from "../components/InputField.";
import HeadTitle from "../components/HeadTitle";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: /^\S+@\S+\.\S+$/.test(formData.email)
        ? ""
        : "Invalid email address",
      password:
        formData.password.length >= 6
          ? ""
          : "Password must be at least 6 characters",
      mobile: /^[0-9]{10}$/.test(formData.mobile)
        ? ""
        : "Mobile must be 10 digits",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Submitted:", formData);
      toast.success("Form submitted successfully!");
      // Optionally clear form
      setFormData({ name: "", email: "", password: "", mobile: "" });
    } else {
      toast.error("Please fix the errors.");
    }
  };
  return (
    <>
      <div className="container py-[30px] mx-auto px-[1rem]">
        
        <div className="fillForm max-w-md grid gap-[20px] mx-auto mt-10 p-6 rounded-[30px] bg-white shadow-md rounded">
          <HeadTitle headStyle="!text-white">Contact</HeadTitle>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              maxLength={6}
            />
            <InputField
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
              maxLength={10}
            />
            <button
              type="submit"
              className="mt-4 btnSubmit text-white px-4 w-full cursor-pointer py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
