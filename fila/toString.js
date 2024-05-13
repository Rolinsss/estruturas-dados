let fila = [1, 2, 3];
fila.toStrong = function() {
    return this.join('. ');
};
console.log(fila.toStrong());