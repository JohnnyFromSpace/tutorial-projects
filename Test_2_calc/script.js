window.onload = function(e) {
    var int1 = document.querySelector('input[name=num1]');
    var int2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');
    var addition = document.querySelector('input[name=add]');
    var subtraction = document.querySelector('input[name=sub]');
    var multiplication = document.querySelector('input[name=mul]');
    var division = document.querySelector('input[name=div]');
 
    var buttons = document.querySelectorAll('input[type=button]');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = function(){
            var op = this.getAttribute('data-op');
            calcValue(op);
        }
    }
    function calcValue(op) {
        var result;
        if(op == '+') result = parseInt(int1.value) + parseInt(int2.value);
        else if(op == '-') result = parseInt(int1.value) - parseInt(int2.value);
        else if(op == '*') result = parseInt(int1.value) * parseInt(int2.value);
        else if(op == '/') result = parseInt(int1.value) / parseInt(int2.value);
        span.innerHTML = result;
    }   
}