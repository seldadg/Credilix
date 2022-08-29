const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/', (req, res) => {
  res.render(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  const output = `
    <p>Имате ново съобщение Credilix</p>
    <h3>Детайли</h3>
    <ul>  
      <li>Name: ${req.body.names}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Съобщение</h3>
    <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: '******',
    port: 587,
    secure: false, // true for 465, false for other ports
    // security: STARTTLS,
    auth: {
        user: '******', 
        pass: '******'
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  const mailOptions = {
      from: req.body.email,
      to: '******',
      subject: 'Ново съобщение',
      message: req.body.message,
      html: output 
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.send('error');
      }else{
        console.log('Message was sent: %s', info.response);   
        res.send('success');
      }
  });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
