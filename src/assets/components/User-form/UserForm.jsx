import React, { useState } from "react";
import "../User-form/UserForm.css";

function UserForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [telephoneValue, setTelephoneValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value.toUpperCase());
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setTelephoneValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUserIndex = props.user.findIndex(
      (user) => user.name === nameValue
    );

    const newService = props.service.join(", ");
    const newLanguages = props.numLanguages;
    const newTotal = props.total;

    if (existingUserIndex !== -1) {
      const updatedUsers = props.user.map((user, index) => {
        if (index === existingUserIndex) {
          const existingServices = user.service
            ? user.service.split(", ").map((s) => s.trim())
            : [];
          const allServices = [...existingServices, newService].filter(Boolean);

          return {
            ...user,
            service: [...new Set(allServices)].join(", "),
            languages:
              newLanguages !== undefined ? newLanguages : user.languages,
            total: (parseFloat(user.total) || 0) + (parseFloat(newTotal) || 0),
          };
        }
        return user;
      });
      props.setUser(updatedUsers);
    } else {
      const newUser = {
        name: nameValue,
        email: emailValue,
        telephone: telephoneValue,
        service: newService,
        languages: newLanguages,
        total: newTotal,
      };
      props.setUser([...props.user, newUser]);
    }

    console.log(props.user);
    setNameValue("");
    setEmailValue("");
    setTelephoneValue("");
  };

  return (
    <div className="container mt-4">
      <div
        className="card shadow p-4 rounded mx-auto"
        style={{
          maxWidth: "700px",
          fontSize: "0.9rem",
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h4 className="mb-3 fw-semibold">Ask Budget</h4>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <input
              type="text"
              className="form-control-sm"
              style={{ minWidth: "200px" }}
              placeholder="Name"
              value={nameValue}
              onChange={handleNameChange}
              required
              minLength={3}
            />
            <input
              type="text"
              className="form-control-sm"
              style={{ minWidth: "200px" }}
              placeholder="Telephone"
              value={telephoneValue}
              onChange={handleTelephoneChange}
              required
              minLength={9}
              maxLength={9}
            />
            <input
              type="email"
              className="form-control-sm"
              style={{ minWidth: "200px" }}
              placeholder="Email"
              value={emailValue}
              onChange={handleEmailChange}
              required
            />

            <button type="submit" className="btn-budget">
              Add budget{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
