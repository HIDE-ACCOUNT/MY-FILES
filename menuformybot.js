const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------

cmd({

            pattern: "1",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🧞‍♀️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/b161b6cf6c9597b67c23d.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝙳𝙾𝚆𝙽𝙻𝙾𝙳𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├❑🧜‍♂️⃟➤ɪᴏꜱ
┃ ├❑🧜‍♂️⃟➤ɪᴏꜱᴛ
┃ ├❑🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├❑🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├❑🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├❑🧜‍♂️⃟➤ʏᴛꜱ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├❑🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├❑🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├❑🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├❑🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├❑🧜‍♂️⃟➤ꜱꜱ
┃ ├❑🧜‍♂️⃟➤ꜰʙ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ꜰʙꜱ
┃ ├❑🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├❑🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├❑🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├❑🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🎩 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
