const user = {
    nome: 'Lucas',
    email: 'test@gmail.com',
    nascimento: '2025-13-01',
    role: 'studant',
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome, this.email);
    },
   };
   
   const admin = {
     nome: 'Kiwi',
     email: 'kiwi@gmail.com',
     nascimento: '2025-13-01',
     role: 'admin',
     ativo: true,
     criarCurso: function() {
       console.log('curso criado');
     },
   };

   Object.setPrototypeOf(admin, user);
   admin.criarcurso();
   admin.exibirInfos();