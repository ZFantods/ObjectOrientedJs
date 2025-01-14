import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Lucas', 'l@gmail.com', '2025-13-01');
console.log(novoUser.exibirInfos());
// console.log(novoUser.exibirInfos());

// novoUser.nome = "Márcia";
// console.log(novoUser.exibirInfos());
// console.log(novoUser.nome);