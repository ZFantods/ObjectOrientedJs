import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'true') { // Metodos próprios e construtores não são obrigatórios
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(nomeEstudante, curso) {  // Classes não são hoisted
        return `estudante ${nomeEstudante} passou no curso de
         ${curso} da responsável ${this.nome}`;
    }
}

const novoDocente = new Docente('Ana', 'a@gmail.com', '2025-13-01'); //   toda classe em JavaScript segue implicitamente o que chamamos de modo estrito
console.log(novoDocente.aprovarEstudante('Lucas', 'Javascript'));