const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

if(localStorage.valute){
	insertData(JSON.parse(localStorage.valute))
}

( async function(){
	let response = await fetch('https://netology-slow-rest.herokuapp.com')
	if(response.ok){
		loader.classList.remove('loader_active')
	}
	let json = await response.json()

	const valute = json.response.Valute
	items.innerHTML = ''
	insertData(valute)

	localStorage.valute = JSON.stringify(valute)
})()

function insertData(data){
	for(let item in  data){
		items.insertAdjacentHTML('afterBegin',
			`
	          <div class="item">
	            <div class="item__code">
                    ${data[item].CharCode}
                </div>
                <div class="item__value">
                    ${data[item].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
	          </div>
			`
		)
	}
}