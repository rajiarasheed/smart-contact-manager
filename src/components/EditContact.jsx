import React from "react";
class EditContact extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
    
    const {id,name,email}=window.history.state.usr;
    this.state={
        id,
        name,
        email
    }
  }
  update=(e)=>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
        alert("All fields are required");
        return;
    }
    this.props.updateContactHandler(this.state)
    this.setState({name:"", email:""})
    // 🔹 Redirect to homepage (simple way)
  window.location.href = "/";
    
  }
  render() {
    return (
      <div className="ui main container">
        <h2>Update Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}
export default EditContact;
