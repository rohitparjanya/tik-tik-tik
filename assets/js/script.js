var i=0;
var txt="Change course, but don’t give up";
var speed=60;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("footer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
