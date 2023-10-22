const _0x140b6b = (function () {
  let _0x1e55b5 = true
  return function (_0x424e85, _0x32d5c8) {
    const _0x15282d = _0x1e55b5
      ? function () {
          if (_0x32d5c8) {
            const _0x41e611 = _0x32d5c8.apply(_0x424e85, arguments)
            return (_0x32d5c8 = null), _0x41e611
          }
        }
      : function () {}
    return (_0x1e55b5 = false), _0x15282d
  }
})()
const _0x4dcc01 = _0x140b6b(this, function () {
  return _0x4dcc01
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x4dcc01)
    .search('(((.+)+)+)+$')
})
_0x4dcc01()
const _0x4a8fe0 = (function () {
  let _0xb8f620 = true
  return function (_0x2d74e1, _0x249c01) {
    const _0x144186 = _0xb8f620
      ? function () {
          if (_0x249c01) {
            const _0x4349b9 = _0x249c01.apply(_0x2d74e1, arguments)
            return (_0x249c01 = null), _0x4349b9
          }
        }
      : function () {}
    return (_0xb8f620 = false), _0x144186
  }
})()
;(function () {
  _0x4a8fe0(this, function () {
    const _0x4ce61d = new RegExp('function *\\( *\\)'),
      _0x572647 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x2217ea = _0x2efa79('init')
    if (
      !_0x4ce61d.test(_0x2217ea + 'chain') ||
      !_0x572647.test(_0x2217ea + 'input')
    ) {
      _0x2217ea('0')
    } else {
      _0x2efa79()
    }
  })()
})()
const _0x5cec76 = (function () {
    let _0x4aec95 = true
    return function (_0x5b7cf6, _0x2cbd39) {
      const _0x4132a5 = _0x4aec95
        ? function () {
            if (_0x2cbd39) {
              const _0x1707cd = _0x2cbd39.apply(_0x5b7cf6, arguments)
              return (_0x2cbd39 = null), _0x1707cd
            }
          }
        : function () {}
      return (_0x4aec95 = false), _0x4132a5
    }
  })(),
  _0x3c0ac5 = _0x5cec76(this, function () {
    let _0x39c96b
    try {
      const _0x57126a = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x39c96b = _0x57126a()
    } catch (_0x2f30b1) {
      _0x39c96b = window
    }
    const _0x4bd561 = (_0x39c96b.console = _0x39c96b.console || {})
    const _0x53193f = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x13518 = 0; _0x13518 < _0x53193f.length; _0x13518++) {
      const _0x43da09 = _0x5cec76.constructor.prototype.bind(_0x5cec76),
        _0x212fb9 = _0x53193f[_0x13518],
        _0x47a27b = _0x4bd561[_0x212fb9] || _0x43da09
      _0x43da09['__proto__'] = _0x5cec76.bind(_0x5cec76)
      _0x43da09.toString = _0x47a27b.toString.bind(_0x47a27b)
      _0x4bd561[_0x212fb9] = _0x43da09
    }
  })
