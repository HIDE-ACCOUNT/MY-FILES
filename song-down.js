const _0x3db07e = {}
_0x3db07e.pattern = 'song2'
_0x3db07e.alias = ['audio', 'yta']
_0x3db07e.desc = 'Downloads audio by yt link.'
_0x3db07e.category = 'downloader'
_0x3db07e.react = '\uD83C\uDFB6'
_0x3db07e.use = '<yt video url>'
cmd(_0x3db07e, async (_0x29e9af, _0x2872c9, _0x5c45c7) => {
  let _0x199321 = require('secktor-pack')
  let _0x388622
  if (_0x5c45c7.startsWith('https://youtube.com/shorts/')) {
    const _0x11571c = _0x5c45c7.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0xab06e7 = _0x11571c.split('?feature')[0]
    _0x388622 = _0xab06e7
  } else {
    _0x388622 = _0x5c45c7
  }
  let _0x43d52b = await _0x199321(_0x388622),
    _0x13d9f5 = _0x43d52b.videos[0]
  const _0x2335d3 = (_0x3d43cb) => {
    return '' + Math.floor(Math.random() * 10000) + _0x3d43cb
  }
  if (_0x5c45c7.length === 0) {
    _0x2872c9.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
        prefix +
        'song [name or link]_'
    )
    return
  }
  try {
    let _0x480dc5 = _0x5c45c7
    if (!_0x480dc5.startsWith('')) {
      _0x2872c9.reply(
        '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
          prefix +
          'song [name or link]_'
      )
      return
    }
    let _0x228cf4 = await ytdl.getInfo(_0x13d9f5.url)
    if (_0x228cf4.videoDetails.lengthSeconds >= videotime) {
      return _0x2872c9.reply('*The limit has been exceeded.*\u2757')
    }
    let _0xb4d1b9 = _0x228cf4.videoDetails.title,
      _0x19553e = _0x2335d3('.mp3')
    const _0x3089f6 = {
      filter: (_0x50306d) =>
        _0x50306d.audioBitrate == 160 || _0x50306d.audioBitrate == 128,
    }
    const _0x4a1393 = ytdl(_0x13d9f5.url, _0x3089f6).pipe(
      fs.createWriteStream('./' + _0x19553e)
    )
    await new Promise((_0x111574, _0x4a57b0) => {
      _0x4a1393.on('error', _0x4a57b0), _0x4a1393.on('finish', _0x111574)
    })
    let _0x5b3cb8 = fs.statSync('./' + _0x19553e),
      _0x9ad785 = _0x5b3cb8.size,
      _0x46abb3 = _0x9ad785 / 1048576
    if (_0x46abb3 <= dlsize) {
      let _0x280924 = require('secktor-pack')
      const _0x188026 = { url: _0x13d9f5.thumbnail }
      const _0x23ccae = {
        image: _0x188026,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ YT DOWNLOADER \uD83C\uDFB6_ )* \n\n*\u2503\u2FFB* *\uD83C\uDFA7 ᴀᴜᴅɪᴏ ᴛɪᴛʟᴇ :* ' +
          _0x13d9f5.title +
          '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x13d9f5.timestamp +
          '\n\n*\u2503\u2FFB* \uD83D\uDDC3️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
          _0x46abb3 +
          ' MB\n\n*\u2503\u2FFB* *\uD83D\uDC40 ️ᴠɪᴇᴡꜱ :* ' +
          _0x13d9f5.views +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC4D ʟɪᴋᴇꜱ :* ' +
          _0x13d9f5.like +
          '\n\n*\u2503\u2FFB* *\u23F0 ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ' +
          _0x13d9f5.ago +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴇɢᴏʀʏ :* ' +
          _0x13d9f5.genre +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x13d9f5.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF9 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ' +
          _0x13d9f5.author.name +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCCE ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ' +
          _0x13d9f5.author.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x13d9f5.description +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x566bcc = await _0x29e9af.sendMessage(_0x2872c9.chat, _0x23ccae, {
          quoted: _0x2872c9,
        }),
        _0x30cee9 = {
          text: '\u2B07️',
          key: _0x566bcc.key,
        }
      const _0x402359 = { react: _0x30cee9 }
      await _0x29e9af.sendMessage(_0x2872c9.chat, _0x402359)
      let _0x525cee = await _0x280924(_0x5c45c7)
      const _0x492cef = {
        forwardingScore: 5,
        isForwarded: true,
      }
      let _0x1e0875 = {
        audio: fs.readFileSync('./' + _0x19553e),
        jpegThumbnail: log0,
        mimetype: 'audio/mpeg',
        fileName: _0xb4d1b9 + '.mp3',
        caption:
          '\n_*\u2742  ᴀᴜᴅɪᴏ ɴᴀᴍᴇ :* ' +
          _0x13d9f5.title +
          '_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
          _0x46abb3 +
          ' MB_\n_*\u2742  ᴀᴜᴅɪᴏ ǫᴜᴀʟɪᴛʏ :* 128 kbps_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        headerType: 4,
        contextInfo: _0x492cef,
      }
      const _0x20c957 = {
        text: '\u2B06️',
        key: _0x566bcc.key,
      }
      const _0x5ae5da = { react: _0x20c957 }
      await _0x29e9af.sendMessage(_0x2872c9.chat, _0x5ae5da)
      if (_0x46abb3 <= doclimit) {
        const _0x22bed6 = await _0x29e9af.sendMessage(
            _0x2872c9.chat,
            _0x1e0875,
            { quoted: _0x2872c9 }
          ),
          _0xb11f4f = {
            text: '\uD83C\uDFA7',
            key: _0x22bed6.key,
          }
        const _0x103d08 = { react: _0xb11f4f }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x103d08)
        const _0x154191 = {
          text: '\u2705',
          key: _0x566bcc.key,
        }
        const _0x1f42b0 = { react: _0x154191 }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x1f42b0)
      } else {
        const _0x1ae9fc = {
          text: '\u274C',
          key: _0x566bcc.key,
        }
        const _0x2e1609 = { react: _0x1ae9fc }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x2e1609)
        const _0x4d37ff = {
          text: "_*\u274C Can't Upload It as Audio Type File.*_\n_*\uD83D\uDD01 Try to upload It as Document Type File. \uD83D\uDCC2*_\n_*Please wait.....*_",
        }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x4d37ff, {
          quoted: _0x2872c9,
        })
        const _0x424703 = {
          text: '\u2B06️',
          key: _0x566bcc.key,
        }
        const _0x436ee5 = { react: _0x424703 }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x436ee5)
        let _0x7bfbb7 = {
          document: fs.readFileSync('./' + _0x19553e),
          jpegThumbnail: log0,
          mimetype: 'audio/mpeg',
          fileName: _0xb4d1b9 + '.mp3',
          caption:
            '\n*\u2742  ᴀᴜᴅɪᴏ ɴᴀᴍᴇ :* ' +
            _0x13d9f5.title +
            '_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
            _0x46abb3 +
            ' MB_\n_*\u2742  ᴀᴜᴅɪᴏ ǫᴜᴀʟɪᴛʏ :* 128 kbps_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
          headerType: 4,
        }
        const _0x3023b3 = await _0x29e9af.sendMessage(
            _0x2872c9.chat,
            _0x7bfbb7,
            { quoted: _0x2872c9 }
          ),
          _0xbcb128 = {
            text: '\uD83C\uDFA7',
            key: _0x3023b3.key,
          }
        const _0x291a2c = { react: _0xbcb128 }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x291a2c)
        const _0x339cd5 = {
          text: '\u2705',
          key: _0x566bcc.key,
        }
        const _0x14a4fb = { react: _0x339cd5 }
        await _0x29e9af.sendMessage(_0x2872c9.chat, _0x14a4fb)
      }
    } else {
      const _0x32551c = await _0x2872c9.reply(
        '*The limit has been exceeded.*\u2757'
      )
      _0x2872c9.react('\u274C')
      const _0x13217b = {
        text: '\u274C',
        key: _0x32551c.key,
      }
      const _0x4a89bc = { react: _0x13217b }
      await _0x29e9af.sendMessage(_0x2872c9.chat, _0x4a89bc)
    }
    fs.unlinkSync('./' + _0x19553e)
  } catch (_0x5b9656) {
    console.log(_0x5b9656)
  }
})
