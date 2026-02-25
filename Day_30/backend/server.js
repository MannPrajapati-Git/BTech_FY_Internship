// Mail send using nodemailer library
// npm i nodemailer

const express = require('express')
const app = express()
const port = 3000

// importing nodemailer
const nodemailer = require('nodemailer')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// creating api fot sending the mail to the user
// replace host -> gmail smtp settings (search this in chrome)  -> host : smtp.gmail.com
// replace port ->  port 587 (TLS) or 465 (SSL) 
// replace auth -> user and pass with your email and password
// for replacing password you need to generate app password for your email account (search this in chrome) and use that password here
app.get("/sendmail", (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use true for port 465, false for port 587
        auth: {
            user: "mannprajapati2502@gmail.com", // Your email address
            pass: "alrp qafb rffc tomi", // Your email password or app password
        },
    });

    // Send an email using async/await
    (async () => {
        const info = await transporter.sendMail({
            from: '"Mann Prajapati" <mannprajapati2502@gmail.com>', // sender address
            to: "heligandhi4114@gmail.com, vibewebsindia@gmail.com, divyangsolanki2004@gmail.com", // list of receivers
            subject: "Confirmation Email", // Subject line
            text: "Are you getting my mails ? ", // Plain-text version of the message
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Email Confirmation</title>
</head>
<body style="margin:0; padding:0; background: linear-gradient(135deg, #111827, #1f2937); font-family: 'Segoe UI', Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <table width="600" cellpadding="0" cellspacing="0" border="0" 
               style="background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.2);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(90deg, #6366F1, #A855F7); padding: 30px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:28px; letter-spacing:1px;">
                ✨ Email Confirmation
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 30px; text-align:center; color:#111827;">
              <h2 style="margin-top:0; font-size:22px;">Hello 👋</h2>
              <p style="font-size:16px; line-height:1.6; color:#374151;">
                We just wanted to confirm that our email system is working properly.
                Please let us know if you're receiving this message successfully.
              </p>

              <!-- Button -->
              <a href="mailto:mannprajapati2502@gmail.com"
                 style="display:inline-block; margin-top:25px; padding:14px 28px; 
                        background: linear-gradient(90deg, #6366F1, #A855F7);
                        color:#ffffff; text-decoration:none; border-radius:50px;
                        font-size:15px; font-weight:600; box-shadow:0 6px 15px rgba(99,102,241,0.4);">
                Confirm Receipt
              </a>

              <p style="margin-top:30px; font-size:14px; color:#6B7280;">
                If you didn’t expect this email, you can safely ignore it.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3f4f6; padding:20px; text-align:center; font-size:13px; color:#6B7280;">
              © ${new Date().getFullYear()} Mann Prajapati | All Rights Reserved
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`, // HTML version of the message
        });

        console.log("Message sent:", info.messageId);
    })();
    res.send("Mail is being sent, please check your inbox !")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})