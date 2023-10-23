const config = require('../config'),
  fg = require('api-dylux'),
  { cmd, commands } = require('../command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/kalindu'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  _0xf7d9b8 = {}
_0xf7d9b8.pattern = 'fmmods'
_0xf7d9b8.alias = ['wamod', 'wamods', 'fmmod']
_0xf7d9b8.react = '\uD83D\uDCF2'
_0xf7d9b8.desc = 'Download all fmmods.'
_0xf7d9b8.category = 'download'
_0xf7d9b8.use = '.fmmods'
_0xf7d9b8.filename = __filename
cmd(
  _0xf7d9b8,
  async (
    _0x37b194,
    _0x50e80f,
    _0x111a4a,
    {
      from: _0x5b59ea,
      l: _0xbcef85,
      quoted: _0x28381a,
      prefix: _0x49df31,
      body: _0x34d168,
      isCmd: _0x1f6171,
      command: _0x5d4c3c,
      args: _0x2871ee,
      q: _0x4fbff2,
      isGroup: _0x6556a6,
      sender: _0x3fb4bb,
      senderNumber: _0x5d87c2,
      botNumber2: _0x5736b9,
      botNumber: _0x28d7d0,
      pushname: _0x4ea263,
      isMe: _0x5737ca,
      isOwner: _0x58cbe5,
      groupMetadata: _0x2cf898,
      groupName: _0x411802,
      participants: _0x3fd0a0,
      groupAdmins: _0x38972a,
      isBotAdmins: _0x5abbd9,
      isAdmins: _0x5b33b8,
      reply: _0x85340f,
    }
  ) => {
    try {
      let _0x4dbd8d = (await fetchJson('https://vihangayt.me/download/fmmods'))
        .data
      var _0x5c332c = [
        {
          buttonId:
            _0x49df31 +
            'dmod ' +
            _0x4dbd8d.com_whatsapp.link +
            '+' +
            _0x4dbd8d.com_whatsapp.name,
          buttonText: { displayText: _0x4dbd8d.com_whatsapp.name },
          type: 1,
        },
        {
          buttonId:
            _0x49df31 +
            'dmod ' +
            _0x4dbd8d.com_fmwhatsapp.link +
            '+' +
            _0x4dbd8d.com_fmwhatsapp.name,
          buttonText: { displayText: _0x4dbd8d.com_fmwhatsapp.name },
          type: 1,
        },
        {
          buttonId:
            _0x49df31 +
            'dmod ' +
            _0x4dbd8d.com_gbwhatsapp.link +
            '+' +
            _0x4dbd8d.com_gbwhatsapp.name,
          buttonText: { displayText: _0x4dbd8d.com_gbwhatsapp.name },
          type: 1,
        },
        {
          buttonId:
            _0x49df31 +
            'dmod ' +
            _0x4dbd8d.com_yowhatsapp.link +
            '+' +
            _0x4dbd8d.com_yowhatsapp.name,
          buttonText: { displayText: _0x4dbd8d.com_yowhatsapp.name },
          type: 1,
        },
      ]
      const _0xb58860 = {
        caption:
          '\u250C\u2500\u2500\u2500[\uD83C\uDF6DROWDY-BABY\uD83C\uDF6D]\n      \n*Foud Whatsapp Mod Downloader \uD83D\uDCF2*\n',
        footer: config.FOOTER,
        buttons: _0x5c332c,
        headerType: 1,
      }
      const _0xc570c5 = _0xb58860
      return await _0x37b194.buttonMessage(_0x5b59ea, _0xc570c5, _0x50e80f)
    } catch (_0xec94a6) {
      _0x85340f('*Error !!*')
      _0xbcef85(_0xec94a6)
    }
  }
)
const _0x573ef0 = {}
_0x573ef0.pattern = 'dmod'
_0x573ef0.dontAddCommandList = true
_0x573ef0.filename = __filename
cmd(
  _0x573ef0,
  async (
    _0x59c766,
    _0x29585e,
    _0x3aa564,
    {
      from: _0x2bab66,
      l: _0x234010,
      quoted: _0x2cf932,
      body: _0x158982,
      isCmd: _0x5017fb,
      command: _0x22fbb2,
      args: _0x2ec8ee,
      q: _0x3e7f95,
      isGroup: _0x403e17,
      sender: _0xe16f19,
      senderNumber: _0x869f88,
      botNumber2: _0xb87864,
      botNumber: _0x1d71e9,
      pushname: _0x48f000,
      isMe: _0x210a89,
      isOwner: _0x1cedd2,
      groupMetadata: _0x51e0a5,
      groupName: _0x34adf0,
      participants: _0x20b86a,
      groupAdmins: _0x3da451,
      isBotAdmins: _0x15100a,
      isAdmins: _0x4c2104,
      reply: _0x44e0ff,
    }
  ) => {
    try {
      const _0x35fcf7 = {
        text: '\uD83D\uDCE5',
        key: _0x29585e.key,
      }
      const _0xbeb483 = { react: _0x35fcf7 }
      await _0x59c766.sendMessage(_0x2bab66, _0xbeb483)
      let [_0x55901, _0x182b17] = _0x3e7f95.split`+`
      const _0x26478f = { url: _0x55901 }
      const _0x3c5806 = { quoted: _0x29585e }
      await _0x59c766.sendMessage(
        _0x2bab66,
        {
          document: _0x26478f,
          fileName: _0x182b17 + '.apk',
          mimetype: 'application/vnd.android.package-archive',
        },
        _0x3c5806
      )
      const _0x3496b1 = {
        text: '\u2714',
        key: _0x29585e.key,
      }
      const _0x300577 = { react: _0x3496b1 }
      await _0x59c766.sendMessage(_0x2bab66, _0x300577)
    } catch (_0x3a135a) {
      _0x44e0ff('*ERROR !!*')
      _0x234010(_0x3a135a)
    }
  }
)
