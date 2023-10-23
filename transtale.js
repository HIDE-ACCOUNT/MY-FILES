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
