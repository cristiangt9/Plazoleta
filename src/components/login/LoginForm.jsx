import { useState } from "react";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [form, setForm] = useState({
    mail: "",
    password: "",
  });

  const submitFormHandler = (event) => {
    event.preventDefault();

    // validate here

    props.onLogin(form);
  }

  const changeHandler = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };
  if (props.error.onError)
    return <section className="centered">{props.error.message}</section>;
    
  return (
    <>
      <h1 className={classes.titulo}>Ingresar</h1>
      <Card className={classes.loginCard}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="mail">Correo electrónico:</label>
            <input
              type="email"
              id="mail"
              name="mail"
              onChange={changeHandler}
              value={form.mail}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              value={form.password}
              required
            />
          </div>

          <div className={classes.actions}>
            <button className="btn">Ingresar</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default LoginForm;
