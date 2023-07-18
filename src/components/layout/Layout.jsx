
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";
import restauranteIcono from '../../assets/logorest.png';

const Layout = (props) => {
  const today = new Date();
  return (
    <>
      <Modal/>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <div className={classes.containerHeader}>
              <img src={restauranteIcono} alt="Restaurante Icono" className={classes.restauranteIcono} />
              <span className={classes.nanita}>Nanita</span>
              <span className={classes.plaza}>Plaza</span>
            </div>
          </Link>
        </div>
        <Navigation />
      </header>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}><p>&copy; Nanita Plaza - {today.getFullYear()}</p></footer>
    </>
  );
};

export default Layout;
