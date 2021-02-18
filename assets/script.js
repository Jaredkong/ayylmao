presentImg = document.getElementById("present");
presentImgTwo = document.getElementById("presentTwo");
belowWords = document.getElementById("belowWords");
belowWordsTwo = document.getElementById("belowWordsTwo");

presentImg.onclick = function(){
    presentImg.className += " disappear"
    presentImgTwo.className ="img-fluid"
    belowWords.className += " disappear"
    belowWordsTwo.className -="disappear"
}


