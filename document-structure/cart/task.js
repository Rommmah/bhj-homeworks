const decBtns = document.querySelectorAll('.product__quantity-control_dec');
const incBtns = document.querySelectorAll('.product__quantity-control_inc');
const addBtns = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart')
const cartList = cart.querySelector('.cart__products')

let prodIdInCart = []
if(localStorage.cart){
	let storage = JSON.parse(localStorage.cart)
	if(storage.length){
		for(let item of storage){
			prodIdInCart.push(item.id)
			addToCart(cartList, item.id, item.imgSrc, item.quantity)
		}
	} else {
		cart.hidden = true
	}
} else {
	cart.hidden = true
}

for(let btn of incBtns){
	btn.addEventListener('click', e => {
		let quantity = e.target.closest('.product').querySelector('.product__quantity-value')
		quantity.innerText++
	})
}

for(let btn of decBtns){
	btn.addEventListener('click', e => {
		let quantity = e.target.closest('.product').querySelector('.product__quantity-value')
		if(quantity.innerText > 1){
			quantity.innerText--			
		}
	})
}

for(let btn of addBtns){
	btn.addEventListener('click', e => {
		let poduct = e.target.closest('.product')
		let quantity = +poduct.querySelector('.product__quantity-value').innerText
		let imgSrc = poduct.querySelector('.product__image').src

		if(prodIdInCart.includes(poduct.dataset.id) ){
			let cartProd = cart.querySelector(`[data-id="${poduct.dataset.id}"]`)
			let prodCount = cartProd.querySelector('.cart__product-count')
			let newQuantity = +prodCount.innerText + quantity
			prodCount.innerText = newQuantity
			addToLocalStorage(localStorage.cart, poduct.dataset.id, newQuantity, imgSrc, true)
		} else {
			addToCart(cartList, poduct.dataset.id, imgSrc, quantity)

			prodIdInCart.push(poduct.dataset.id)
			addToLocalStorage(localStorage.cart, poduct.dataset.id, quantity, imgSrc)
		}

		cart.hidden = false

		let imgPos = poduct.querySelector('.product__image').getBoundingClientRect()
		let cartImgPos = cart.querySelector(`[data-id="${poduct.dataset.id}"] img`).getBoundingClientRect()
		let differenceX = imgPos.left - cartImgPos.left
		let differenceY = imgPos.top - cartImgPos.top
		let movingImg = poduct.querySelector('.product__image').cloneNode()
		document.body.append(movingImg)
		movingImg.style.position = 'absolute'
		movingImg.style.left = imgPos.left + window.pageXOffset + 'px'
		movingImg.style.top = imgPos.top + window.pageYOffset + 'px'

		const start = Date.now()

		let animationTimer = setInterval( () => {
			if(Date.now() - start >= 520){
				clearInterval(animationTimer)
				movingImg.remove()
			} else {
				movingImg.style.left = Number.parseInt(movingImg.style.left) - differenceX / 20 + 'px'
				movingImg.style.top = Number.parseInt(movingImg.style.top) - differenceY / 20  + 'px'

				if(Date.now() - start < 500 / 2){
					movingImg.style.width = movingImg.width * 1.05 + 'px'
				}else{
					movingImg.style.width = movingImg.width / 1.05 + 'px'
				}
			}
		}, 500 / 20)
	})
}

function addToLocalStorage(storeVar, id, quantity, imgSrc, addToExisting = false){
	let storage = []
	if(storeVar){
		storage = JSON.parse(storeVar)
	}
	if(addToExisting){
		storage = storage.filter(item => item.id != id)		
	}
	storage.push({
		id,
		quantity,
		imgSrc
	})
	localStorage.cart = JSON.stringify(storage)
}

function addToCart(elem, id, imgSrc, quantity){
	elem.insertAdjacentHTML('beforeEnd', `
		<div class="cart__product" data-id="${id}">
		    <img class="cart__product-image" src="${imgSrc}">
		    <div class="cart__product-count">${quantity}</div>
		    <div class="cart__product-delete" onclick="deleteFromCart(this)">X</div>
		</div>
	`)	
}

function deleteFromCart(elem){
	let parent = elem.closest('.cart__product')
	prodIdInCart = prodIdInCart.filter(item => item != parent.dataset.id)
	let storage = JSON.parse(localStorage.cart).filter(item => item.id != parent.dataset.id)
	localStorage.cart = JSON.stringify(storage)
	parent.remove()
	if(!prodIdInCart.length){
		cart.hidden = true
	}
}

