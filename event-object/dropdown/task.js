let valueBtn = document.querySelectorAll('.dropdown__value');

for(let btn of valueBtn){
	let list = btn.nextElementSibling

	btn.onclick = () => {
		if( list.classList.contains('dropdown__list') ){
			list.classList.toggle('dropdown__list_active')
		}
	}

	list.onclick = e => {
		let text = e.target.closest('li')
		if(text){
			e.preventDefault()
			btn.innerText = text.innerText
			list.classList.remove('dropdown__list_active')
		}
	}

}
