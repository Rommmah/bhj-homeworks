const addBtn = document.querySelector('#tasks__add');
const todoList = document.querySelector('#tasks__list')
const todoInput = document.querySelector('#task__input')

if(localStorage.todo){
	for(let todo of localStorage.todo.split(', ') ){
		addTodo(todo)
	}
}

addBtn.addEventListener('click', e => {
	e.preventDefault()

	if(todoInput.value !== ''){
		addTodo(todoInput.value)

		if(localStorage.todo){
			localStorage.todo = localStorage.todo + ', ' + todoInput.value	
		} else {
			localStorage.todo = todoInput.value
		}
	}


	todoInput.value = ''
	todoInput.focus()

})


function removeItem(elem){
	let deletingValue = elem.previousElementSibling.innerText
	let newList = localStorage.todo.split(', ').filter( item => item !== deletingValue)
	localStorage.todo = newList.join(', ')
	
	elem.parentElement.remove()
}

function addTodo(text){
	todoList.insertAdjacentHTML('beforeEnd', `
		<div class="task">
		  <div class="task__title">
		    ${text}
		  </div>
		  <a href="#" class="task__remove" onclick="removeItem(this)">&times;</a>
		</div>			
	`)
}

