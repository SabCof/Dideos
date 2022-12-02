import React,{ useState} from 'react';
import './auth.css';


function Login({Connecter, error}){
 
  const [details, setDetails] = useState({name: "", email: "", password:""});
    
  
    

    const submit = (e) => {
        e.preventDefault();
        
        Connecter(details);
    }

    return (
        <div className='login'>
          <form className='loginWrapper' onSubmit={submit}>
            <h2>Login</h2>
            <label htmlFor="name">Name</label>
            <input value={details.name} onChange={(e) => setDetails({...details, name: e.target.value})} type="name" placeholder='name' name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} type="email" placeholder='email' name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input value={details.password} onChange={(e) => setDetails({...details, password: e.target.value})} type="password" placeholder='*******' name="password" id="password" />
            <button type='submit'>Connection</button>
           
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
          </form>
          
        </div>
    );
};
export default Login;