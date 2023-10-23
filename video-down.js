const _0x2a12fb = {}
_0x2a12fb.pattern = 'video2'
_0x2a12fb.alias = ['ytvideo', 'ytv']
_0x2a12fb.desc = 'Downloads audio by yt link.'
_0x2a12fb.category = 'downloader'
_0x2a12fb.react = '\uD83C\uDF9E️'
_0x2a12fb.use = '<yt video url>'
cmd(_0x2a12fb, async (_0x5a62ce, _0x283fed, _0x45e0dc) => {
  let _0x47c954 = require('secktor-pack')
  let _0x1ccefa
  if (_0x45e0dc.startsWith('https://youtube.com/shorts/')) {
    const _0x59bc88 = _0x45e0dc.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0x42c5f5 = _0x59bc88.split('?feature')[0]
    _0x1ccefa = _0x42c5f5
  } else {
    _0x1ccefa = _0x45e0dc
  }
  let _0x148624 = await _0x47c954(_0x1ccefa),
    _0x1fbe8a = _0x148624.videos[0]
  const _0x1edddb = (_0x5a4bb5) => {
    return '' + Math.floor(Math.random() * 10000) + _0x5a4bb5
  }
  if (_0x45e0dc.length === 0) {
    _0x283fed.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
        prefix +
        'docvideo [name or link]_'
    )
    return
  }
  try {
    let _0x5e7b39 = _0x45e0dc
    if (!_0x5e7b39.startsWith('')) {
      _0x283fed.reply('*Give Video Name!*\u2757')
      return
    }
    let _0x43f404 = await ytdl.getInfo(_0x1fbe8a.url)
    if (_0x43f404.videoDetails.lengthSeconds >= videotime) {
      return _0x283fed.reply('\u274C Video file too big!')
    }
    let _0x31dfcd = _0x43f404.videoDetails.title,
      _0x525fc2 = _0x1edddb('.mp4')
    const _0xe5f9e2 = {
      filter: (_0x5740ce) => _0x5740ce.itag == 22 || _0x5740ce.itag == 18,
    }
    const _0x5d8e7b = ytdl(_0x1fbe8a.url, _0xe5f9e2).pipe(
      fs.createWriteStream('./' + _0x525fc2)
    )
    await new Promise((_0x58b000, _0x3be989) => {
      _0x5d8e7b.on('error', _0x3be989)
      _0x5d8e7b.on('finish', _0x58b000)
    })
    let _0x185c7b = fs.statSync('./' + _0x525fc2),
      _0x247279 = _0x185c7b.size,
      _0x5a297e = _0x247279 / 1048576
    if (_0x5a297e <= dlsize) {
      let _0x4da031 = require('secktor-pack')
      const _0xd77487 = { url: _0x1fbe8a.thumbnail }
      const _0x38dff4 = {
        image: _0xd77487,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ YT DOWNLOADER \uD83C\uDFB6_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCFD️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ' +
          _0x1fbe8a.title +
          '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x1fbe8a.timestamp +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC40 ️ᴠɪᴇᴡꜱ :* ' +
          _0x1fbe8a.views +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC4D ʟɪᴋᴇꜱ :* ' +
          _0x1fbe8a.like +
          '\n\n*\u2503\u2FFB* *\u23F0 ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ' +
          _0x1fbe8a.ago +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴇɢᴏʀʏ :* ' +
          _0x1fbe8a.genre +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x1fbe8a.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF9 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ' +
          _0x1fbe8a.author.name +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCCE ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ' +
          _0x1fbe8a.author.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x1fbe8a.description +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x3a48a8 = await _0x5a62ce.sendMessage(_0x283fed.chat, _0x38dff4, {
          quoted: _0x283fed,
        }),
        _0x3e90d0 = {
          text: '\u2B07️',
          key: _0x3a48a8.key,
        }
      const _0x5a2018 = { react: _0x3e90d0 }
      await _0x5a62ce.sendMessage(_0x283fed.chat, _0x5a2018)
      let _0x5dfa12 = await _0x4da031(_0x45e0dc),
        _0x532d2c = {
          video: fs.readFileSync('./' + _0x525fc2),
          mimetype: 'video/mp4',
          fileName: _0x31dfcd + '.mp4',
          caption:
            '_*\u2742  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ' +
            _0x1fbe8a.title +
            '_\n_*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* 360p_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
            _0x5a297e +
            '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n\n ' +
            Config.caption,
        }
      const _0x4fbd77 = {
        text: '\u2B06️',
        key: _0x3a48a8.key,
      }
      const _0x21da44 = { react: _0x4fbd77 }
      await _0x5a62ce.sendMessage(_0x283fed.chat, _0x21da44)
      if (_0x5a297e <= doclimit) {
        const _0xd495de = await _0x5a62ce.sendMessage(
            _0x283fed.chat,
            _0x532d2c,
            { quoted: _0x283fed }
          ),
          _0x12a461 = {
            text: '\uD83C\uDFA5️',
            key: _0xd495de.key,
          }
        const _0x483f26 = { react: _0x12a461 }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x483f26)
        const _0x1ecfb8 = {
          text: '\u2705',
          key: _0x3a48a8.key,
        }
        const _0x531eba = { react: _0x1ecfb8 }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x531eba)
      } else {
        const _0x21aaa6 = {
          text: '\u274C',
          key: _0x3a48a8.key,
        }
        const _0x1cdcd7 = { react: _0x21aaa6 }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x1cdcd7)
        const _0x3468f3 = {
          text: "_*\u274C Can't Upload It as Video Type File.*_\n_*\uD83D\uDD01 Try to upload It as Document Type File. \uD83D\uDCC2*_\n_*Please wait.....*_",
        }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x3468f3, {
          quoted: _0x283fed,
        })
        const _0x47acf0 = {
          text: '\u2B06️',
          key: _0x3a48a8.key,
        }
        const _0x534b40 = { react: _0x47acf0 }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x534b40)
        let _0x550b58 = {
          document: fs.readFileSync('./' + _0x525fc2),
          jpegThumbnail: log0,
          mimetype: 'video/mp4',
          fileName: _0x31dfcd + '.mp4',
          caption:
            '\n*\u2742  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ' +
            _0x1fbe8a.title +
            '_\n_*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* 360p_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
            _0x5a297e +
            '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
          headerType: 4,
        }
        const _0x21271d = await _0x5a62ce.sendMessage(
            _0x283fed.chat,
            _0x550b58,
            { quoted: _0x283fed }
          ),
          _0xc22b26 = {
            text: '\uD83C\uDFA5️',
            key: _0x21271d.key,
          }
        const _0x212ea8 = { react: _0xc22b26 }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x212ea8)
        const _0x219231 = {
          text: '\u2705',
          key: _0x3a48a8.key,
        }
        const _0x322a24 = { react: _0x219231 }
        await _0x5a62ce.sendMessage(_0x283fed.chat, _0x322a24)
      }
    } else {
      const _0xe97d12 = await _0x283fed.reply(
        '*The limit has been exceeded.*\u2757'
      )
      _0x283fed.react('\u274C')
      const _0x54a00c = {
        text: '\u274C',
        key: _0xe97d12.key,
      }
      const _0x38d982 = { react: _0x54a00c }
      await _0x5a62ce.sendMessage(_0x283fed.chat, _0x38d982)
    }
    fs.unlinkSync('./' + _0x525fc2)
  } catch (_0x330d93) {
    console.log(_0x330d93)
  }
})
