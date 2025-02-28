import { useState } from "react";
import { tableProps } from "./user";
import { user } from "./user";

function ContactTable(props: tableProps) {
  function deleteUser(id: number) {
    props.setUsers(props.users.filter((user) => user.id !== id));
  }

  function editUser(user: user) {
    if (user) {
      props.setCurrentUser(user);
      props.setIsEdit(true);
      props.setIsModalOpen(true);
    }
  }
  function viewUserDetails(user: user) {
    if (user) {
      props.setCurrentUser(user);
      props.setIsUserDetailsOpen(true);
    }
  }
  return (
    <>
      <div>
        <div className="Heading">
          <h1>CONTACT APP</h1>
        </div>
        <table>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>NickName</th>
            <th>DateOfBirth</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {props.users.map((user) => {
            //JSON inda data read aaagathe
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.nickname}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="ButtonMain Delete"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                  <button className="ButtonMain" onClick={() => editUser(user)}>
                    Edit
                  </button>
                  <button
                    className="ButtonMain"
                    onClick={() => viewUserDetails(user)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ContactTable;
