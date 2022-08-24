const book = document.querySelector('#book');
const controls = document.querySelector('.book__controls');

controls.addEventListener('click', e => {
	if(e.target.closest('.book__control_font-size') ){
		bookSet(e, 'font-size_active', 'size', {
			'small': 'book_fs-small',
			'big': 'book_fs-big',			
		}) 		
	} else if(e.target.closest('.book__control_color') ){
		bookSet(e, 'color_active', 'textColor', {
			'gray': 'book_color-gray',
			'whitesmoke': 'book_color-whitesmoke',			
			'black': 'book_color-black',			
		}) 		
	} else if(e.target.closest('.book__control_background') ){
		bookSet(e, 'color_active', 'bgColor', {
			'gray': 'book_bg-gray',
			'white': 'book_bg-white',			
			'black': 'book_bg-black',			
		}) 		
	}
})


function bookSet(e, activeClass, dataName, classData) {
	if(e.target.closest('a') ){
		e.preventDefault()

		for(let child of e.target.closest('.book__control').children){
			child.classList.remove(activeClass)
		}

		e.target.classList.add(activeClass)

		for(data in classData){
			book.classList.remove(classData[data])
		}

		book.classList.add( classData[ e.target.dataset[dataName] ] )
	}
}
