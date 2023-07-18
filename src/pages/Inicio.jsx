import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useAxioshttp from "../hooks/use-axioshttp";
import { set_saldo_nombres } from "../store/actions";
import classes from "./Inicio.module.css";

const Inicio = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const { documento, celular } = user;
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useAxioshttp();
  const pagarClickHandler = () => {
    history.push("/pagar");
  };
  useEffect(() => {
    const processData = (response) => {
      dispatch(set_saldo_nombres(parseInt(response.data.item.saldo), response.data.item.nombres));
    };
    // sendRequest(
    //   {
    //     method: "POST",
    //     url: "transacciones",
    //     data: { tipo: "consultarSaldo", documento, celular },
    //   },
    //   processData
    // );
  }, [documento, celular, sendRequest, dispatch]);

  if (user.token === "") history.push("/ingresar");

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error.onError) return <div>{error.message}</div>;

  return (
    <div className={classes.Inicio}>
      <h1 className={classes.tituloInicio}>Bienvenido a nuestra App</h1>
      <Card className={classes.saldoCard}>
        <div className={classes.saldo}>
          Aqui podras administrar o realizar pedidos dependendiendo de tu rol en el sistema
        </div>
      </Card>
      <Card className={classes.saldoCard}>
        Tambien podras crear usuarios y restaurantes si eres un administrador
      </Card>
    </div>
  );
};

export default Inicio;
