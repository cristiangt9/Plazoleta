import { useState } from "react";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./RegistrarForm.module.css";

const RegistrarForm = (props) => {
  const [form, setForm] = useState({
    dniNumber: "",
    phone: "",
    name: "",
    surname: "",
    mail: "",
    password: "",
    birthdate:"",
    userType: "client"
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
      <h1 className={classes.titulo}>Registrar</h1>
      <Card className={classes.Card}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
              value={form.name}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="surname">Apellido</label>
            <input
              type="text"
              id="surname"
              name="surname"
              onChange={changeHandler}
              value={form.surname}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="dniNumber">Documento</label>
            <input
              type="text"
              id="dniNumber"
              name="dniNumber"
              onChange={changeHandler}
              value={form.dniNumber}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Telefono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={changeHandler}
              value={form.phone}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="mail">Correo Electrónico</label>
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
          <div className={classes.control}>
            <label htmlFor="birthdate">Fecha de Nacimiento:</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                onChange={changeHandler}
                value={form.birthdate}
                required
              />
          </div>

          <div className={classes.actions}>
            <button className="btn">Registrar</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default RegistrarForm;
