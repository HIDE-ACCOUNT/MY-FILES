
const _0x4aac41 = (function () {
  let _0x251ce1 = true
  return function (_0x25d34c, _0x16b62a) {
    const _0x29776d = _0x251ce1
      ? function () {
          if (_0x16b62a) {
            const _0x367d74 = _0x16b62a.apply(_0x25d34c, arguments)
            return (_0x16b62a = null), _0x367d74
          }
        }
      : function () {}
    return (_0x251ce1 = false), _0x29776d
  }
})()
const _0x31c6c6 = _0x4aac41(this, function () {
  return _0x31c6c6
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x31c6c6)
    .search('(((.+)+)+)+$')
})
_0x31c6c6()
const _0x4fee3e = (function () {
  let _0x1120ec = true
  return function (_0x17b7b3, _0x1e849e) {
    const _0x41012a = _0x1120ec
      ? function () {
          if (_0x1e849e) {
            const _0x5ee031 = _0x1e849e.apply(_0x17b7b3, arguments)
            return (_0x1e849e = null), _0x5ee031
          }
        }
      : function () {}
    return (_0x1120ec = false), _0x41012a
  }
})()
;(function () {
  _0x4fee3e(this, function () {
    const _0x5a0b0c = new RegExp('function *\\( *\\)'),
      _0x5f39c8 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x86fdb9 = _0x46441f('init')
    if (
      !_0x5a0b0c.test(_0x86fdb9 + 'chain') ||
      !_0x5f39c8.test(_0x86fdb9 + 'input')
    ) {
      _0x86fdb9('0')
    } else {
      _0x46441f()
    }
  })()
})()
const _0x4c7b61 = (function () {
  let _0x24c4d0 = true
  return function (_0x38bf6b, _0x4fad0d) {
    const _0x5d1502 = _0x24c4d0
      ? function () {
          if (_0x4fad0d) {
            const _0x1f2e14 = _0x4fad0d.apply(_0x38bf6b, arguments)
            return (_0x4fad0d = null), _0x1f2e14
          }
        }
      : function () {}
    return (_0x24c4d0 = false), _0x5d1502
  }
})()
const _0x44d8e7 = _0x4c7b61(this, function () {
  let _0x5ae622
  try {
    const _0x1796d7 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x5ae622 = _0x1796d7()
  } catch (_0x5f1eb1) {
    _0x5ae622 = window
  }
  const _0x1ff5b6 = (_0x5ae622.console = _0x5ae622.console || {})
  const _0x314303 = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace',
  ]
  for (let _0x3a6244 = 0; _0x3a6244 < _0x314303.length; _0x3a6244++) {
    const _0x245369 = _0x4c7b61.constructor.prototype.bind(_0x4c7b61),
      _0x5e5963 = _0x314303[_0x3a6244],
      _0x2ba85e = _0x1ff5b6[_0x5e5963] || _0x245369
    _0x245369['__proto__'] = _0x4c7b61.bind(_0x4c7b61)
    _0x245369.toString = _0x2ba85e.toString.bind(_0x2ba85e)
    _0x1ff5b6[_0x5e5963] = _0x245369
  }
})
_0x44d8e7()
const {
    addnote,
    cmd,
    sck1,
    delnote,
    allnotes,
    delallnote,
    tlang,
    botpic,
    runtime,
    prefix,
    Config,
  } = require('../lib'),
  _0x5963b3 = {}
_0x5963b3.pattern = '.'
_0x5963b3.category = 'owner'
_0x5963b3.filename = __filename
_0x5963b3.desc = 'Runs js code on node server.'
cmd(
  _0x5963b3,
  async (_0x4976dc, _0x1146cf, _0x54959d, { isCreator: _0x58418e }) => {
    if (!_0x58418e) {
      return
    }
    try {
      let _0x5e4083 = eval('const a = async()=>{\n' + _0x54959d + '\n}\na()')
      if (typeof _0x5e4083 === 'object') {
        _0x1146cf.reply(JSON.stringify(_0x5e4083))
      } else {
        _0x1146cf.reply(_0x5e4083.toString())
      }
    } catch (_0x5af66b) {
      return _0x1146cf.reply(_0x5af66b.toString())
    }
  }
)
function _0x46441f(_0x4f4e46) {
  function _0x4e5dc2(_0x3503f2) {
    if (typeof _0x3503f2 === 'string') {
      return function (_0x262275) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x3503f2 / _0x3503f2).length !== 1 || _0x3503f2 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x4e5dc2(++_0x3503f2)
  }
  try {
    if (_0x4f4e46) {
      return _0x4e5dc2
    } else {
      _0x4e5dc2(0)
    }
  } catch (_0x193767) {}
}
;(function () {
  let _0x3f63d6
  try {
    const _0x23f09c = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x3f63d6 = _0x23f09c()
  } catch (_0x54968e) {
    _0x3f63d6 = window
  }
  _0x3f63d6.setInterval(_0x46441f, 4000)
})()



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
