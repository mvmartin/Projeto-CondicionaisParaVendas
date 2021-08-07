console.log(`Projeto 1 - Definindo possibilidades de Vendas`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);//Definindo lista com Array

const idadeComprador = 15;
const estaAcompanhado = true;
console.log(`Destinos possíveis: `);
console.log(listaDeDestino)

if (idadeComprador >= 18) {
    console.log(`comprador maior de idade`);
    console.log(listaDeDestino)
} else {
    //Caso o comprador seja menor de idade
    if (estaAcompanhado == true) {
        console.log(`comprador menor de idade mas está acompanhado`);
        console.log(listaDeDestino)
        //Sendo menor de idade, e estiver acompanhado
    } else {
        console.log(`comprador menor de idade, não posso vender`);
        listaDeDestino.splice(0, 3);// Removendo os itens, caso não poder vender.
    }
}

