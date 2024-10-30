import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaCadastroCliente.css";
import { useNavigate } from "react-router-dom";
import ServicoCliente from "../../comum/servicos/ServicoCliente";

const PaginaCadastroCliente = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCPF] = useState("");

  const servicoCliente = new ServicoCliente();

  const salvar = () => {
    const novoCliente = { nome, email, celular, dataNascimento, cpf };
    console.log("Novo Cliente:", novoCliente);

    servicoCliente.salvar(novoCliente);
    navigate("/lista-cliente");
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/lista-cliente">
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite numero  de  seu Celular"
          value={celular}
          onChange={(event) => setCelular(event.target.value)}
        />
      </div>

      <div className="campo">
        <label>Data de Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua  data de nascimento "
          value={dataNascimento}
          onChange={(event) => setDataNascimento(event.target.value)}
        />
      </div>

      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF "
          value={cpf}
          onChange={(event) => setCPF(event.target.value)}
        />
      </div>

      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
