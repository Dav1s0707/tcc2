import gerencia from "../imgs/gerencia.png";

function Areaegistro() {
  return (
    <div className="linha2">
      <div  className="teste">
        <h1>fads</h1>
      </div>
      <div className="forms">
        <br />
        <img src={gerencia} alt="" className="gerenciaimg" />
        <br />
        <h2>Cadastro</h2>

        <form className="formulario">
          <div className="coluna">
            <label>Nome:</label>
            <input />
          </div>

          <div className="coluna">
            <label>Email:</label>
            <input />
          </div>

          <div className="coluna">
            <label>Senha:</label>
            <input />
          </div>

          <button className="butao" type="button">
            Cadastrar
          </button>
        </form>
        <p>
          Já é cliente? <a href="/login">Clique aqui</a>
        </p>
      </div>
    </div>
  );
}

export default Areaegistro;
