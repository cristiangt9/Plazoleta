import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Ingresar from "./pages/Ingresar";
import Pagar from "./pages/Pagar";
import Registrar from "./pages/Registrar";
import Inicio from "./pages/Inicio";

const App = () => {
  
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        <Route path="/inicio" exact>
          <Inicio/>
        </Route>
        <Route path="/pagar" exact>
          <Pagar/>
        </Route>
        <Route path="/ingresar" exact>
          <Ingresar/>
        </Route>
        <Route path="/registrar" exact>
          <Registrar/>
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
