import { usuarios, perfis } from "../data/dados.js";

export default {
  Query: {
    ola() {
      return "Oi";
    },
    horaAtual() {
      const dataAtual = new Date();
      return `${dataAtual.getHours()}:${dataAtual.getMinutes()}`;
    },
    dataAtual() {
      return new Date();
    },
    melhorUsuario() {
      return {
        id: 1,
        nome_completo: "Mauro Veloso",
        email: "mvjr98@gmail.com",
        salario: 3000.0,
        vip: true,
      };
    },
    melhorProduto() {
      return {
        id: 1,
        nome: "Iphone 14",
        preco: 10000.0,
        desconto: 0.1,
      };
    },
    numerosMegaSena() {
      const arr = Array(6)
        .fill(0)
        .map(() => {
          return Math.round(Math.random() * 60);
        });
      const arrOrdenado = arr.sort((a, b) => a - b);
      return arrOrdenado;
    },
    usuarios() {
      return usuarios;
    },
    usuario(_, args) {
      const id = args.id;
      return usuarios.find((u) => u.id === id);
    },
    perfis() {
      return perfis;
    },
    perfil(_, { id }) {
      return perfis.find((p) => p.id === id);
    }
  }
}
