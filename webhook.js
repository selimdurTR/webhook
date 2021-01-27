const Discord = require("discord.js");
const girisbilgileri = require("./settings.json");
const webhook = new Discord.WebhookClient(girisbilgileri.id,girisbilgileri.token);
if(girisbilgileri.sistem == 1){
    if(!girisbilgileri.metin) return console.log("Metin yazmayı unuttun galiba.")
webhook.send(girisbilgileri.metin);
}
else if(girisbilgileri.sistem == 2){
    const bot = require("./ikinciyol.json")
    const client = new Discord.Client();
    client.login(bot.token)
    client.on("message", async message => {
        if (message.content == bot.prefix + "webhook"){
            const args = message.content.slice(bot.prefix.lenght + 7).trim().split(/ +/);
            webhook.send(args.slice.join(" "))
            .then(console.log("işlem başarılı"))
        }
    });
}
else{
    console.log("Hatalı sistem bilgisi. settings.json u kontrol ediniz.")
}