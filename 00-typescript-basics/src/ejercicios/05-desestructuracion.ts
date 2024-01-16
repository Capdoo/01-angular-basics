//Desestructuracion de objetos

interface Detalles{
    autor: string,
    anio: number
}

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}


/*
console.log('El volumen actual es de: ',reproductor.volumen);
console.log('El segundo actual es de: ', reproductor.segundo);
console.log('La cancion actual es de: ', reproductor.cancion);
console.log('El autor actual es de: ', reproductor.detalles.autor);
*/

/*Desestructuracion: Separar atributos y crear variables*/
//1ra Forma
const { volumen, segundo, cancion, detalles } = reproductor;
//Para obtener las propiedades de la sub-clase
const {autor} = detalles;

console.log('El volumen actual es de: ',volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La cancion actual es de: ', cancion);
console.log('El autor actual es de: ', autor);


//Desestructuracion de Arreglos

const dbz: string[]= ['Goku','Vegeta','Trunks'];
const [, , f3] = dbz;


//console.log('Personaje 1:', f1);
//console.log('Personaje 1:', f2);
console.log('Personaje 3:', f3);























