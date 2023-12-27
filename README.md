cmd({
            pattern: "video",
            react: "💡",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                               let buttonMessaged = {
                image: {
                    url: anu.thumbnail,
                },
                caption: `

┃Ɋᑌᗴᗴᑎ ᗰIᔕᑌᛕI Ƴ丅ᗰᑭ4 ᗪᒪ┃

 
⏳ *Title:* ${anu.title}

⏳ *Duration:* ${anu.timestamp}

⏳ *Viewers:* ${anu.views}

⏳ *Uploaded:* ${anu.ago}

⏳ *Author:* ${anu.author.name}

⏳ *Url* : ${anu.url}

*__ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ__✅*
`,
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
		
            })
            
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
             //   citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption:` 
 _*Duration:* ${anu.timestamp}_
 _*Uploaded:* ${anu.ago}_
 `,   
		    }
                 const txt2 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                await Void.sendMessage(citel.chat, { react: {
        text: "🎥",
        key: txt2.key,
            } } );
			
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )



MR-KALINDU;;;SocialFluent


inrl~4aec7LJti997df272115584e28f8d1f98bd5

MR-KALINDU;;;MatingAmore


Guru_1cd07965-5fda-44fd-88d7-90be7c0526c3


 █▄▀ ▄▀█ █   █ █▄ █ █▀▄ █ █ ▄▄ █▀▄▀█ █▀▄
 █ █ █▀█ █▄▄ █ █ ▀█ █▄▀ █▄█    █ ▀ █ █▄▀




24_12_8f79_6386_3d82


Guru_7ee3e051-d1a9-4891-85ea-40c38850bb65


QUEEN-MIZUKI;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0cvRUg5YlNFOTROdElVdTRDOUZNcittb2pKOEloZ0ZYL0lhWGo3WjlsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJIeTcxaE5YS0RTQ1hYQ3BVazY2TGZpcUY2SjZQS3l3d1NsbFNGUFIxYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TklBNXJ2ZUh0M0l2ZVF5cEo1c1F5QnAxWlJ6TFZqWnY1YXdGeFJCS1hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkLzk1UUlUYXEvS0lKNnE0U2lTTUhsbjZiWndEcDFMQm1BWXRIV3BJUUJZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1NalhTcmZaT3ZUMEF4YjNzWUFXVy9vbDZaVW9JU3pmcmxEUkEwS2NMbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldZMEE1QldlTjFuc1RyV05pUlhidkJPenpva3FwQlVkc2xhN2MxSDBzSEU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcFQ0TVBGY2MrekViWnJaY1lySkV0M1pONm1lQXZSRjVrZmNvQkVhcCtJejd3eER5K0E2ZnhGaTFvMmtEWGdURWVsZDVnaEZhSlpoUFhsVWdFQnVoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyMSwiYWR2U2VjcmV0S2V5IjoieS9NWkdBRVloTFhIVmFsaTFyb1NnbnlENjlsUDFIWjFOOXN2QWVqb1Uyaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic3EtNE9KZERUWXlXeWNwM056MnBkUSIsInBob25lSWQiOiJlZTMxMDY1ZC0zZTAzLTQ1MTUtYTlhOS03YWRkZGY4Y2M3MzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW0vdXZpZ3NCb0tpQ0FVVHhKQllVaFlLT3NVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbjZ4T0I2MFRyQzd2MStpSVc2bG43NmZvMjg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMkw1UDRHRU1IdnJxd0dHQW89IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRiL0llRjc0UnMwdm1CeTV1WGQ0WjdGcFp1VGZDKyt1TjZwbTBISkw1Uzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFZVmJQRzVnd0ZReWYxUFhQa0g4ck5ESE5QTHhrM2VHWDdJTnEyb3h2LzBqWk50aDFid3o4a2VPeHpOMUxObHJiQ3JicGJQaWliYm1JYlFLWkF1aEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKQlg5MFgrVlkvVTc2NndJUzNzYmp5YnBZZGl6TnVBVWRPSUtycmlsM2dkaTNkZlBHbDFaZTV6UUxocGNMcFJCNmlTaVZOUFhrSVU4czkrd0g0UmxnUT09In0sIm1lIjp7ImlkIjoiOTQ3NjQ5Mzc5Njk6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtIvhtIDKn8mqybThtIXhtJwtypnhtIDKmcqPIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY0OTM3OTY5OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlcveUhoZStFYk5MNWdjdWJsM2VHZXhhV2JrM3d2dnJqZXFadEJ5UytVdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzY1NTM2NH0=

MR-KALINDU;;;ClickGellar




https://chat.whatsapp.com/LkP8QZqdhXUKxmc0hUPip

5y8XwBDY#8QXS_cPaiEeoNl8tXHNdkBjjTEchDpr0eo84ONNsb8o


postgres://kalindu_md_user:7oVjlUbLgDHGiQ8JwZvlEoAlbAj6FjHn@dpg-cl2qih1novjs73b66h1g-a.oregon-postgres.render.com/kalindu_md


*White-Shadow  WhatsApp Bot* ✔️

_This is the result of Mr-Kalindu hard work and our team owns the bot's rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances._

🔰 *Official GitHub* - ```https://github.com/MR-KALINDU```

🪀 *Number* - ```+94758179948```

*ᴍʀ-ᴋᴀʟɪɴᴅᴜ* 🐞
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ* 💋
 postgres://kalindu_md_user:7oVjlUbLgDHGiQ8JwZvlEoAlbAj6FjHn@dpg-cl2qih1novjs73b66h1g-a.oregon-postgres.render.com/kalindu_md


mongodb://uzzmnjtnuyny038k5ib2:KxYrpUe9XQ5nVVkbbL17@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bjulgdg77k4wt2w?replicaSet=rs0




https://telegra.ph/file/e9c7c757ed8011e8355f8.jpg


120363162305531586@g.us




🛸 *ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴄʜᴏᴏꜱɪɴɢ Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ* 🛸\n\n🍀 *Qʀ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ*🍀\n\n🇱🇰 *ʏᴏᴜ ᴄᴏᴍᴘʟᴇᴀᴛᴇᴅ ꜰɪʀꜱᴛ ꜱᴛᴇᴘ ᴏꜰ ᴄʀᴇᴀᴛɪɴɢ ʙᴏᴛ* 🇱🇰\n\n🐝 *ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ. ᴏᴛʜᴇʀᴡɪꜱᴇ ᴄᴀɴ ᴀᴄᴄꜱᴇꜱ ʏᴏᴜ ᴀᴄᴄᴏᴜɴᴛ* 🐝\n\n🙄 *ᴅᴏɴᴛ ᴛʀʏ ᴄʀᴇᴀᴛᴇ Qʀ ꜰᴏʀ ᴜꜱɪɴɢ ᴍʏ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ᴄᴏᴅᴇ* 🙄



🍀 ━━━ᴋᴀʟɪɴᴅᴜ-ᴍᴅ━━━ 🍀\n\n🎵 ━━━ꜱᴏɴɢ-ᴅᴏᴡɴ━━━ 🎵\n\n\n\nℹ️ *ᴛɪᴛʟᴇ:* ${anu.title}\n\n🕑 *ᴅᴜʀᴀᴛɪᴏɴ:* ${anu.timestamp}\n\n👀 *ᴠɪᴇᴡᴇʀꜱ:* ${anu.views}\n\n🖇️ *ᴜʀʟ:* ${anu.url}\n\n⬆️ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${anu.ago}\n\n🎗️ *ᴀᴜᴛʜᴏʀ:* ${anu.author.name}



🍀 ━━━ᴋᴀʟɪɴᴅᴜ-ᴍᴅ━━━ 🍀\n\n🎵 ━━━ᴠɪᴅᴇᴏ-ᴅᴏᴡɴ━━━ 🎵\n\n\n\nℹ️ *ᴛɪᴛʟᴇ:* ${anu.title}\n\n🕑 *ᴅᴜʀᴀᴛɪᴏɴ:* ${anu.timestamp}\n\n👀 *ᴠɪᴇᴡᴇʀꜱ:* ${anu.views}\n\n🖇️ *ᴜʀʟ:* ${anu.url}\n\n⬆️ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${anu.ago}\n\n🎗️ *ᴀᴜᴛʜᴏʀ:* ${anu.author.name}
