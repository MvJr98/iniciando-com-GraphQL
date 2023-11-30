import { proximoId, usuarios } from "../data/dados.js";

export default {
  Mutation: {
    novoUsuario(_, { nome, email, salario }) {
      const novo = {
        id: proximoId(),
        nome,
        email,
        salario,
        vip: false,
        id_perfil: 101,
        status: "ATIVO",
      };
      usuarios.push(novo);
      return novo;
    },
  },
};
