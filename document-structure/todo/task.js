const addBtn = document.querySelector('#tasks__add');
const todoList = document.querySelector('#tasks__list')
const todoInput = document.querySelector('#task__input')

if(localStorage.todo){
	for(let todo of JSON.parse(localStorage.todo) ){
		addTodo(todo)
	}
}

addBtn.addEventListener('click', e => {
	e.preventDefault()

	if(todoInput.value.trim() !== ''){
		addTodo(todoInput.value)

		if(!localStorage.todo){
			localStorage.todo = JSON.stringify([])
		} 
		let storage = JSON.parse(localStorage.todo)
		storage.push(todoInput.value)
		localStorage.todo = JSON.stringify( storage )	
	}


	todoInput.value = ''
	todoInput.focus()

})


function removeItem(elem){
	let deletingValue = elem.previousElementSibling.textContent
	let newList = JSON.parse(localStorage.todo).filter( item => item.trim() != deletingValue.trim() )
	localStorage.todo = JSON.stringify(newList)
	
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

