
//FUNCIONES BASICAS
function sumar(a: number,b :number):number{
    return a+b;
}

const sumarFlecha = (a: number,b :number) :number => {
    return a+b;
}

/*
    Tenemos, primero los asignables, luego los opcionales
    y finalmente los que tienen un valor por defecto.
*/
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}


//FUNCIONES CON OBJETOS COMO ARGUMENTOS
interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ',this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();







const resultado = multiplicar(5,10);
const resultado2 = multiplicar(5,0,10);


console.log(resultado);
console.log(resultado2);























