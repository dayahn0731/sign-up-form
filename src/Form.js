import React, { useState } from "react";

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    section: "1",
  });
  const [people, setPeople] = useState([]);
  const [section, setSection] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age } = person;
    if (firstName && email && age) {
      setPeople([
        ...people,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ firstName: "", email: "", age: "", section: "" });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name; // the name attribute in the input tag
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <h3 style={{ margin: "1rem" }}>Sign Up</h3>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="session">Section: </label>
            <select onChange={handleChange} name="section" className="select">
              <option value={1}>Section 1</option>
              <option value={2}>Section 2</option>
              <option value={3}>Section 3</option>
              <option value={4}>Section 4</option>
            </select>
          </div>
          <button type="submit">sign up</button>
        </form>
        <div>
          <h3>Section {section}</h3>
          <button
            className="btn"
            onClick={() => {
              setSection("1");
            }}
          >
            Section 1
          </button>
          <button
            className="btn"
            onClick={() => {
              setSection("2");
            }}
          >
            Section 2
          </button>
          <button
            className="btn"
            onClick={() => {
              setSection("3");
            }}
          >
            Section 3
          </button>
          <button
            className="btn"
            onClick={() => {
              setSection("4");
            }}
          >
            Section 4
          </button>
          <div className="itemlist">
            <h4>First Name</h4>
            <h4>Email</h4>
          </div>
          {people
            .filter((person) => person.section === section)
            .map((person) => {
              const { id, firstName, email } = person;
              return (
                <div className="itemlist" key={id}>
                  <h4>{firstName}</h4>
                  <p>{email}</p>
                </div>
              );
            })}
        </div>
      </article>
    </>
  );
};

export default ControlledInputs;
