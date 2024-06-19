const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Configuración del transporte de correo
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'sergioalbertodiaz2012@gmail.com', // Coloca aquí tu dirección de correo Gmail
        clientId: '1047735279012-eumspth4reo6p25rf537cjeg85bfrr59.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04iG6GJibTmJRCgYIARAAGAQSNwF-L9IraAwBoJ6lHABGdLKOrNArFdHjNfyWjor-fecxWvJ-Dh7tp706lq_dlIFjuXpb3SJ5y6s',
        accessToken: '', // opcional, el transporte verificará automáticamente
        tls: {
            rejectUnauthorized: false
        }
    }
});

// Middleware para manejar datos JSON y CORS
app.use(express.json());
app.use(cors());

// Ruta para manejar la solicitud POST del formulario
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Configurar el correo electrónico dinámicamente
        let mailOptions = {
            from: email, // El remitente sigue siendo tu dirección de correo
            replyTo: email, // Dirección de correo proporcionada en el formulario
            to: 'sergioalbertodiaz2012@gmail.com', // Aquí va tu correo personal
            subject: 'Mensaje desde el formulario de contacto',
            text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
        };

        // Enviar el correo electrónico
        let info = await transporter.sendMail(mailOptions);

        console.log('Correo electrónico enviado:', info.messageId);
        res.json({ message: 'Correo electrónico enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

