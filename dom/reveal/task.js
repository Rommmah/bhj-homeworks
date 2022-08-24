let reveals = document.querySelectorAll('.reveal');

window.onscroll = e => {
	let clientHeight = document.documentElement.clientHeight

	for( let reveal of reveals ){
		let bottom = reveal.getBoundingClientRect().bottom
		
		if(bottom > 0 && bottom < clientHeight){
			reveal.classList.add('reveal_active')
		}
	}
}