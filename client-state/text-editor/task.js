const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

if(localStorage.textarea){
	textarea.value = localStorage.textarea
}

textarea.oninput = function(e){
	if(this.value.trim() !== ''){
		localStorage.textarea = this.value
	}
}

button.onclick = function(e){
	textarea.value = ''
	delete localStorage.textarea
}