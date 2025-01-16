import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Lucas', 'l@gmail.com', '2025-13-01');
console.log(novoUser.exibirInfos());
novoUser.nome = "Julia";
console.log(novoUser.nome);

const novoAdmin = new Admin('Joao', '123@gmail.com', '2024-01-01');
console.log(novoAdmin.exibirInfos());