const user = {
  nome: 'Lucas',
  email: 'test@gmail.com',
  nascimento: '2025-13-01',
  role: 'estudante',
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email);
  }
 }
 
 // user.exibirInfos();

 // const exibir = user.exibirInfos;
 // exibir();

 const exibir = function() {
  console.log(this.nome, this.email);
 }

 const exibirNome = exibir.bind(user);
 exibirNome();