// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.

const groceryList = [
    'Pane',
    'Latte',
    'Uova',
    'Frutta',
    'Verdura',
    'Pasta',
    'Riso',
    'Carne',
    'Pesce',
    'Formaggio',
    'Sugo',
    'Olio',
    'Sale',
    'Zucchero',
    'Caffè',
    'Te',
    'Biscotti',
    'Cioccolato',
    'Yogurt',
    'Cereali',
    'Sapone',
    'Shampoo',
    'Dentifricio',
    'Carta igienica'
];

let i = 0;

while (i < groceryList.length) {
    console.log((i + 1) + '. ' + groceryList[i]);
    i++;
}
