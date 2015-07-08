
Meteor.startup(function () {

    // see https://atmospherejs.com/mrt/platform.js
    console.log('Platform is '+platform);
    console.log('OS is |'+platform.os+'|');

    if (platform.os == 'Win32') {
      console.log("Setting process.env.MAIL_URL");
      process.env.MAIL_URL = 'smtp://baspop:25/';
    } else {
      console.log("You are running linux!");        
    }

    Accounts.emailTemplates.from = 'Exertis Rugby Cup <webteam@exertis.co.uk>';

    PrettyEmail.options = {
        from: 'webteam@exertis.co.uk',
        logoUrl: 'http://exertis.co.uk/img/logo.png',
        companyName: 'Exertis',
        companyUrl: 'http://exertis.co.uk',
        //companyAddress: '123 Street, ZipCode, City, Country',
        //companyTelephone: '+1234567890',
        companyEmail: 'webteam@exertis.co.uk',
        siteName: 'Exertis Rugby Cup'
       };
});





