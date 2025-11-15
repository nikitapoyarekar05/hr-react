import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  employeeId: string;
  joiningDate: string;
}

interface FormError {
  name: string;
  email: string;
  employeeId: string;
  joiningDate: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  employeeId: "",
  joiningDate: "",
};

const initialError: FormError = {
  name: "Name must be at least 4 characters long and only contain letters and spaces.",
  email: "Email must be a valid email address.",
  employeeId: "Employee ID must be exactly 6 digits.",
  joiningDate: "Joining Date cannot be in the future.",
};

function EmployeeValidationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormError>(initialError);

  const validateName = (value: string) => {
    if (value.trim().length < 4) return initialError.name;
    if (!/^[A-Za-z\s]+$/.test(value.trim())) return initialError.name;
    return "";
  };

  const validateEmail = (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
      return initialError.email;
    return "";
  };

  const validateEmployeeId = (value: string) => {
    if (!/^\d{6}$/.test(value.trim())) return initialError.employeeId;
    return "";
  };

  const validateJoiningDate = (value: string) => {
    if (!value) return initialError.joiningDate;
    const today = new Date();
    const selected = new Date(value);
    if (selected > today) return initialError.joiningDate;
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update error messages live
    let errorMessage = "";

    if (name === "name") errorMessage = validateName(value);
    if (name === "email") errorMessage = validateEmail(value);
    if (name === "employeeId") errorMessage = validateEmployeeId(value);
    if (name === "joiningDate") errorMessage = validateJoiningDate(value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = Object.values(errors).every((err) => err === "");

    if (!isFormValid) return;

    console.log("Submitted Data:", formData);

    // Reset form
    setFormData(initialFormData);
    setErrors(initialError);
  };

  const isFormValid =
    Object.values(errors).every((err) => err === "") &&
    Object.values(formData).every((val) => val.trim() !== "");

  return (
    <>
      <h1>Employment Validation form</h1>
      <form
        className="layout-column align-items-center mt-20"
        onSubmit={handleSubmit}
      >
        {/* NAME */}
        <div className="layout-column align-items-start mb-10 w-50">
          <input
            className="w-100"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error mt-2">{errors.name}</p>}
        </div>

        {/* EMAIL */}
        <div className="layout-column align-items-start mb-10 w-50">
          <input
            className="w-100"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error mt-2">{errors.email}</p>}
        </div>

        {/* EMPLOYEE ID */}
        <div className="layout-column align-items-start mb-10 w-50">
          <input
            className="w-100"
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            maxLength={6}
            onChange={handleChange}
          />
          {errors.employeeId && (
            <p className="error mt-2">{errors.employeeId}</p>
          )}
        </div>

        {/* JOINING DATE */}
        <div className="layout-column align-items-start mb-10 w-50">
          <input
            className="w-100"
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
          />
          {errors.joiningDate && (
            <p className="error mt-2">{errors.joiningDate}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" data-testid="submit-btn" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </>
  );
}

export default EmployeeValidationForm;
