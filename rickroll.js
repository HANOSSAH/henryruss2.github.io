var audio = new Audio('https://henryruss2.github.io/rickroll.mp3');
audio.play();
window.onbeforeunload = function(){
    alert('nope');
    return false;
}
