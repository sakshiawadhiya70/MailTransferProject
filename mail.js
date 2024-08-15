const nodemailer  =  require('nodemailer');

async function sendMail(){
   const transporter= nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'sakshi.awadhiya001@gmail.com',
            pass:'hdpv eich dawr ncms'

        }
    })

    const mailOptions = {
    from: 'sakshi.awadhiya001@gmail.com',
    to:'hiring-developer@pearlthoughts.com ',
    subject : 'Welcome to Mail notification system',
    text: 'This is gmail sender project',

    }
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully')
        
    } catch (error) {
        console.log('Email send failed with error ',error)
        
    }
    
}

sendMail()