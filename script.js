window.addEventListener('load', function () {

    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#prev');
    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    let mySlider = setInterval(sliderFunc, 2000);

    function sliderFunc() {
        counter++;
        if (counter == slideCount) { counter = 0; }

        leftPosition = `-${counter * slideWidth}px`;

        slider.style.left = leftPosition;
    };

    


        
    document.getElementById('slider-wrapper').addEventListener('mouseover', function(){
        clearInterval(mySlider);
    });

    document.getElementById('slider-wrapper').addEventListener('mouseout', function(){
        mySlider = setInterval(sliderFunc, 2000);
    });





});