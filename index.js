let drumArr = document.querySelectorAll(".drum");

for(let i = 0; i < drumArr.length; i++){
    drumArr[i].addEventListener("click", function() {
        this.style.color = "white"
    });
}

// var sound = new Audio('sounds/tom-1.mp3');
//         sound.play();