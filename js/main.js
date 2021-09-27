///// show 'Back to school'

function show1() {
    document.getElementById('bts').classList.add('bts_show')
}

///// change photo carousel

function changePhoto(id, name, count) {

  var buttons = document.getElementsByClassName('left_s03_button');

  var carouselSlide = document.getElementById('img03_carousel');
  var carouselImagesSize = 543;

  for (var i=0; i<buttons.length; i++) {
      buttons[i].classList.remove('active')
  }
  document.getElementById(id).className = 'left_s03_button active';

  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-carouselImagesSize * count) + 'px)';
}

///// show letter 1, 2, 7 

var letter1 = document.getElementById("letter1");
var letter2 = document.getElementById("letter2");
var letter7 = document.getElementById("letter7");

letter1.addEventListener("mouseover", function() {
    letter1.style.animation = 'shake 1s cubic-bezier(.30,.10,.20,.95)';
    setTimeout(function() {
        letter1.style.animation = 'none'
    }, 1000);
  });
letter2.addEventListener("mouseover", function() {
    letter2.style.animation = 'shake 1s cubic-bezier(.30,.10,.20,.95)';
    setTimeout(function() {
        letter2.style.animation = 'none'
    }, 1000);
  });
letter7.addEventListener("mouseover", function() {
    letter7.style.animation = 'shake 1s cubic-bezier(.30,.10,.20,.95)';
    setTimeout(function() {
        letter7.style.animation = 'none'
    }, 1000);
  });

///// scroll function

var scrollFunc = function() {
    var textToShow = document.getElementById("textShow");
    var letter1 = document.getElementById("letter1");
    var letter2 = document.getElementById("letter2");
    var letter7 = document.getElementById("letter7");

  var y = window.scrollY;
  if (y >= 500) {
    textToShow.classList.add('showText_right')
  } if (y >= 1200) {
    letter2.classList.add('showText_right');
  } if (y >= 1700) {
    letter7.classList.add('showText_left');
  } if (y >= 2400) {
    letter1.classList.add('showText_right');
  }
};

window.addEventListener("scroll", scrollFunc);



///// Drawing canvas

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath()
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = '#f3e261';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);





///// drag and slide

var ball = document.getElementById('slide_b');
var line = document.getElementById('slide04');
var photo = document.getElementById('image_to_slide');
var lineWidth
var initX; 
var firstX;
var dist

ball.addEventListener('mousedown', function(e) {

    e.preventDefault();
    initX = this.offsetLeft;
    firstX = e.pageX;

    this.addEventListener('mousemove', dragIt, false);

    window.addEventListener('mouseup', function() {
        ball.removeEventListener('mousemove', dragIt, false);
    }, false);

}, false);

function dragIt(e) {
        
        lineWidth = line.offsetWidth - 25 /// 1/2 ball width
        var move = (photo.offsetWidth - document.body.clientWidth) / lineWidth 
        
        if ( this.offsetLeft < 0) {
            dist = 0
            this.style.left = '0px';
        } else if ( this.offsetLeft > lineWidth) {
            dist = lineWidth
            this.style.left = lineWidth + 'px';
        } else {
            dist = this.offsetLeft;
            this.style.left = initX+e.pageX-firstX + 'px';
            photo.style.transform = 'translateX(' + (-dist * move) + 'px)'; 
        }

}

