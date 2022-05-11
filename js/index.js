const myModal = $.modal()
let cnt = 0

//localStorage.clear()
console.log(localStorage)
document.addEventListener("click", event=> {
	if (event.target.dataset.open === "open" && localStorage['Ordered'] !== 'true') {
		myModal.open()
		checkInputs()
	}
	else if (event.target.dataset.open === "open" && localStorage['Ordered'] === 'true') {
		addTextToModal()
		myModal.open()
		setTimeout(myModal.close, 5000)
	}
})


// Opne modalSuccess
document.addEventListener('click', event=> {
	if (event.target.dataset.send === 'true') {
		myModal.close()
		addTextToModal()
		myModal.open()
		localStorage.setItem('Ordered', 'true')

		setTimeout(myModal.close, 5000)
	}
})

function addTextToModal() {
	let modal_content = document.getElementById('k-win')
	console.log(modal_content)
	let parent = document.getElementById('k-mod-overlay')
	if (modal_content != null) {
		let del = parent.removeChild(modal_content)

		const window_div = document.createElement('div')
		window_div.classList.add('k-modal-window')
		parent.appendChild(window_div)

		const text = document.createElement('p')
		text.classList.add('k-success-text')
		text.innerText = 'Order has been sent'
		window_div.appendChild(text)
	}

	/*const window_div = document.createElement('div')
	window_div.classList.add('k-modal-window')
	parent.appendChild(window_div)

	const text = document.createElement('p')
	text.classList.add('k-success-text')
	text.innerText = 'Order has been sent'
	window_div.appendChild(text)*/
}

// Cheaking correct data of all inpurts
function checkInputs() {
	var inputs = []
	var name = document.getElementById('k-in-name')
	var email = document.getElementById('k-in-email')
	var phone = document.getElementById('k-in-phone')
	var btn_send = document.getElementById('k-btn-send')

	inputs.push(name, email, phone)
	console.log(inputs)

	const handleChange = () => {
		if (name.value === "") {
			btn_send.setAttribute('disabled', '')
			btn_send.classList.add('k-disable-btn')
			btn_send.classList.remove('k-active-btn')
			return
		}
		if (!IsEmailCorrect(email.value)) {
			btn_send.setAttribute('disabled', '')
			btn_send.classList.add('k-disable-btn')
			btn_send.classList.remove('k-active-btn')
			return
		}
		if(!IsCorrectPhone(phone.value)) {
			btn_send.setAttribute('disabled', '')
			btn_send.classList.add('k-disable-btn')
			btn_send.classList.remove('k-active-btn')
			return
		}
		btn_send.removeAttribute('disabled')
		btn_send.classList.remove('k-disable-btn')
		btn_send.classList.add('k-active-btn')
	}

	for (const input of inputs) {
		input.onkeydown = input.onkeyup = input.onkeypress = input.change = handleChange
	}
}

// Checking correct email address
function IsEmailCorrect(email) {
	let re = /[\w]+@[A-Za-z]+\.[a-zA-Z]+/
	return re.test(String(email).toLowerCase())
}

// Checking correct phone number
function IsCorrectPhone(phoneNum) {
	let re = /(\+|)[0-9]{7,15}/
	return re.test(String(phoneNum).toLowerCase())
}
