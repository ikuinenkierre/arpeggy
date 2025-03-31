$(document).ready(function() {

    $('.mission__list').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true
    });
    
});

const targetElements = document.querySelectorAll('.features__item');

function isInUpperHalf(element) {
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return elementRect.top <= viewportHeight / 2;
}

function handleScroll() {
    targetElements.forEach(element => {
        if (isInUpperHalf(element)) {
            element.classList.add('highlighted');
        } else {
            element.classList.remove('highlighted');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

const btn1 = document.getElementById('form-btn-1');
const btn2 = document.getElementById('form-btn-2');
const group1 = document.getElementById('group1');
const group2 = document.getElementById('group2');
const group3 = document.getElementById('group3');

btn1.addEventListener('click', function(e) {
    e.preventDefault();
    group2.classList.add('join__form-group-active');
});

btn2.addEventListener('click', function(e) {
    e.preventDefault();
    group3.classList.add('join__form-group-active');
});

const inputName = document.getElementById("form-name");
const inputEmail = document.getElementById("form-email");
const inputAttach = document.getElementById("attach-btn");
const inputMessage = document.getElementById("form-message");
const inputUnreleased = document.getElementById("form-unreleased");

function checkFields() {
    if (inputName.value !== "" && inputEmail.value !== "" && inputAttach.files.length > 0) {
        btn1.removeAttribute("disabled");
    } else {
        btn1.setAttribute("disabled", "disabled");
    }
}

function checkFields2() {
    if (inputMessage.value !== "" && inputUnreleased.value !== "" && inputAttach.files.length > 0) {
        btn2.removeAttribute("disabled");
    } else {
        btn2.setAttribute("disabled", "disabled");
    }
}

inputName.addEventListener("input", checkFields);
inputEmail.addEventListener("input", checkFields);
inputAttach.addEventListener("change", checkFields);
checkFields();

inputMessage.addEventListener("input", checkFields2);
inputUnreleased.addEventListener("input", checkFields2);
checkFields2();

updateList = function() {
    var input = document.getElementById('attach-btn');
    var output = document.getElementById('fileList');
    var children = "";
    for (var i = 0; i < input.files.length; ++i) {
        children += '<li>' + input.files.item(i).name + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
    }
    output.innerHTML = children;
}

$('#join__form-terms').click(function() {
    if ($(this).is(':checked')) {

        $('#form-submit').removeAttr('disabled');

    } else {
        $('#form-submit').attr('disabled', true);
    }
});


$("#form-btn-1").on("touchend, click", function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $('#group2').offset().top
    }, 1000);
});

$("#form-btn-2").on("touchend, click", function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $('#group3').offset().top
    }, 1000);
});

$("a.btn").on("touchend, click", function(e) {
  e.preventDefault();
  $('body,html').animate({
      scrollTop: $('.join').offset().top -10
  }, 2000);
});

