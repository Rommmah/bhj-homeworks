let clicker__counter = document.querySelector('#clicker__counter');
let cookie = document.querySelector('#cookie');
let speed = document.querySelector('#speed');

let count = 0

let timer

function countInc(){
	count++
	clicker__counter.innerHTML = count
	resizePic()
	speedRanking()
}

function resizePic(){
	let width = cookie.width
	let height = cookie.height

	cookie.width = width * 1.06
	cookie.height = height * 1.06

	setTimeout( ()=>{
		cookie.width = width
		cookie.height = height 
	}, 50)
}

function speedRanking(){
	let time
	if(timer){
		time = Date.now() - timer
		speed.innerHTML = ( 1 / ( time / 1000 ) ).toFixed(2)
	}
	timer = Date.now()
}

cookie.addEventListener('click', countInc)
