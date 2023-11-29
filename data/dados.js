
export const usuarios = [
    {
        id: 1,
        nome_completo: "Mauro Veloso",
        email: "mvjr98@gmail.com",
        salario: 3000.00,
        vip: true,
        id_perfil: 102,
        status: "ATIVO"
    },
    {
        id: 2,
        nome_completo: "Lucas Silva",
        email: "ls@gmail.com",
        salario: 1500.00,
        vip: true,
        id_perfil: 101,
        status: "INATIVO"
    },
    {
        id: 3,
        nome_completo: "Pedro Porro",
        email: "pp@gmail.com",
        salario: 1250.00,
        vip: false,
        id_perfil: 102,
        status: "BLOQUEADO"
    },
    {
        id: 4,
        nome_completo: "Emerson Royal",
        email: "mer@gmail.com",
        salario: 1350.00,
        vip: true,
        id_perfil: 101,
        status: "ATIVO"
    }
]

export const perfis = [
    {id: 101, nome: "comum"}, {id: 102, nome: "administrador"}
]