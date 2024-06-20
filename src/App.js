import { Outlet,NavLink } from "react-router-dom";
const setActive = ({ isActive }) =>
  isActive ? "bg-primary text-light btn active nav-link" : "text-primary bg-transparent nav-link";

function App() {
  return (
    <div className="container text-center mt-2">
      <h2 className="text-primary ">My library</h2>
      <nav className="nav nav-tabs nav-fill d-flex gap-3 p-2 rounded" style={{backgroundColor:"#ade8f4"}}>
        <NavLink  className={setActive} to="/about">About</NavLink>
        <NavLink className={setActive} to="/books">Books</NavLink>
        <NavLink className={setActive } to="/contact">Contact</NavLink>
        <NavLink className={ "disabled text-secondary nav-link btn d-none d-md-block"} to="">Home</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;

