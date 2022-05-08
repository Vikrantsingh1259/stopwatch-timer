const hour = document.getElementById('hour');
const hour = document.getElementById('minute');
const hour = document.getElementById('second');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset'); 

let interval = null;

var sc = 0;
var mt = 0;
var hr = 0;

function Timer()
{
    sc++;
    if(sc <=9)
    {
        Second.innertext = '0$ {sc}';
    }
     if(sc >9)
    {
        Second.innertext = sc;
    }
     if(sc >59)
    {
        sc = 0;
        Second.innertext = "00";

        mt++;
         if(mt <= 9)
    {
        minute.innertext = '0$ {mt}';
    }
     if(mt > 9)
    {
        minute.innertext = mt;
    }
     if(mt > 59)
    {
        minute.innertext = "00";

        hr++;

        if(hr <= 9)
        {
            hour.innerText = '0${hr}';
        }

        if(hr > 9)
        {
            hour.innerText = hr;
        }
    }
}

start.addEventListener('click' , ()=>){
    clearInterval(interval);
    interval = setInterval (Timer,1000);
});

stop.addEventListener('click' , () =>{
    clearInterval(interval);
});

reset.addEventListener(' click' , ()=>{
    clearInterval(interval);
    sc = 0;
    mt = 0;
    hr = 0;
    second.innerText = "00";
    minute.innerText ="00" ;
    hour.innerText = "00" ;
})