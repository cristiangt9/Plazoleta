import { useState } from "react";
import useAxioshttp from "../../hooks/use-axioshttp";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./SolicitudPagoForm.module.css";

const ConfirmarPagoForm = (props) => {

  const { isLoading, error, sendRequest } = useAxioshttp();
  const processData = (response) => {
    props.onResponse(response);
  };

  const [form, setForm] = useState({
    tokenConfirmacion: "",
  });

  const submitFormHandler = (event) => {
    event.preventDefault();

    // validate here

      sendRequest(
        {
          method: "POST",
          url: "transacciones",
          data: {tipo: 'confirmacionPago',...form, token: props.token},
        },
        processData
      );
  }

  const changeHandler = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };
  if (error.onError)
    return <section className="centered">{props.error.message}</section>;
  return (
    <>
      <Card className={classes.Card}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="tokenConfirmacion">Token de confimación</label>
            <input
              type="text"
              id="tokenConfirmacion"
              name="tokenConfirmacion"
              onChange={changeHandler}
              value={form.tokenConfirmacion}
              disabled={props.enviado}
            />
          </div>

          <div className={classes.actions}>
            {!props.enviado && <button className="btn" disabled={props.enviado}>Confirmar Pago</button>}
          </div>
        </form>
      </Card>
    </>
  );
};

export default ConfirmarPagoForm;
