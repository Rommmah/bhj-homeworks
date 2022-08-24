const checkboxes = document.querySelectorAll('.interest__check');

for(const check of checkboxes){

	check.onchange = function(e){

		const list = this.closest('label').nextElementSibling
		if(list && list.tagName == 'UL'){
			const subBoxes = list.querySelectorAll('input[type=checkbox]');
			for(const box of subBoxes){
				box.checked = this.checked
			}
		}

		upStreamCheck(e, check)

		function upStreamCheck(e, elem){
			const supList = elem.parentElement.closest('.interests_active')
			if(supList){
				const supCheck = supList.parentElement.querySelector('input[type=checkbox]')
				const siblingChecks = supList.querySelectorAll('input[type=checkbox]')
				supCheck.indeterminate = false
				for(let check of siblingChecks){
					if(check.checked != e.currentTarget.checked){
						supCheck.indeterminate = true
						upStreamCheck(e, supList)
						return
					}
				}
				upStreamCheck(e, supList)
				supCheck.checked = e.currentTarget.checked
			}
		}

	}

}


