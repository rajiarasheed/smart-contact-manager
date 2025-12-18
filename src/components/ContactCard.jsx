import user from '../assets/images/avatar.png'
import { Link } from 'react-router-dom';
export default function ContactCard({contacts,clickHandler}){

    const {id,name,email}=contacts
    // console.log("hi",clickHandler);
     if (!contacts) {
    return <h3>No contacts found</h3>;
  }
    return(
        <div className="cardItem" >
            <div className="userdata">
             <img src={user} alt="user" className='ui avatar image'/>

                <div className="content">
                    <Link to={`/contacts/${id}`} state={contacts}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    </Link>
                </div>
                </div>
                <div className="icons">
                
                <Link to='/edit' state={{id,name,email}}>
                <i className="edit alternate outline icon blue" ></i>
                </Link>
                <Link to='/delete' state={{id}}>
                <i className="trash alternate outline icon right floated red" style={{marginLeft:"8px"}}></i>
                </Link>
                </div>
            </div>
    )
}