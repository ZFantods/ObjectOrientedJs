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
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Nome não pode ser vazio");
        }
        this.#nome = novoNome;
    }


        // exibirInfos() {
        //     return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
        // }
        exibirInfos() {
           if (this.role === 'estudante') {
             return `dados estudantes:${this.nome}`;
             } 
             if (this.role === 'admin') {
                return `dados admins:${this.nome}, ${this.role}`;
            }
            if (this.role === 'docente') {
                return `dados docentes:${this.nome}, ${this.email}`;
            }
        }
    }

    const NovoUser = new User('Lucas', 'test@gmail.com', '2025-13-01', 'estudante', true);
    // console.log(NovoUser);
    // console.log(NovoUser.exibirInfos());

    // console.log(User.prototype.isPrototypeOf(NovoUser));
