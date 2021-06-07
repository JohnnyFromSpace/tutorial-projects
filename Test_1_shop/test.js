window.onload = function(e) {
    var products = document.querySelectorAll('.item');
    var totalPrice = document.querySelector('.value');
    
    for(var i = 0; i < products.length; i++) {
        products[i].onclick = function() { 
                this.classList.toggle('selected');
                calcPrice();
            }
    }

    function calcPrice() {
        var price = 0;
        for(var i = 0; i < products.length; i++) {
            if(products[i].classList.contains('selected')) {
            price += parseInt(products[i].getAttribute('data-price'));
            }
        }
        totalPrice.innerHTML = price;    
    } 
}



