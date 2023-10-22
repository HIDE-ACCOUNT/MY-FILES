const _0x5c3c65 = (function () {
    let _0x3e6bb2 = true
    return function (_0x41e08f, _0x1c3394) {
      const _0x48a2b8 = _0x3e6bb2
        ? function () {
            if (_0x1c3394) {
              const _0x99afdb = _0x1c3394.apply(_0x41e08f, arguments)
              return (_0x1c3394 = null), _0x99afdb
            }
          }
        : function () {}
      return (_0x3e6bb2 = false), _0x48a2b8
    }
  })(),
  _0x186c0d = _0x5c3c65(this, function () {
    return _0x186c0d
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x186c0d)
      .search('(((.+)+)+)+$')
  })
_0x186c0d()
const _0x354e43 = (function () {
  let _0xb32771 = true
  return function (_0x143e9a, _0x19b241) {
    const _0x89af28 = _0xb32771
      ? function () {
          if (_0x19b241) {
            const _0x2c3c50 = _0x19b241.apply(_0x143e9a, arguments)
            return (_0x19b241 = null), _0x2c3c50
          }
        }
      : function () {}
    return (_0xb32771 = false), _0x89af28
  }
})()
;(function () {
  _0x354e43(this, function () {
    const _0x3a3c3f = new RegExp('function *\\( *\\)'),
      _0x535ee4 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x1c58fe = _0x3b8fa8('init')
    if (
      !_0x3a3c3f.test(_0x1c58fe + 'chain') ||
      !_0x535ee4.test(_0x1c58fe + 'input')
    ) {
      _0x1c58fe('0')
    } else {
      _0x3b8fa8()
    }
  })()
})()
const _0x3158bb = (function () {
    let _0x35e22e = true
    return function (_0x4ef71c, _0x490b72) {
      const _0x6a4c89 = _0x35e22e
        ? function () {
            if (_0x490b72) {
              const _0x10bbea = _0x490b72.apply(_0x4ef71c, arguments)
              return (_0x490b72 = null), _0x10bbea
            }
          }
        : function () {}
      return (_0x35e22e = false), _0x6a4c89
    }
  })(),
  _0x1f91b5 = _0x3158bb(this, function () {
    const _0x1e5d50 = function () {
        let _0x44654f
        try {
          _0x44654f = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x4f956c) {
          _0x44654f = window
        }
        return _0x44654f
      },
      _0x132d19 = _0x1e5d50()
    const _0x1e3721 = (_0x132d19.console = _0x132d19.console || {})
    const _0x3fd6b7 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0xce6e86 = 0; _0xce6e86 < _0x3fd6b7.length; _0xce6e86++) {
      const _0x5df6cc = _0x3158bb.constructor.prototype.bind(_0x3158bb),
        _0x59ef54 = _0x3fd6b7[_0xce6e86],
        _0x1fb842 = _0x1e3721[_0x59ef54] || _0x5df6cc
      _0x5df6cc['__proto__'] = _0x3158bb.bind(_0x3158bb)
      _0x5df6cc.toString = _0x1fb842.toString.bind(_0x1fb842)
      _0x1e3721[_0x59ef54] = _0x5df6cc
    }
  })
_0x1f91b5()
const {
    tlang,
    botpic,
    cmd,
    prefix,
    runtime,
    Config,
    formatp,
    fetchJson,
  } = require('../lib'),
  { tiktok } = require('@xct007/frieren-scraper'),
  fg = require('api-dylux'),
  { fetchVideo } = require('@saipulanuar/tiktok-scraper-ts')
const cheerio = require('cheerio'),
  axios = require('axios')
