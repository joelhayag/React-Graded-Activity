import React, {useState} from "react";

const Exercise6 = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleAlertClick() {
    alert('Hello ' + firstName + " " + lastName + "!");
  }

  return (
    <>
      <form onSubmit={handleAlertClick}>
        <div>
          <input value={firstName}
            onChange={
              e => setFirstName(e.target.value)
            }
            placeholder="First name"
            type="text"
            name="firstName"
            required/>
        </div>
        <div>
          <input value={lastName}
            onChange={
              e => setLastName(e.target.value)
            }
            placeholder="Last name"
            type="text"
            name="lastName"
            required/>
        </div>
        <button type="submit">GREET ME</button>
      </form>
    </>
  );
};

export default Exercise6;
