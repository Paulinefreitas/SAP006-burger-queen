import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Login from "./pages/login";
import Cozinha from "./pages/cozinha";
import Salao from "./pages/salao";

function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/salao">
          {user ? <Salao /> : <Redirect to="/" />}</Route>
        <Route path="/cozinha">
          <Cozinha />
        </Route>
        <Route exact path="/">
        <Login />
          {/* {user ? <Redirect to="/salao"/> : <Login />} */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
