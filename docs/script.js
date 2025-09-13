// Order form submission handler
document.addEventListener('DOMContentLoaded', function() {
	const orderForm = document.getElementById('order-form');
	const orderResponse = document.getElementById('order-response');
	if (orderForm) {
		orderForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const name = document.getElementById('customer-name').value;
			const needs = document.getElementById('customer-needs').value;
			orderResponse.textContent = `Thank you, ${name}! Your order has been received. We will contact you soon.`;
			orderForm.reset();
		});
	}

	// Simple AI assistant chat
	const chatLog = document.getElementById('chat-log');
	const chatInput = document.getElementById('chat-input');
	const sendBtn = document.getElementById('send-btn');
	if (sendBtn && chatInput && chatLog) {
		sendBtn.addEventListener('click', function() {
			const userMsg = chatInput.value.trim();
			if (userMsg) {
				appendMessage('You', userMsg);
				setTimeout(() => {
					appendMessage('AI', getAIResponse(userMsg));
				}, 500);
				chatInput.value = '';
			}
		});
		chatInput.addEventListener('keydown', function(e) {
			if (e.key === 'Enter') {
				sendBtn.click();
			}
		});
	}

	function appendMessage(sender, message) {
		const msgDiv = document.createElement('div');
		msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
		chatLog.appendChild(msgDiv);
		chatLog.scrollTop = chatLog.scrollHeight;
	}

	function getAIResponse(input) {
		// Simple canned responses for demo
		if (input.toLowerCase().includes('portfolio')) {
			return 'You can view our portfolio in the Portfolio tab above.';
		} else if (input.toLowerCase().includes('order')) {
			return 'To place an order, please fill out the form in the Order tab.';
		} else if (input.toLowerCase().includes('contact')) {
			return 'You can contact us at 0789834528.';
		} else {
			return 'I am RoyDesigners AI assistant. How can I help you today?';
		}
	}
});