var buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function () {
            state(this.id);
            animation(this.id);
}));
document.addEventListener("keydown", function(e){
    state(e.code);
    animation(e.code);
});

function state (buttonInnerHtml){
    switch (buttonInnerHtml) {
        case "KeyG":
            var C = new Audio("audio/C.mp3");
            C.play();
        break;

        case "KeyY":
            var Db = new Audio("audio/Db.mp3");
            Db.play();
        break;

        case "KeyH":
            var D = new Audio("audio/D.mp3");
            D.play();
        break;

        case "KeyU":
            var Eb = new Audio("audio/Eb.mp3");
            Eb.play();
        break;

        case "KeyJ":
            var E = new Audio("audio/E.mp3");
            E.play();
        break;

        case "KeyK":
            var F = new Audio("audio/F.mp3");
            F.play();
        break;

        case "KeyO":
            var Gb = new Audio("audio/Gb.mp3");
            Gb.play();
        break;

        case "KeyL":
            var G = new Audio("audio/G.mp3");
            G.play();
        break;

        case "KeyP":
            var Ab = new Audio("audio/Ab.mp3");
            Ab.play();
        break;

        case "Semicolon":
            var A = new Audio("audio/A.mp3");
            A.play();
        break;

        case "BracketLeft":
            var Bb = new Audio("audio/Bb.mp3");
            Bb.play();
        break;

        case "Quote":
            var B = new Audio("audio/B.mp3");
            B.play();
        break;

        default: //do nothing;
    }
}

function animation (key){
    var current = document.querySelector("#" + key);
    current.classList.add("pressed");
    setTimeout(function(){current.classList.remove("pressed");}, 100);
}