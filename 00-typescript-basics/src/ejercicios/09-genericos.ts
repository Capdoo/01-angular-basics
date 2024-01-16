
function queTipoSoy<T>(argumento: T): string{
    return argumento+'';
}

let soyString = queTipoSoy('Hola Mundo');
let soyNum = queTipoSoy(500);
let soyArreglo = queTipoSoy([5,5,5,5]);

let soyExplicito = queTipoSoy<number>(100);








