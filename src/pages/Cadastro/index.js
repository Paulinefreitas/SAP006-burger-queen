import {Link} from "react-router-dom"

import Button from "../../componentes/button/index.js";
import Input from "../../componentes/input/index.js";
import "./cadastro.css";

function Cadastro() {
  return (
    <div className="card-validar">
      <main className="container">
        <h1 className="nome-empresa">BURGER QUEEN'S</h1>
        <h2 className="tipo-pagina">CADASTRO</h2>
        <form className="form-validacao">
          <Input
            variant="primary"
            type="text"
            name="nome"
            placeholder="Nome Completo"
          />
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
          <section className="button-local">
            <button type="radio" id="salao" name="salao" />
            <label for="salao">Salão</label>
            <button type="radio" id="cozinha" name="cozinha" />
            <label for="cozinha">Cozinha</label>
          </section>

          <Button variant="primary">Cadastrar</Button>
          {/* <Button variant="primary" type="submit" onclick={logar}>Cadastrar</Button> */}
          <Link to="/">Já tenho cadastro</Link>
        </form>
      </main>
    </div>
  );
}

export default Cadastro;
