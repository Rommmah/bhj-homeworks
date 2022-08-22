let slides = document.querySelectorAll('.slider__item');
let prevBtn = document.querySelector('.slider__arrow_prev')
let nextBtn = document.querySelector('.slider__arrow_next')

let curSlide

for(let i = 0; i < slides.length; i++){
	if(slides[i].classList.contains('slider__item_active') ){
		curSlide = i
		break
	}
}

prevBtn.addEventListener('click', e => {
	removeActiveClass()
	curSlide--
	if(curSlide < 0){
		curSlide = slides.length - 1
	}
	addActiveClass()
})

nextBtn.addEventListener('click', e => {
	removeActiveClass()
	curSlide++
	if(curSlide == slides.length){
		curSlide = 0
	}
	addActiveClass()
})

let dots = document.querySelectorAll('.slider__dot')

for(let i = 0; i < dots.length; i++){
	dots[i].addEventListener('click', e =>{
		removeActiveClass()
		curSlide = i
		addActiveClass()
	})
}

function removeActiveClass(){
	slides[curSlide].classList.remove('slider__item_active')
	dots[curSlide].classList.remove('slider__dot_active')
}

function addActiveClass(){
	slides[curSlide].classList.add('slider__item_active')
	dots[curSlide].classList.add('slider__dot_active')
}
