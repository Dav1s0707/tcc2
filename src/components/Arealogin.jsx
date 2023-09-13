import gerencia from "../imgs/gerencia.png";
import "../index.css"

function Arealogin() {
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
    <div className="forms">
      <br />
      <img src={gerencia} alt="" />
      <h2>Login</h2>
      <form >
        <div>
          <label>Email:</label>
          <br />
          <input type="email" />
        </div>
        
        <div>
          <label>Senha:</label>
          <br />
          <input type="password" />
        </div>
      <br />
        
        <button type="button" className="button">Entrar</button>
      </form>
      <p>
        Não é cliente? <a href="/cadastro">Clique aqui</a>
      </p>
    </div>
    </div>
  );
}
export default Arealogin;
