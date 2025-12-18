import user from "../assets/images/avatar.png";
import { Link, useLocation } from "react-router-dom";
export default function ContactDetails() {
  const location = useLocation();
  const { email, name } = location.state;

  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
  <Link to="/">
    <button className="ui button blue">Back To Contact List</button>
  </Link>
</div>

    </div>
  );
}
