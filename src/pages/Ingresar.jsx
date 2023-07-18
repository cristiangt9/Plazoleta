import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LoginForm from "../components/login/LoginForm";
import useAxioshttp from "../hooks/use-axioshttp";
import { set_documento_celular, set_token } from "../store/actions";

const Ingresar = () => {
  const { isLoading, error, sendRequest } = useAxioshttp();
  const history = useHistory();
  const dispatch = useDispatch();
  const processData = (response) => {
    dispatch(set_token(response.data.token));
    history.push('/inicio');
  };
  const handlerLogin = (form) => {
    // dispatch(set_documento_celular(form.documento, form.celular));
    sendRequest(
      {
        method: "POST",
        url: "auth/login",
        data: form,
      },
      processData
    );
  };

  return (
    <div>
      <LoginForm isLoading={isLoading} onLogin={handlerLogin} error={error} />
    </div>
  );
};

export default Ingresar;
