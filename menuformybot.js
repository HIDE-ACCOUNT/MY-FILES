const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------
cmd({

            pattern: "menu",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🎲",

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

                    url: 'https://telegra.ph/file/b14abd862b0bf132a2b5e.jpg',

                },

                caption: `
❍═════════════════════❍
    *_𝙳𝙰𝚁𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃_*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

┏⃞❑⃝🦹⃟➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦸⃟➥.2 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧞‍♀️⃟➥.3 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♂️⃟➥.4 *ᴛᴇxᴛᴘʀᴏ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♀️⃟➥.5 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🍁⃟➥.6 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝💕⃟➥.7 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧚‍♂️⃟➥.8 *ɢᴀᴍᴇ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🎩⃟➥.9 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🎭⃟➥.10 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦂⃟➥.11 *ᴀʟʟ ᴍᴇɴᴜ*
┃
┣⃞❑⃝❄️⃟➥.12 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🐲⃟➥.13 *ɴꜱꜰᴡ ᴍᴇɴᴜ*
┃
┣⃞❑⃝😈⃟➥.14 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🐍⃟➥.15 *ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🌿⃟➥.16 *ɢᴇɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🐉⃟➥.17 *ᴡᴇᴇʙ ᴍᴇɴᴜ*
┃
┗⃞❑⃝🔖⃟➥.18 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
❍═════════════════════❍
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
│ ᴅᴏᴡɴᴀᴘᴋ
│ ꜰʙ
│ ᴛɪᴋᴛᴏᴋ
│ ᴛɢꜱ
│ ɢᴅʀɪᴠᴇ
│ ᴛᴛꜱ
│ ᴠɪᴅᴇᴏ
│ ᴀᴜᴅɪᴏ
│ ꜱᴏᴜɴᴅ
│ ʀɪɴɢᴛᴏɴᴇ
│ ᴘɪɴᴛ
│ ᴍᴇᴅɪᴀꜰɪʀᴇ
│ ᴘʟᴀʏ
│ ʏᴛꜱ
│ ʏᴛᴍᴘ4
│ ʏᴛᴍᴘ3
│ ʏᴛᴅᴏᴄ
│ ɢɪᴛᴄʟᴏɴᴇ
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
cmd({

            pattern: "2",

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
│ ᴠᴠ
│ ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│ ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
│ ᴇxᴇᴄ
│ ʀᴇᴀᴅᴍᴏʀᴇ
│ ᴜᴘᴛɪᴍᴇ
│ ᴡᴍ
│ ᴘɪᴄᴋ
│ ꜰʟɪᴘᴛᴇxᴛ
│ ᴍᴘ4ꜰʀᴏᴍᴜʀʟ
│ ᴇᴍɪx
│ ᴄʜᴀᴛʙᴏᴛ
│ ᴇʙɪɴᴀʀʏ
│ ᴅʙɪɴᴀʀʏ
│ ʙᴏᴛ
│ ꜰɪɴᴅ
│ ᴜɴʙᴀɴ
│ ᴜʀʟ
│ ᴛʀᴛ
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
cmd({

            pattern: "3",

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
│ ᴀᴅ
│ ᴊᴀɪʟ
│ ᴜɴᴄᴏᴠᴇʀ
│ ᴄʟᴏᴡɴ
│ ᴍɴᴍ
│ ᴘᴇᴛᴛ
│ ɢʀᴇʏꜱᴄᴀʟᴇ
│ ɪɴᴠᴇʀᴛ
│ ʙʟᴜʀ
│ ᴅʀɪᴘ
│ ᴄᴏʟᴏʀɪꜰʏ
│ ɢᴜɴ
│ ᴡᴀɴᴛᴇᴅ
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
cmd({

            pattern: "4",

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
│ ɢᴅᴇꜱᴄ
│ ɢɴᴀᴍᴇ
│ ᴀɴᴛɪꜰᴀᴋᴇ
│ ᴘᴅᴍ
│ ᴡᴀʀɴ
│ ɪɴᴠɪᴛᴇ
│ ʀᴇꜱᴇᴛ
│ ᴛᴀɢᴀʟʟ
│ ᴋɪᴋ
│ ɴᴜᴍ
│ ʀᴇꜱᴇᴛᴡᴀʀɴ
│ ᴘᴏʟʟ
│ ᴘʀᴏꜰɪʟᴇ
│ ʀᴀɴᴋ
│ ᴘʀᴏᴍᴏᴛᴇ
│ ᴅᴇᴍᴏᴛᴇ
│ ᴋɪᴄᴋ
│ ɢʀᴏᴜᴘ
│ ɢᴘᴘ
│ ᴛᴀɢ
│ ᴛᴀɢᴀᴅᴍɪɴ
│ ᴀᴅᴅ
│ ᴅᴇʟ
│ ᴄʜᴇᴄᴋᴡᴀʀɴ
│ ʙʀᴏᴀᴅᴄᴀꜱᴛ
│ ᴀɴᴛɪʟɪɴᴋ
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

cmd({

            pattern: "5",

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
│ ɴᴘᴍ
│ ꜱꜱ
│ ɪᴍᴅʙ
│ ᴡᴇᴀᴛʜᴇʀ
│ ʜᴏʀᴏ
│ ᴄʀɪᴄ
│ ɢᴏᴏɢʟᴇ
│ ɪᴍᴀɢᴇ
│ ᴄᴏᴜᴘʟᴇᴘᴘ
│ ɪꜱᴡᴀ
│ ɴᴏᴡᴀ
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
cmd({

            pattern: "6",

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
│ ꜱɪʀᴀꜱᴀ
│ ʜɪʀᴜɴᴇᴡꜱ
│ ɪᴏꜱ
│ ᴇꜱᴀɴᴀ
│ ɴᴀꜱᴀ
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
cmd({

            pattern: "7",

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
│ ʜᴇʟᴘ
│ ʟɪꜱᴛ
│ ᴏᴡɴᴇʀ
│ ꜰɪʟᴇ
│ ᴅᴇʟʙɢᴍ
│ ᴀʟʟʙɢᴍ
│ ᴀᴅᴅʙɢᴍ
│ ᴅᴇᴠ
│ ʀᴇᴘᴏ
│ ʟɪɴᴋ
│ ꜱᴛᴀᴛᴜꜱ
│ ᴄᴘᴜ
│ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
│ ᴘɪɴɢ
│ ᴀʟɪᴠᴇ
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
cmd({

            pattern: "8",

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
│ ᴘᴏᴋᴇ
│ ʜᴜɢ
│ ʜᴏʟᴅ
│ ʜɪꜰɪ
│ ʙɪᴛᴇ
│ ʙʟᴜꜱʜ
│ ᴘᴜɴᴄʜ
│ ᴘᴀᴛ
│ ᴋɪꜱꜱ
│ ᴋɪʟʟ
│ ʜᴀᴘᴘʏ
│ ᴅᴀɴᴄᴇ
│ ʏᴇᴇᴛ
│ ᴡɪɴᴋ
│ ꜱʟᴀᴘ
│ ʙᴏɴᴋ
│ ʙᴜʟʟʏ
│ ᴄʀɪɴɢᴇ
│ ᴄᴜᴅᴅʟᴇ
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
cmd({

            pattern: "9",

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
│ ᴡᴀɪꜰᴜ
│ ɴᴀʀᴜᴛᴏ
│ ɴᴇᴋᴏ
│ ꜰᴏxɢɪʀʟ
│ ᴀɴɪᴍᴇɴᴇᴡꜱ
│ ʟᴏʟɪ
│ ᴘᴏᴋᴇᴍᴏɴ
│ ᴍᴀɴɢᴀ
│ ᴀɴɪᴍᴇ
│ ᴡᴀʟʟᴘᴀᴘᴇʀ
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

cmd({

            pattern: "10",

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
│ ᴘʟᴜɢɪɴꜱ
│ ʀᴇᴍᴏᴠᴇ
│ ɪɴꜱᴛᴀʟʟ
│ ᴊᴏɪɴ
│ ᴄᴏᴍᴍᴏɴ
│ ᴅɪꜰꜰ
│ ʙʟᴏᴄᴋ
│ ᴜɴʙʟᴏᴄᴋ
│ ᴊɪᴅ
│ ᴀᴅᴅɴᴏᴛᴇ
│ ϙʀ
│ ꜱʜᴇʟʟ
│ ᴇᴠᴀʟ
│ ᴅᴇʟɴᴏᴛᴇ
│ ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
│ ʙᴀɴ
│ ᴀʟʟɴᴏᴛᴇꜱ
│ ʀᴇꜱᴛᴀʀᴛ
│ ᴜᴘᴅᴀᴛᴇ
│ ᴜᴘᴅᴀᴛᴇɴᴏᴡ
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
cmd({

            pattern: "11",

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
│ ᴘʜᴏᴛᴏ
│ ꜰᴀɴᴄʏ
│ ᴛɪɴʏ
│ ᴛᴏᴀᴜᴅɪᴏ
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
cmd({

            pattern: "12",

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
│ ʙᴀꜱꜱ
│ ʙʟᴏᴡɴ
│ ᴅᴇᴇᴘ
│ ꜰᴀꜱᴛ
│ ʀᴇᴠᴇʀꜱᴇ
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

cmd({

            pattern: "13",

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
│ ϙᴜᴇꜱᴛɪᴏɴ
│ ᴛʀᴜᴛʜ
│ ᴅᴀʀᴇ
│ ᴊᴏᴋᴇ
│ ᴊᴏᴋᴇ2
│ ꜰᴀᴄᴛ
│ ϙᴜᴏᴛᴇꜱ
│ ᴅᴇꜰɪɴᴇ
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
cmd({

            pattern: "14",

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
│ ᴀɴᴏɴʏᴍꜱɢ
│ ᴄʜᴀᴛ
│ ɢᴘᴛ
│ ᴅᴀʟʟᴇ
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
