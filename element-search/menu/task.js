let menu__link = document.querySelectorAll('.menu__link')
let menu_sub = document.querySelectorAll('.menu_sub')

for(let item of menu__link){
	item.addEventListener('click', e => {
		let list = e.target.nextElementSibling
		if(list){
			e.preventDefault()
			if( list.classList.contains('menu_active') ){
				list.classList.remove('menu_active')
			} else {
				for(menu of menu_sub){
					menu.classList.remove('menu_active')
				}
				list.classList.add('menu_active')
			}
		}
	})
}
