const question = document.querySelector('#poll__title');
const answerList = document.querySelector('#poll__answers');

(async function getQuestion(){
	let response = await fetch('https://netology-slow-rest.herokuapp.com/poll.php')
	let json = await response.json();

	question.textContent = json.data.title

	let answers = Array.from(json.data.answers)
	for(let answer of answers){
		let answerBtn = document.createElement('button')
		answerBtn.className = 'poll__answer'
		answerBtn.textContent = answer
		answerBtn.onclick = e =>{
			alert('Спасибо, ваш голос засчитан!')

			let response = fetch('https://netology-slow-rest.herokuapp.com/poll.php',{
				method: 'POST',
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				body: 'vote=' + json.id + '&answer=' + answers.indexOf(answer)
			})
				.then(response => response.json())
				.then(json => {
					const stat = json.stat
					sum = stat.reduce((init, item) => init + item.votes, 0)
					answerList.innerHTML = ''
					for(let item of stat){
						answerList.insertAdjacentHTML('beforeEnd', `
							<p>${item.answer}: <b>${(item.votes * 100 / sum).toFixed(2)}%</b></p>
						`)
					}
				})			
		}
		answerList.append(answerBtn)
	}
})()
