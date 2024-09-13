document.getElementById('submit').addEventListener('click', () => {
    grecaptcha.ready(() => {
        grecaptcha.execute('6LcRs0EqAAAAAPc7QGweUMZfYNKxDQdqaHzqnrMR', { action: 'submit' }).then(token => {
            fetch('/verify-captcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'g-recaptcha-response': token })
            })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(error => alert('Error: ' + error));
        });
    });
});
