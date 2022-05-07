// private method for creating order form
function _createModal() {
	const modal = document.createElement('div')
	modal.classList.add('k-modal')
	document.body.appendChild(modal)

	const overlay_div = document.createElement('div')
	overlay_div.classList.add('k-modal-overlay')
	overlay_div.setAttribute('id', 'k-mod-overlay')
	overlay_div.setAttribute('data-close', 'true')
	modal.appendChild(overlay_div)

	const window_div = document.createElement('div')
	window_div.classList.add('k-modal-window')
	window_div.setAttribute('id', 'k-win')
	overlay_div.appendChild(window_div)

	// Modal header
	const modal_header = document.createElement('div')
	modal_header.classList.add('k-modal-header')
	window_div.appendChild(modal_header)
 
	const title = document.createElement('span')
	title.classList.add('k-modal-title')
	title.innerText = 'Order'
	modal_header.appendChild(title)

	const close_btn = document.createElement('span')
	close_btn.classList.add('k-modal-close')
	close_btn.innerText = 'x'
	close_btn.setAttribute('data-close', 'true')
	modal_header.appendChild(close_btn)
	// Modal header

	// Modal body
	const modal_body = document.createElement('div')
	modal_body.classList.add('k-modal-body')
	window_div.appendChild(modal_body)

	const input_name = document.createElement('input')
	input_name.setAttribute('type', 'text')
	input_name.id = 'k-in-name'
	modal_body.appendChild(input_name)

	const input_email = document.createElement('input')
	input_email.setAttribute('type', 'email')
	input_email.id = 'k-in-email'
	modal_body.appendChild(input_email)

	const input_phone = document.createElement('input')
	input_phone.setAttribute('type', 'tel')
	input_phone.id = 'k-in-phone'
	modal_body.appendChild(input_phone)
	// Modal body

	// Modal footer
	const modal_footer = document.createElement('div')
	modal_footer.classList.add('k-modal-footer')
	window_div.appendChild(modal_footer)

	const send_btn = document.createElement('button')
	send_btn.id = 'k-btn-send'
	send_btn.setAttribute('disabled', 'disabled')
	send_btn.classList.add('k-disable-btn')
	send_btn.setAttribute('data-send', 'true')
	send_btn.innerText = 'Send'
	modal_footer.appendChild(send_btn)
	// Modal footer

 	return modal
}

$.modal = function() {
	const $modal = _createModal()

	let destroyed = false

	const modal = {
		open() {
			if (destroyed) {
				return
			}
			$modal.classList.add('open')
		},
		close() {
			$modal.classList.remove('open')
		}
	}

	const listener = event => {
		if (event.target.dataset.close) {
			modal.close()
		}
	}

	$modal.addEventListener('click', listener)

	return Object.assign(modal, {
		destroy() {
			$modal.parentNode.removeChild($modal)
			$modal.removeEventListener('click', listener)
			destroy = true
		}
	})
	
}