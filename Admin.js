import User from './User.js';

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`;
    }
}

// const novoAdmin = new Admin('Lucas', 'test@gmail.com', '2025-13-01');
// console.log(novoAdmin);
// console.log(novoAdmin.criarCurso('Javascript', 13));