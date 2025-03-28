import { userDetailsProps } from "./user";

function userDetails(props: userDetailsProps) {
  return (
    <div className="user-details" key={props.user.id}>
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
        <span>
          {new Date(props.user.dateOfBirth).toLocaleDateString("en-IN", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
      <div>
        <label>Phone Number:</label>
        <div className="phone-number">
          {props.user.phoneNumber.map((number, index) => (
            <>
              <span key={index}>{number}</span>
              <br />
            </>
          ))}
        </div>
      </div>
      <div>
        <label>Email:</label>
        <div className="email">
          {props.user.email.map((email, index) => (
            <>
              <span key={index}>{email}</span>
              <br />
            </>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default userDetails;
