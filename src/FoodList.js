import { Link } from 'react-router-dom';

const FoodList = (props) => {
  const foods = props.foods;
  const title = props.title;
  const handleOFO = props.handleOFO;

  return (  
    <div className="food-list">
    <h2>{title}</h2>
      {foods.map((food) => (
        <div className="food-preview" key={food.id}>
        <Link to={`/foods/${food.id}`}>
            <h2>{food.Name}</h2>
            <p>{food.Price}</p>
          </Link>

          <button className="delBtn" onClick={()=>handleOFO(food.id)}>Disable Serve</button>
         
        </div>
      ))}
    </div>
  );
}
 
export default FoodList;