let timerContainer = document.querySelector('#timer');

let time = timerContainer.innerText.split(':')

let timeNow = new Date(0, 0, 0, time[0], time[1], time[2])

let timer = setInterval(decTime, 1000)

function decTime(){
	timeNow.setSeconds(timeNow.getSeconds() - 1)
	timerContainer.innerText = timeNow.toLocaleTimeString()
	if(timeNow.toLocaleTimeString() == '00:00:00'){
		clearInterval(timer)
		alert('Вы победили в конкурсе')
	}
}