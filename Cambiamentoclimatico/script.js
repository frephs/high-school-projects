
// data e ora
var today = new Date();
var day = today.getDay();
var daylist = ["Domenica","Lunedì","Martedì","Mercoledì ","Giovedì","Venerdì","Sabato"];
var monthlist = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre','Dicembre'];
var date = today.getDate() +' '+ monthlist[(today.getMonth())]+' '+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

document.getElementById("displayDateTime").innerHTML = daylist[day]+ " "+ dateTime;
//countdown
(function () {
     const second = 1000,
     minute = second * 60,
     hour = minute * 60,
     day = hour * 24;
     year = day* 365
     let doom = "Jan 1, 2030 00:00:00",
     countDown = new Date(doom).getTime(),
     x = setInterval(function() {

          let now = new Date().getTime(),
          distance = countDown - now;
          years =  Math.floor(distance / (year));
          document.getElementById("years").innerText = years,
          document.getElementById("days").innerText = Math.floor(distance / (day)) - 365*years,
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

     }, 0)
}());
