import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { remove_usuario } from "../../store/actions";
import { LuLogOut } from 'react-icons/lu';

const Navigation = () => {
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(remove_usuario());
  };
  const user = useSelector((state) => state.user);
  let content = (
    <ul>
      <li>
        <NavLink activeClassName={classes.active} to="/registrar" exact>
          Registrar
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/ingresar" exact>
          Ingresar
        </NavLink>
      </li>
    </ul>
  );
  if (user.token !== "") {
    content = (
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/inicio" exact>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/pagar" exact>
            Pago
          </NavLink>
        </li>
        <li>
          {/* <span className={classes.usuario}>{user.nombres}:</span>{" "} */}
          <button className={classes.buttonLogout} onClick={logoutClickHandler}><LuLogOut size="40"/></button>{" "}
        </li>
      </ul>
    );
  }
  return <nav className={classes.nav}>{content}</nav>;
};

export default Navigation;
