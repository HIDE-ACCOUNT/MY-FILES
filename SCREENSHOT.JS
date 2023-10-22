const _0x150243 = {}
_0x150243.pattern = 'ss'
_0x150243.react = '\uD83C\uDF41'
_0x150243.desc = 'Website Screenshot. Decstop Size'
_0x150243.category = 'other'
_0x150243.use = '.ssweb link'
_0x150243.filename = __filename
cmd(
  _0x150243,
  async (
    _0x2bcdf0,
    _0x5dcbf3,
    _0x260d30,
    {
      from: _0x4a4ae0,
      l: _0x2826c6,
      quoted: _0x5dde27,
      body: _0x3a79f4,
      isCmd: _0x19b3fd,
      command: _0x13975f,
      args: _0x59c0b3,
      q: _0x300863,
      isGroup: _0x5ae5db,
      sender: _0x54ee66,
      senderNumber: _0x3023cb,
      botNumber2: _0x3d6513,
      botNumber: _0x86d330,
      pushname: _0x56eec2,
      isMe: _0x278c7d,
      isOwner: _0xe424af,
      groupMetadata: _0x531db7,
      groupName: _0x20996e,
      participants: _0x14ad81,
      groupAdmins: _0x55d1a3,
      isBotAdmins: _0x541b80,
      isAdmins: _0x24c257,
      reply: _0x47847b,
    }
  ) => {
    try {
      if (!_0x300863) {
        return _0x5dcbf3.reply('*Please give me Website url !!*')
      }
      const _0x29acf2 = await sswebA(_0x300863, false, 'desktop')
      let _0x89fadc = getRandom('') + '.jpg'
      fs.writeFileSync(_0x89fadc, _0x29acf2)
      const _0x317ad4 = { quoted: _0x5dcbf3 }
      await _0x2bcdf0.sendMessage(
        _0x4a4ae0,
        {
          image: fs.readFileSync(_0x89fadc),
          caption: global.CAPTION,
        },
        _0x317ad4
      )
    } catch (_0x45e572) {
      _0x47847b('*Error !!*')
      _0x2826c6(_0x45e572)
    }
  }
)
const _0xdef7a7 = {}
_0xdef7a7.pattern = 'sstab'
_0xdef7a7.react = '\uD83C\uDF41'
_0xdef7a7.desc = 'Website Screenshot. Tablet Size'
_0xdef7a7.category = 'other'
_0xdef7a7.use = '.ssweb link'
_0xdef7a7.filename = __filename
cmd(
  _0xdef7a7,
  async (
    _0x2df4aa,
    _0x2a3554,
    _0x5d133b,
    {
      from: _0x1c15c3,
      l: _0x395d2f,
      quoted: _0x28d83c,
      body: _0x117a05,
      isCmd: _0x109bb4,
      command: _0x3ee354,
      args: _0x1c5d52,
      q: _0x307b2c,
      isGroup: _0x3ea365,
      sender: _0x5b983a,
      senderNumber: _0x165350,
      botNumber2: _0x494401,
      botNumber: _0x5b1410,
      pushname: _0x120e33,
      isMe: _0x31efe3,
      isOwner: _0x28ee26,
      groupMetadata: _0x46328a,
      groupName: _0x47882e,
      participants: _0x3cfe75,
      groupAdmins: _0x4d2909,
      isBotAdmins: _0x51337a,
      isAdmins: _0x170823,
      reply: _0x54acf8,
    }
  ) => {
    try {
      if (!_0x307b2c) {
        return _0x2a3554.reply('*Please give me Website url !!*')
      }
      const _0x3684af = await sswebA(_0x307b2c, false, 'tablet')
      let _0x588bda = getRandom('') + '.jpg'
      fs.writeFileSync(_0x588bda, _0x3684af)
      const _0x484683 = { quoted: _0x2a3554 }
      await _0x2df4aa.sendMessage(
        _0x1c15c3,
        {
          image: fs.readFileSync(_0x588bda),
          caption: '',
        },
        _0x484683
      )
    } catch (_0x47e3e9) {
      _0x54acf8('*Error !!*')
      _0x395d2f(_0x47e3e9)
    }
  }
)
const _0x59b3ff = {}
_0x59b3ff.pattern = 'ssphone'
_0x59b3ff.react = '\uD83C\uDF41'
_0x59b3ff.desc = 'Website Screenshot. Phone Size'
_0x59b3ff.category = 'other'
_0x59b3ff.use = '.ssweb link'
_0x59b3ff.filename = __filename
cmd(
  _0x59b3ff,
  async (
    _0x34c066,
    _0xcdc6d2,
    _0x1a1f5d,
    {
      from: _0x5a1615,
      l: _0x5d0ea0,
      quoted: _0x5c83c5,
      body: _0x3d22ae,
      isCmd: _0x4a9a9e,
      command: _0x3eff02,
      args: _0x31b7ec,
      q: _0x564e18,
      isGroup: _0x53685a,
      sender: _0x42a5ce,
      senderNumber: _0x2ac883,
      botNumber2: _0x29b439,
      botNumber: _0x3ec027,
      pushname: _0x2af952,
      isMe: _0x1425a5,
      isOwner: _0x28cac7,
      groupMetadata: _0x4e46c7,
      groupName: _0x54ce2d,
      participants: _0xd7ee1,
      groupAdmins: _0x2c44a,
      isBotAdmins: _0x2a8603,
      isAdmins: _0xc421eb,
      reply: _0x34bc76,
    }
  ) => {
    try {
      if (!_0x564e18) {
        return _0xcdc6d2.reply('*Please give me Website url !!*')
      }
      const _0x5afe10 = await sswebA(_0x564e18, false, 'phone')
      let _0x5dd25e = getRandom('') + '.jpg'
      fs.writeFileSync(_0x5dd25e, _0x5afe10)
      const _0x35a3ca = { quoted: _0xcdc6d2 }
      await _0x34c066.sendMessage(
        _0x5a1615,
        {
          image: fs.readFileSync(_0x5dd25e),
          caption:
            '\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84  \xA9 2023',
        },
        _0x35a3ca
      )
    } catch (_0x2d211f) {
      _0x34bc76('*Error !!*')
      _0x5d0ea0(_0x2d211f)
    }
  }
)
