import RegistrarForm from "../components/registro/RegistrarForm";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useAxioshttp from "../hooks/use-axioshttp";
import { set_token, set_usuario } from "../store/actions";

const Registrar = () => {
  const { isLoading, error, sendRequest } = useAxioshttp();
  const history = useHistory();
  const dispatch = useDispatch();
  const processData = (response) => {
    // dispatch(set_token(response.data.token));
    history.push("/ingresar");
  };
  const handlerLogin = (form) => {
    dispatch(
      set_usuario(form.nombres, form.documento, form.celular, form.email)
    );
    sendRequest(
      {
        method: "POST",
        url: "user/create",
        data: form,
      },
      processData
    );
  };
  return (
    <div>
      <RegistrarForm
        isLoading={isLoading}
        onLogin={handlerLogin}
        error={error}
      />
    </div>
  );
};

export default Registrar;
