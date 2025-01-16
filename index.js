import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Lucas', 'l@gmail.com', '2025-13-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Joao', '123@gmail.com', '2024-01-01');
console.log(novoAdmin.exibirInfos());

const novaDocente = new Docente('Ana', 'b@gmail.com', '2024-01-01');
console.log(novaDocente.exibirInfos());