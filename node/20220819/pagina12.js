var hoje = new Date();
var diaSemana = hoje.getDay();
var nomeDia = '';
switch(diaSemana){
    case 0:
        nomeDia='Domingo';
        break;
    case 1:
        nomeDia='Segunda';
        break;
    case 2:
        nomeDia='Terça';
        break;
    case 3:
        nomeDia='Quarta';
        break;
    case 4:
        nomeDia='Quinta';
        break;
    case 5:
        nomeDia='Sexta';
        break;
    case 6:
        nomeDia='Sabado'
        break;
}
console.log('Hoje é ' + nomeDia + ' dia de pegar uma morena louca e cair na farra!!!')