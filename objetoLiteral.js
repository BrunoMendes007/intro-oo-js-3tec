const user =  {
    nome = "Bruno",
    email: "bruno@bruno.com",
    nascimento: "2009/05/09",
    role: "admin",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()

const exibir = function(){
    console.log(this)
}
exibir()