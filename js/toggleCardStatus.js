function toggleCardStatus() {
    
    
    const cardWrapper = document.querySelector('.cart-wrapper');
    
    const cardEmptyBadge = document.querySelector('[data-cart-empty]');

    const orderForm = document.querySelector('[#order-form]');
   
    if (cardWrapper.children.length > 0) {
        console.log('full');
        cardEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        console.log('epty');
        cardEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}