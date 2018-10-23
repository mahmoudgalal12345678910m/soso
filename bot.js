const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
السلام عليكم تعالى حق سيرفرنا الجيمر + المبرمجين وسهر وضحك منتظرينك يا قلبى :heart:
:smile: فى انتظارك نلعب مع بعض 
:tada: جيف اواى على حسابات ماين كرافت علطول 
 
https://discord.gg/khYKYCe
                           
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
السلام عليكم تعالى حق سيرفرنا الجيمر + المبرمجين وسهر وضحك منتظرينك يا قلبى :heart:
:smile: فى انتظارك نلعب مع بعض 
:tada: جيف اواى على حسابات ماين كرافت علطول 
 
https://discord.gg/khYKYCe
                           
! OneFamily .                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDkzNTM0NTc2MTExNjQ4NzY4.DrEuVA.6i2H4F53SpWggwN1HrWOqtgfJm0');
