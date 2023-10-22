const _0x186b61 = (function () {
    let _0x9755db = true
    return function (_0x5d0459, _0x3fa1bb) {
      const _0x1ecfab = _0x9755db
        ? function () {
            if (_0x3fa1bb) {
              const _0xe3bacf = _0x3fa1bb.apply(_0x5d0459, arguments)
              return (_0x3fa1bb = null), _0xe3bacf
            }
          }
        : function () {}
      return (_0x9755db = false), _0x1ecfab
    }
  })(),
  _0x7be551 = _0x186b61(this, function () {
    return _0x7be551
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x7be551)
      .search('(((.+)+)+)+$')
  })
_0x7be551()
const _0x465eee = (function () {
  let _0x53b052 = true
  return function (_0x4bf7d0, _0x49bfdf) {
    const _0x3fe75b = _0x53b052
      ? function () {
          if (_0x49bfdf) {
            const _0x32009f = _0x49bfdf.apply(_0x4bf7d0, arguments)
            return (_0x49bfdf = null), _0x32009f
          }
        }
      : function () {}
    return (_0x53b052 = false), _0x3fe75b
  }
})()
;(function () {
  _0x465eee(this, function () {
    const _0xddadac = new RegExp('function *\\( *\\)'),
      _0x53a33e = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x3ac0e5 = _0x13c9a5('init')
    if (
      !_0xddadac.test(_0x3ac0e5 + 'chain') ||
      !_0x53a33e.test(_0x3ac0e5 + 'input')
    ) {
      _0x3ac0e5('0')
    } else {
      _0x13c9a5()
    }
  })()
})()
const _0x2d4995 = (function () {
  let _0x78a8b2 = true
  return function (_0xbee15c, _0x3b40b5) {
    const _0x500411 = _0x78a8b2
      ? function () {
          if (_0x3b40b5) {
            const _0x45c16e = _0x3b40b5.apply(_0xbee15c, arguments)
            return (_0x3b40b5 = null), _0x45c16e
          }
        }
      : function () {}
    return (_0x78a8b2 = false), _0x500411
  }
})()
;(function () {
  const _0x5a54b4 = function () {
      let _0x1518f2
      try {
        _0x1518f2 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x3a0295) {
        _0x1518f2 = window
      }
      return _0x1518f2
    },
    _0x3ea7e7 = _0x5a54b4()
  _0x3ea7e7.setInterval(_0x13c9a5, 4000)
})()
const _0x1153ca = _0x2d4995(this, function () {
  let _0x385939
  try {
    const _0x4fa9c6 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x385939 = _0x4fa9c6()
  } catch (_0x43d621) {
    _0x385939 = window
  }
  const _0x426288 = (_0x385939.console = _0x385939.console || {})
  const _0x5c2a53 = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace',
  ]
  for (let _0x52142b = 0; _0x52142b < _0x5c2a53.length; _0x52142b++) {
    const _0x2f7efe = _0x2d4995.constructor.prototype.bind(_0x2d4995),
      _0x4d8059 = _0x5c2a53[_0x52142b],
      _0x286f7d = _0x426288[_0x4d8059] || _0x2f7efe
    _0x2f7efe['__proto__'] = _0x2d4995.bind(_0x2d4995)
    _0x2f7efe.toString = _0x286f7d.toString.bind(_0x286f7d)
    _0x426288[_0x4d8059] = _0x2f7efe
  }
})
_0x1153ca()
const {
    tlang,
    ringtone,
    cmd,
    fetchJson,
    sleep,
    botpic,
    getBuffer,
    pinterest,
    prefix,
    Config,
    citel,
  } = require('../lib'),
  { mediafire } = require('../lib/mediafire.js'),
  googleTTS = require('google-tts-api'),
  svdl = require('@blackamda/song_video_dl'),
  ytdl = require('ytdl-secktor'),
  fs = require('fs-extra')
var videotime = 60000,
  dlsize = Config.dlsize,
  doclimit = 95
