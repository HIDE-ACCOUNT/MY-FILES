const _0x1b2cdb = (function () {
    let _0x37df62 = true
    return function (_0x298e43, _0x4a89d1) {
      const _0x558b8e = _0x37df62
        ? function () {
            if (_0x4a89d1) {
              const _0x2fe4a1 = _0x4a89d1.apply(_0x298e43, arguments)
              return (_0x4a89d1 = null), _0x2fe4a1
            }
          }
        : function () {}
      return (_0x37df62 = false), _0x558b8e
    }
  })(),
  _0x218756 = _0x1b2cdb(this, function () {
    return _0x218756
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x218756)
      .search('(((.+)+)+)+$')
  })
_0x218756()
const _0x38d142 = (function () {
  let _0x52569f = true
  return function (_0x3f05d5, _0x19fbaa) {
    const _0x5859b7 = _0x52569f
      ? function () {
          if (_0x19fbaa) {
            const _0x1ac7af = _0x19fbaa.apply(_0x3f05d5, arguments)
            return (_0x19fbaa = null), _0x1ac7af
          }
        }
      : function () {}
    return (_0x52569f = false), _0x5859b7
  }
})()
;(function () {
  _0x38d142(this, function () {
    const _0x18f457 = new RegExp('function *\\( *\\)'),
      _0x27fe4e = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x4ad669 = _0x47ff0d('init')
    if (
      !_0x18f457.test(_0x4ad669 + 'chain') ||
      !_0x27fe4e.test(_0x4ad669 + 'input')
    ) {
      _0x4ad669('0')
    } else {
      _0x47ff0d()
    }
  })()
})()
const _0xca4766 = (function () {
    let _0x46bc45 = true
    return function (_0x163a96, _0x871b6c) {
      const _0x5b8543 = _0x46bc45
        ? function () {
            if (_0x871b6c) {
              const _0x4f07a8 = _0x871b6c.apply(_0x163a96, arguments)
              return (_0x871b6c = null), _0x4f07a8
            }
          }
        : function () {}
      return (_0x46bc45 = false), _0x5b8543
    }
  })(),
  _0x8d8a0a = _0xca4766(this, function () {
    const _0x174b21 = function () {
        let _0x1f6411
        try {
          _0x1f6411 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x4112b0) {
          _0x1f6411 = window
        }
        return _0x1f6411
      },
      _0x4eed05 = _0x174b21()
    const _0x41b1fe = (_0x4eed05.console = _0x4eed05.console || {})
    const _0x2898c9 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x525d12 = 0; _0x525d12 < _0x2898c9.length; _0x525d12++) {
      const _0x433abd = _0xca4766.constructor.prototype.bind(_0xca4766),
        _0xab2089 = _0x2898c9[_0x525d12],
        _0x2f6075 = _0x41b1fe[_0xab2089] || _0x433abd
      _0x433abd['__proto__'] = _0xca4766.bind(_0xca4766)
      _0x433abd.toString = _0x2f6075.toString.bind(_0x2f6075)
      _0x41b1fe[_0xab2089] = _0x433abd
    }
  })
_0x8d8a0a()
var { subsearch, subdl } = require('@sl-code-lords/si-subdl')
const {
    tlang,
    botpic,
    cmd,
    prefix,
    runtime,
    Config,
    formatp,
    fetchJson,
    citel,
  } = require('../lib'),
  _0x38dc13 = {}
