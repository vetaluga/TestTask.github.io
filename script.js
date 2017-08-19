var radio = document.getElementsByName('icon-desc');
var i = 0;
var timer;

// auto();

// function auto(){
  setTimeout(nextRadio, 3000);
// }

function nextRadio(){
    if( i < radio.length){
      i++;
    }
    if( i == 6){
      i = 0;
    }
    radio[i].checked = 'checked';
    timer = setTimeout(nextRadio, 3000);
}

function offSlider(){
    clearTimeout(timer);
}
