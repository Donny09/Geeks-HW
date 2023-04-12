const relative = document.querySelector('.relative');
const absolute = document.querySelector('.absolute');
const absoluteMove = relative.offsetWidth - absolute.offsetWidth;

const move = () => {
    let position = absolute.offsetLeft + 5;
    if (position > absoluteMove) {
        position = 0;
    }
    absolute.style.relative = position + 'px';
    if (absolute.offsetLeft >= absoluteMove) {
        return;
    }
move();
}
move()