_0x38dc13.pattern = 'subdl'
_0x38dc13.alias = ['subtitled', 'subtitledownload', 'sub']
_0x38dc13.desc = 'Give infomation about movies'
_0x38dc13.category = 'downloader'
_0x38dc13.react = '\uD83D\uDCD1'
_0x38dc13.filename = __filename
_0x38dc13.use = '<add fb url.>'
cmd(_0x38dc13, async (_0x3c56b5, _0x5714e1, _0x510866) => {
  if (!_0x510866) {
    _0x5714e1.reply(
      '_*\uD83D\uDD87️ Give me a Film Name or Url\u2757*_\n*eg:-* _' +
        prefix +
        'subdl [ name or url ]_'
    )
    return
  }
  if (_0x510866.startsWith('https://')) {
    try {
      const _0x4bc07b = await subdl(_0x510866),
        _0x54741f = _0x4bc07b.results,
        _0x394e2e = { url: _0x54741f.img }
      const _0xb9e342 = {
        image: _0x394e2e,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDCD1 SUBTITLE DL \uD83D\uDCE1_ )*\n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
          _0x54741f.title +
          '\n\n*\u2503\u2FFB* *\uD83E\uDD35 ᴄʀᴇᴀᴛᴏʀ :* ' +
          _0x54741f.creater +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ \u2981 ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n',
      }
      const _0x1d3e7a = await _0x3c56b5.sendMessage(_0x5714e1.chat, _0xb9e342, {
          quoted: _0x5714e1,
        }),
        _0x16c2d7 = {
          text: '\u2B07️',
          key: _0x1d3e7a.key,
        }
      const _0x47728d = { react: _0x16c2d7 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x47728d)
      const _0x5e474d = { url: _0x54741f.dl_link }
      const _0x301ec6 = _0x5e474d,
        _0x2be355 = {
          document: _0x301ec6,
          mimetype: 'application/zip',
          caption:
            '_*\u2742  ᴛɪᴛʟᴇ :* ' +
            _0x54741f.title +
            '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
          fileName: _0x54741f.title + '.apk',
        },
        _0x55fe67 = {
          text: '\u2B06️',
          key: _0x1d3e7a.key,
        }
      const _0x4b0bf6 = { react: _0x55fe67 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x4b0bf6)
      const _0xf94ad4 = await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x2be355, {
          quoted: _0x5714e1,
        }),
        _0x3f38b3 = {
          text: '\u2705',
          key: _0x1d3e7a.key,
        }
      const _0x1e4328 = { react: _0x3f38b3 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x1e4328)
      const _0x2260c0 = {
        text: '\uD83E\uDDFE',
        key: _0xf94ad4.key,
      }
      const _0x3bc72e = { react: _0x2260c0 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x3bc72e)
    } catch (_0xb11276) {
      console.log(_0xb11276)
      _0x5714e1.reply('\u274C *' + _0xb11276 + '*')
      _0x5714e1.react('\u274C')
      const _0x1151a5 = {
        text: '\u274C',
        key: txt2.key,
      }
      const _0x5455ba = { react: _0x1151a5 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x5455ba)
    }
  } else {
    try {
      const _0x4480d9 = await subsearch(_0x510866),
        _0x40753e = _0x4480d9.results[0].link,
        _0x51e244 = await subdl(_0x40753e),
        _0x5911ca = _0x51e244.results,
        _0x374632 = { url: _0x5911ca.img }
      const _0x3925d6 = {
        image: _0x374632,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDCD1 SUB DOWNLOADER \uD83D\uDCE1_ )*\n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
          _0x5911ca.title +
          '\n\n*\u2503\u2FFB* *\uD83E\uDD35 ᴄʀᴇᴀᴛᴏʀ :* ' +
          _0x5911ca.creater +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ʟɪɴᴋ :* ' +
          _0x510866 +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
      }
      const _0x1493ac = await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x3925d6, {
          quoted: _0x5714e1,
        }),
        _0x5060de = {
          text: '\u2B07️',
          key: _0x1493ac.key,
        }
      const _0x1f43dc = { react: _0x5060de }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x1f43dc)
      const _0x36d46f = { url: _0x5911ca.dl_link }
      const _0x345207 = _0x36d46f,
        _0x5d18d6 = {
          document: _0x345207,
          mimetype: 'application/zip',
          caption:
            '_*\u2742  ᴛɪᴛʟᴇ :* ' +
            _0x5911ca.title +
            '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
          fileName: _0x5911ca.title + '.apk',
        },
        _0x2b0cf9 = {
          text: '\u2B06️',
          key: _0x1493ac.key,
        }
      const _0x45a8f1 = { react: _0x2b0cf9 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x45a8f1)
      const _0x1a5d0e = await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x5d18d6, {
          quoted: _0x5714e1,
        }),
        _0x5ce5ce = {
          text: '\uD83E\uDDFE',
          key: _0x1a5d0e.key,
        }
      const _0x396fb3 = { react: _0x5ce5ce }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x396fb3)
      const _0x257e93 = {
        text: '\u2705',
        key: _0x1493ac.key,
      }
      const _0x188ee1 = { react: _0x257e93 }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x188ee1)
    } catch (_0x214fdf) {
      console.log(_0x214fdf)
      _0x5714e1.reply('Not Found \u274C \n*' + _0x214fdf + '*')
      _0x5714e1.react('\u274C')
      const _0x25bf6b = {
        text: '\u274C',
        key: txt2.key,
      }
      const _0x34522b = { react: _0x25bf6b }
      await _0x3c56b5.sendMessage(_0x5714e1.chat, _0x34522b)
    }
  }
})
const _0x2379fa = {}
_0x2379fa.pattern = 'subs'
_0x2379fa.alias = ['subsearch', 'subtitlesearch']
_0x2379fa.desc = 'Give infomation about movies'
_0x2379fa.category = 'downloader'
_0x2379fa.react = '\uD83D\uDD0E'
_0x2379fa.filename = __filename
_0x2379fa.use = '<add fb url.>'
cmd(_0x2379fa, async (_0x3516b7, _0x3a67b8, _0x569226) => {
  if (!_0x569226) {
    _0x3a67b8.reply(
      '_*\uD83D\uDD87️ Give me a Film Name\u2757*_\n*eg:-* _' +
        prefix +
        'subs [ name ]_'
    )
    return
  }
  try {
    const _0x37c064 = await subsearch(_0x569226),
      _0x469ef1 = _0x37c064.results
    let _0x226b0b =
      '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83D\uDCD1 SUB SEACHER \uD83D\uDD0E_ )*\n\n```.subdl [link] - use to download subtitle file```'
    for (let _0x58947b of _0x469ef1) {
      _0x226b0b +=
        '\n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
        _0x58947b.title +
        '\n    *\u2742* *\uD83D\uDD87️ ʟɪɴᴋ :* ' +
        _0x58947b.link
    }
    const _0x1dea76 = await _0x3516b7.sendMessage(
        _0x3a67b8.chat,
        {
          text:
            _0x226b0b + '\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        },
        { quoted: _0x3a67b8 }
      ),
      _0x1bd34d = {
        text: '\uD83E\uDDFE',
        key: _0x1dea76.key,
      }
    const _0x4764ff = { react: _0x1bd34d }
    await _0x3516b7.sendMessage(_0x3a67b8.chat, _0x4764ff)
  } catch (_0x4c7987) {
    console.log(_0x4c7987)
    _0x3a67b8.reply('Not Found \u274C \n*' + _0x4c7987 + '*')
    _0x3a67b8.react('\u274C')
    const _0xab053a = {
      text: '\u274C',
      key: txt2.key,
    }
    const _0x535868 = { react: _0xab053a }
    await _0x3516b7.sendMessage(_0x3a67b8.chat, _0x535868)
  }
})
;(function () {
  const _0x3acc70 = function () {
      let _0x58c8c2
      try {
        _0x58c8c2 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x128a4a) {
        _0x58c8c2 = window
      }
      return _0x58c8c2
    },
    _0x30487f = _0x3acc70()
  _0x30487f.setInterval(_0x47ff0d, 4000)
})()
function _0x47ff0d(_0x3628e0) {
  function _0x29c66e(_0x13c2b0) {
    if (typeof _0x13c2b0 === 'string') {
      return function (_0x4bd8ac) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x13c2b0 / _0x13c2b0).length !== 1 || _0x13c2b0 % 20 === 0) {
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
    _0x29c66e(++_0x13c2b0)
  }
  try {
    if (_0x3628e0) {
      return _0x29c66e
    } else {
      _0x29c66e(0)
    }
  } catch (_0x2a9e25) {}
}
