var months = document.getElementById("months")
var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
//var ms = document.getElementById("ms")




var interval = setInterval(function (){
    
var now = new Date()
var eid = new  Date('6/17/2024')

var diff = eid.getTime() - now.getTime()
var sec = diff / 1000
var min = diff / 1000 /60
var hour = diff / 1000 / 60 / 60
var day = diff / 1000 / 60 / 60 / 24
var m = diff / 1000 / 60 / 60 / 24 / 30

//ms.innerText = Math.round(diff)
seconds.innerText = Math.round(sec)
minutes.innerText = Math.round(min)
hours.innerText = Math.round(hour)
days.innerText = Math.round(day)
months.innerText = Math.round(m)

},1000)