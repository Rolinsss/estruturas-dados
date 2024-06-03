let mapa = new Map();
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let interador = mapa.values();
for (let valor of interador) {
    console.log(valor);
};