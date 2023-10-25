//ELEMENTOS EM OUVIDORIA............................
var telaDepoimentos = document.getElementById('depoimentos')
var contador = document.getElementById('contador');
telaDepoimentos.addEventListener('click',
    function(e){
        var valorAtualdoContador = contador.value *1
        var idDoClickk = e.target.id
        var nome = document.getElementById('nome')
        var falaDep = document.getElementById('fala')
        var nomes = [
            'Elioenai Oliveira, Paulínia(SP)',
            'Samara Henrique, Paulínia(SP)',
            'Maria Lurdes Gugu, Campinas(SP)',
            'Helena Oliveira Martins, Hortolândia(SP)',
            'Ângela Larissa Barck, Campinas(SP)',
            'Tatiane Araújo, Paulínia(SP)'
        ]
        var depoimentos = [
            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',

            'A minha filha é atendida pela Dra Lorena, com diversos problemas locomotores. Com extrema inteligência e destreza, conseguiu convencer minha filha a fazer os execícios e com isso em pouco tempo fez minha filha falar corretamente. Preparou laudos e documentos importantes para mim. Muito obrigada!',

            'Minha avó sofria há anos com incapacidade de mastigar depois de um trauma muito severo. Depois de algumas consultas e exames estávemos sem esperança, até que veio a Dra Lorena, que com muita luta conseguiu fazê-la comer. Foi um vitória gigantesca. Seguimos acreditando em sua total recuperação.',

            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',

            'Depois de alguns tempo sem conseguir falar, devido uma queda de moto que tive, fui surpreendida com novos exercícios que nunca havia feito. Os resultados foram muito positivos. Só tenho há agradecer',

            'Minha filha não mamava corretamente. Isso para qualquer mãe é muito triste. Ela não succionava direito, logo não ficava satisfeita, e eu ainda não consegui resolver seus problemas. Após alguns atendimentos e exercícios, consegui finalmente amamentar minha bebê.'
        ]
        var maximo = nomes.length - 1
        if(idDoClickk == 'avancar'){
            if(valorAtualdoContador == maximo){
                contador.value = 0
                nome.innerText = nomes[0]
                falaDep.innerText = depoimentos[0]
            }else{
                contador.value = valorAtualdoContador+1
                nome.innerText = nomes[valorAtualdoContador+1]
                falaDep.innerText = depoimentos[valorAtualdoContador+1]
            }
        }else{
            if(idDoClickk == 'voltar'){
                if(valorAtualdoContador == 0){
                    contador.value = maximo
                    nome.innerText = nomes[maximo]
                    falaDep.innerText = depoimentos[maximo]
                }else{
                    contador.value = valorAtualdoContador-1
                    nome.innerText = nomes[valorAtualdoContador-1]
                    falaDep.innerText = depoimentos[valorAtualdoContador-1]
                }
            }else{
                ""
            }
        }
    }
)

 


//ELEMENTOS AUTOMÁTICOS

setInterval(function(){
    var tela = document.getElementById('tela')
    var cont = document.getElementById('contadorTela');
    var num = cont.value
    var logger = document.getElementById('logger_log')
    var urls = [
        'https://img.freepik.com/fotos-premium/fonoaudiologa-linda-ensina-a-um-menino-a-pronuncia-correta-de-palavras-e-sons-no-escritorio_114354-3403.jpg?w=2000',
        'https://img.freepik.com/fotos-premium/uma-fonoaudiologa-com-a-ajuda-de-uma-sonda-de-fonoaudiologia-faz-exercicios-para-uma-menina-em-uma-mesa-em-uma-sala_208700-4223.jpg?w=2000',
        'https://ingresseead.unibrasil.com.br/wp-content/uploads/2022/05/Fonoaudiologia.png',
        'https://www.fonosp.org.br/images/pg-fonoaudiologia/areas-atuacao-fono.jpg'
    ]
    if(cont.value == 3){
        cont.value = 0
        logger.innerText = 0
        tela.style.backgroundImage = `url(${urls[0]})`
    }else{
        cont.value = Number(num)+1
        logger.innerText = Number(num)+1
        tela.style.backgroundImage = `url(${urls[Number(num)+1]})`
    }
    

},2500)
   
var menuH = document.getElementById('menuHamb')
menuH.addEventListener('click',
    function(){
        var nave = document.getElementsByTagName('nav')[0];
        var displayNave = nave.style.display
        if(displayNave == 'none'){
            nave.style.display = 'block'
        }else{
            nave.style.display = 'none'
        }
    }
)
