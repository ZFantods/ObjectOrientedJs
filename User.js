export default class User {
    #nome
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }
        exibirInfos() {
            return `${this.#nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
        }
    }

    const NovoUser = new User('Lucas', 'test@gmail.com', '2025-13-01', 'estudante', true);
    // console.log(NovoUser);
    // console.log(NovoUser.exibirInfos());

    // console.log(User.prototype.isPrototypeOf(NovoUser));
