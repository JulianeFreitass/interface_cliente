/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Usuario = modelo.Usuario; //Vinculação de tipo
var Contato = modelo.Contato; //Vinculação de tipo

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', listAboutMe);

app.get('/projetos', listProjectHandler);

app.get('/contato', contactMe);

app.listen(port, listenHandler);

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("Mr.Academy", "https://github.com/ThomasPalma1/FatecPI-01", "img/portfolio3.jpg", "website for sales and subsequent availability of teaching materials", "2020-2", "2020-2"); 
    let projeto_2 = new Projeto("Pantion", "https://github.com/roogercamargo/FatecAPI-02", "img/portfolio1.jpg", "Dashboard for project data analysis and performance monitoring of responsible developers", "2021-1", "2021-1");
    let projeto_3 = new Projeto("Ion-X", "https://github.com/ThomasPalma1/FatecAPI-03", "img/portfolio2.jpg", "customer relationship management platform", "2021-2", "2021-2");    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function listAboutMe(req, res){
     /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
     let usuario = new Usuario("Juliane", "Analysis and Systems Development");     
     let usuarios = [];
     usuarios.push(usuario);
    res.render('about_me.ejs', {sobre_mim: usuarios});    
}

function contactMe(req, res){
     /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
     let contato = new Contato("(12)9 9999-9999", "Juliane.freitas55@gmail.com");     
     let contatos = [];
     contatos.push(contato);
    res.render('contact_me.ejs', {contate_me: contatos});;    
}


function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}