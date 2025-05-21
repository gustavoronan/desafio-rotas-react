import "./styles.css";
import homeimage from "../../../public/home-svgrepo-com 1.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container dpflex">
        <NavLink
          to={"/home"}
          className={({ isActive }) => (isActive ? "menu-active" : "")}
        >
          Inicio
        </NavLink>

        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? "menu-active ml-20" : "ml-20")}
        >
          Produtos
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "menu-active ml-20" : "ml-20")}
        >
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
