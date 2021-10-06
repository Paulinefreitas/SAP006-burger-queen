import Button from "../../componentes/button/index.js";
import Input from "../../componentes/input/index.js";

function Login() {
  return (
    <div className="card-validar">
      <main className="container">
      <h1 className="nome-empresa">BURGER QUEEN'S</h1>
      <h2 className="tipo-pagina">LOGIN</h2>
      <form className="form-validacao">
        <Input variant="primary" type="email" name="email" placeholder="E-mail" />
        <Input variant="primary" type="password" name="password" placeholder="Senha" />
        <Button variant="primary">Entrar</Button>
        <a href="/cadastro">Cadastro</a>
      </form>
      </main>
    </div>
  );
}

export default Login;
