let modal_main = document.querySelector('#modal_main');
let modal_success = document.querySelector('#modal_success');
let modal__close = document.querySelectorAll('.modal__close');
let showSuccess = document.querySelector('.show-success');

modal_main.classList.add('modal_active')

for(let close of modal__close){
	close.addEventListener('click', e => {
		e.target.closest('.modal').classList.remove('modal_active')
	})
}

showSuccess.addEventListener('click', e => {
	console.log('f')
	e.target.closest('.modal').classList.remove('modal_active')
	modal_success.classList.add('modal_active')
})