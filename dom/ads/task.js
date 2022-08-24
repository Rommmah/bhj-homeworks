let rotators = document.querySelectorAll('.rotator__case');

for( let rotator of rotators){
	rotator.style.color = rotator.dataset.color
}

let current = 0

rotateInt(rotators[current].dataset.speed)

function rotateInt(ms){
	
	setTimeout(() => {
		rotators[current].classList.remove('rotator__case_active')
		current++
		if(current === rotators.length){
			current = 0
		}
		rotators[current].classList.add('rotator__case_active')
		
		rotateInt(rotators[current].dataset.speed)

	}, ms)
}
