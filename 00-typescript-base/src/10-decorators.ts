// function classDecorator<T extends { new  {...args: any[]}: {} }> (
function classDecorator (
    constructor: any
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

//@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc1212';

    print() {
        console.log('Hola mundo');
    }
}

//Se imprime la definición de la clase
console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );