const _0x517fa7 = (function () {
    let _0x31b6fd = true
    return function (_0x1807ff, _0x2aa7e5) {
      const _0xeabc3e = _0x31b6fd
        ? function () {
            if (_0x2aa7e5) {
              const _0x3e1e6f = _0x2aa7e5.apply(_0x1807ff, arguments)
              return (_0x2aa7e5 = null), _0x3e1e6f
            }
          }
        : function () {}
      return (_0x31b6fd = false), _0xeabc3e
    }
  })(),
  _0x2e7cd8 = _0x517fa7(this, function () {
    return _0x2e7cd8
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2e7cd8)
      .search('(((.+)+)+)+$')
  })
_0x2e7cd8()
const _0x4c63c2 = (function () {
  let _0x3b1d2d = true
  return function (_0x53397d, _0x18e041) {
    const _0x44e1a0 = _0x3b1d2d
      ? function () {
          if (_0x18e041) {
            const _0x271082 = _0x18e041.apply(_0x53397d, arguments)
            return (_0x18e041 = null), _0x271082
          }
        }
      : function () {}
    return (_0x3b1d2d = false), _0x44e1a0
  }
})()
;(function () {
  _0x4c63c2(this, function () {
    const _0x2dc5c2 = new RegExp('function *\\( *\\)'),
      _0x19f2dc = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x36bd7a = _0x3020ae('init')
    if (
      !_0x2dc5c2.test(_0x36bd7a + 'chain') ||
      !_0x19f2dc.test(_0x36bd7a + 'input')
    ) {
      _0x36bd7a('0')
    } else {
      _0x3020ae()
    }
  })()
})()
;(function () {
  const _0x2b5234 = function () {
      let _0xe3e186
      try {
        _0xe3e186 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x585616) {
        _0xe3e186 = window
      }
      return _0xe3e186
    },
    _0x23d672 = _0x2b5234()
  _0x23d672.setInterval(_0x3020ae, 4000)
})()
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
  { mods } = require('fouadwa-scraper'),
  _0x5c15ac = {}
