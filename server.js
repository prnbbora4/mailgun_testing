const express = require('express')
const app = express()
const port = 3000

app.use(require('./router/auth'))

var API_KEY = 'c9ceb6e7581ce334fee437da9deeb820-45f7aa85-fbee5aa2';
var DOMAIN = 'sandbox5e0ba894bc9a49ac9df8603b108a73f1.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

const data = {
    from: 'I am <prnbbora4@gmail.com>',
    to: 'prnbbora4@gmail.com',
    subject: 'Test',
    text: 'This is a testing message.'
};

mailgun.messages().send(data, (error, body) => {
    if (error) {
        console.log(error);
    }
    console.log(body);
});


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})