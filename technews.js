const _0x7f189e = (function () {
    let _0x6b091 = true
    return function (_0x53231b, _0x21df15) {
      const _0x415fbb = _0x6b091
        ? function () {
            if (_0x21df15) {
              const _0x4835b3 = _0x21df15.apply(_0x53231b, arguments)
              return (_0x21df15 = null), _0x4835b3
            }
          }
        : function () {}
      return (_0x6b091 = false), _0x415fbb
    }
  })(),
  _0x520cf7 = _0x7f189e(this, function () {
    return _0x520cf7
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x520cf7)
      .search('(((.+)+)+)+$')
  })
_0x520cf7()
;(function () {
  const _0x16ef63 = function () {
    let _0x40db04
    try {
      _0x40db04 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x3104e2) {
      _0x40db04 = window
    }
    return _0x40db04
  }
  const _0x2ce4d8 = _0x16ef63()
  _0x2ce4d8.setInterval(_0x395459, 4000)
})()
const _0x54d1cb = (function () {
  let _0x10bd29 = true
  return function (_0x1fa33a, _0x41b746) {
    const _0x4d0630 = _0x10bd29
      ? function () {
          if (_0x41b746) {
            const _0x23e47d = _0x41b746.apply(_0x1fa33a, arguments)
            return (_0x41b746 = null), _0x23e47d
          }
        }
      : function () {}
    return (_0x10bd29 = false), _0x4d0630
  }
})()
;(function () {
  _0x54d1cb(this, function () {
    const _0x2d4f82 = new RegExp('function *\\( *\\)'),
      _0x4f11ac = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x341c9f = _0x395459('init')
    if (
      !_0x2d4f82.test(_0x341c9f + 'chain') ||
      !_0x4f11ac.test(_0x341c9f + 'input')
    ) {
      _0x341c9f('0')
    } else {
      _0x395459()
    }
  })()
})()
const _0x38569e = (function () {
    let _0x29caff = true
    return function (_0x5efeb8, _0x31c275) {
      const _0x2dd3a5 = _0x29caff
        ? function () {
            if (_0x31c275) {
              const _0x390d18 = _0x31c275.apply(_0x5efeb8, arguments)
              return (_0x31c275 = null), _0x390d18
            }
          }
        : function () {}
      return (_0x29caff = false), _0x2dd3a5
    }
  })(),
  _0xfc7195 = _0x38569e(this, function () {
    const _0x5ab7c5 = function () {
        let _0x105eae
        try {
          _0x105eae = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0xa03c8c) {
          _0x105eae = window
        }
        return _0x105eae
      },
      _0x49b7da = _0x5ab7c5()
    const _0x45200a = (_0x49b7da.console = _0x49b7da.console || {})
    const _0x1fc87d = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x558490 = 0; _0x558490 < _0x1fc87d.length; _0x558490++) {
      const _0x1f7844 = _0x38569e.constructor.prototype.bind(_0x38569e),
        _0x176144 = _0x1fc87d[_0x558490],
        _0x3c8d2d = _0x45200a[_0x176144] || _0x1f7844
      _0x1f7844['__proto__'] = _0x38569e.bind(_0x38569e)
      _0x1f7844.toString = _0x3c8d2d.toString.bind(_0x3c8d2d)
      _0x45200a[_0x176144] = _0x1f7844
    }
  })
_0xfc7195()
const {
  tlang,
  botpic,
  cmd,
  prefix,
  runtime,
  Config,
  formatp,
  fetchJson,
} = require('../lib')
const nima = require('tech-news-scraper'),
  translatte = require('translatte')
