let timer = 0;
let time = document.querySelector('#time');
let alertTime = document.querySelector('#alert');

setInterval(() => {
    if (timer < 300) {
        timer++;
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        time.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (minutes===1) {
            alertTime.innerHTML = "Прошла 1 минута";}
        else if (minutes === 2) {
            alertTime.innerHTML = "Прошло 2 минуты";
        }
        else if (minutes===3){
            alertTime.innerHTML = "Прошло 3 минуты";
        }
        else if (minutes===4){
            alertTime.innerHTML = "Прошло 4 минуты";
        }
    }
    else {
        clearInterval();
        alertTime.innerHTML = "Прошло 5 минут! Время вышло";
    }
}, 1000);