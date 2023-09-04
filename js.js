function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("i");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos" || valor=="Gemeos" || valor=="gêmeos" || valor=="Gêmeos"){
        texto.innerHTML = "Saga de Gêmeos.";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Saga é o Cavaleiro de Ouro de Gêmeos do século XX, que tinha uma personalidade dividida entre o bem e o mal. Ele matou o antigo Grande Mestre Shion e se disfarçou dele para tentar dominar o mundo. No entanto, viu seu plano ir por terra abaixo ao ser derrotado por Seiya com a ajuda de Atena e se arrependeu de seus crimes. Saga pode manipular a energia cósmica para criar explosões devastadoras ou abrir portais para outras dimensões. Ele também pode usar telecinese, telepatia e ilusão para controlar objetos e mentes, além de ser capaz de se mover e atacar na velocidade da luz ou até mais rápido qu ela.";
    }

    else if(valor=="escorpiao" || valor=="Escorpiao" || valor=="escorpião" || valor=="Escorpião"){
        texto.innerHTML = "Milo de Escorpião.";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "O Écarlate, quando criança, foi picado por um escorpião, o que gerou uma reação em suas hemoglobinas que começaram a torná-las transparentes. Dessa forma, Écarlate iria ficar invisível lentamente até desaparecer de vez.";
    }
    
    else if(valor=="peixes" || valor=="peixe" || valor=="Peixes" || valor=="Peixe"){
        texto.innerHTML = "Afrodite de Peixes.";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "O protetor da última Casa do Zodíaco sendo o sucessor de Albafica de Peixes. Pode derrotar qualquer inimigo se estiver lutando com toda sua força. É um cavaleiro famoso não apenas por sua beleza, mas também pela sua reputação como um dos mais fortes entre os 88 cavaleiros.";
    }
    else if(valor=="aries" || valor=="Aries" || valor=="áries" || valor=="Áries"){
        texto.innerHTML = "Mu de Áries.";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
    }
    else if(valor=="touro" || valor=="Touro" || valor=="touros" || valor=="Touros"){
        texto.innerHTML = "Aldebaran de Touro.";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
    }
    else if(valor=="cancer" || valor=="Cancer"){
        texto.innerHTML = "Máscara da Morte de Câncer.";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";
    }
    else if(valor=="leao" || valor=="leão" || valor=="Leão" || valor=="Leao"){
        texto.innerHTML = "Aiolia de Leão.";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena.";
    }
    else if(valor=="virgem" || valor=="Virgem"){
        texto.innerHTML = "Shaka de Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
    }
    else if(valor=="libra" || valor=="libras" || valor=="Libra" || valor=="Libras"){
        texto.innerHTML = "Dohko de Libra.";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Athena, por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. ";
    }
    else if(valor=="aquario" || valor=="Aquario" || valor=="aquário" || valor=="Aquário"){
        texto.innerHTML = "Camus de Aquário.";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "É o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria.";
    }
    else if(valor=="capricornio" || valor=="Capricornio" || valor=="Capricórnio" || valor=="capricórnio"){
        texto.innerHTML = "Shura de Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "É o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
        
    }
    else if(valor=="sagitario" || valor=="Sargitario" || valor=="sárgitario" || valor=="Ságitario" || valor=="ságitario"){
        texto.innerHTML = "Aiolos de Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "É o Cavaleiro de Ouro de Sagitário do Século XX. Irmão de Aioria de Leão e melhor amigo de Shura de Capricórnio, morreu ao tentar salvar a infante Atena de Saga de Gêmeos que estava disfarçado de Grande Mestre. Chamado erroneamente de Aioros e Ioria.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.png");
        imagem.setAttribute("width","250px");
    }
}