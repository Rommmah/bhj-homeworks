let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab__content');

for( let i = 0; i < tabs.length; i++){
	tabs[i].addEventListener('click', e => {
		removeActive(tabs, 'tab_active')
		removeActive(tabContents, 'tab__content_active')
		addActive(tabs[i], 'tab_active')
		addActive(tabContents[i], 'tab__content_active')
	})
}

function addActive(elem, className){
	elem.classList.add(className)
}

function removeActive(elems, className){
	for(let elem of elems){
		elem.classList.remove(className)
	}
}