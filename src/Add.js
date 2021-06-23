import { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {

  const [Name, setName] = useState('');
  const [Description, setDesc] = useState('');
  const [Price, setPrice] = useState('0T');
  const redirect = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const food = { Name, Description, Price };
    
    fetch('http://localhost:8000/foods/', 
    {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(food)
    })
    .then(()=> { 
      redirect.push('/');
    })
  }
    return (
      <div className="add">
        <h2>Add a New Dish</h2>
        
      <form onSubmit={handleSubmit}>
        <label>Dish name:</label>
        <input type="text" required value={Name} onChange={(e) => setName(e.target.value)}/>
        <label>Dish Description:</label>
        <textarea required value={Description} onChange={(e) => setDesc(e.target.value)}></textarea>
        <label>Dish Price:</label>
        <input type="text" required value={Price} onChange={(e) => setPrice(e.target.value)}/>
        <button>Submit</button>
      </form>
      
      </div>
    );
  }
   
  export default Add;