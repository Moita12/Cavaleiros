function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "Saga de Gêmeos.";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Saga é o Cavaleiro de Ouro de Gêmeos do século XX, que tinha uma personalidade dividida entre o bem e o mal. Ele matou o antigo Grande Mestre Shion e se disfarçou dele para tentar dominar o mundo. No entanto, viu seu plano ir por terra abaixo ao ser derrotado por Seiya com a ajuda de Atena e se arrependeu de seus crimes. Saga pode manipular a energia cósmica para criar explosões devastadoras ou abrir portais para outras dimensões. Ele também pode usar telecinese, telepatia e ilusão para controlar objetos e mentes, além de ser capaz de se mover e atacar na velocidade da luz ou até mais rápido qu ela.";
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "Milo de Escorpião.";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Afrodite de Peixes.";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="aries"){
        texto.innerHTML = "Mu de Áries.";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="touro"){
        texto.innerHTML = "Aldebaran de Touro.";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="cancer"){
        texto.innerHTML = "Máscara da Morte de Câncer.";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="leao"){
        texto.innerHTML = "Aiolia de Leão.";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="virgem"){
        texto.innerHTML = "Shaka de Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="libra"){
        texto.innerHTML = "Dohko de Libra.";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="aquario"){
        texto.innerHTML = "Camus de Aquário.";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="capricornio"){
        texto.innerHTML = "Shura de Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "Aiolos de Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.png");
        imagem.setAttribute("width","250px");
    }
}