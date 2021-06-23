import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {

  const [Name, setName] = useState('');
  const [Pass, setPass] = useState('');
  const redirect = useHistory();


  const handleLogin = (e) => {
    e.preventDefault();
    const info = { Name, Pass};
    
    fetch('http://localhost:8000/users/', 
    {
      method: 'GET',
    })
    .then(()=> { 
      redirect.push('/');
    })
  }

    return (
      <div className="login">
      <h1 className="logo"> Parham Food </h1>
        <h2>Login</h2>
        
        <Link to="/signup">or Sign Up</Link>
        

      <form onSubmit={handleLogin}>

        <label>Username:</label>
        <input type="text" required value={Name} onChange={(e) => setName(e.target.value)} />

        <label>Password:</label>
        <input type="password" required value={Pass} onChange={(e) => setPass(e.target.value)}/>

        <button>Login</button>
      </form>

      

      </div>
    );
  }
   
  export default Login;