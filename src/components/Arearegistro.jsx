import React, { useState } from 'react';

function Areaegistro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    // Aqui você pode adicionar a lógica para criar uma nova conta de usuário
    // usando os dados fornecidos
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Areaegistro;