;(function () {
  let _0x3b964a
  try {
    const _0x50f3ce = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x3b964a = _0x50f3ce()
  } catch (_0x5043c2) {
    _0x3b964a = window
  }
  _0x3b964a.setInterval(_0x3b8fa8, 4000)
})()
const _0x1ada14 = {}
_0x1ada14.pattern = 'tt'
_0x1ada14.alias = ['tiktok', 'tiktokvideo', 'ttvideo']
_0x1ada14.desc = 'tiktok downloader'
_0x1ada14.react = '\uD83C\uDFA5'
_0x1ada14.category = 'downloader'
cmd(_0x1ada14, async (_0x2319ed, _0x40addd, _0x323120) => {
  if (!_0x323120) {
    _0x40addd.reply(
      '_*\uD83D\uDD87️ Give me a Tiktok Url \u2757*_\n*eg:-* _' +
        prefix +
        'tt [ Link ]_'
    )
    return
  }
  try {
    const _0x122646 = await fetchVideo(_0x323120),
      _0x5aa2be = { url: _0x122646.cover }
    const _0x456f96 = {
      image: _0x5aa2be,
      caption:
        '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ TIKTOK DOWNLOADER \uD83C\uDF8A_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
        _0x122646.description +
        '\n\n*\u2503\u2FFB* *\u23F0 ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ' +
        _0x122646.createdAt +
        '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
        _0x122646.duration +
        's\n\n*\u2503\u2FFB* *\uD83D\uDC41 ️ᴠɪᴇᴡꜱ :* ' +
        _0x122646.playCount +
        '\n\n*\u2503\u2FFB* *\u2665️ ʟᴏᴠᴇꜱ :* ' +
        _0x122646.likesCount +
        '\n\n*\u2503\u2FFB* *\u270D️ ᴄᴏᴍᴍᴇɴᴛꜱ :* ' +
        _0x122646.commentCount +
        '\n\n*\u2503\u2FFB* *\u21AA️ ꜱʜᴀʀᴇꜱ :* ' +
        _0x122646.shareCount +
        '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
        _0x323120 +
        '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
    }
    const _0xbc9417 = await _0x2319ed.sendMessage(_0x40addd.chat, _0x456f96, {
        quoted: _0x40addd,
      }),
      _0x4b5872 = {
        text: '\u2B07️',
        key: _0xbc9417.key,
      }
    const _0x332db3 = { react: _0x4b5872 }
    await _0x2319ed.sendMessage(_0x40addd.chat, _0x332db3)
    try {
      let _0x4aa991 = await fg.tiktok(_0x323120)
      const _0x524b45 = { url: _0x4aa991.play }
      let _0x85192c = {
        video: _0x524b45,
        mimetype: 'video/mp4',
        fileName: _0x122646.description + '.mp4',
        caption: '\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
      }
      const _0x5a9114 = {
        text: '\u2B06️',
        key: _0xbc9417.key,
      }
      const _0x33c587 = { react: _0x5a9114 }
      await _0x2319ed.sendMessage(_0x40addd.chat, _0x33c587)
      const _0x2e37ca = await _0x2319ed.sendMessage(_0x40addd.chat, _0x85192c, {
          quoted: _0x40addd,
        }),
        _0x1ca2a6 = {
          text: '\uD83C\uDF9E️',
          key: _0x2e37ca.key,
        }
      const _0x850e80 = { react: _0x1ca2a6 }
      await _0x2319ed.sendMessage(_0x40addd.chat, _0x850e80)
      const _0x51ae6f = {
        text: '\u2705',
        key: _0xbc9417.key,
      }
      const _0x279bb5 = { react: _0x51ae6f }
      await _0x2319ed.sendMessage(_0x40addd.chat, _0x279bb5)
    } catch (_0x53658b) {
      const _0x5c4f42 = await tiktok.v1(_0x323120),
        _0x177e1a = { url: _0x5c4f42.play }
      let _0x35ca98 = {
        video: _0x177e1a,
        mimetype: 'video/mp4',
        fileName: _0x122646.description + '.mp4',
        caption: '\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
      }
      const _0x42e0d4 = {
        text: '\u2B06️',
        key: _0xbc9417.key,
      }
      const _0x2b5755 = { react: _0x42e0d4 }
      await _0x2319ed.sendMessage(_0x40addd.chat, _0x2b5755)
      const _0x488469 = await _0x2319ed.sendMessage(_0x40addd.chat, _0x35ca98, {
          quoted: _0x40addd,
        }),
        _0x2015d4 = {
          text: '\uD83C\uDF9E️',
          key: _0x488469.key,
        }
      const _0x1d68a6 = { react: _0x2015d4 }
      await _0x2319ed.sendMessage(_0x40addd.chat, _0x1d68a6)
      const _0x13ebbb = {
        text: '\u2705',
        key: _0xbc9417.key,
      }
      const _0xe51382 = { react: _0x13ebbb }
      await _0x2319ed.sendMessage(_0x40addd.chat, _0xe51382)
    }
  } catch (_0x1c5a56) {
    console.log(_0x1c5a56)
    _0x40addd.reply('_*Video not Found \u274C*_\n*' + _0x1c5a56 + '* \u2757')
  }
})
const _0x28e50d = {}
_0x28e50d.pattern = 'tt2'
_0x28e50d.alias = ['tiktok2', 'tiktokvideo2', 'ttvideo2']
_0x28e50d.desc = 'tiktok downloader'
_0x28e50d.react = '\uD83C\uDFA5'
_0x28e50d.category = 'downloader'
cmd(_0x28e50d, async (_0x134bd0, _0x590ed8, _0x111f0d) => {
  if (!_0x111f0d) {
    return _0x590ed8.reply('Give Me a Tiktok Video Link \u2757')
  }
  const _0x432e7a = await fetchJson(
      'https://vihangayt.me/download/tiktok?url=' + _0x111f0d
    ),
    _0x50daf1 = _0x432e7a.data,
    _0x5caeef = { url: _0x50daf1.cover }
  const _0x5b9a97 = {
    image: _0x5caeef,
    caption:
      '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ TIKTOK DOWNLOADER \uD83C\uDF8A_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
      _0x50daf1.desc +
      '\n\n*\u2503\u2FFB* *\uD83C\uDF9B ᴀᴜᴛʜᴇʀ ɴᴀᴍᴇ :* ' +
      _0x50daf1.author_name +
      '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴀᴜᴛʜᴏʀ ᴄʜᴀɴɴᴇʟ :* https://www.tiktok.com/@' +
      _0x50daf1.author +
      '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
      _0x111f0d +
      '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
  }
  const _0x5b7e00 = await _0x134bd0.sendMessage(_0x590ed8.chat, _0x5b9a97, {
      quoted: _0x590ed8,
    }),
    _0x16e8a6 = {
      text: '\u2B06️',
      key: _0x5b7e00.key,
    }
  const _0x1bf0fa = { react: _0x16e8a6 }
  await _0x134bd0.sendMessage(_0x590ed8.chat, _0x1bf0fa)
  const _0xe0451e = await fetchJson(
      'https://vihangayt.me/download/tiktok2?url=' + _0x111f0d
    ),
    _0x578177 = { url: _0xe0451e.data.video }
  const _0x133eb2 = {
    video: _0x578177,
    mimetype: 'video/mp4',
    fileName: 'dragon-md-tiktok-dl.mp4',
    caption: '\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
  }
  const _0x4454b2 = await _0x134bd0.sendMessage(_0x590ed8.chat, _0x133eb2, {
      quoted: _0x590ed8,
    }),
    _0x9790e2 = {
      text: '\uD83C\uDF9E️',
      key: _0x4454b2.key,
    }
  const _0x5829be = { react: _0x9790e2 }
  await _0x134bd0.sendMessage(_0x590ed8.chat, _0x5829be)
  const _0x34379c = {
    text: '\u2705',
    key: _0x5b7e00.key,
  }
  const _0x564a99 = { react: _0x34379c }
  await _0x134bd0.sendMessage(_0x590ed8.chat, _0x564a99)
})
const _0x8754dc = {}
_0x8754dc.pattern = 'tta'
_0x8754dc.alias = ['tiktokaudio', 'tiktoksong', 'ttsong', 'ttaudio']
_0x8754dc.desc = 'tiktok song downloader'
_0x8754dc.react = '\uD83C\uDFB6'
_0x8754dc.category = 'downloader'
cmd(_0x8754dc, async (_0x6d653f, _0x107e7f, _0x1342fb) => {
  if (!_0x1342fb) {
    return
  }
  try {
    let _0x83c9f = await fg.tiktok(_0x1342fb)
    const _0x4a1c96 = await _0x6d653f.sendMessage(
        _0x107e7f.chat,
        {
          text: '```\u2B07️ Please Wait Downloading Your TikTok Background-Music..... \uD83C\uDFBC```',
        },
        { quoted: _0x107e7f }
      ),
      _0x3d15ae = {
        text: '\u2B06️',
        key: _0x4a1c96.key,
      }
    const _0x38c5e6 = { react: _0x3d15ae }
    await _0x6d653f.sendMessage(_0x107e7f.chat, _0x38c5e6)
    const _0x4c0dd9 = { url: _0x83c9f.music }
    const _0x59bccf = {
      document: _0x4c0dd9,
      mimetype: 'audio/mpeg',
      fileName: 'dragon md tts dl.mp3',
      caption:
        '\n*\u2750\u2501( _\uD83C\uDF9E️ TIKTOK MUSIC DL \uD83C\uDF8A_ )* \n_*\u2742  \uD83C\uDF9B ᴀᴜᴛʜᴇʀ ɴᴀᴍᴇ :*_ ' +
        _0x83c9f.nickname +
        '\n_*\u2742  \uD83D\uDD17 ᴀᴜᴛʜᴏʀ ᴄʜᴀɴɴᴇʟ :*_ https://www.tiktok.com/@' +
        _0x83c9f.unique_id +
        '\n_*\u2742  \u23F3 ᴅᴜʀᴀᴛɪᴏɴ :*_ ' +
        _0x83c9f.duration +
        '\n_*\u2742  \uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :*_ ' +
        _0x1342fb +
        '\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSIO 1\n',
    }
    const _0x232acb = await _0x6d653f.sendMessage(_0x107e7f.chat, _0x59bccf, {
        quoted: _0x107e7f,
      }),
      _0x2caf4b = {
        text: '\uD83C\uDFBC',
        key: _0x232acb.key,
      }
    const _0xfca520 = { react: _0x2caf4b }
    await _0x6d653f.sendMessage(_0x107e7f.chat, _0xfca520)
    const _0x2b358b = {
      text: '\u2705',
      key: _0x4a1c96.key,
    }
    const _0xd8050e = { react: _0x2b358b }
    await _0x6d653f.sendMessage(_0x107e7f.chat, _0xd8050e)
  } catch (_0x266db1) {
    console.log(_0x266db1)
    _0x107e7f.reply('_*Video not Found \u274C*_\n*' + _0x266db1 + '* \u2757')
  }
})
function _0x3b8fa8(_0x2509d1) {
  function _0x5bb3f1(_0x48bc19) {
    if (typeof _0x48bc19 === 'string') {
      return function (_0x196b31) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x48bc19 / _0x48bc19).length !== 1 || _0x48bc19 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x5bb3f1(++_0x48bc19)
  }
  try {
    if (_0x2509d1) {
      return _0x5bb3f1
    } else {
      _0x5bb3f1(0)
    }
  } catch (_0x127794) {}
}
