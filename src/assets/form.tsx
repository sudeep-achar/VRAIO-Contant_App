import React, { useState } from "react";
import { createTableProps, user } from "./user";

function ContactForm(props: createTableProps) {
  const [firstname, setFirstname] = useState(props.initialUser.firstName);
  const [lastname, setLastname] = useState(props.initialUser.lastName);
  const [nickname, setNickname] = useState(props.initialUser.nickname);
  const [dateofbirth, setDateofbirth] = useState(props.initialUser.dateOfBirth);
  const [phonenumber, setPhonenumber] = useState(props.initialUser.phoneNumber);
  const [email, setEmail] = useState(props.initialUser.email);

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
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="tel"
          id="phonenumber"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
