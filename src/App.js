import Navbar from './Navbar';
import Home from './Homepage';
import Login from './Login'
import Add from './Add';
import Comments from './Comments';
import FoodEdit from './FoodEdit'
import Signup from './Signup'

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>

    <Route className="login" exact path="/login"> <Login/> </Route>
    <Route exact path="/signup"> <Signup /> </Route>
    
      <div className="App">
      <Navbar className ="Nav"/>
        <div className="content">
          
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/add"> <Add/> </Route>
            <Route exact path="/foods/:id"> <FoodEdit /> </Route>
            <Route exact path="/comments"> <Comments /> </Route>
           
          
        </div>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
