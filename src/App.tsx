import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import userDetails from "./assets/data";
import "./App.css";
import ContactForm from "./assets/form";
import ContactTable from "./assets/table";
import { user } from "./assets/user";
import UserDetails from "./assets/userDetails";

function App() {
  const [users, setUsers] = useState(userDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState<user>(emptyUser());
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);
  function addUser(user: user) {
    if (!isEdit) {
      setUsers([...users, user]); //... array destructuring // ee case alli append(add maaduke) maaduke array destructing use maaddudhu
    } else {
      const newUsers = users.map((u) => {
        //map fumction is works like a for each loop
        if (u.id === user.id) {
          return user;
        } else {
          return u;
        }
      });
      setUsers(newUsers);
    }
    setIsModalOpen(false); // popup close
  }
  function emptyUser() { // this function is for initial data
    const newUser: user = {
      id: Date.now(),
      firstName: "",
      lastName: "",
      nickname: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
    };
    return newUser;
  }
  return (
    <>
      <ContactTable
        users={users}
        setUsers={setUsers}
        setIsModalOpen={setIsModalOpen}
        setIsEdit={setIsEdit}
        setCurrentUser={setCurrentUser}
        setIsUserDetailsOpen={setIsUserDetailsOpen}
      />
      <button
        onClick={() => {
          setIsModalOpen(true);
          setIsEdit(false);
        }}
      >
        Add Contact
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setIsModalOpen(false)}>
               &times;{/*<-- this is for close button--> */}
            </button>
            <ContactForm
              addUser={addUser}
              initialUser={isEdit ? currentUser : emptyUser()}
            />
          </div>
        </div>
      )}
      {isUserDetailsOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close"
              onClick={() => setIsUserDetailsOpen(false)}
            >
              &times;
            </button>
            <UserDetails user={currentUser} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
