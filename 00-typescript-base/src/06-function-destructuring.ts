export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 122.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 1222.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation (options: TaxCalculationOptions): [number, number] {
// function taxCalculation ( {tax, products} : TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;
    products.forEach ( ({price}) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation( {
    products: shoppingCart,
    tax: tax,
});

const [my_total, my_tax] = result;

console.log('Total', my_total);
console.log('Tax', my_tax);

// export {};