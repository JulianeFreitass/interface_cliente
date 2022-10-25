class Projeto{
    constructor(id, titulo, link, description, inicio, fim){
        this.id= id;
        this.titulo = titulo;
        this.link = link;
        this.description = description;
        this.inicio = inicio;
        this.fim = fim;
   }
}

class Usuario{
    constructor(nome, curso, numero, email){
        this.nome = nome;
        this.curso = curso;
        this.numero = numero;
        this.email = email;

    }
}


module.exports = {
    Projeto: Projeto,
    Usuario: Usuario,
}  





