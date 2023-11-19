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

// creo un eventlist con il button per mostrare la lista
document.getElementById('showListButton').addEventListener('click', function () {
    // stringa per la lista
    let shoppingListLet = '';
    // cycle while
    let i = 0;
    while (i < groceryList.length) {
        shoppingListLet += '<p>' + groceryList[i] + '</p>';
        i++;
    }

    // collego il div nel quale mostrare la lista 
    const containerList = document.getElementById('shoppingList');
    // collego la stringa al contenuto del div
    containerList.innerHTML = shoppingListLet;
});








