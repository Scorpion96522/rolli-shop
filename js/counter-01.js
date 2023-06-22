console.log ('hi, MAx')

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter=""]');


btnMinus.addEventListener('click', function() {
    console.log('Minus click');

    if( parseInt(counter.innerHTML) > 1) {
        counter.innerHTML = --counter.innerHTML;

    }

});

btnPlus.addEventListener('click', function() {
    console.log('Plus click');
    counter.innerHTML = ++counter.innerHTML;
});