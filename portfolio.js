// お問い合わせフォームの送信処理
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	// 送信処理の実装
	console.log('名前:', name);
	console.log('メールアドレス:', email);
	console.log('メッセージ:', message);

	alert('お問い合わせを受け付けました。');
});