_0x3c0ac5()
const { tlang, cmd, fetchJson, getBuffer, prefix, Config } = require('../lib'),
  { fbdl1, fbdl2 } = require('vihangayt-fbdl'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  _0x15e868 = {}
_0x15e868.pattern = 'facebook'
_0x15e868.alias = ['fb', 'fbdl', 'facebookvideo', 'fbvideo']
_0x15e868.desc = 'Downloads fb videos  .'
_0x15e868.category = 'downloader'
_0x15e868.react = '\uD83C\uDF9E️'
_0x15e868.filename = __filename
_0x15e868.use = '<add fb url.>'
cmd(_0x15e868, async (_0x200ca1, _0x2fe64d, _0x495535) => {
  if (!_0x495535) {
    _0x2fe64d.reply(
      '_*\uD83D\uDD87️ Give me a FB Url \u2757*_\n*eg:-* _' +
        prefix +
        'fb [ Link ]_'
    )
    return
  }
  try {
    const _0x16658c = await fbdl1(_0x495535),
      _0x371c78 = { url: _0x16658c.thumb }
    const _0x253a9e = {
      image: _0x371c78,
      caption:
        '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ FB DOWNLOADER \uD83C\uDF8A_ )*\n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
        _0x16658c.meta.title +
        '\n\n*\u2503\u2FFB* *\u23F3 ᴅᴜʀᴀᴛɪᴏɴ :* ' +
        _0x16658c.meta.duration +
        '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
        _0x16658c.meta.source +
        '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY  KALINDU\nVERSION 1\n',
    }
    const _0x45f9d3 = await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x253a9e, {
      quoted: _0x2fe64d,
    })
    try {
      const _0xccb0d6 = {
        text: '\u2B07️',
        key: _0x45f9d3.key,
      }
      const _0x1da679 = { react: _0xccb0d6 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x1da679)
      const _0x3d6d93 = { url: _0x16658c.hd.url }
      let _0x598c27 = {
        video: _0x3d6d93,
        mimetype: 'video/mp4',
        fileName: _0x16658c.meta.title + '.mp4',
        caption:
          '\n_*\uD83D\uDD06 \uD835\uDE77\uD835\uDE73 \uD835\uDE85\uD835\uDE78\uD835\uDE73\uD835\uDE74\uD835\uDE7E*_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ \u2981 ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n',
      }
      const _0x159b66 = {
        text: '\u2B06️',
        key: _0x45f9d3.key,
      }
      const _0x5a7511 = { react: _0x159b66 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x5a7511)
      const _0x438f86 = await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x598c27, {
          quoted: _0x2fe64d,
        }),
        _0x227227 = {
          text: '\uD83D\uDD06',
          key: _0x438f86.key,
        }
      const _0x2d48f3 = { react: _0x227227 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x2d48f3)
      const _0x16ba63 = {
        text: '\u2705',
        key: _0x45f9d3.key,
      }
      const _0xa50c9f = { react: _0x16ba63 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0xa50c9f)
    } catch (_0x2a4d89) {
      console.log(_0x2a4d89)
    }
    try {
      const _0x1c9f87 = {
        text: '\u2B07️',
        key: _0x45f9d3.key,
      }
      const _0x22a2f6 = { react: _0x1c9f87 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x22a2f6)
      const _0x40b3df = { url: _0x16658c.sd.url }
      let _0x1aedf8 = {
        video: _0x40b3df,
        mimetype: 'video/mp4',
        fileName: _0x16658c.meta.title + '.mp4',
        caption:
          '\n_*\uD83D\uDD05 \uD835\uDE82\uD835\uDE73 \uD835\uDE85\uD835\uDE78\uD835\uDE73\uD835\uDE74\uD835\uDE7E*_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
      }
      const _0x4a514d = {
        text: '\u2B06️',
        key: _0x45f9d3.key,
      }
      const _0x34189f = { react: _0x4a514d }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x34189f)
      const _0x4b8310 = await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x1aedf8, {
          quoted: _0x2fe64d,
        }),
        _0x102b43 = {
          text: '\uD83D\uDD05',
          key: _0x4b8310.key,
        }
      const _0x2e79ff = { react: _0x102b43 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x2e79ff)
      const _0xdd7364 = {
        text: '\u2705',
        key: _0x45f9d3.key,
      }
      const _0x4f0966 = { react: _0xdd7364 }
      await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x4f0966)
    } catch (_0x471153) {
      console.log(_0x471153)
    }
  } catch (_0x169578) {
    try {
      let _0x1b7d92 = await fbdl2(_0x495535)
      const _0x11c54d = {
        url: 'https://i.ibb.co/h9sNyLX/facebook-logo-5-0-0-0-0.jpg',
      }
      const _0xb0157d = {
        image: _0x11c54d,
        caption:
          '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ FB DOWNLOADER \uD83C\uDF8A_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ' +
          _0x1b7d92.result.Title +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
          _0x495535 +
          '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
      }
      const _0x2f2df0 = await _0x200ca1.sendMessage(_0x2fe64d.chat, _0xb0157d, {
        quoted: _0x2fe64d,
      })
      try {
        const _0x4513ee = {
          text: '\u2B07️',
          key: _0x2f2df0.key,
        }
        const _0x16cb75 = { react: _0x4513ee }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x16cb75)
        const _0x395afb = { url: _0x1b7d92.result.HD }
        let _0x1567bb = {
          video: _0x395afb,
          mimetype: 'video/mp4',
          fileName: _0x1b7d92.result.Title + '.mp4',
          caption:
            '\n_*\uD83D\uDD06 \uD835\uDE77\uD835\uDE73 \uD835\uDE85\uD835\uDE78\uD835\uDE73\uD835\uDE74\uD835\uDE7E*_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        }
        const _0x32c381 = {
          text: '\u2B06️',
          key: _0x2f2df0.key,
        }
        const _0x3529cd = { react: _0x32c381 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x3529cd)
        const _0x101c84 = await _0x200ca1.sendMessage(
            _0x2fe64d.chat,
            _0x1567bb,
            { quoted: _0x2fe64d }
          ),
          _0x3f0743 = {
            text: '\uD83D\uDD06',
            key: _0x101c84.key,
          }
        const _0x2ef1d3 = { react: _0x3f0743 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x2ef1d3)
        const _0x576281 = {
          text: '\u2705',
          key: _0x2f2df0.key,
        }
        const _0x1a059a = { react: _0x576281 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x1a059a)
      } catch (_0x4d004a) {
        console.log(_0x4d004a)
      }
      try {
        const _0x4970c3 = {
          text: '\u2B07️',
          key: _0x2f2df0.key,
        }
        const _0x248eff = { react: _0x4970c3 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x248eff)
        const _0x2ac6e3 = { url: _0x1b7d92.result.SD }
        let _0x1181de = {
          video: _0x2ac6e3,
          mimetype: 'video/mp4',
          fileName: _0x1b7d92.result.Title + '.mp4',
          caption:
            '\n_*\uD83D\uDD05 \uD835\uDE82\uD835\uDE73 \uD835\uDE85\uD835\uDE78\uD835\uDE73\uD835\uDE74\uD835\uDE7E*_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        }
        const _0xb8c4e3 = {
          text: '\u2B06️',
          key: _0x2f2df0.key,
        }
        const _0x1871bb = { react: _0xb8c4e3 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x1871bb)
        const _0x3468f6 = await _0x200ca1.sendMessage(
            _0x2fe64d.chat,
            _0x1181de,
            { quoted: _0x2fe64d }
          ),
          _0x12f9e9 = {
            text: '\uD83D\uDD05',
            key: _0x3468f6.key,
          }
        const _0x1192ff = { react: _0x12f9e9 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x1192ff)
        const _0x4b4f9f = {
          text: '\u2705',
          key: _0x2f2df0.key,
        }
        const _0x1a5327 = { react: _0x4b4f9f }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x1a5327)
      } catch (_0x49ec70) {
        console.log(_0x49ec70)
      }
    } catch (_0xc230ba) {
      console.log(_0xc230ba)
      try {
        let _0x343838 = await fetchJson(
          'https://vihangayt.me/download/fb2?url=' + _0x495535
        )
        const _0x590782 = _0x343838.data,
          _0x1b7ffd = { url: _0x590782.thumb }
        const _0x401175 = {
          image: _0x1b7ffd,
          caption:
            '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ FB DOWNLOADER \uD83C\uDF8A_ )*\n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴛɪᴛʟᴇ :* ' +
            _0x590782.title +
            '\n\n*\u2503\u2FFB* *\uD83D\uDCF0 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
            _0x590782.desc +
            '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
            _0x495535 +
            '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        }
        const _0x3c4ec7 = await _0x200ca1.sendMessage(
            _0x2fe64d.chat,
            _0x401175,
            { quoted: _0x2fe64d }
          ),
          _0x11c7d1 = {
            text: '\u2B07️',
            key: _0x3c4ec7.key,
          }
        const _0x354839 = { react: _0x11c7d1 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x354839)
        const _0x4f7f9a = { url: _0x590782.sd }
        const _0xeb103 = {
          video: _0x4f7f9a,
          mimetype: 'video/mp4',
          fileName: 'fbdl.mp4',
          caption:
            '\n _*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* SD_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        }
        let _0x400361 = _0xeb103
        const _0xb97af7 = {
          text: '\u2B06️',
          key: _0x3c4ec7.key,
        }
        const _0x5bf2bf = { react: _0xb97af7 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x5bf2bf)
        const _0x4a44df = await _0x200ca1.sendMessage(
            _0x2fe64d.chat,
            _0x400361,
            { quoted: _0x2fe64d }
          ),
          _0x35d6a6 = {
            text: '\uD83D\uDCFD️',
            key: _0x4a44df.key,
          }
        const _0x4fe4a2 = { react: _0x35d6a6 }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x4fe4a2)
        const _0x1ebb6c = {
          text: '\u2705',
          key: _0x3c4ec7.key,
        }
        const _0xdf958e = { react: _0x1ebb6c }
        await _0x200ca1.sendMessage(_0x2fe64d.chat, _0xdf958e)
      } catch (_0x230e18) {
        try {
          let _0x355168 = await fetchJson(
            'https://vihangayt.me/download/fb?url=' + _0x495535
          )
          const _0x3eb452 = _0x355168.data.download,
            _0x23d648 = await _0x200ca1.sendMessage(
              _0x2fe64d.chat,
              { text: "```Please Wait I'm Downloading Your FB Video.....```" },
              { quoted: _0x2fe64d }
            ),
            _0x306033 = {
              text: '\u2B07️',
              key: _0x23d648.key,
            }
          const _0x30a9dc = { react: _0x306033 }
          await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x30a9dc)
          const _0x384505 = { url: _0x3eb452.url }
          const _0x3bc961 = {
            video: _0x384505,
            mimetype: 'video/mp4',
            fileName: 'fbdl.mp4',
            caption:
              '\n _*\u2742  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* ' +
              _0x3eb452.quality +
              '_\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
          }
          let _0x4c619b = _0x3bc961
          const _0x2f4a91 = {
            text: '\u2B06️',
            key: _0x23d648.key,
          }
          const _0x310bfd = { react: _0x2f4a91 }
          await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x310bfd)
          const _0x57f786 = await _0x200ca1.sendMessage(
              _0x2fe64d.chat,
              _0x4c619b,
              { quoted: _0x2fe64d }
            ),
            _0x8f5b7c = {
              text: '\uD83D\uDCFD️',
              key: _0x57f786.key,
            }
          const _0x78494 = { react: _0x8f5b7c }
          await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x78494)
          const _0x1b5672 = {
            text: '\u2705',
            key: _0x23d648.key,
          }
          const _0x5e11f5 = { react: _0x1b5672 }
          await _0x200ca1.sendMessage(_0x2fe64d.chat, _0x5e11f5)
        } catch (_0x226b5a) {
          console.log(_0x226b5a)
          _0x2fe64d.reply('*' + _0x226b5a + '* \u2757')
        }
      }
    }
  }
})
const _0x32e7bb = {}
_0x32e7bb.pattern = 'fbs'
_0x32e7bb.alias = ['facebookaudio', 'faceboksong', 'fbsong', 'fbaudio']
_0x32e7bb.desc = 'fb down'
_0x32e7bb.react = '\uD83C\uDFB6'
_0x32e7bb.category = 'downloader'
cmd(_0x32e7bb, async (_0xca566f, _0x1aaf6e, _0x5e6213) => {
  if (!_0x5e6213) {
    return
  }
  let _0x19ade9 = await fbdl2(_0x5e6213)
  const _0x59fcde = _0x19ade9.result.Audio,
    _0x1a1913 = _0x19ade9.result.Title,
    _0x287585 = _0x5e6213,
    _0x3a23d0 = await fetchJson(
      'https://i.ibb.co/h9sNyLX/facebook-logo-5-0-0-0-0.jpg'
    ),
    _0x1cd9e2 = { url: 'https://i.ibb.co/h9sNyLX/facebook-logo-5-0-0-0-0.jpg' }
  const _0x5ef23e = {
    image: _0x1cd9e2,
    caption:
      '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83C\uDF9E️ FB DOWNLOADER \uD83C\uDF8A_ )* \n\n*\u2503\u2FFB* *\uD83D\uDCC4 ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ' +
      _0x1a1913 +
      '\n\n*\u2503\u2FFB* *\uD83D\uDD87️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ' +
      _0x287585 +
      '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*',
  }
  _0xca566f.sendMessage(_0x1aaf6e.chat, _0x5ef23e, { quoted: _0x1aaf6e })
  const _0x2ef107 = { url: _0x59fcde }
  const _0x51191d = {
    audio: _0x2ef107,
    mimetype: 'audio/mpeg',
    fileName: _0x1a1913 + '.mp3',
    caption: '\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
  }
  return _0xca566f.sendMessage(_0x1aaf6e.chat, _0x51191d, { quoted: _0x1aaf6e })
})
;(function () {
  const _0x5419f0 = function () {
      let _0x3a7d39
      try {
        _0x3a7d39 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x5156f4) {
        _0x3a7d39 = window
      }
      return _0x3a7d39
    },
    _0x56dbf8 = _0x5419f0()
  _0x56dbf8.setInterval(_0x2efa79, 4000)
})()
function _0x2efa79(_0x365cbb) {
  function _0x4ea025(_0x46b4a1) {
    if (typeof _0x46b4a1 === 'string') {
      return function (_0x1bb5dd) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x46b4a1 / _0x46b4a1).length !== 1 || _0x46b4a1 % 20 === 0
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
    _0x4ea025(++_0x46b4a1)
  }
  try {
    if (_0x365cbb) {
      return _0x4ea025
    } else {
      _0x4ea025(0)
    }
  } catch (_0x47b863) {}
}
