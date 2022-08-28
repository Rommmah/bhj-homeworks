const elemsWithTooltip = document.querySelectorAll('.has-tooltip')

for(let elem of elemsWithTooltip){
	elem.insertAdjacentHTML('afterEnd', addText(elem.title))


	elem.addEventListener('click', e =>{
		e.preventDefault()

		removeActive()

		let toolTip = elem.nextElementSibling
		toolTip.classList.add('tooltip_active')
		let tipWidth = toolTip.getBoundingClientRect().width
		let tipHeight = toolTip.getBoundingClientRect().height

		let position = elem.getBoundingClientRect()
		switch(elem.dataset.position){
			case "top": 
				toolTip.style.top = position.top - tipHeight + 'px'; 
				toolTip.style.left = position.left + 'px'; 
				break;
			case "left": 
				toolTip.style.top = position.top + 'px'; 
				toolTip.style.left = position.left - tipWidth + 'px'; 
				break;
			case "right": 
				toolTip.style.top = position.top + 'px'; 
				toolTip.style.left = position.right + 'px'; 
				break;
			case "bottom": 
				toolTip.style.top = position.bottom + 'px'; 
				toolTip.style.left = position.left + 'px'; 
				break;
			default: 
				toolTip.style.top = '0px';
				toolTip.style.left = '0px';
		}

		let toolTipPosition = toolTip.getBoundingClientRect()
		if(toolTipPosition.left < 0){
			toolTip.style.left = 0
		}
		if(toolTipPosition.top < 0){
			toolTip.style.top = 0
		}
		if(toolTipPosition.right > document.documentElement.clientWidth){
			toolTip.style.left = document.documentElement.clientWidth - tipWidth + 'px'
		}
		if(toolTipPosition.bottom > document.documentElement.clientHeight){
			toolTip.style.top = document.documentElement.clientHeight - tipHeight + 'px'
		}
	})
}

window.addEventListener('click', e => {
	if( !e.target.closest('.has-tooltip') ){
		removeActive()
	}
})

function addText(text){
	return (
		`<div class="tooltip" style="left: 0; top: 0">
			${text}
		</div>`
	)
}

function removeActive(){
	let activeTip = document.getElementsByClassName('tooltip_active')
	if(activeTip.length){
		activeTip[0].classList.remove('tooltip_active')
	}
}