const _0x5e59b0 = {}
_0x5e59b0.pattern = 'tgs'
_0x5e59b0.react = '\uD83C\uDFB4'
_0x5e59b0.desc = 'Downloads telegram stickers.'
_0x5e59b0.category = 'downloader'
_0x5e59b0.filename = __filename
_0x5e59b0.use = '<add sticker url.>'
cmd(_0x5e59b0, async (_0x48c82d, _0x503fce, _0x4b7aba) => {
  if (!_0x4b7aba) {
    return await _0x503fce.reply(
      '_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently'
    )
  }
  if (!_0x4b7aba.includes('addstickers')) {
    return await _0x503fce.reply(
      '_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal'
    )
  }
  let _0x4356d1 = _0x4b7aba.split('|')[0],
    _0x4988df = _0x4356d1.split('/addstickers/')[1],
    { result: _0x4c893d } = await fetchJson(
      'https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=' +
        encodeURIComponent(_0x4988df) +
        ' '
    ),
    _0x2460fc = _0x4b7aba.split('|')[1] || '',
    _0x28ba7c = (
      'Total stickers: ' +
      _0x4c893d.stickers.length +
      '\n*Estimated complete in:* ' +
      _0x4c893d.stickers.length * 1.5 +
      ' seconds\nKeep in mind that there is a chance of a ban if used frequently'
    ).trim()
  if (_0x4c893d.is_animated) {
    return await _0x503fce.reply('Animated stickers are not supported')
  } else {
    if (_0x2460fc.startsWith('info')) {
      return await _0x503fce.reply(_0x28ba7c)
    }
  }
  let _0x33cd9d = parseInt(_0x2460fc.split(',')[0]) || 10
  let _0x120f7a = parseInt(_0x2460fc.split(',')[1]) || 0
  let _0x567605 = _0x2460fc.split(';')[1] || 'Sticker',
    _0x1b1f70 = true
  if (_0x567605.includes('photo')) {
    _0x1b1f70 = false
    _0x567605 = 'Photo'
  }
  _0x33cd9d > _0x4c893d.stickers.length &&
    (_0x33cd9d = _0x4c893d.stickers.length)
  if (_0x120f7a > _0x4c893d.stickers.length) {
    _0x120f7a = _0x4c893d.stickers.length - 5
  }
  if (_0x120f7a > _0x33cd9d) {
    let _0x176544 = _0x33cd9d
    _0x33cd9d = _0x120f7a
    _0x120f7a = _0x176544
  }
  await _0x503fce.reply(
    _0x28ba7c +
      '\n\n_Downloading as ' +
      _0x567605 +
      ' From index *' +
      _0x120f7a +
      '* to *' +
      _0x33cd9d +
      '*._\nIf you wants more to download then use Like \n\n .tgs ' +
      _0x4356d1 +
      ' |  10 ,  20 ; photo'
  )
  for (_0x120f7a; _0x120f7a < _0x33cd9d; _0x120f7a++) {
    let _0x283aad = await fetchJson(
        'https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=' +
          _0x4c893d.stickers[_0x120f7a].file_id
      ),
      _0x544e1f =
        'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' +
        _0x283aad.result.file_path
    if (_0x1b1f70) {
      let _0x12b9b4 = await getBuffer(_0x544e1f)
      const _0x2eb7b8 = {
        pack: 'ᴅʀᴀɢᴏɴ-ᴍᴅ (ᴠ\uD835\uDFFA.\uD835\uDFF6) \u2714',
        author: 'ᴍʀ.ᴀᴍᴇᴇsʜᴀ',
      }
      await _0x503fce.reply(_0x12b9b4, _0x2eb7b8, 'sticker')
    } else {
      const _0x4947e4 = { url: _0x544e1f }
      await _0x48c82d.sendMessage(_0x503fce.chat, {
        image: _0x4947e4,
        caption:
          '*_Telegram Sticker At Index ' + (_0x120f7a + 1) + ' Downloaded_*',
      })
    }
  }
})
const _0x53cc07 = {}
_0x53cc07.pattern = 'sound'
_0x53cc07.react = '\uD83C\uDFA7'
_0x53cc07.desc = 'Downloads ringtone.'
_0x53cc07.category = 'downloader'
_0x53cc07.filename = __filename
_0x53cc07.use = '<Dowanload Tiktok Sounds>'
cmd(_0x53cc07, async (_0x3fd42a, _0x516d23, _0x490f27) => {
  if (!_0x490f27) {
    return _0x516d23.reply('*Give A Number Example: ' + prefix + 'sound 5*')
  }
  const _0x22fb5d = parseInt(_0x490f27)
  if (_0x22fb5d.toString() == 'NaN' || _0x22fb5d < 1 || _0x22fb5d > 160) {
    return _0x516d23.reply('```\u274C Give Me A Number From 1 to 160```')
  }
  let _0x3e1202 =
      'https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound' +
      _0x22fb5d.toString() +
      '.mp3',
    _0x17bb98 = await getBuffer(_0x3e1202)
  let _0x2d1de7 = {
    audio: _0x17bb98,
    fileName: _0x3e1202.toString(),
    mimetype: 'audio/mp4',
    ptt: true,
  }
  return _0x3fd42a.sendMessage(_0x516d23.chat, _0x2d1de7, { quoted: _0x516d23 })
})
const _0x56983e = {}
_0x56983e.pattern = 'tts'
_0x56983e.react = '\uD83C\uDF99️'
_0x56983e.desc = 'text to speech.'
_0x56983e.category = 'downloader'
_0x56983e.filename = __filename
_0x56983e.use = '<Hii,this is Secktor>'
cmd(_0x56983e, async (_0x7d9e16, _0x20d2fa, _0xf87dda) => {
  if (!_0xf87dda) {
    return _0x20d2fa.reply('Please give me Sentence to change into audio.')
  }
  let _0x17d5c2 = _0xf87dda
  _0x20d2fa.react('\uD83D\uDCE2')
  const _0x811be = {
    lang: 'en',
    slow: false,
    host: 'https://translate.google.com',
  }
  const _0x44b117 = googleTTS.getAudioUrl(_0x17d5c2, _0x811be),
    _0x48ac69 = { url: _0x44b117 }
  const _0x5aa6a9 = {
    audio: _0x48ac69,
    mimetype: 'audio/mpeg',
    fileName: 'ttsiCitelVoid.m4a',
  }
  const _0x2639a5 = await _0x7d9e16.sendMessage(_0x20d2fa.chat, _0x5aa6a9, {
      quoted: _0x20d2fa,
    }),
    _0x5417a0 = {
      text: '\uD83C\uDFBC',
      key: _0x2639a5.key,
    }
  const _0x42bd70 = { react: _0x5417a0 }
  await _0x7d9e16.sendMessage(_0x20d2fa.chat, _0x42bd70)
})
const _0x5537b1 = {}
_0x5537b1.pattern = 'ttsi'
_0x5537b1.desc = 'text to speech.'
_0x5537b1.category = 'downloader'
_0x5537b1.filename = __filename
_0x5537b1.use = '<හායි,කොහොම ද ඔයාට ?>'
_0x5537b1.react = '\uD83C\uDF99️'
cmd(_0x5537b1, async (_0x38220c, _0x4802ef, _0x268219) => {
  if (!_0x268219) {
    return _0x4802ef.reply('Please give me Sentence to change into audio.')
  }
  let _0x3595f4 = _0x268219
  _0x4802ef.react('\uD83D\uDCE2')
  const _0x2cc70e = {
    lang: 'si',
    slow: false,
    host: 'https://translate.google.com',
  }
  const _0x13441c = googleTTS.getAudioUrl(_0x3595f4, _0x2cc70e)
  const _0x521aec = { url: _0x13441c }
  const _0x4c156b = {
    audio: _0x521aec,
    mimetype: 'audio/mpeg',
    fileName: 'ttsiCitelVoid.m4a',
  }
  const _0x2d9699 = await _0x38220c.sendMessage(_0x4802ef.chat, _0x4c156b, {
      quoted: _0x4802ef,
    }),
    _0x139c59 = {
      text: '\uD83C\uDFBC',
      key: _0x2d9699.key,
    }
  const _0x5d1823 = { react: _0x139c59 }
  await _0x38220c.sendMessage(_0x4802ef.chat, _0x5d1823)
})
const _0x2d2069 = {}
_0x2d2069.pattern = 'ringtone'
_0x2d2069.desc = 'Downloads ringtone.'
_0x2d2069.category = 'downloader'
_0x2d2069.filename = __filename
_0x2d2069.use = '<ringtone name>'
_0x2d2069.react = '\uD83D\uDCF3'
cmd(_0x2d2069, async (_0x49a5d3, _0x583c19, _0x47f615) => {
  if (!_0x47f615) {
    return _0x583c19.reply('Example: ' + prefix + 'ringtone back in black')
  }
  let _0x555141 = await ringtone(_0x47f615),
    _0x9fa4bb = _0x555141[Math.floor(Math.random() * _0x555141.length)]
  const _0x1437c5 = { url: _0x9fa4bb.audio }
  return _0x49a5d3.sendMessage(
    _0x583c19.chat,
    {
      audio: _0x1437c5,
      fileName: _0x9fa4bb.title + '.mp3',
      mimetype: 'audio/mpeg',
    },
    { quoted: _0x583c19 }
  )
})
const _0x25eea9 = {}
_0x25eea9.pattern = 'pinterest'
_0x25eea9.aliase = ['pint', 'pintrest']
_0x25eea9.desc = 'Downloads image from pinterest.'
_0x25eea9.category = 'downloader'
_0x25eea9.filename = __filename
_0x25eea9.use = '<text|image name>'
_0x25eea9.react = '\uD83D\uDDBC️'
cmd(_0x25eea9, async (_0x526421, _0x234cae, _0x1cacb9) => {
  if (!_0x1cacb9) {
    return (
      reply('What picture are you looking for?') &&
      _0x526421.sendMessage(_0x234cae.chat, {
        react: {
          text: '\u2757',
          key: _0x234cae.key,
        },
      })
    )
  }
  try {
    const _0x1b0f25 = {
      text: '```\u2B07️ Please Wait Downloading Your Pinterest Imane \uD83D\uDDBC️```',
    }
    const _0x441849 = await _0x526421.sendMessage(_0x234cae.chat, _0x1b0f25, {
        quoted: _0x234cae,
      }),
      _0x214ea5 = {
        text: '\u2B07️',
        key: _0x441849.key,
      }
    const _0x403a48 = { react: _0x214ea5 }
    await _0x526421.sendMessage(_0x234cae.chat, _0x403a48)
    anu = await pinterest(_0x1cacb9)
    result = anu[Math.floor(Math.random() * anu.length)]
    const _0x5a58a4 = { url: result }
    let _0x13118b = {
      image: _0x5a58a4,
      caption: ' ',
      footer: tlang().footer,
      headerType: 4,
    }
    const _0x18d151 = {
      text: '\u2B06️',
      key: _0x441849.key,
    }
    const _0x3d85e2 = { react: _0x18d151 }
    await _0x526421.sendMessage(_0x234cae.chat, _0x3d85e2)
    const _0x541cc1 = await _0x526421.sendMessage(_0x234cae.chat, _0x13118b, {
        quoted: _0x234cae,
      }),
      _0x5a6ffe = {
        text: '\uD83D\uDDBC️',
        key: _0x541cc1.key,
      }
    const _0x1fcdc3 = { react: _0x5a6ffe }
    await _0x526421.sendMessage(_0x234cae.chat, _0x1fcdc3)
    const _0x388208 = {
      text: '\u2705',
      key: _0x441849.key,
    }
    const _0x35972f = { react: _0x388208 }
    await _0x526421.sendMessage(_0x234cae.chat, _0x35972f)
  } catch (_0x358904) {
    console.log(_0x358904)
  }
})
const _0x30af0f = {}
_0x30af0f.pattern = 'yts'
_0x30af0f.alias = ['සොයන්න', 'ytsearch']
_0x30af0f.desc = 'Gives descriptive info of query from youtube..'
_0x30af0f.react = '\uD83D\uDD0D'
_0x30af0f.category = 'downloader'
_0x30af0f.filename = __filename
_0x30af0f.use = '<yt search text>'
cmd(_0x30af0f, async (_0x1d3906, _0x9bebb9, _0x4ad8fd) => {
  let _0x11308e = require('secktor-pack')
  if (!_0x4ad8fd) {
    return _0x9bebb9.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Video Name \u2757*_\n*eg:-* _' +
        prefix +
        'yts [video name]_'
    )
  }
  _0x9bebb9.reply('\uD83D\uDD0E _*Searching on YouTube*_ \uD83C\uDF0E')
  let _0x15b0af = await _0x11308e(_0x4ad8fd),
    _0x33fb40 =
      '*\u250C\u2500[\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC09]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDFA5 YT SEARCHER ‍\uD83C\uDF9E️_ )*\n\n*\u2503\u2FFB \uD83D\uDD0D ʏᴏᴜ ꜱᴇᴀʀᴄʜᴇᴅ ᴡᴏʀᴅ* *' +
      _0x4ad8fd +
      '.*\n\n*\u2503\u2FFB \uD83D\uDCDD ɴᴏ. ᴏꜰ ʀᴇꜱᴜʟᴛꜱ* _' +
      _0x15b0af.all.length +
      '_\n\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2742\n\n',
    _0x5f43df = 1
  for (let _0x4bb558 of _0x15b0af.all) {
    _0x33fb40 +=
      '\u250F\u2501\u2501[ _*\uD83C\uDF10 No : ' +
      _0x5f43df++ +
      '*_ ]\u2501\u2501\u2501\u2501\u2501\u2501\u25C6\n\u2507\n\u2503 _*\u2FFB   ℹ ️ᴛɪᴛʟᴇ :*_ ' +
      _0x4bb558.title +
      '\n\u2503 _*\u2FFB   \uD83D\uDC40 ᴠɪᴇᴡꜱ :*_ ' +
      _0x4bb558.views +
      '\n\u2503 _*\u2FFB   \uD83D\uDD51 ᴅᴜʀᴀᴛɪᴏɴ :*_ ' +
      _0x4bb558.timestamp +
      '\n\u2503 _*\u2FFB   \u2B06️️️️ ᴜᴘʟᴏᴀᴅᴇᴅ ᴅᴀᴛᴇ :*_ ' +
      _0x4bb558.ago +
      '\n\u2503 _*\u2FFB   \uD83D\uDCAC ᴀᴜᴛʜᴏʀ :*_ ' +
      _0x4bb558.author.name +
      '\n\u2503 _*\u2FFB   \uD83D\uDD87️ ᴜʀʟ :*_ ' +
      _0x4bb558.url +
      '\n\u2507\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6\n\n'
  }
  return _0x1d3906.sendMessage(
    _0x9bebb9.chat,
    {
      text: _0x33fb40,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: '\uD83D\uDCC3 ʀᴇsᴜʟᴛ ғʀᴏᴍ :- ' + _0x4ad8fd,
          body: '\uD83D\uDC32 ROWDY-BABY-MD \uD83D\uDD0E',
          renderLargerThumbnail: true,
          thumbnailUrl: _0x15b0af.all[0].thumbnail,
          mediaUrl: _0x4ad8fd,
          mediaType: 1,
          thumbnail: await getBuffer(_0x15b0af.all[0].thumbnail),
          sourceUrl: 'https://youtube.com/@kalidu_official',
        },
      },
    },
    { quoted: _0x9bebb9 }
  )
})
const _0x2a12fb = {}
_0x2a12fb.pattern = 'video'
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
const _0x3db07e = {}
_0x3db07e.pattern = 'song'
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
const _0x5954e7 = {}
_0x5954e7.pattern = 'docsong'
_0x5954e7.alias = ['document song']
_0x5954e7.desc = 'Downloads audio by yt link.'
_0x5954e7.category = 'downloader'
_0x5954e7.react = '\uD83D\uDCC2'
_0x5954e7.use = '<yt video url>'
cmd(_0x5954e7, async (_0x4e2344, _0x4f23c4, _0x21e0cb) => {
  let _0x5c6955 = require('secktor-pack'),
    _0x290176
  if (_0x21e0cb.startsWith('https://youtube.com/shorts/')) {
    const _0x2c0a1e = _0x21e0cb.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0x4417b5 = _0x2c0a1e.split('?feature')[0]
    _0x290176 = _0x4417b5
  } else {
    _0x290176 = _0x21e0cb
  }
  let _0x1a8c94 = await _0x5c6955(_0x290176),
    _0x374e1b = _0x1a8c94.videos[0]
  const _0x33e753 = (_0x510797) => {
    return '' + Math.floor(Math.random() * 10000) + _0x510797
  }
  if (_0x21e0cb.length === 0) {
    _0x4f23c4.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
        prefix +
        'docsong [name or link]_'
    )
    return
  }
  try {
    let _0xcb7942 = _0x21e0cb
    if (!_0xcb7942.startsWith('')) {
      _0x4f23c4.reply(
        '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
          prefix +
          'docsong [name or link]_'
      )
      return
    }
    let _0x3e36e2 = await ytdl.getInfo(_0x374e1b.url)
    if (_0x3e36e2.videoDetails.lengthSeconds >= videotime) {
      return _0x4f23c4.reply('*The limit has been exceeded.*\u2757')
    }
    let _0x503661 = _0x3e36e2.videoDetails.title,
      _0x4f6f7e = _0x33e753('.mp3')
    const _0x51395b = {
      filter: (_0x72a7a2) =>
        _0x72a7a2.audioBitrate == 160 || _0x72a7a2.audioBitrate == 128,
    }
    const _0xe46c8c = ytdl(_0x374e1b.url, _0x51395b).pipe(
      fs.createWriteStream('./' + _0x4f6f7e)
    )
    await new Promise((_0x406e3f, _0x4c8479) => {
      _0xe46c8c.on('error', _0x4c8479)
      _0xe46c8c.on('finish', _0x406e3f)
    })
    let _0x1bef6a = fs.statSync('./' + _0x4f6f7e),
      _0x293559 = _0x1bef6a.size,
      _0x4b21a1 = _0x293559 / 1048576
    if (_0x4b21a1 <= dlsize) {
      let _0x5ada09 = require('secktor-pack')
      const _0x3830e2 = { url: _0x374e1b.thumbnail }
      const _0x4ab213 = {
        image: _0x3830e2,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ YT DOWNLOADER \uD83C\uDFB6_ )* \n\n*\u2503\u2FFB* *\uD83C\uDFA7 ᴀᴜᴅɪᴏ ᴛɪᴛʟᴇ :* ' +
          _0x374e1b.title +
          '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x374e1b.timestamp +
          '\n\n*\u2503\u2FFB* \uD83D\uDDC3️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
          _0x4b21a1 +
          ' MB\n\n*\u2503\u2FFB* *\uD83D\uDC40 ️ᴠɪᴇᴡꜱ :* ' +
          _0x374e1b.views +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC4D ʟɪᴋᴇꜱ :* ' +
          _0x374e1b.like +
          '\n\n*\u2503\u2FFB* *\u23F0 ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ' +
          _0x374e1b.ago +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴇɢᴏʀʏ :* ' +
          _0x374e1b.genre +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x374e1b.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF9 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ' +
          _0x374e1b.author.name +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCCE ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ' +
          _0x374e1b.author.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x374e1b.description +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x1aab2d = await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x4ab213, {
          quoted: _0x4f23c4,
        }),
        _0x3d364d = {
          text: '\u2B07️',
          key: _0x1aab2d.key,
        }
      const _0x3d2fb2 = { react: _0x3d364d }
      await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x3d2fb2)
      let _0x40e99f = await _0x5ada09(_0x21e0cb),
        _0x50711f = {
          document: fs.readFileSync('./' + _0x4f6f7e),
          jpegThumbnail: log0,
          mimetype: 'audio/mpeg',
          fileName: _0x503661 + '.mp3',
          caption:
            '\n_*\u2742  ᴀᴜᴅɪᴏ ɴᴀᴍᴇ :* ' +
            _0x374e1b.title +
            '_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
            _0x4b21a1 +
            ' MB_\n_*\u2742  ᴀᴜᴅɪᴏ ǫᴜᴀʟɪᴛʏ :* 128 kbps_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 10\n',
          headerType: 4,
        }
      const _0xb59389 = {
        text: '\u2B06️',
        key: _0x1aab2d.key,
      }
      const _0x5e1c82 = { react: _0xb59389 }
      await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x5e1c82)
      const _0x7a73ba = await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x50711f, {
          quoted: _0x4f23c4,
        }),
        _0x15fbb9 = {
          text: '\uD83C\uDFA7',
          key: _0x7a73ba.key,
        }
      const _0x5ed17d = { react: _0x15fbb9 }
      await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x5ed17d)
      const _0x5c5e4d = {
        text: '\u2705',
        key: _0x1aab2d.key,
      }
      const _0x641599 = { react: _0x5c5e4d }
      await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x641599)
    } else {
      const _0x8f70f5 = await _0x4f23c4.reply(
        '*The limit has been exceeded.*\u2757'
      )
      _0x4f23c4.react('\u274C')
      const _0xeea39d = {
        text: '\u274C',
        key: _0x8f70f5.key,
      }
      const _0x146c80 = { react: _0xeea39d }
      await _0x4e2344.sendMessage(_0x4f23c4.chat, _0x146c80)
    }
    fs.unlinkSync('./' + _0x4f6f7e)
  } catch (_0x2a57f0) {
    console.log(_0x2a57f0)
  }
})
const _0x178025 = {}
_0x178025.pattern = 'docvideo'
_0x178025.alias = ['document video']
_0x178025.desc = 'Downloads audio by yt link.'
_0x178025.category = 'downloader'
_0x178025.react = '\uD83D\uDCC2'
_0x178025.use = '<yt video url>'
cmd(_0x178025, async (_0x42cd6f, _0x3f7ebf, _0x24cd76) => {
  let _0x4469a4 = require('secktor-pack'),
    _0x2e6524
  if (_0x24cd76.startsWith('https://youtube.com/shorts/')) {
    const _0x2e3986 = _0x24cd76.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0x466ab9 = _0x2e3986.split('?feature')[0]
    _0x2e6524 = _0x466ab9
  } else {
    _0x2e6524 = _0x24cd76
  }
  let _0x486877 = await _0x4469a4(_0x2e6524),
    _0x427516 = _0x486877.videos[0]
  const _0x378917 = (_0x4415de) => {
    return '' + Math.floor(Math.random() * 10000) + _0x4415de
  }
  if (_0x24cd76.length === 0) {
    _0x3f7ebf.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
        prefix +
        'docvideo [name or link]_'
    )
    return
  }
  try {
    let _0x531c45 = _0x24cd76
    if (!_0x531c45.startsWith('')) {
      _0x3f7ebf.reply('*Give Video Name!*\u2757')
      return
    }
    let _0x31be11 = await ytdl.getInfo(_0x427516.url)
    if (_0x31be11.videoDetails.lengthSeconds >= videotime) {
      return _0x3f7ebf.reply('\u274C Video file too big!')
    }
    let _0xb4caea = _0x31be11.videoDetails.title,
      _0x58e1b4 = _0x378917('.mp4')
    const _0x3eaa52 = {
      filter: (_0x351cfa) => _0x351cfa.itag == 22 || _0x351cfa.itag == 18,
    }
    const _0x3a0125 = ytdl(_0x427516.url, _0x3eaa52).pipe(
      fs.createWriteStream('./' + _0x58e1b4)
    )
    await new Promise((_0x428f1e, _0x286490) => {
      _0x3a0125.on('error', _0x286490), _0x3a0125.on('finish', _0x428f1e)
    })
    let _0x309351 = fs.statSync('./' + _0x58e1b4),
      _0x1d1248 = _0x309351.size,
      _0x2f79db = _0x1d1248 / 1048576
    if (_0x2f79db <= dlsize) {
      let _0x30d4c3 = require('secktor-pack')
      const _0x19426d = { url: _0x427516.thumbnail }
      const _0x4562ac = {
        image: _0x19426d,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ YT DOWNLOADER \uD83C\uDFB6_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCFD️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ' +
          _0x427516.title +
          '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x427516.timestamp +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC40 ️ᴠɪᴇᴡꜱ :* ' +
          _0x427516.views +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC4D ʟɪᴋᴇꜱ :* ' +
          _0x427516.like +
          '\n\n*\u2503\u2FFB* *\u23F0 ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ' +
          _0x427516.ago +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴇɢᴏʀʏ :* ' +
          _0x427516.genre +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x427516.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF9 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ' +
          _0x427516.author.name +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCCE ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ' +
          _0x427516.author.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x427516.description +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x389b32 = await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0x4562ac, {
          quoted: _0x3f7ebf,
        }),
        _0x51cafa = {
          text: '\u2B07️',
          key: _0x389b32.key,
        }
      const _0xe56213 = { react: _0x51cafa }
      await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0xe56213)
      let _0x57110e = await _0x30d4c3(_0x24cd76),
        _0x127219 = {
          document: fs.readFileSync('./' + _0x58e1b4),
          jpegThumbnail: log0,
          mimetype: 'video/mp4',
          fileName: _0xb4caea + '.mp4',
          caption:
            '\n*\u2742  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ' +
            _0x427516.title +
            '_\n_*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* 360p_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
            _0x2f79db +
            '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
          headerType: 4,
        }
      const _0xf00dc2 = {
        text: '\u2B06️',
        key: _0x389b32.key,
      }
      const _0x3bd763 = { react: _0xf00dc2 }
      await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0x3bd763)
      const _0x5e7808 = await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0x127219, {
          quoted: _0x3f7ebf,
        }),
        _0x47634a = {
          text: '\uD83C\uDFA5️',
          key: _0x5e7808.key,
        }
      const _0x564c35 = { react: _0x47634a }
      await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0x564c35)
      const _0x5ed955 = {
        text: '\u2705',
        key: _0x389b32.key,
      }
      const _0x29c435 = { react: _0x5ed955 }
      await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0x29c435)
    } else {
      const _0x45bd7b = await _0x3f7ebf.reply(
        '*The limit has been exceeded.*\u2757'
      )
      _0x3f7ebf.react('\u274C')
      const _0x3f7578 = {
        text: '\u274C',
        key: _0x45bd7b.key,
      }
      const _0x371e57 = { react: _0x3f7578 }
      await _0x42cd6f.sendMessage(_0x3f7ebf.chat, _0x371e57)
    }
    fs.unlinkSync('./' + _0x58e1b4)
  } catch (_0x3fb68b) {
    console.log(_0x3fb68b)
  }
})
const _0x5c1a4c = {}
_0x5c1a4c.pattern = 'ytmp4'
_0x5c1a4c.desc = 'Downloads video from youtube.'
_0x5c1a4c.category = 'downloader'
_0x5c1a4c.react = '\u2B07️'
_0x5c1a4c.filename = __filename
_0x5c1a4c.use = '<yt video url>'
cmd(_0x5c1a4c, async (_0x2ece50, _0xe717e4, _0xa3ac4b) => {
  let _0x33a59d = require('secktor-pack'),
    _0x3b1d02
  if (_0xa3ac4b.startsWith('https://youtube.com/shorts/')) {
    const _0x251e89 = _0xa3ac4b.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0x4104f2 = _0x251e89.split('?feature')[0]
    _0x3b1d02 = _0x4104f2
  } else {
    _0x3b1d02 = _0xa3ac4b
  }
  let _0x9451ee = await _0x33a59d(_0x3b1d02),
    _0x223e18 = _0x9451ee.videos[0]
  const _0x363935 = (_0x4f874e) => {
    return '' + Math.floor(Math.random() * 10000) + _0x4f874e
  }
  if (!_0xa3ac4b) {
    _0xe717e4.reply('\u274CPlease provide me a url')
    return
  }
  try {
    let _0x3ebed8 = _0xa3ac4b
    if (!_0x3ebed8.startsWith('http')) {
      _0xe717e4.reply('\u274C Give youtube link!')
      await _0xe717e4.react('\u2757')
      return
    }
    let _0x1c1422 = await ytdl.getInfo(_0x223e18.url)
    if (_0x1c1422.videoDetails.lengthSeconds >= videotime) {
      return _0xe717e4.reply('\u274C Video file too big!')
    }
    let _0x4c9d12 = _0x1c1422.videoDetails.title,
      _0x2cf3e5 = _0x363935('.mp4')
    const _0x1fd225 = {
      filter: (_0x4fee18) => _0x4fee18.itag == 22 || _0x4fee18.itag == 18,
    }
    const _0x57ffd0 = ytdl(_0x223e18.url, _0x1fd225).pipe(
      fs.createWriteStream('./' + _0x2cf3e5)
    )
    await new Promise((_0x65b11e, _0x54aafc) => {
      _0x57ffd0.on('error', _0x54aafc)
      _0x57ffd0.on('finish', _0x65b11e)
    })
    let _0x5c1ac7 = fs.statSync('./' + _0x2cf3e5),
      _0x3bbf7b = _0x5c1ac7.size,
      _0x5067a6 = _0x3bbf7b / 1048576
    if (_0x5067a6 <= dlsize) {
      let _0x4a77f0 = require('secktor-pack'),
        _0x301b5a = await _0x4a77f0(_0xa3ac4b)
      await _0xe717e4.react('\u2B06️')
      let _0x30fceb = {
        document: fs.readFileSync('./' + _0x2cf3e5),
        mimetype: 'video/mp4',
        fileName: _0x4c9d12 + '.mp4',
        caption: '_*ROWDY-BABY-MD \u2981 MADE BY KALINDU*_\n_*VERSION 1*_',
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: _0x4c9d12,
            body: '\uD83D\uDC32 ROWWDY-BABY-MD',
            renderLargerThumbnail: true,
            thumbnailUrl: _0x301b5a.all[0].thumbnail,
            mediaUrl: _0xa3ac4b,
            mediaType: 1,
            thumbnail: await getBuffer(_0x301b5a.all[0].thumbnail),
            sourceUrl: 'https://youtube.com/@kalidu_official',
          },
        },
      }
      const _0x5dca5c = await _0x2ece50.sendMessage(_0xe717e4.chat, _0x30fceb, {
        quoted: _0xe717e4,
      })
      await _0xe717e4.react('\u2705')
      const _0x19ac46 = {
        text: '\uD83C\uDFA5️',
        key: _0x5dca5c.key,
      }
      const _0x432c2a = { react: _0x19ac46 }
      await _0x2ece50.sendMessage(_0xe717e4.chat, _0x432c2a)
    } else {
      _0xe717e4.reply('\u274C File size bigger than 400MB.')
    }
    fs.unlinkSync('./' + _0x2cf3e5)
  } catch (_0xbb7ae0) {
    console.log(_0xbb7ae0)
  }
})
const _0x1b5289 = {}
_0x1b5289.pattern = 'ytmp3'
_0x1b5289.desc = 'Downloads audio by yt link.'
_0x1b5289.category = 'downloader'
_0x1b5289.react = '\u2B07️'
_0x1b5289.use = '<yt video url>'
cmd(_0x1b5289, async (_0x487b8d, _0x2e6f0a, _0x2b5766) => {
  let _0x7bc306 = require('secktor-pack'),
    _0x4a9137
  if (_0x2b5766.startsWith('https://youtube.com/shorts/')) {
    const _0x312c15 = _0x2b5766.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0x3c6e51 = _0x312c15.split('?feature')[0]
    _0x4a9137 = _0x3c6e51
  } else {
    _0x4a9137 = _0x2b5766
  }
  let _0x4d84ef = await _0x7bc306(_0x4a9137)
  let _0x2f0df4 = _0x4d84ef.videos[0]
  const _0x5de4c7 = (_0x3262c4) => {
    return '' + Math.floor(Math.random() * 10000) + _0x3262c4
  }
  if (_0x2b5766.length === 0) {
    reply('\u274C URL is empty! \nSend ' + prefix + 'ytmp3 url')
    return
  }
  try {
    let _0x5f00e5 = _0x2b5766
    if (!_0x5f00e5.startsWith('http')) {
      _0x2e6f0a.reply('\u274C Give youtube link!')
      await _0x2e6f0a.react('\u2757')
      return
    }
    let _0x582b71 = await ytdl.getInfo(_0x2f0df4.url)
    if (_0x582b71.videoDetails.lengthSeconds >= videotime) {
      reply("\u274C I can't download that long video!")
      return
    }
    let _0x508d0a = _0x582b71.videoDetails.title,
      _0x1c32f3 = _0x5de4c7('.mp3')
    const _0x363b5f = {
      filter: (_0x84c851) =>
        _0x84c851.audioBitrate == 160 || _0x84c851.audioBitrate == 128,
    }
    const _0x10130e = ytdl(_0x2f0df4.url, _0x363b5f).pipe(
      fs.createWriteStream('./' + _0x1c32f3)
    )
    await new Promise((_0x268690, _0xfa1bfc) => {
      _0x10130e.on('error', _0xfa1bfc)
      _0x10130e.on('finish', _0x268690)
    })
    let _0x97bbc6 = fs.statSync('./' + _0x1c32f3),
      _0x4db02c = _0x97bbc6.size,
      _0x4c1002 = _0x4db02c / 1048576
    if (_0x4c1002 <= dlsize) {
      let _0x128f9e = require('secktor-pack'),
        _0x53cf5c = await _0x128f9e(_0x2b5766)
      await _0x2e6f0a.react('\u2B06️')
      let _0x276ff2 = {
        document: fs.readFileSync('./' + _0x1c32f3),
        mimetype: 'audio/mpeg',
        fileName: _0x508d0a + '.mp3',
        caption: '_*ROWDY-BABY-MD \u2981 MADE BY KALINDU*_\n_*VERSION 1*_',
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: _0x508d0a,
            body: _0x2e6f0a.pushName,
            renderLargerThumbnail: true,
            thumbnailUrl: _0x53cf5c.all[0].thumbnail,
            mediaUrl: _0x2b5766,
            mediaType: 1,
            thumbnail: await getBuffer(_0x53cf5c.all[0].thumbnail),
            sourceUrl: 'https://youtube.com/@Dragon-MD-OFC',
          },
        },
      }
      const _0x3bda42 = await _0x487b8d.sendMessage(_0x2e6f0a.chat, _0x276ff2, {
        quoted: _0x2e6f0a,
      })
      await _0x2e6f0a.react('\u2705')
      const _0x5b098e = {
        text: '\uD83C\uDFA7',
        key: _0x3bda42.key,
      }
      const _0x298ab1 = { react: _0x5b098e }
      await _0x487b8d.sendMessage(_0x2e6f0a.chat, _0x298ab1)
    } else {
      _0x2e6f0a.reply('\u274C File size bigger than 100mb.')
    }
    fs.unlinkSync('./' + _0x1c32f3)
  } catch (_0x46d66e) {
    console.log(_0x46d66e)
  }
})
const _0x4a8324 = {}
_0x4a8324.pattern = 'short'
_0x4a8324.alias = ['ytshort']
_0x4a8324.desc = 'Downloads audio by yt link.'
_0x4a8324.category = 'downloader'
_0x4a8324.react = '\uD83C\uDF9E️'
_0x4a8324.use = '<yt video url>'
cmd(_0x4a8324, async (_0x473c3e, _0x5464d5, _0x1d5ab8) => {
  let _0x7d18bc = require('secktor-pack')
  if (_0x1d5ab8.length === 0) {
    _0x5464d5.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
        prefix +
        'docvideo [name or link]_'
    )
    return
  }
  try {
    let _0x4ea2e6 = _0x1d5ab8
    if (!_0x4ea2e6.startsWith('http')) {
      _0x5464d5.reply('\u274C Give youtube link!')
      await _0x5464d5.react('\u2757')
      return
    }
    const _0x670ccd = {
      type: 'video',
      quality: 360,
      server: 'en68',
    }
    const _0x5ee600 = _0x670ccd,
      _0x1a0f5a = await svdl.download(_0x1d5ab8, _0x5ee600)
    let _0x17ebd6 = _0x1a0f5a
    const _0x5134eb =
      _0x17ebd6.size.split('MB')[0] || _0x17ebd6.size.split('KB')[0]
    let _0x2133ab = await _0x7d18bc(_0x1a0f5a.title),
      _0x58b976 = _0x2133ab.videos[0]
    if (_0x5134eb <= dlsize) {
      const _0x53382f = { url: _0x17ebd6.thumb }
      const _0x4b6d01 = {
        image: _0x53382f,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ YT DOWNLOADER \uD83C\uDFB6_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCFD️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ' +
          _0x17ebd6.title +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x1d5ab8 +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF9 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ' +
          _0x58b976.author.name +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCCE ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ' +
          _0x58b976.author.url +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x4797cb = await _0x473c3e.sendMessage(_0x5464d5.chat, _0x4b6d01, {
          quoted: _0x5464d5,
        }),
        _0x32dc07 = {
          text: '\u2B07️',
          key: _0x4797cb.key,
        }
      const _0x1690ae = { react: _0x32dc07 }
      await _0x473c3e.sendMessage(_0x5464d5.chat, _0x1690ae)
      const _0x27961a = _0x17ebd6,
        _0x560745 = { url: _0x27961a.link }
      const _0x3f9e48 = {
        video: _0x560745,
        mimetype: 'video/mp4',
        fileName: _0x17ebd6.title + '.mp4',
        caption:
          '_*\u2742  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ' +
          _0x17ebd6.title +
          '_\n_*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* 360p_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
          _0x27961a.size +
          '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
      }
      let _0x48aadd = _0x3f9e48
      const _0x35615d = {
        text: '\u2B06️',
        key: _0x4797cb.key,
      }
      const _0x41fc8d = { react: _0x35615d }
      await _0x473c3e.sendMessage(_0x5464d5.chat, _0x41fc8d)
      const _0x5e5f72 = await _0x473c3e.sendMessage(_0x5464d5.chat, _0x48aadd, {
          quoted: _0x5464d5,
        }),
        _0x3edc64 = {
          text: '\uD83C\uDFA5️',
          key: _0x5e5f72.key,
        }
      const _0x37a16e = { react: _0x3edc64 }
      await _0x473c3e.sendMessage(_0x5464d5.chat, _0x37a16e)
      const _0x3d6b90 = {
        text: '\u2705',
        key: _0x4797cb.key,
      }
      const _0x15788b = { react: _0x3d6b90 }
      await _0x473c3e.sendMessage(_0x5464d5.chat, _0x15788b)
    } else {
      const _0x569e5e = await _0x5464d5.reply(
        '*The limit has been exceeded.*\u2757'
      )
      _0x5464d5.react('\u274C')
      const _0x15d9ea = {
        text: '\u274C',
        key: _0x569e5e.key,
      }
      const _0x44ab81 = { react: _0x15d9ea }
      await _0x473c3e.sendMessage(_0x5464d5.chat, _0x44ab81)
    }
  } catch (_0x62b80c) {
    console.log(_0x62b80c)
    _0x5464d5.reply('*' + _0x62b80c + '* \u2757')
  }
})
const _0x2c23a3 = {}
_0x2c23a3.pattern = 'highvid'
_0x2c23a3.alias = ['highvideo', 'videohigh', 'vidhigh']
_0x2c23a3.desc = 'Downloads audio by yt link.'
_0x2c23a3.category = 'downloader'
_0x2c23a3.react = '\uD83C\uDF9E️'
_0x2c23a3.use = '<yt video url>'
cmd(_0x2c23a3, async (_0xf4e4f8, _0x247142, _0x175238) => {
  let _0x1a7c43 = require('secktor-pack')
  let _0x2b080d
  if (_0x175238.startsWith('https://youtube.com/shorts/')) {
    const _0x581fd3 = _0x175238.replace(
        'https://youtube.com/shorts/',
        'https://youtube.com/v='
      ),
      _0x3fcbd3 = _0x581fd3.split('?feature')[0]
    _0x2b080d = _0x3fcbd3
  } else {
    _0x2b080d = _0x175238
  }
  let _0x134f7e = await _0x1a7c43(_0x2b080d),
    _0x3dc0f9 = _0x134f7e.videos[0]
  const _0x739a35 = (_0x5007cc) => {
    return '' + Math.floor(Math.random() * 10000) + _0x5007cc
  }
  if (_0x175238.length === 0) {
    _0x247142.reply(
      '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
        prefix +
        'highvideo [name or link]_'
    )
    return
  }
  try {
    let _0x2f1078 = _0x175238
    if (!_0x2f1078.startsWith('')) {
      _0x247142.reply(
        '_*\uD83D\uDD87️ Give me a YouTube Link or Name \u2757*_\n*eg:-* _' +
          prefix +
          'highvideo [name or link]_'
      )
      return
    }
    let _0x5f4546 = await ytdl.getInfo(_0x3dc0f9.url)
    if (_0x5f4546.videoDetails.lengthSeconds >= videotime) {
      return _0x247142.reply('*The limit has been exceeded.*\u2757')
    }
    let _0x99913c = _0x5f4546.videoDetails.title
    const _0x50b555 = {
      type: 'video',
      quality: 720,
      server: 'en68',
    }
    let _0x4c73a3 = _0x50b555
    const _0x5620c8 = await svdl.download(_0x175238, _0x4c73a3),
      _0x2c6fb3 = _0x5620c8.link
    let _0x2bd0b3 =
      _0x5620c8.size.split('MB')[0] || _0x5620c8.size.split('KB')[0]
    if (_0x2bd0b3 <= dlsize) {
      let _0x391e7c = require('secktor-pack')
      const _0x470fd5 = { url: _0x3dc0f9.thumbnail }
      const _0x2b9d9f = {
        image: _0x470fd5,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ YT DOWNLOADER \uD83C\uDFB6_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCFD️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ' +
          _0x3dc0f9.title +
          '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x3dc0f9.timestamp +
          '\n\n*\u2503\u2FFB* \uD83D\uDDC3️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
          _0x2bd0b3 +
          ' MB\n\n*\u2503\u2FFB* *\uD83D\uDC40 ️ᴠɪᴇᴡꜱ :* ' +
          _0x3dc0f9.views +
          '\n\n*\u2503\u2FFB* *\uD83D\uDC4D ʟɪᴋᴇꜱ :* ' +
          _0x3dc0f9.like +
          '\n\n*\u2503\u2FFB* *\u23F0 ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ' +
          _0x3dc0f9.ago +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴇɢᴏʀʏ :* ' +
          _0x3dc0f9.genre +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x3dc0f9.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF9 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ' +
          _0x3dc0f9.author.name +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCCE ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ' +
          _0x3dc0f9.author.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x3dc0f9.description +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x5a6feb = await _0xf4e4f8.sendMessage(_0x247142.chat, _0x2b9d9f, {
          quoted: _0x247142,
        }),
        _0x3cbe66 = {
          text: '\u2B07️',
          key: _0x5a6feb.key,
        }
      const _0x56d305 = { react: _0x3cbe66 }
      await _0xf4e4f8.sendMessage(_0x247142.chat, _0x56d305)
      let _0x5058b0 = await _0x391e7c(_0x175238)
      const _0x1e51bb = { url: _0x2c6fb3 }
      const _0x4f803f = {
        document: _0x1e51bb,
        jpegThumbnail: log0,
        mimetype: 'video/mp4',
        fileName: _0x99913c + '.mp4',
        caption:
          '_*\u2742  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ' +
          _0x3dc0f9.title +
          '_\n_*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* 720p_\n_*\u2742  ꜰɪʟᴇ ꜱɪᴢᴇ :* ' +
          _0x2bd0b3 +
          ' MB_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        headerType: 4,
      }
      let _0x491ce1 = _0x4f803f
      const _0x3cb399 = {
        text: '\u2B06️',
        key: _0x5a6feb.key,
      }
      const _0x15524e = { react: _0x3cb399 }
      await _0xf4e4f8.sendMessage(_0x247142.chat, _0x15524e)
      const _0x315ac3 = await _0xf4e4f8.sendMessage(_0x247142.chat, _0x491ce1, {
          quoted: _0x247142,
        }),
        _0x54b9bd = {
          text: '\uD83C\uDFA5️',
          key: _0x315ac3.key,
        }
      const _0x5d694d = { react: _0x54b9bd }
      await _0xf4e4f8.sendMessage(_0x247142.chat, _0x5d694d)
      const _0x4970a5 = {
        text: '\u2705',
        key: _0x5a6feb.key,
      }
      const _0x695b26 = { react: _0x4970a5 }
      await _0xf4e4f8.sendMessage(_0x247142.chat, _0x695b26)
    } else {
      const _0x26919b = await _0x247142.reply(
        '*The limit has been exceeded.*\u2757'
      )
      _0x247142.react('\u274C')
      const _0x4debb1 = {
        text: '\u274C',
        key: _0x26919b.key,
      }
      const _0x4d74bd = { react: _0x4debb1 }
      await _0xf4e4f8.sendMessage(_0x247142.chat, _0x4d74bd)
    }
  } catch (_0x17a2f2) {
    console.log(_0x17a2f2)
    _0x247142.reply('*' + _0x17a2f2 + '* \u2757')
  }
})
function _0x13c9a5(_0x430e1e) {
  function _0x513902(_0x5c464d) {
    if (typeof _0x5c464d === 'string') {
      return function (_0x357a0f) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x5c464d / _0x5c464d).length !== 1 || _0x5c464d % 20 === 0
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
    _0x513902(++_0x5c464d)
  }
  try {
    if (_0x430e1e) {
      return _0x513902
    } else {
      _0x513902(0)
    }
  } catch (_0x5ce8b7) {}
}