const _0x3b8891 = {}
_0x3b8891.pattern = 'entech'
_0x3b8891.alias = ['tech']
_0x3b8891.desc = 'tech beta infomation.'
_0x3b8891.category = 'downloader'
_0x3b8891.react = '\uD83D\uDDA5️'
_0x3b8891.use = '<wbi>'
cmd(_0x3b8891, async (_0x4192c0, _0xc8810b, _0x1a23b1) => {
  if (_0x1a23b1.includes('http')) {
    try {
      const _0x37c7f2 = await nima.getNews(_0x1a23b1),
        _0x5dfa0c = _0x37c7f2.result,
        _0x3e52e7 = { url: _0x5dfa0c.img }
      const _0x22a896 = await _0x4192c0.sendMessage(
          _0xc8810b.chat,
          {
            image: _0x3e52e7,
            caption:
              '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDC68‍\uD83D\uDCBB' +
              ('TECH INFO ℹ️_ )* \n\n*\u2503\u2FFB* *\uD83E\uDD4F Title :* ' +
                _0x5dfa0c.title +
                '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴀɢᴏʀʏ :* ' +
                _0x5dfa0c.catname +
                '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
                _0x5dfa0c.desc +
                '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴜʀʟ :* ' +
                _0x5dfa0c.link +
                '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n'),
          },
          { quoted: _0xc8810b }
        ),
        _0x136510 = {
          text: 'ℹ️',
          key: _0x22a896.key,
        }
      const _0x540306 = { react: _0x136510 }
      await _0x4192c0.sendMessage(_0xc8810b.chat, _0x540306)
    } catch (_0x619cfb) {
      console.log(_0x619cfb)
      _0xc8810b.reply('*' + _0x619cfb + '* \u2757')
    }
  } else {
    try {
      const _0x365d5f = await nima.allNews(),
        _0x3d5641 = _0x365d5f.result[0].link,
        _0x2f32d9 = _0x365d5f.result[0].date,
        _0x3feb1d = await nima.getNews(_0x3d5641),
        _0x21ee00 = _0x3feb1d.result,
        _0x59a02f = { url: _0x21ee00.img }
      const _0x2f6d36 = await _0x4192c0.sendMessage(
          _0xc8810b.chat,
          {
            image: _0x59a02f,
            caption:
              '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDC68‍\uD83D\uDCBB' +
              ('TECH INFO ℹ️_ )* \n\n*\u2503\u2FFB* *\uD83E\uDD4F Title :* ' +
                _0x21ee00.title +
                '\n\n*\u2503\u2FFB* *\uD83D\uDCC5 ᴅᴀᴛᴇ :* ' +
                _0x2f32d9 +
                '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴀɢᴏʀʏ :* ' +
                _0x21ee00.catname +
                '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
                _0x21ee00.desc +
                '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴜʀʟ :* ' +
                _0x21ee00.link +
                '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n'),
          },
          { quoted: _0xc8810b }
        ),
        _0x648de = {
          text: 'ℹ️',
          key: _0x2f6d36.key,
        }
      const _0x163f61 = { react: _0x648de }
      await _0x4192c0.sendMessage(_0xc8810b.chat, _0x163f61)
    } catch (_0x20cce7) {
      console.log(_0x20cce7)
      _0xc8810b.reply('*' + _0x20cce7 + '* \u2757')
    }
  }
})
const _0x1afe36 = {}
_0x1afe36.pattern = 'sitech'
_0x1afe36.desc = 'tech beta infomation.'
_0x1afe36.category = 'downloader'
_0x1afe36.react = '\uD83D\uDDA5️'
_0x1afe36.use = '<wbi>'
cmd(_0x1afe36, async (_0x127aba, _0x3f1050, _0x3c0c04) => {
  if (_0x3c0c04.includes('http')) {
    try {
      const _0x17ad73 = await nima.getNews(_0x3c0c04),
        _0x3fc2ad = _0x17ad73.result
      let _0x1691a7 = _0x3fc2ad.title
      const _0x43167c = {
        from: 'en',
        to: 'si',
      }
      const _0x23e0f2 = await translatte(_0x1691a7, _0x43167c)
      let _0x179d32 = _0x3fc2ad.desc
      const _0x1940dc = {
        from: 'en',
        to: 'si',
      }
      const _0x41a1d2 = await translatte(_0x179d32, _0x1940dc),
        _0x134c92 = { url: _0x3fc2ad.img }
      const _0x29ec4a = await _0x127aba.sendMessage(
          _0x3f1050.chat,
          {
            image: _0x134c92,
            caption:
              '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDC68‍\uD83D\uDCBB' +
              ('TECH INFO ℹ️_ )* \n\n*\u2503\u2FFB* *\uD83E\uDD4F Title :* ' +
                _0x23e0f2.text +
                '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴀɢᴏʀʏ :* ' +
                _0x3fc2ad.catname +
                '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
                _0x41a1d2.text +
                '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴜʀʟ :* ' +
                _0x3fc2ad.link +
                '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n'),
          },
          { quoted: _0x3f1050 }
        ),
        _0x2f6a6d = {
          text: 'ℹ️',
          key: _0x29ec4a.key,
        }
      const _0x1938c4 = { react: _0x2f6a6d }
      await _0x127aba.sendMessage(_0x3f1050.chat, _0x1938c4)
    } catch (_0x435936) {
      console.log(_0x435936), _0x3f1050.reply('*' + _0x435936 + '* \u2757')
    }
  } else {
    try {
      const _0x592344 = await nima.allNews(),
        _0x13b081 = _0x592344.result[0].link,
        _0x29d911 = _0x592344.result[0].date,
        _0x170819 = await nima.getNews(_0x13b081),
        _0x45bda1 = _0x170819.result
      let _0x54f245 = _0x45bda1.title
      const _0x41abcd = {
        from: 'en',
        to: 'si',
      }
      const _0x344365 = await translatte(_0x54f245, _0x41abcd)
      let _0x73d393 = _0x45bda1.desc
      const _0x3f261a = {
        from: 'en',
        to: 'si',
      }
      const _0x4a05b0 = await translatte(_0x73d393, _0x3f261a),
        _0x1809ab = { url: _0x45bda1.img }
      const _0xbdac7e = await _0x127aba.sendMessage(
          _0x3f1050.chat,
          {
            image: _0x1809ab,
            caption:
              '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDC68‍\uD83D\uDCBB' +
              ('TECH INFO ℹ️_ )* \n\n*\u2503\u2FFB* *\uD83E\uDD4F Title :* ' +
                _0x344365.text +
                '\n\n*\u2503\u2FFB* *\uD83D\uDCC5 ᴅᴀᴛᴇ :* ' +
                _0x29d911 +
                '\n\n*\u2503\u2FFB* *\uD83D\uDDC3️ ᴄᴀᴛᴀɢᴏʀʏ :* ' +
                _0x45bda1.catname +
                '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
                _0x4a05b0.text +
                '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴜʀʟ :* ' +
                _0x45bda1.link +
                '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n'),
          },
          { quoted: _0x3f1050 }
        ),
        _0x5b773c = {
          text: 'ℹ️',
          key: _0xbdac7e.key,
        }
      const _0x513f2c = { react: _0x5b773c }
      await _0x127aba.sendMessage(_0x3f1050.chat, _0x513f2c)
    } catch (_0x331bac) {
      console.log(_0x331bac), _0x3f1050.reply('*' + _0x331bac + '* \u2757')
    }
  }
})
const _0x4365d0 = {}
_0x4365d0.pattern = 'techt'
_0x4365d0.alias = ['technews', 'tnews']
_0x4365d0.desc = 'Give infomation about wbi'
_0x4365d0.category = 'downloader'
_0x4365d0.react = '\uD83D\uDD0E'
_0x4365d0.filename = __filename
_0x4365d0.use = '<add fb url.>'
cmd(_0x4365d0, async (_0x398097, _0x168a33, _0x3cc0c2) => {
  try {
    const _0x3e919f = await nima.allNews(),
      _0x359ed1 = _0x3e919f.result,
      _0xf38942 = _0x359ed1[0].img
    let _0xfd5d99 =
      '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDC68‍\uD83D\uDCBBTECH INFO ℹ️_ )*\n\n```.tech [news url] - use to see news in brief```'
    for (let _0x508859 of _0x359ed1) {
      _0xfd5d99 +=
        '\n\n\uD83E\uDD4F *ᴛɪᴛʟᴇ - ' +
        _0x508859.title +
        '* \n*\uD83D\uDCC5 ᴅᴀᴛᴇ :* ' +
        _0x508859.date +
        '\n*\uD83D\uDDC3️ ᴄᴀᴛᴀɢᴏʀʏ :* ' +
        _0x508859.catname +
        '\n\uD83D\uDD17 *ᴜʀʟ :* ' +
        _0x508859.link
    }
    const _0x453c3e = { url: _0xf38942 }
    const _0x2dfcf3 = await _0x398097.sendMessage(
        _0x168a33.chat,
        {
          image: _0x453c3e,
          caption:
            _0xfd5d99 + '\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        },
        { quoted: _0x168a33 }
      ),
      _0x806f9d = {
        text: '\uD83E\uDDFE',
        key: _0x2dfcf3.key,
      }
    const _0x3e5ed2 = { react: _0x806f9d }
    await _0x398097.sendMessage(_0x168a33.chat, _0x3e5ed2)
  } catch (_0x363e27) {
    console.log(_0x363e27)
    _0x168a33.reply('Not Found \u274C \n*' + _0x363e27 + '*')
    _0x168a33.react('\u274C')
    const _0x1f06b7 = {
      text: '\u274C',
      key: txt2.key,
    }
    const _0x5aec3f = { react: _0x1f06b7 }
    await _0x398097.sendMessage(_0x168a33.chat, _0x5aec3f)
  }
})
function _0x395459(_0x54299b) {
  function _0xb2d77a(_0x568b00) {
    if (typeof _0x568b00 === 'string') {
      return function (_0x28fdb2) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x568b00 / _0x568b00).length !== 1 || _0x568b00 % 20 === 0
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
    _0xb2d77a(++_0x568b00)
  }
  try {
    if (_0x54299b) {
      return _0xb2d77a
    } else {
      _0xb2d77a(0)
    }
  } catch (_0x1f67d5) {}
}
