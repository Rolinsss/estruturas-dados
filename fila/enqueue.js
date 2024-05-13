let fila = [];
fila.enqueue = function(iten) {
    this.push(iten);
};
fila.enqueue(1);
fila.enqueue(2);
console.log(fila);