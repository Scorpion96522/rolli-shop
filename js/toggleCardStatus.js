function toggleCardStatus() {
    
    
    const cardWrapper = document.querySelector('.cart-wrapper');
    
    const cardEmptyBadge = document.querySelector('[data-cart-empty]');
    if (cardWrapper.children.length > 0) {
        console.log('full');
        cardEmptyBadge.classList.add('none');
    } else {
        console.log('epty');
        cardEmptyBadge.classList.remove('none');
    }
}