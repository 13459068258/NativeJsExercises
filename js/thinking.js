let tinking = document.getElementsByClassName('thinking');
let tips = document.getElementsByClassName('tip');

tinking[0].onmouseover = function () {
    tips[0].style.display = 'block';
}
tinking[0].onmouseout = function () {
    tips[0].style.display = 'none';
}
