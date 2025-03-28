import { deleteContact } from "../services/constant";
import http from "../services/http";
import { tableProps } from "./user";
import { user } from "./user";

function ContactTable(props: tableProps) {
  function deleteUser(id: number) {
    http
      .delete(deleteContact + id)
      .then((_) => {})
      .catch((error) => {
        console.log(error);
      });
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
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>NickName</th>
              <th>DateOfBirth</th>
              <th>PhoneNumber</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.nickname}</td>
                  <td>
                    {new Date(user.dateOfBirth).toLocaleDateString("en-IN", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td>{user.phoneNumber[0]}</td>
                  <td>{user.email[0]}</td>
                  <td>
                    <button
                      className="ButtonMain Delete"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="ButtonMain"
                      onClick={() => editUser(user)}
                    >
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ContactTable;
