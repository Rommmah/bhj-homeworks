const chat = document.querySelector('.chat-widget');
const chatBtn = document.querySelector('.chat-widget__side-text')
const messageInput = document.querySelector('.chat-widget__input')
const messages = document.querySelector( '#chat-widget__messages' );

chatBtn.onclick = () =>{
	chat.classList.add('chat-widget_active')
	messageInput.focus()
}

window.onkeydown = e => {
	if (e.keyCode === 13 && messageInput.value){
		let message = messageInput.value
		let date = new Date
		let time = date.toLocaleTimeString().slice(0, 5)
		messages.innerHTML += `
		  <div class="message message_client">
		    <div class="message__time">${time}</div>
		    <div class="message__text">
		      ${message}
		    </div>
		  </div>
		`;
		messageInput.value = ''
		scrollToBottom()
		answer( phrases[ Math.floor(Math.random() * phrases.length) ] )
		askAfterTime(30)
	}
}

function answer(message){
	let date = new Date
	let time = date.toLocaleTimeString().slice(0, 5)
	messages.innerHTML += `
	  <div class="message">
	    <div class="message__time">${time}</div>
	    <div class="message__text">
	      ${message}
	    </div>
	  </div>
	`;
	scrollToBottom()
}

function scrollToBottom(){
	const chat = document.querySelector('.chat-widget__messages-container')
	chat.scrollTop = chat.scrollHeight
}

const phrases = [
	'Фраза 1',
	'Фраза 2',
	'Фраза 3',
	'Фраза 4',
]

let tabIsActive = true
window.onblur = () => {
	tabIsActive = false
}
window.onfocus = () => {
	tabIsActive = true
}
let timeout
function askAfterTime(ms){
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		if(tabIsActive){
			answer("Вы где?")
		}
	}, ms * 1000)
}
