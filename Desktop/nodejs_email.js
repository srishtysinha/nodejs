var nodemailer=require('nodemailer');

var s =nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'xyz@gmail.com' ,
        pass: '******'
    }
});

var m = {
    from: 'xyz@gmail.com',
    to: 'abc@gmail.com, lmq@gmail.com',
    subject: 'sending email from nodejs',
    text: 'My first project in nodejs!'
};

s.sendMail(m, function(error, info){
    if(error){
        console.log(error);
    }else{

        console.log('email sent : ' + info.response);
    }
});