import { Product, taxCalculation  } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 1111,
    },
    {
        description: 'iPad',
        price: 222,
    }
];

const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 12212
});

console.log('Total', total);
console.log('Tax', tax);
