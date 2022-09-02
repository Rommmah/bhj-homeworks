const modal =document.querySelector('#subscribe-modal');
const closeBtn =document.querySelector('.modal__close');

if(!getCookie('hidePopup')){
	modal.classList.add('modal_active')
}

closeBtn.onclick = () =>{
	modal.classList.remove('modal_active')
	document.cookie = 'hidePopup=true'
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
