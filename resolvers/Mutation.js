import { proximoId, usuarios, setUsuarios } from "../data/dados.js";

export default {
  Mutation: {
    criarUsuario(_, { nome, email, salario }) {
      const emailJaCadastrado = usuarios.some(u => u.email === email);
      
      if (emailJaCadastrado){
        throw Error("Email já Cadastrado!")
      }
      const novo = {
        id: proximoId(),
        nome_completo: nome,
        email,
        salario,
        vip: false,
        id_perfil: 101,
        status: "ATIVO",
      }
      usuarios.push(novo);
      return novo;
    },
    excluirUsuario(_, {id}){
        const usuario = usuarios.find(u => u.id == id);
        if (!usuario){
            throw Error ("Usuário não existe.")
        }

        const novosUsuarios = usuarios.filter(u => u.id !== id)
        setUsuarios(novosUsuarios);

        return usuario;
    }
  }
}
