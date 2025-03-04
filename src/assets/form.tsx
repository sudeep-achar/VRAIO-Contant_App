import React, { useState } from "react";
import { createTableProps, user } from "./user";
import userDetails from "./data";

function ContactForm(props: createTableProps) {
  const [firstname, setFirstname] = useState(props.initialUser.firstName);
  const [lastname, setLastname] = useState(props.initialUser.lastName);
  const [nickname, setNickname] = useState(props.initialUser.nickname);
  const [dateofbirth, setDateofbirth] = useState(props.initialUser.dateOfBirth);
  const [phonenumber, setPhonenumber] = useState<string[]>(
    props.initialUser.phoneNumber
  );
  const [email, setEmail] = useState<string[]>(props.initialUser.email);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); //page not refreshing
    const newUser: user = {
      id: props.initialUser.id,
      firstName: firstname,
      lastName: lastname,
      nickname: nickname,
      dateOfBirth: dateofbirth,
      phoneNumber: phonenumber,
      email: email,
    };
    console.log("Form submitted:", newUser);
    props.addUser(newUser);
  }

  function handlePhoneNumberChange(index: number, value: string) {
    if (value.length <= 10 && /^\d*$/.test(value)) {
      const newPhoneNumber = [...phonenumber];
      newPhoneNumber[index] = value;
      setPhonenumber(newPhoneNumber);
    }
  }

  function handleEmailChange(index: number, value: string) {
    const newEmail = [...email];
    newEmail[index] = value;
    setEmail(newEmail);
  }

  function addPhoneNumber() {
    setPhonenumber([...phonenumber, ""]);
  }

  function addEmail() {
    setEmail([...email, ""]);
  }

  function removePhoneNumber(index: number) {
    const newPhoneNumber = phonenumber.filter((_, i) => i !== index);
    setPhonenumber(newPhoneNumber);
  }

  function removeEmail(index: number) {
    const newEmail = email.filter((_, i) => i !== index);
    setEmail(newEmail);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="nickname">Nickname:</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateofbirth">Date of Birth:</label>
        <input
          type="date"
          id="dateofbirth"
          value={dateofbirth}
          onChange={(e) => setDateofbirth(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        {phonenumber.map((number, index) => (
          <div key={index}>
            <span>
              <input
                type="tel"
                value={number}
                onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                required
              />
              <button
                type="button"
                className="plus-minus-button"
                onClick={() => removePhoneNumber(index)}
              >
                -
              </button>
            </span>
          </div>
        ))}
        <button type="button" className="plus-button" onClick={addPhoneNumber}>
          +
        </button>
      </div>

      <div>
        <label>Email:</label>
        {email.map((mail, index) => (
          <div key={index}>
            <input
              type="email"
              value={mail}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              required
            />
            <button
              type="button"
              className="plus-minus-button"
              onClick={() => removeEmail(index)}
            >
              -
            </button>
          </div>
        ))}
        <button type="button" className="plus-button" onClick={addEmail}>
          +
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
