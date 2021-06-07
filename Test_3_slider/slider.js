window.onload = function() {
    var btnPrev = document.querySelector('.gallery-1 .buttons .prev');
    var btnPrevTwo = document.querySelector('.gallery-2 .buttons .prev');
    var btnNext = document.querySelector('.gallery-1 .buttons .next');
    var btnNextTwo = document.querySelector('.gallery-2 .buttons .next');
    var images = document.querySelectorAll('.gallery-1 img');
    var imagesTwo = document.querySelectorAll('.gallery-2 img');

    var slider = new Slider(images);
    var sliderTwo = new Slider(imagesTwo);

    btnPrev.onclick = function() {
        slider.prev();
    } 
    btnNext.onclick = function() {
        slider.next();
    }
    btnPrevTwo.onclick = function() {
        sliderTwo.prev();
    }
    btnNextTwo.onclick = function() {
        sliderTwo.next();
    }
}

    function Slider(images) {
        this.images = images;
        var i = 0;
        this.prev = function() {
            this.images[i].classList.remove('showImg');
            i--;
            if(i < 0) i = this.images.length - 1;
            this.images[i].classList.add('showImg');
        }
        this.next = function() {
            this.images[i].classList.remove('showImg');
            i++;
            if(i == this.images.length) i = 0;
            this.images[i].classList.add('showImg');
        }
    }

     
            

    






