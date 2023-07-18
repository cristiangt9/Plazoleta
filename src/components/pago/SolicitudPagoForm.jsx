import { useState } from "react";
import useAxioshttp from "../../hooks/use-axioshttp";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./SolicitudPagoForm.module.css";

const SolicitudPagoForm = (props) => {
  const { isLoading, error, sendRequest } = useAxioshttp();
  const processData = (response) => {
    props.onResponse();
  };

  const [form, setForm] = useState({
    documento: "",
    celular: "",
    valor: "",
  });

  const submitFormHandler = (event) => {
    event.preventDefault();

    // validate here

    sendRequest(
      {
        method: "POST",
        url: "transacciones",
        data: { tipo: "solicitudPago", ...form, token: props.token },
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
            <label htmlFor="documento">Documento Receptor del Pago</label>
            <input
              type="text"
              id="documento"
              name="documento"
              onChange={changeHandler}
              value={form.documento}
              disabled={props.enviado}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="celular">Celular Receptor del Pago</label>
            <input
              type="text"
              id="celular"
              name="celular"
              onChange={changeHandler}
              value={form.celular}
              disabled={props.enviado}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              id="valor"
              name="valor"
              onChange={changeHandler}
              value={form.valor}
              disabled={props.enviado}
            />
          </div>

          {!props.enviado ? (
            <div className={classes.actions}>
              <button className="btn" disabled={props.enviado}>
                Pagar
              </button>
            </div>
          ) : (
            <p>
              Hemos enviado un token a tu correo. Ingresalo a continuación para
              finalizar la transacción
            </p>
          )}
        </form>
      </Card>
    </>
  );
};

export default SolicitudPagoForm;
