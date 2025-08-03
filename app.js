const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mewadapreeti5@gmail.com',
            pass: '9302200559'
        }
    });

    const mailOptions = {
        from: email,
        to: 'mewadapreeti5@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Message sent successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
