let pontuacao = 0;

function enviar() {
    let r1 = document.querySelector("input[type='radio'][name=p1]:checked").value;
    if (r1 == '3') {
        pontuacao++;
    }

    let r2 = document.querySelector("input[type='radio'][name=p2]:checked").value;
    if (r2 == '2') {
        pontuacao++;
    }

    let r3 = document.querySelector("input[type='radio'][name=p3]:checked").value;
    if (r3 == '2') {
        pontuacao++;
    }

    let r4 = document.querySelector("input[type='radio'][name=p4]:checked").value;
    if (r4 == '1') {
        pontuacao++;
    }

    let r5 = document.querySelector("input[type='radio'][name=p5]:checked").value;
    if (r5 == '1') {
        pontuacao++;
    }

    let r6 = document.querySelector("input[type='radio'][name=p6]:checked").value;
    if (r6 == '3') {
        pontuacao++;
    }

    let r7 = document.querySelector("input[type='radio'][name=p7]:checked").value;
    if (r7 == '2') {
        pontuacao++;
    }

    let r8 = document.querySelector("input[type='radio'][name=p8]:checked").value;
    if (r8 == '2') {
        pontuacao++;
    }

    let r9 = document.querySelector("input[type='radio'][name=p9]:checked").value;
    if (r9 == '3') {
        pontuacao++;
    }

    let r10 = document.querySelector("input[type='radio'][name=p10]:checked").value;
    if (r10 == '1') {
        pontuacao++;
    }

    document.getElementById('resul').value = pontuacao;
    pontuacao = 0;
}

function dica1(){
    alert ('1999 é muito velho, mas o jogo não é tão novo.')
}

function dica2(){
    alert ('Foi menino de cabelo comprido.')
}

function dica3(){
    alert ('O protagonista se chama Sal, eles tem o mesmo sobrenome.')
}

function dica4(){
    alert ('TheMeatle é conhecio por cartoons macabros e Scott por um urso do tinhoso.')
}

function dica5(){
    alert ('É pro mesmo cara que a gente pagaria pra falar e que todo mundo precisa :).')
}

function dica6(){
    alert ('Um "gatinho" não faria tanto estrago e não haviam ursos lá.')
}

function dica7(){
    alert ('Não foi um só, não...')
}

function dica8(){
    alert ('Não era um fantasma e era menino.')
}

function dica9(){
    alert ('Sua mãe não o deu presentes nenhum, ele foi ferido gravementer no passado.')
}

function dica10(){
    alert ('Sally não joga nenhum esporte e um computador é ruim de levar.')
}