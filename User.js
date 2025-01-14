export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        })
    }

        exibirInfos() {
            const objUser = this.#montaObjUser();
            return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
        }
    }

    const NovoUser = new User('Lucas', 'test@gmail.com', '2025-13-01', 'estudante', true);
    // console.log(NovoUser);
    // console.log(NovoUser.exibirInfos());

    // console.log(User.prototype.isPrototypeOf(NovoUser));
