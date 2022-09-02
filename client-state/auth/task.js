const signin = document.querySelector('#signin')
const form = document.querySelector('#signin__form');

if(localStorage.userId){
	greeting(localStorage.userId)
}

form.onsubmit = e =>{
	e.preventDefault();
	(async function(){
		let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php',{
			method: 'POST',
			body: new FormData(form)
		})
		let result = await response.json();
		if(result.success){
			localStorage.userId = result.user_id
			greeting(result.user_id)
		} else {
			clearForm()

			if(!document.getElementById('errorMessage')){
				let div = document.createElement('div')
				div.id = 'errorMessage'
				div.textContent = 'Неверный логин/пароль'
				signin.append(div)				
			}
		}
	})()
}

const exitBtn = document.querySelector('#exit__btn');
exitBtn.onclick = e => {
	delete localStorage.userId
	signin.classList.add('signin_active')
	document.querySelector('#welcome').classList.remove('welcome_active')
	clearForm()
}

function greeting(id){
	signin.classList.remove('signin_active')
	document.querySelector('#welcome').classList.add('welcome_active')
	document.querySelector('#user_id').textContent = id
}

function clearForm(){
	form.elements.login.value = ''
	form.elements.password.value = ''
	form.elements.login.focus()
}

