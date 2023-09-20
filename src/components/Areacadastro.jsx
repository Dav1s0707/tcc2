import gerencia from "../imgs/gerencia.png";
import "../index.css";

function Areaegistro() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleLogin = () => {
  //   // Aqui você pode adicionar a lógica para autenticar o usuário
  //   // usando o email e a senha fornecidos
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  return (
    <div className="centro">
      <div className="bg bg2">
        <div className="forms">
          <br />
          <h2>Cadastro</h2>
          <form>
            <div>
              <label>Nome da empresa:</label>
              <br />
              <input className="inputcompleto inputs" type="text" />
            </div>

            <div>
              <label>Seu nome:</label>
              <br />
              <input className="inputcompleto inputs" type="text" />
            </div>
            <div className="linha">
              <div className="inputmarg ">
                <label>Telefone:</label>
                <br />
                <input type="text" className="inputs"/>
              </div>
              <div>
                <label>E-mail</label>
                <br />
                <input type="email" className="inputs" />
              </div>
            </div>
            <div className="linha">
              <div className="inputmarg ">
                <label>Senha:</label>
                <br />
                <input type="password" className="inputs" />
              </div>
              <div>
                <label>Confirmar senha:</label>
                <br />
                <input type="password" className="inputs" />
              </div>
            </div>

            <br />

            <button type="button" className="button butao2">
              Entrar
            </button>
          </form>
          <p>
            Ja é cliente? <a href="/login">Clique aqui</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Areaegistro;
