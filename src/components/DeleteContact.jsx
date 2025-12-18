import { Link, useLocation } from "react-router-dom";
export default function DeleteContact({removeContactHandler }) {
    const location=useLocation();
    const {id}=location.state;
    // console.log(id);
    
  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <div className="ui card centered" style={{ padding: "20px" }}>
        <h2>Are You sure you want to delete?</h2>
        
        <div className="ui buttons" style={{ marginTop: "20px" }}>
          <Link to="/">
            <button className="ui button blue" style={{ marginRight: "15px" }} onClick={()=>removeContactHandler(id)}>Yes</button>
          </Link>


          <Link to="/">
            <button className="ui button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
