import { Outlet } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="header-products container-products">
        <div className="dpflex">
          <NavLink
            to={"computer"}
            className={({ isActive }) =>
              isActive ? "menu-active ml-20" : "ml-20"
            }
          >
            Computadores
          </NavLink>

          <NavLink
            to={"eletronics"}
            className={({ isActive }) =>
              isActive ? "menu-active ml-20" : "ml-20"
            }
          >
            Eletronicos
          </NavLink>

          <NavLink
            to={"books"}
            className={({ isActive }) =>
              isActive ? "menu-active ml-20" : "ml-20"
            }
          >
            Livros
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
