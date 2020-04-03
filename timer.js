let deadLine = '04-04-2020';

    function getTimeRemining(endtime) {

        //Вираховує часю та повертає обєкт.
        let time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time/1000) % 60),
            minutes = Math.floor((time/1000/60) % 60),
            hours = Math.floor((time/(1000*60*60)));
            // hour = Math.floor((time/1000/60/60) % 24),
            // days = Math.floor((time/(1000*60*60*24)));

            return {
                'total'   : time,
                'hours'   : hours,
                'minutes'  : minutes,
                'seconds' : seconds
            };
    }

    //Функція якій потрібно передати батьківський елемент HTML і дедлайн(часу);
    function setClock(id, endtime) {  

        const timer = document.getElementById(id),
              hour = timer.querySelector('.hours'),
              min = timer.querySelector('.minutes'),
              sec = timer.querySelector('.seconds');

        const timeInterval = setInterval(updateClock, 1000);


        function updateClock() {

            let t = getTimeRemining(endtime);
            
            //Добавляє нолик якщо число менше 9
            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hour.textContent = addZero(t.hours);
            min.textContent = addZero(t.minutes);
            sec.textContent = addZero(t.seconds);

            //Яущо час вийшов присвоюєм нулі
            if(t.total <= 0) {
                clearInterval(timeInterval);
                hour.textContent = '00';
                min.textContent = '00';
                sec.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

console.log(getTimeRemining());
    