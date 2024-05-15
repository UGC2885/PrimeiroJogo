 //Iniciando o jogo mapeando toda a tela, para não ter scrolls
  
    //Colocando que o valor da altura e largura são iguais a 0, a função abaixo irá funcionar
    //Pois se foram colocados dentro do escopo da função, dará um erro, pois as variaveis precisam estar 
    //No alcançe do escopo global do app.

    var altura = 0
    var largura = 0
    var vidas = 1
    var tempo = 30
    var nivel = window.location.search
    nivel = nivel.replace('?', '')

    if (nivel ==='normal'){
        criaMosquitoTempo = 1500
    } else if (nivel === 'dificil') {
        criaMosquitoTempo = 1000

    } else if (nivel === "chucknorris"){
        criaMosquitoTempo = 750

    }

    function ajustaTamanhoTela(){
        altura = window.innerHeight //Mapeado a tela toda com 100vh
        largura = window.innerWidth //Mapeado a tela toda com 100vh

        console.log(largura, altura)
    }

    ajustaTamanhoTela()

    //Fazendo com que o tempo do cronometro funcione
    var cronometro = setInterval(function(){


        tempo -= 1

        if(tempo < 0){
            window.location.href = 'vitoria.html'
        } else{

        document.getElementById('cronometro').innerHTML = tempo
        }
    } ,1000)
4
    function posicaoRandomica(){
    //Aqui foi usado .random para que possamos calcular o valor X e Y 
    //aleatoriamente conforme o tamanho da tela de cada usuário.

    //Em seguida, encapsulado em math.floor para que não tenham casas decimais.
        var posicaoX = Math.floor(Math.random() * largura) - 90 //Fazer a subtração para que não ultrapassse a tela e tenha a barra de rolagem
        var posicaoY = Math.floor(Math.random() * altura) - 90 //Fazer a subtração para que não ultrapassse a tela e tenha a barra de rolagem

        //Também temos o problema de que se caso o mosquito tenha a posição 0, será subtraido os 90px e ele desapareserá
        //da tela, então colocaremos um controle com o operador ternário


            //remover o mosquito anterior (caso exista) e afetar as vidas perdidas

            if (document.getElementById('mosquito')){
                document.getElementById('mosquito').remove()

                if (vidas > 3){
                    window.location.href = 'fimDeJogo.html'
                } else {
                document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

                vidas++
                }
            }

        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

        //"Se posicaoX/Y for menor que 0, recebe 0, se não, recebe ela mesma"


        console.log(posicaoX, posicaoY)

        //Criar elemento HTML

        var mosquito = document.createElement('img') //Criar elementos HMTL que é a imagem
        mosquito.src = 'imagens/mosquito.png'
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // Coloca os tamanhos aleatórios dos mosquitos
        mosquito.style.left = posicaoX + 'px' //Formar a coordenada em pixels na esquerda do navegador
        mosquito.style.top = posicaoY + 'px' //Formar a coordenada em pixels no topo do navegador
        mosquito.style.position = 'absolute' //Para que as coordenadas sejam aplicadas, o elemento deve ser absoluto
        mosquito.id = 'mosquito' // colocar o id para que o mosquito suma depois de 1 segundo
        mosquito.onclick = function(){
            this.remove()
        }    
            console.log(ladoAleatorio()) // Para obter o resultado dos lados aleatorios dos mosquitos


        //Estamos colocando uma imagem, como se faz no HTML, mas de forma programatica no
        //Javascript e na sequência criando o elemento de forma dinâmica e depois, incluido
        //no body da página

        document.body.appendChild(mosquito)  //Basicamente adicionando um filho para o body
                                            //que é o mosquito que será criado aleatoriamente
        }
        function tamanhoAleatorio(){
            var classe = Math.floor(Math.random() * 3) //Criar um número muito próximo de 3 (0 até muito próximo de 3 no caso)
            
            switch(classe){
                case 0:
                    return 'mosquito1' // Não é necessário Break nesse caso por que o return é 
                                       // a última função antes do termino da função, então ela será interrompida.
                case 1: 
                    return 'mosquito2'
                case 2:
                    return 'mosquito3'
            }
        }

        function ladoAleatorio(){
            var classe = Math.floor(Math.random() * 2) //Criar um número muito próximo de 2 para 2 lados
            
            switch(classe){
                case 0:
                    return 'ladoA' // Não é necessário Break nesse caso por que o return é 
                                       // a última função antes do termino da função, então ela será interrompida.
                case 1: 
                    return 'ladoB'
            }
        }