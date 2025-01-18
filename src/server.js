const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false, 
  auth: {
    user: "robertrs.dev@gmail.com",
    pass: "bJqSHCMLvEW50z3F", 
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "consultorio@moreirageriatria.com.br",
    subject: `Nova mensagem de ${name}`, 
    text: `Você recebeu uma nova mensagem:\n\nNome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("E-mail enviado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao enviar o e-mail.");
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
