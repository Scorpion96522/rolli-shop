window.addEventListener('click', function(event) {

    let  counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const Wrapper = event.target.closest('.counter-wrapper');
        counter = Wrapper.querySelector('[data-counter]');
    }
    
  
    if (event.target.dataset.action === 'minus') {
        

        if (parseInt(counter.innerHTML) > 1 ) {
            counter.innerHTML = --counter.innerHTML;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerHTML) === 1) {
            event.target.closest('.cart-item').remove();

            toggleCardStatus();
        }

    }
    
    if (event.target.dataset.action === 'plus') {
        counter.innerHTML = ++counter.innerHTML;
    }
});