let drumArr = document.querySelectorAll(".drum");

for(let i = 0; i < drumArr.length; i++){
    drumArr[i].addEventListener("click", function() {
        switch(this.innerHTML){
            case "w":
                var som = new Audio("sounds/crash.mp3");
                som.play();
                break;
            case "a":
                var som = new Audio("sounds/kick-bass.mp3");
                som.play();
                break;
            case "s" :
                var som = new Audio("sounds/snare.mp3");
                som.play();
                break;
            case "d":
                var som = new Audio("sounds/tom-1.mp3");
                som.play();
                break;
            case "j":
                var som = new Audio("sounds/tom-2.mp3");
                som.play();
                break;
            case "k" :
                var som = new Audio("sounds/tom-3.mp3");
                som.play();
                break;
            case "l" : 
                var som = new Audio("sounds/tom-4.mp3");
                som.play();
                break;
            default:
                console.log(this.innerHTML);
            
        }
    });
}

// var sound = new Audio('sounds/tom-1.mp3');
//         sound.play();