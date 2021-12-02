var totalButton = document.querySelectorAll('button').length;
for(var a=0; a < totalButton; a++){
    document.querySelectorAll('.drum')[a].addEventListener('click', function(){
        var pressedButton = this.innerHTML;
        Play(pressedButton);
        AddClass(pressedButton);
    })
}
document.querySelector('body').addEventListener('keypress', function(e){
    Play(e.key);
    AddClass(e.key);
})

function Play(args){
    switch(args){
        case 'w':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;
        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        break;
        case 's':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
        break;
        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;
        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        break;
        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        break;
        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break;
        default: console.log('Button not regestered yet.')
    }
}

function AddClass(args){
    document.querySelector(`.${args}`).classList.add('pressed');
    setTimeout(function(){
        document.querySelector(`.${args}`).classList.remove('pressed');
    }, 100)
}
