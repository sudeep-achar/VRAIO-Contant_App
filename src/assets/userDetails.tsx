import { user, userDetailsProps } from "./user";

function userDetails(props: userDetailsProps) {
  return (
    <div className="user-details">
      <h1>USER DETAILS</h1>
      <div>
        <label>First Name:</label>
        <span>{props.user.firstName}</span>
      </div>
      <div>
        <label>Last Name:</label>
        <span>{props.user.lastName}</span>
      </div>
      <div>
        <label>Nick Name:</label>
        <span>{props.user.nickname}</span>
      </div>
      <div>
        <label>Date of Birth:</label>
        <span>{props.user.dateOfBirth}</span>
      </div>
      <div>
        <label>Phone Number:</label>
        <div className="phone-number">
          {props.user.phoneNumber.map((number, index) => (
            <>
              <span>{number}</span>
              <br />
            </>
          ))}
        </div>
      </div>
      <div>
        <label>Email:</label>
        <div className="email">
          {props.user.email.map((email) => (
            <>
              <span>{email}</span>
              <br />
            </>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default userDetails;
