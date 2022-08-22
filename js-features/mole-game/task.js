let dead = document.querySelector('#dead');
let lost = document.querySelector('#lost');
let holes = document.querySelectorAll('.hole');

let goal = 0, miss = 0

for(let hole of holes){
	hole.addEventListener('click', e => {
		if(e.target.classList.contains('hole_has-mole') ){
			goal++
		} else {
			miss++
		}

		dead.innerHTML = goal
		lost.innerHTML = miss

		if(goal == 10) {
			dead.innerHTML = lost.innerHTML = goal = miss = 0
			return alert('win')
		}

		if(miss == 5) {
			dead.innerHTML = lost.innerHTML = goal = miss = 0
			return alert('lose')
		}
	})
}

