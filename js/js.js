$(document).ready(function () {
    $('.featured__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '.featured-prev',
        nextArrow: '.featured-next',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    },
    );

    $('.testimonials-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.testimonials-prev',
        nextArrow: '.testimonials-next',
        autoplay: true,
        autoplaySpeed: 3500
    });


    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false;
    });

});

const acc = document.getElementsByClassName("freq-questions__accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.animation = "beastBack 0.4s ease-in-out"
            setTimeout(() => {
                panel.style.display = "none";
            }, 400)
        } else {
            panel.style.display = "block";
            panel.style.animation = "beast 0.4s ease-in-out"
        }
    });
}


const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const w1 = document.getElementById('w1');
const w2 = document.getElementById('w2');
const w3 = document.getElementById('w3');

w1.style.display = 'block';

a1.onclick = function () {
    w2.style.display = '';
    w3.style.display = '';
    w1.style.display = 'block';
    a1.style.transform = 'scale(1.11)'
    a2.style.transform = 'scale(1)'
    a3.style.transform = 'scale(1)'
}

a2.onclick = function () {
    w1.style.display = '';
    w3.style.display = '';
    w2.style.display = 'block';
    a2.style.transform = 'scale(1.11)'
    a1.style.transform = 'scale(1)'
    a3.style.transform = 'scale(1)'
}

a3.onclick = function () {
    w1.style.display = '';
    w2.style.display = '';
    w3.style.display = 'block';
    a3.style.transform = 'scale(1.11)'
    a2.style.transform = 'scale(1)'
    a1.style.transform = 'scale(1)'
}





