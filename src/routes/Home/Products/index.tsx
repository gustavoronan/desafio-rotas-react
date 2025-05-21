import { Outlet } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  return (
    <>
    
    <div className="header-products container-products">
      <div className="dpflex">
        <NavLink to={'computer'} className="ml-20">Computadores</NavLink>

        <NavLink to={'eletronics'} className="ml-20">Eletronicos</NavLink>

        <NavLink to={'books'} className="ml-20">Livros</NavLink>
      </div>
    </div>
    <Outlet/>
    </>
  );
}
