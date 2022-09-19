class Projeto{
    constructor(projeto, link, img, description, inicio, fim){
        this.projeto = projeto;
        this.link = link;
        this.img = img;
        this.description = description;
        this.inicio = inicio;
        this.fim = fim;

    }
}

class Usuario{
    constructor(nome, formacao){
        this.nome = nome;
        this.formacao = formacao;

    }
}

class Contato{
    constructor(number, email){
        this.number = number;
        this.email = email;

    }
}

module.exports = {
    Projeto: Projeto,
    Usuario: Usuario,
    Contato: Contato,
}  





