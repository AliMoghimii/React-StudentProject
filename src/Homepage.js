import FoodList from './FoodList';
import useFetch from './useFetch';

const Home = () => {

  const { data:foods , setData:setFoods } =  useFetch('http://localhost:8000/foods')

  const handleOFO = (id) => {
    const updateMenu = foods.filter(food => food.id !== id)
    setFoods(updateMenu);
}

  return (
    <div className="home">
    <p1>Welcome {"ADMIN_NAME"}</p1>
      {foods && <FoodList foods={foods} title={"Menu"} handleOFO={handleOFO} />}
    </div>
  );
}
 
export default Home;