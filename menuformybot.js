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
    *_ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴇɴᴜ ʟɪꜱᴛ_*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

┏⃞❑⃝🦹⃟➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦸⃟➥.2 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧞‍♀️⃟➥.3 *ᴇᴅɪᴛᴏʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♂️⃟➥.4 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♀️⃟➥.5 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🍁⃟➥.6 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑⃝💕⃟➥.7 *ɢᴇɴᴇʀᴇʟ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧚‍♂️⃟➥.8 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🎩⃟➥.9 *ᴀɴɪᴍᴇ ᴘɪᴄꜱ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🎭⃟➥.10 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦂⃟➥.11 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝❄️⃟➥.12 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🐲⃟➥.13 *ꜰᴜɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝😈⃟➥.14 *ᴀɪ ᴍᴇɴᴜ*
┃
┗⃞❑⃝🔖⃟➥.15 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
❍═════════════════════❍
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀᴘᴋ
│ ꜰʙ
│ ᴛɪᴋᴛᴏᴋ
│ ᴛɢꜱ
│ ꜱᴏɴɢ
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴇᴅɪᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_* 🇱🇰
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
┃ │ *ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ꜱɪʀᴀꜱᴀ
│ ʜɪʀᴜɴᴇᴡꜱ
│ ɪᴏꜱ
│ ᴇꜱᴀɴᴀ
│ ɴᴀꜱᴀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_* 🇱🇰
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
┃ │ *ɢᴇɴᴇʀᴇʟ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_* 🇱🇰
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
┃ │ *ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴀɴɪᴍᴇ ᴘɪᴄꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴘʜᴏᴛᴏ
│ ꜰᴀɴᴄʏ
│ ᴛɪɴʏ
│ ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ʙᴀꜱꜱ
│ ʙʟᴏᴡɴ
│ ᴅᴇᴇᴘ
│ ꜰᴀꜱᴛ
│ ʀᴇᴠᴇʀꜱᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ*
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
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
┃ │ *ᴀɪ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀɴᴏɴʏᴍꜱɢ
│ ᴄʜᴀᴛ
│ ɢᴘᴛ
│ ᴅᴀʟʟᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
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
