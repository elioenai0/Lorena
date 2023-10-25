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

//ELEMENTOS EM OUVIDORIA............................

var telaDepoimentos = document.getElementById('depoimentos')
telaDepoimentos.addEventListener('click',
    function(e){
        var ondeUsuarioClicou = e.target.id;

        var corpo = document.getElementsByTagName('body')[0]

        var contador = document.getElementById('contador');

        var nomeSaida = document.getElementById('nome');

        var depoimentosSaida = document.getElementById('fala');

        var nomes = [
            'Elioenai Oliveira, Paulínia(SP)',
            'Samara Henrique, Paulínia(SP)',
            'Maria Lurdes Gugu, Campinas(SP)',
            'Helena Oliveira Martins, Hortolândia(SP)'  
        ]
        var depoimentos = [
            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',

            'A minha filha é atendida pela Lorena, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',

            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',

            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',
            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.',
            'A Lorena atendeu minha sobrinha, que tinha um problema de fala. Super atenciosa e simpática, ganhou fácil a atenção da menina. Em apenas uma sessão foi suficiente para atingir os objetivos. Claramente domina todas as técnicas para a eficácia no tratamento.'
        ]
        if(ondeUsuarioClicou == "avancar"){
            if(contador.value == "3"){
                contador.value = "0"
                nomeSaida.innerText = nomes[0]
                depoimentosSaida.innerText = depoimentos[0]
            }else{
                contador.value = contador.value + 1
                nomeSaida.innerText = nomes[contador.value + 1]
                depoimentosSaida.innerText = depoimentos[contador.value + 1]
            }
        }else{
            if(contador.value == "0"){
                contador.value = "3"
                nomeSaida.innerText = nomes[3]
                depoimentosSaida.innerText = depoimentos[3]
            }else{
                contador.value = contador.value-1
                nomeSaida.innerText = nomes[contador.value-1]
                depoimentosSaida.innerText = depoimentos[contador.value-1]
            }
        }
    }
)
    

//ELEMENTOS COM ATIVADORES
function menu(){
    var nave = document.getElementsByTagName('nav')[0];
    var displayNave = nave.style.display
    if(displayNave == 'none'){
        nave.style.display = 'block'
    }else{
        nave.style.display = 'none'
    }
}
