import "./styles.css";
import homeimage from "../../../public/home-svgrepo-com 1.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container dpflex">
        <NavLink to={"/"}>Inicio</NavLink>

        <NavLink to={"/products"} className="ml-20">
          Produtos
        </NavLink>

        <NavLink to={"/about"} className="ml-20">
          Sobre nós
        </NavLink>

        <div className="homeimg">
          <Link to={"/"}>
            <img src={homeimage} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
