const sendBtn = document.querySelector('#send')
const file = document.querySelector('#file')
const progress = document.getElementById( 'progress' );

sendBtn.onclick = function (e) {
	e.preventDefault()
	let xhr = new XMLHttpRequest();

	xhr.upload.onprogress = e => {
		progress.value = e.loaded / e.total;
	};

	xhr.upload.onload = e =>{
		document.forms.form.insertAdjacentHTML('afterEnd', '<p>Загрузка завершена</p>')
	}

	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
	xhr.send(file.files[0]);
}