_0x5c15ac.pattern = 'mod'
_0x5c15ac.alias = ['fmmod', 'wamod', 'wamods']
_0x5c15ac.desc = 'download playstore app'
_0x5c15ac.react = '\uD83D\uDCC2'
_0x5c15ac.category = 'downloader'
_0x5c15ac.filename = __filename
cmd(_0x5c15ac, async (_0x5198ac, _0x9420f0, _0x5a676d) => {
  try {
    let _0x1961cc = await mods()
    const _0x3dd124 = _0x1961cc.com_whatsapp.link,
      _0x509a2d = _0x1961cc.com_whatsapp.name
    let _0x5e0470 =
      '\n*ROWDY-BABY_FOUAD WA-MOD-DOWNLOADER*\n\n\n*1 | WhatsApp*\n\n*2 | GBWhatsapp*\n\n*3 | FMWhatsapp*\n\n*4 | YOWhatsapp*\n\n\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nRELEASED \u2981 \uD835\uDFF8\uD835\uDFF6\uD835\uDFF8\uD835\uDFF9/\uD835\uDFF6\uD835\uDFF7/\uD835\uDFF6\uD835\uDFF8\n\n'
    const _0x4efe50 = {
      url: 'https://telegra.ph/file/e645cad87a36bf906afa4.jpg',
    }
    const _0x5d5595 = {
      image: _0x4efe50,
      caption: _0x5e0470,
    }
    await _0x5198ac.sendMessage(_0x9420f0.chat, _0x5d5595, {
      quoted: _0x9420f0,
    })
  } catch (_0x5cf875) {
    console.log(_0x5cf875)
    _0x9420f0.reply('\u274C *' + _0x5cf875 + '*')
  }
})
const _0x270647 = {}
_0x270647.on = 'text'
cmd(
  _0x270647,
  async (_0x5eee88, _0x104195, _0x569304, { isCreator: _0x2f105b }) => {
    const _0x2438ca = await _0x5eee88.decodeJid(_0x5eee88.user.id)
    const _0x2f52b2 = '*ROWDY-BABY_FOUAD WA-MOD-DOWNLOADER*'
    let _0x5b8ced = [Config.sudo]
      .map((_0x50de34) => _0x50de34.replace(/[^0-9]/g) + '@s.whatsapp.net')
      .includes(_0x104195.sender)
    var _0x1e2bb7 = '```'
    if (_0x104195.text === '1') {
      if (!_0x104195.quoted) {
        return
      }
      if (_0x104195.quoted.sender !== _0x2438ca) {
        return
      }
      const _0x689d74 = _0x104195.quoted.text
      if (_0x689d74.includes(_0x2f52b2)) {
        let _0x218d8a = await mods()
        const _0x594f3b = _0x218d8a.com_whatsapp.link,
          _0x323331 = _0x218d8a.com_whatsapp.name,
          _0x407138 = { url: _0x594f3b }
        const _0xf6c80a = {
          document: _0x407138,
          mimetype: 'application/vnd.android.package-archive',
          caption:
            '                 \nROWDY-BABY-MD \u2981 MADE BY KALINDU\nRELEASED \u2981 \uD835\uDFF8\uD835\uDFF6\uD835\uDFF8\uD835\uDFF9/\uD835\uDFF6\uD835\uDFF7/\uD835\uDFF6\uD835\uDFF8\n',
          fileName: _0x323331,
        }
        await _0x5eee88.sendMessage(_0x104195.chat, _0xf6c80a, {
          quoted: _0x104195,
        })
      }
    }
  }
)
const _0x5dd2cc = {}
_0x5dd2cc.on = 'text'
cmd(
  _0x5dd2cc,
  async (_0x4a2e41, _0x136a7f, _0x1744c3, { isCreator: _0x3f7f7e }) => {
    const _0x5c572e = await _0x4a2e41.decodeJid(_0x4a2e41.user.id)
    const _0x2eedd3 = '*ROWDY-BABY_FOUAD WA-MOD-DOWNLOADER*'
    let _0x21bfcd = [Config.sudo]
      .map((_0x864778) => _0x864778.replace(/[^0-9]/g) + '@s.whatsapp.net')
      .includes(_0x136a7f.sender)
    var _0xc9b1f0 = '```'
    if (_0x136a7f.text === '2') {
      if (!_0x136a7f.quoted) {
        return
      }
      if (_0x136a7f.quoted.sender !== _0x5c572e) {
        return
      }
      const _0xc78d4c = _0x136a7f.quoted.text
      if (_0xc78d4c.includes(_0x2eedd3)) {
        let _0x234538 = await mods()
        const _0xadcf29 = _0x234538.com_gbwhatsapp.link,
          _0x417943 = _0x234538.com_gbwhatsapp.name,
          _0x53ec07 = { url: _0xadcf29 }
        const _0x5f414f = {
          document: _0x53ec07,
          mimetype: 'application/vnd.android.package-archive',
          caption:
            '                 \nROWDY-BABY-MD \u2981 MADE BY KALINDU\nRELEASED \u2981 \uD835\uDFF8\uD835\uDFF6\uD835\uDFF8\uD835\uDFF9/\uD835\uDFF6\uD835\uDFF7/\uD835\uDFF6\uD835\uDFF8\n',
          fileName: _0x417943,
        }
        await _0x4a2e41.sendMessage(_0x136a7f.chat, _0x5f414f, {
          quoted: _0x136a7f,
        })
      }
    }
  }
)
const _0x2b862e = {}
_0x2b862e.on = 'text'
cmd(
  _0x2b862e,
  async (_0x66fdc9, _0xc532c2, _0x31ee6b, { isCreator: _0x8423e5 }) => {
    const _0x13a388 = await _0x66fdc9.decodeJid(_0x66fdc9.user.id),
      _0x489652 = '*ROWDY-BABY_FOUAD WA-MOD-DOWNLOADER*'
    let _0x42e281 = [Config.sudo]
      .map((_0x4c98d1) => _0x4c98d1.replace(/[^0-9]/g) + '@s.whatsapp.net')
      .includes(_0xc532c2.sender)
    var _0x4ec74c = '```'
    if (_0xc532c2.text === '3') {
      if (!_0xc532c2.quoted) {
        return
      }
      if (_0xc532c2.quoted.sender !== _0x13a388) {
        return
      }
      const _0x43474f = _0xc532c2.quoted.text
      if (_0x43474f.includes(_0x489652)) {
        let _0x3c4172 = await mods()
        const _0x3bb289 = _0x3c4172.com_fmwhatsapp.link,
          _0x32c125 = _0x3c4172.com_fmwhatsapp.name,
          _0x5a0aec = { url: _0x3bb289 }
        const _0x19e4e3 = {
          document: _0x5a0aec,
          mimetype: 'application/vnd.android.package-archive',
          caption:
            '                 \nROWDY-BABY-MD \u2981 MADE BY KALINDU\nRELEASED\u2981 \uD835\uDFF8\uD835\uDFF6\uD835\uDFF8\uD835\uDFF9/\uD835\uDFF6\uD835\uDFF7/\uD835\uDFF6\uD835\uDFF8\n',
          fileName: _0x32c125,
        }
        await _0x66fdc9.sendMessage(_0xc532c2.chat, _0x19e4e3, {
          quoted: _0xc532c2,
        })
      }
    }
  }
)
const _0x25eab7 = {}
_0x25eab7.on = 'text'
cmd(
  _0x25eab7,
  async (_0x211ed4, _0x58ea57, _0x28d293, { isCreator: _0xc82256 }) => {
    const _0x5b0308 = await _0x211ed4.decodeJid(_0x211ed4.user.id),
      _0x2dc80c = '*ROWDY-BABY_FOUAD WA-MOD-DOWNLOADER*'
    let _0x496be1 = [Config.sudo]
      .map((_0x51624c) => _0x51624c.replace(/[^0-9]/g) + '@s.whatsapp.net')
      .includes(_0x58ea57.sender)
    var _0x4bd35a = '```'
    if (_0x58ea57.text === '4') {
      if (!_0x58ea57.quoted) {
        return
      }
      if (_0x58ea57.quoted.sender !== _0x5b0308) {
        return
      }
      const _0x342b4d = _0x58ea57.quoted.text
      if (_0x342b4d.includes(_0x2dc80c)) {
        let _0x1d9b53 = await mods()
        const _0x4b9c8e = _0x1d9b53.com_yowhatsapp.link,
          _0x9604b5 = _0x1d9b53.com_yowhatsapp.name,
          _0x582eec = { url: _0x4b9c8e }
        const _0x226acd = {
          document: _0x582eec,
          mimetype: 'application/vnd.android.package-archive',
          caption:
            '                 \nROWDY-BABY-MD \u2981 MADE BY KALINDU\nRELEASED \u2981 \uD835\uDFF8\uD835\uDFF6\uD835\uDFF8\uD835\uDFF9/\uD835\uDFF6\uD835\uDFF7/\uD835\uDFF6\uD835\uDFF8\n',
          fileName: _0x9604b5,
        }
        await _0x211ed4.sendMessage(_0x58ea57.chat, _0x226acd, {
          quoted: _0x58ea57,
        })
      }
    }
  }
)
function _0x3020ae(_0x4d9d1c) {
  function _0x49cd10(_0xf617c1) {
    if (typeof _0xf617c1 === 'string') {
      return function (_0x44f9c9) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0xf617c1 / _0xf617c1).length !== 1 || _0xf617c1 % 20 === 0
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
    _0x49cd10(++_0xf617c1)
  }
  try {
    if (_0x4d9d1c) {
      return _0x49cd10
    } else {
      _0x49cd10(0)
    }
  } catch (_0x7b5933) {}
}
