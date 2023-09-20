import gerencia from "../imgs/gerencia.png";
import bannerlateral from "../imgs/bannerlateral.png";


function Arealogin() {
  return (
    <div className="linha2">
      <div className="teste">
        <img src={bannerlateral} alt="" />
      </div>
      <div className="forms">
        <div className="bg">
          <br />
          <img src={gerencia} alt="" className="gerenciaimg" />
          <br />
          <h2>Login</h2>

          <form className="formulario">
            <div className="coluna">
              <label>Nome:</label>
              <input className="inputs" />
            </div>

            <div className="coluna">
              <label>Email:</label>
              <input className="inputs" />
            </div>

            <div className="coluna">
              <label>Senha:</label>
              <input className="inputs" />
            </div>

            <button className="butao" type="button">
              Cadastrar
            </button>
          </form>
          <p className="butao">
            Não é cliente? <a href="/cadastro">Clique aqui</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Arealogin;
