presentImg = document.getElementById("present");
belowWords = document.getElementById("belowWords");
belowWordsTwo = document.getElementById("belowWordsTwo");

presentImg.onclick = function(){
    presentImg.className += " disappear"
    belowWords.className += " disappear"
    belowWordsTwo.className -="disappear"
}


