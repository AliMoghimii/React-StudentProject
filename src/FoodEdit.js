import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const FoodInfo = () => {
  const { id } = useParams();
  const { data: food } = useFetch('http://localhost:8000/foods/' + id);
  const history = useHistory();

  const handleDel = () => {
    fetch('http://localhost:8000/foods/' + food.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="FoodInfo">
      <h2> Dish Info { id }</h2>

      { food && (
        <article>
          <h2>{ food.Name }</h2>
          <p> Price : { food.Price }</p>
          <div>{ food.Description }</div>

          <button onClick={handleDel}>Delete</button>
          <button >Edit</button>

        </article>
      )}

    </div>


  );
}
 
export default FoodInfo;