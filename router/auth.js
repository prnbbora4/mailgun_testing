const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})


//Not working here as a route
router.post('/sendmail', (req, res) => {
    // var API_KEY = 'c9ceb6e7581ce334fee437da9deeb820-45f7aa85-fbee5aa2';
    // var DOMAIN = 'sandbox5e0ba894bc9a49ac9df8603b108a73f1.mailgun.org';
    // var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

    // const data = {
    //     from: 'I am <prnbbora4@gmail.com>',
    //     to: 'prnbbora4@gmail.com',
    //     subject: 'Test',
    //     text: 'This is a testing message.'
    // };

    // mailgun.messages().send(data, (error, body) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     console.log(body);
    // });

    res.send('Sent !')
})

module.exports = router;