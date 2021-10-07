import { Link, useHistory } from "react-router-dom";

import Button from "../../componentes/button/index.js";
import Input from "../../componentes/input/index.js";

function Login() {
  const history = useHistory();

  const logar = (e) => {
    e.preventDefault();
    console.log("fazer requisição na API em auth");

    //Promise => se deu bom navegar para tela de menu. Cabe um ternário ( ? : )
    history.push("/salao");
    // || history.push("/cozinha")
  };
  return (
    <div className="card-validar">
      <main className="container">
        <h1 className="nome-empresa">BURGER QUEEN'S</h1>
        <h2 className="tipo-pagina">LOGIN</h2>
        <form className="form-validacao">
          <Input
            variant="primary"
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <Input
            variant="primary"
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Button variant="primary" onClick={logar}>
            Entrar
          </Button>
          <Link to="/cadastro">Cadastro</Link>
        </form>
      </main>
    </div>
  );
}
export default Login;
