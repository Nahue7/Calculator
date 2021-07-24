const keys = document.querySelector('.buttons');
const display = document.querySelector('.display');

// Vemos qué tecla se ha clickeado.
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Qué tipo de tecla se ha clickeado.
        let key = e.target
        let action = key.dataset.action
        
        // Si no tiene una acción, tiene que ser un número.
        if (!action) {
                console.log('number!') }
        
        if (
            action == 'add' ||
            action == 'subtract' ||
            action == 'multiply' ||
            action == 'divide') {
                console.log('operator!');
            }
        
        if (action == 'clear') {
            console.log('clear')
        }
        
        if (action == 'dot') {
            console.log('decimal!')
        }
        
        if (action == 'calculate') {
            console.log('calculate!')
        }
    }
})









let array = [ 1, 2, 3 ];
let array1 = array.join('');
let array2 = array.join([1, 2]);

// let suma = () => {
//     console.log(array1 + array2)
// }
const suma = () =>{
    return parseInt(array.join(''))
}

console.log(suma() + 2);