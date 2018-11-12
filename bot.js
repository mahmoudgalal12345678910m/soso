const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



 


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' CoderMan ','Malicious™ | Server ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/حب بلا حدود`);
    }, ms);

})


 



		  


client.on('message', async message => {
   let c = client.guilds.get('458253633037795328').channels.get('511130727396540416');
   if (!c);
   if (message.content.startsWith(prefix + 'js')) {
       let code = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب الكود الان**')).then(co => {
       let desc = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب وصف الكود الان**')).then(d => {    
       let owner = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب المصدر **')).then(o => {    
                 var dd = d.first().content;
                 if (!dd) return;
                  var cod = co.first().content;
                 if (!cod) return;
                  var own = o.first().content;
                 if (!own) return;
                 
                 
                   c.send(`
 @everyone | @here 
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
   Malicious™ Codes  :arrow_down:
\`\`\`js
${co.first().content}
\`\`\`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
**
وصف الكود : ${d.first().content}
تم النشر بواسطه : ${'<@'+message.author.id+'>'}
المصدر : ${o.first().content}
**
          `)
       })
       })
       })
   }
});


client.on('message', async message => {
   let c = client.guilds.get('458253633037795328').channels.get('511145505917763606');
   if (!c);
   if (message.content.startsWith(prefix + 'py')) {
       let code = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب الكود الان**')).then(co => {
       let desc = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب وصف الكود الان**')).then(d => {    
       let owner = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب المصدر **')).then(o => {    
                 var dd = d.first().content;
                 if (!dd) return;
                  var cod = co.first().content;
                 if (!cod) return;
                  var own = o.first().content;
                 if (!own) return;
                 
                 
                   c.send(`
 @everyone | @here 
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
   Malicious™ Codes  :arrow_down:
\`\`\`js
${co.first().content}
\`\`\`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
**
وصف الكود : ${d.first().content}
تم النشر بواسطه : ${'<@'+message.author.id+'>'}
المصدر : ${o.first().content}
**
          `)
       })
       })
       })
   }
});







client.on('message', async message => {
   let c = client.guilds.get('458253633037795328').channels.get('511454445800914946');
   if (!c);
   if (message.content.startsWith(prefix + 'pac')) {
       let code = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب البكج الان**')).then(co => {
       let desc = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب وصف له**')).then(d => {    
       let owner = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب المصدر **')).then(o => {    
                 var dd = d.first().content;
                 if (!dd) return;
                  var cod = co.first().content;
                 if (!cod) return;
                  var own = o.first().content;
                 if (!own) return;
                 
                 
                   c.send(`
 @everyone | @here 
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
   Malicious™ Codes  :arrow_down:
\`\`\`js
${co.first().content}
\`\`\`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
**
الكود  البكج: ${d.first().content}
تم النشر بواسطه : ${'<@'+message.author.id+'>'}
المصدر : ${o.first().content}
**
          `)
       })
       })
       })
   }
});








client.on('message', async message => {
   let c = client.guilds.get('458253633037795328').channels.get('511461217811038210');
   if (!c);
   if (message.content.startsWith(prefix + 'file')) {
       let code = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**ضح رابط الملف للتحميل**')).then(co => {
       let desc = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب وصف **')).then(d => {    
       let owner = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب المصدر **')).then(o => {    
                 var dd = d.first().content;
                 if (!dd) return;
                  var cod = co.first().content;
                 if (!cod) return;
                  var own = o.first().content;
                 if (!own) return;
                 
                 
                   c.send(`
 @everyone | @here 
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
   Malicious™ Codes  :arrow_down:
\`\`\`js
${co.first().content}
\`\`\`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
**
وصف الكود : ${d.first().content}
تم النشر بواسطه : ${'<@'+message.author.id+'>'}
المصدر : ${o.first().content}
**
          `)
       })
       })
       })
   }
});







client.on('message', async message => {
   let c = client.guilds.get('458253633037795328').channels.get('511461217811038210');
   if (!c);
   if (message.content.startsWith(prefix + 'file')) {
       let code = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**ضح رابط الملف للتحميل**')).then(co => {
       let desc = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب وصف **')).then(d => {    
       let owner = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**اكتب المصدر **')).then(o => {    
                 var dd = d.first().content;
                 if (!dd) return;
                  var cod = co.first().content;
                 if (!cod) return;
                  var own = o.first().content;
                 if (!own) return;
                 
                 
                   c.send(`
 @everyone | @here 
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
   Malicious™ Codes  :arrow_down:
\`\`\`js
${co.first().content}
\`\`\`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
**
وصف الكود : ${d.first().content}
تم النشر بواسطه : ${'<@'+message.author.id+'>'}
المصدر : ${o.first().content}
**
          `)
       })
       })
       })
   }
});

client.on('message', async message => {
   let c = client.guilds.get('458253633037795328').channels.get('511530336912539648');
   if (!c);
   if (message.content.startsWith(prefix + 'تقديم')) {
       let code = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**خبرتك بالديسكورد ؟**')).then(co => {
       let desc = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**الاسم**')).then(d => {    
       let owner = message.channel.awaitMessages(m => m.author.id === message.author.id,{time: 5000}, message.channel.send('**العمر **')).then(o => {    
                 var dd = d.first().content;
                 if (!dd) return;
                  var cod = co.first().content;
                 if (!cod) return;
                  var own = o.first().content;
                 if (!own) return;
                 
                 
                   c.send(`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
   Malicious™ Codes  قسم التقديم
\`\`\`js
${co.first().content}
\`\`\`
\`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\`
**
الاسم : ${d.first().content}
تم التقديم بواسطه : ${'<@'+message.author.id+'>'}
العمر : ${o.first().content}
**
          `)
       })
       })
       })
   }
});



             
client.login(process.env.BOT_TOKEN);

