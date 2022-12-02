
import React,{ useState,} from 'react';
import  Login  from '../Auth/Login';

const User = () => {
    const adminUser = [
        { id: 1, 
          name: "Sab", 
          email: "userSab@test.com", 
          password: "Sab123" },
        {
          id: 2,
          name: "Axel",
          email: "useraxel@test.com",
          password: "Axel123"
        },
        {
          id: 3,
          name: "Benjamin",
          email: "userben@test.com",
          password: "Benjamin123"
        },
        {
          id: 4,
          name: "Charli",
          email: "userCharli@test.com",
          password: "Charli123"
        },
        
      ];

      const [user, setUser] = useState({name: "", email: ""});
      const [error, setError] = useState("");
      
      const Connecter = details => {
        //console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }else{
            setError("Details do not match!")
            
        }
      }

      const Logout = () => {
        //console.log("Logout");
        setUser({name: "", email: ""});
      }
    return (
        <div className='user'>
            {(user.email !== "") ? (
                <div>
                    <h2>Bonjour,<span>{user.name}</span></h2>
                    <button onclick={Logout}>Logout</button>
                </div>
            ):(
             
        <Login Login={Connecter} error={error}/>
    )}  
        </div>
    )
}

export default User;