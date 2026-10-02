const user =  {
    nome: "Bruno",
    email: "bruno@bruno.com",
    nascimento: "2009/05/09",
    role: "estudantes",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Junior",
    email: "jr@m.com",
    role: "admin",
    criarCurso(){
        console.log('Curso Criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()

//const exibir = function(){
   // console.log(this.nome)
}

//const exibirNome = exibir.bind(user)
//exibirNome()
//exibir();
