app.post('/verify-captcha', async (req, res) => {
    const { 'g-recaptcha-response': captchaResponse } = req.body;

    if (!captchaResponse) {
        return res.status(400).send('Captcha not provided');
    }

    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: RECAPTCHA_SECRET_KEY,
                response: captchaResponse
            }
        });

        if (response.data.success && response.data.score > 0.5) {
            res.send('CAPTCHA verified successfully!');
        } else {
            res.status(400).send('CAPTCHA verification failed');
        }
    } catch (error) {
        res.status(500).send('Error verifying CAPTCHA');
    }
});
