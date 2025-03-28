import { useEffect, useState } from "react";
import userDetails from "./assets/data";
import "./App.css";
import ContactForm from "./assets/form";
import ContactTable from "./assets/table";
import { user } from "./assets/user";
import UserDetails from "./assets/userDetails";
import http from "./services/http";
import { getContacts, upsertContact } from "./services/constant";

function App() {
  const [users, setUsers] = useState(userDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState<user>(emptyUser());
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);

  useEffect(() => {
    http
      .get(getContacts)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addUser(user: user) {
    if (!isEdit) {
      http
        .post(upsertContact, user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setUsers([...users, user]); //... array destructuring // ee case alli append(add maaduke) maaduke array destructing use maaddudhu
    } else {
      http
        .post(upsertContact, user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
  function emptyUser() {
    // this function is for initial data
    const newUser: user = {
      id: 0,
      firstName: "",
      lastName: "",
      nickname: "",
      dateOfBirth: "",
      phoneNumber: [],
      email: [],
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
        className="AddContact"
        onClick={() => {
          setIsModalOpen(true);
          setIsEdit(false);
        }}
      >
        +
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
