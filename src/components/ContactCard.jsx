import user from '../assets/images/avatar.png'
export default function ContactCard({contacts,clickHandler}){

    const {id,name,email}=contacts
    console.log("hi",clickHandler);
    
    return(
        <div className="cardItem" >
            <div className="userdata">
             <img src={user} alt="user" className='ui avatar image'/>

                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                </div>
                <i className="trash alternate outline icon right floated" onClick={()=>clickHandler(id)}></i>
            </div>
    )
}