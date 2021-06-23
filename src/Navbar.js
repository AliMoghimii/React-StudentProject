import { Link } from 'react-router-dom';

const Navrbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="logo"> Parham Food </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">New</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/login">Sign Out</Link>
            </div>
        </nav>

     );
}
 
export default Navrbar;