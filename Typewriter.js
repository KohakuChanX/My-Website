var i = 0;
var txt = 'Complexity Network';
var speed = 50;
GlobalEventHandlers.onload = () => typeWriter(event);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
