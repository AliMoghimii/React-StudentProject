import { useState } from "react";
import { useHistory } from "react-router-dom";


const Login = () => {

  const [Name, setName] = useState('');
  const [Pass, setPass] = useState('');
  const redirect = useHistory();


  const handleSignup = (e) => {
    e.preventDefault();
    const info = { Name, Pass};
    
    fetch('http://localhost:8000/users/', 
    {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
    })
    .then(()=> { 
      redirect.push('/');
    })
  }

    return (
      <div className="signup">
      <h1 className="logo"> Parham Food </h1>
        <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>

        <label>Restaurant ID:</label>
        <input type="text" required value={Name} onChange={(e) => setName(e.target.value)} />

        <label>Password:</label>
        <input type="password" required value={Pass} onChange={(e) => setPass(e.target.value)}/>

        

        <button>Sign Up</button>
      </form>

      

      </div>
    );
  }
   
  export default Login;