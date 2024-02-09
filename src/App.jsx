import React, { useState } from 'react';
import './App.css';

function App() {
  const [acao, setAcao] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');

  function azul() {
    setAcao('');
  }
  function vermelho() {
    setAcao('vermelho');
  }
  function amarelo() {
    setAcao('amarelo');
  }
  function roxo() {
    setAcao('roxo');
  }

  function handleName(e) {
    const newName = e.target.value;
    setNome(newName);
    if (newName.trim().length < 3) {
      setNomeError('Mínimo 3 caracteres para o nome.');
    } else {
      setNomeError('');
    }
  }

  function handleEmail(e) {
    const newEmail = e.target.value.trim();
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (newEmail.length > 0 && !emailRegex.test(newEmail)) {
      setEmailError('Formato de e-mail incorreto.');
    } else {
      setEmailError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo, para um backend.
    // Por enquanto, apenas exibimos as informações no console.
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  }

  return (
    <div className={`body${acao}`}>
      <div className="container">
        <div className="content">
          <h1 className={`titulo${acao}`}>
            Formulário de cadastro com validação
          </h1>
          <div className="formulario">
            <form onSubmit={handleSubmit} className={`form${acao}`}>
              <h1>Cadastre-se</h1>
              <label htmlFor="nome" className={`label${acao}`}>
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={handleName}
                className={`inputs${acao}`}
              />
              {nomeError && <p className="error">{nomeError}</p>}

              <label htmlFor="email" className={`label${acao}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmail}
                className={`inputs${acao}`}
              />
              {emailError && <p className="error">{emailError}</p>}

              <label htmlFor="senha" className={`label${acao}`}>
                Senha
              </label>
              <input
                type="password"
                name="senha"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={`inputs${acao}`}
              />

              <div className="cadastrar">
                <button type="submit" className={`cadastro${acao}`}>
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
          <div className="changeColors">
            <div className="circle blue" onClick={azul}></div>
            <div className="circle red" onClick={vermelho}></div>
            <div className="circle yellow" onClick={amarelo}></div>
            <div className="circle purple" onClick={roxo}></div>
          </div>
          <p className={`footer${acao}`}>Feito por TonDevPy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
