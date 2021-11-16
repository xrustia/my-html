(function () {
   const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);


//const countDownContainer = document.querySelector('.countdown');
const startTime = new Date();
function showCountDown() {
    const limitSecs = 10;
    const currentTime = new Date();
    const intervalSecs = Math.round((currentTime - startTime) / 1000);
    const leftSecs = limitSecs - intervalSecs;
    countDownContainer.innerText = leftSecs;
    if (leftSecs <= 0) {
        document.body.innerHTML = 'НА ВАШОМУ РАХУНКУ НЕДОСТАТНЬО КОШТІВ ;)';
    }

}
//setInterval(showCountDown, 1000); 
})();
