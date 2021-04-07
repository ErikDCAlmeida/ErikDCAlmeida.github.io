import TxtType from "./typingLogo.js";
import projetosJSON from "./projetos.js";

const obj = (e) => document.querySelector(e);
const objs = (e) => document.querySelectorAll(e);

var arrayOfWords = ['Erik Danilo', 'Web Developer', 'Front-end'];

window.onload = function() {
    var toRotate = arrayOfWords;
    var period = 2000;
    if (toRotate) {
        new TxtType(obj(".nomeSobre"), toRotate, period);
    }
};

let scroll = 0;
obj(".menuScreenLeft").style.top = '50%';
obj("nav a:first-child").classList.add("selected");
const posicaoFormacao = obj("#formacao").getBoundingClientRect().top - 50;
const posicaoHabilidades = obj("#habilidades").getBoundingClientRect().top - 50;
const posicaoProjetos = obj("#projetos").getBoundingClientRect().top - 50;
const posicaoServicoes = obj("#servicos").getBoundingClientRect().top - 50;
window.onscroll = function () {
    scroll = document.documentElement.scrollTop;
    obj(".menuScreenLeft").style.top = `calc(50% + ${scroll}px)`;
    objs("nav a").forEach((item) => {
        if (scroll < posicaoFormacao){
            item.classList.remove("selected");
            obj(".sobLink").classList.add("selected");
        } else if (scroll >= posicaoFormacao && scroll < posicaoHabilidades) {
            item.classList.remove("selected");
            obj(".forLink").classList.add("selected");
        } else if (scroll >= posicaoHabilidades && scroll < posicaoProjetos) {
            item.classList.remove("selected");
            obj(".habLink").classList.add("selected");
        } else if (scroll >= posicaoProjetos && scroll <= posicaoServicoes) {
            item.classList.remove("selected");
            obj(".projLink").classList.add("selected");
        } else if (scroll >= posicaoServicoes){
            item.classList.remove("selected");
            obj(".servLink").classList.add("selected");
        }
    });
}

obj(".menuScreenLeft").addEventListener('mouseover', (e) => {
    if (e.target.id === 'wpp') {
        obj(".whatsapp").style.width = '130px';
        obj(".whatsapp").style.borderRadius = '0px 5px 5px 0px';
        obj(".linkedin").style.width = '34px';
        obj(".email").style.width = '34px';
        obj(".whatsapp span").style.display = 'block';
    } else if (e.target.id === 'lkd') {
        obj(".whatsapp").style.width = '34px';
        obj(".linkedin").style.width = '130px';
        obj(".linkedin").style.borderRadius = '0px 5px 5px 0px';
        obj(".email").style.width = '34px';
        obj(".linkedin span").style.display = 'block';
    } else if (e.target.id === 'email') {
        obj(".whatsapp").style.width = '34px';
        obj(".linkedin").style.width = '34px';
        obj(".email").style.width = '130px';
        obj(".email").style.borderRadius = '0px 5px 5px 0px';
        obj(".email span").style.display = 'block';
    }
});

obj(".menuScreenLeft").addEventListener('mouseout', (e) => {
    if (e.target.id === 'wpp') {
        obj(".whatsapp span").style.display = 'none';
        obj(".whatsapp").style.width = '34px';
        obj(".whatsapp").style.borderRadius = '0px 5px 0px 0px';
        obj(".linkedin").style.width = '34px';
        obj(".email").style.width = '34px';
    } else if (e.target.id === 'lkd') {
        obj(".linkedin span").style.display = 'none';
        obj(".whatsapp").style.width = '34px';
        obj(".linkedin").style.width = '34px';
        obj(".linkedin").style.borderRadius = '0px 0px 0px 0px';
        obj(".email").style.width = '34px';
    } else if (e.target.id === 'email') {
        obj(".email span").style.display = 'none';
        obj(".whatsapp").style.width = '34px';
        obj(".linkedin").style.width = '34px';
        obj(".email").style.width = '34px';
        obj(".email").style.borderRadius = '0px 0px 5px 0px';
    }
});

obj(".menuScreenLeft").addEventListener('click', (e) => {
    if (e.target.id === 'wpp') {
        window.open("https://wa.me/5575988681299/?text=Olá,%20Erik.%20Gostaria%20de%20entrar%20em%20contato%20com%20você!");
    } else if (e.target.id === 'lkd') {
        window.open("https://www.linkedin.com/in/erikdcalmeida/");
    } else if (e.target.id === 'email') {
        window.open("mailto:erikdcalmeida@gmail.com");
    }
});


projetosJSON.map((item,index) => {

    let projeto = document.querySelector(".compProjeto").cloneNode(true);

    projeto.querySelector(".projeto").style.backgroundImage = `url(${item.image})`;
    projeto.querySelector(".bgProjeto").innerHTML = `<span>${item.nome}</span><span>${item.ferramenta}</span>`;
    projeto.querySelector(".projeto").style.boxShadow = `0px 0px 5px 2px ${item.color}`;

    if (projetosJSON.length - 1 === index) {
        projeto.querySelector(".projeto").style.marginRight = "5px";
    }

    projeto.addEventListener('click', () => {
        window.open(item.site);
    });

    obj(".projetos").append(projeto);
});


obj('.menuMobile').addEventListener('click', () => {
    if (obj('.bgMenu').style.display == 'none') {
        obj('.bgMenu').style.display = 'block';
    } else {
        obj('.bgMenu').style.display = 'none';
    }
});

obj('.bgMenu').addEventListener('click', (e) => {
    if (e.target.id === 'bgMenu') {
        obj('.bgMenu').style.display = 'none';
    }
});
