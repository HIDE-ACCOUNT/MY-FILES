const _0x125d7d = (function () {
  let _0x53c311 = true
  return function (_0x416797, _0xb79b1e) {
    const _0x5458d1 = _0x53c311
      ? function () {
          if (_0xb79b1e) {
            const _0x456b54 = _0xb79b1e.apply(_0x416797, arguments)
            return (_0xb79b1e = null), _0x456b54
          }
        }
      : function () {}
    return (_0x53c311 = false), _0x5458d1
  }
})()
;(function () {
  _0x125d7d(this, function () {
    const _0x16de9c = new RegExp('function *\\( *\\)')
    const _0x2f5ea9 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x20232d = _0x57884c('init')
    !_0x16de9c.test(_0x20232d + 'chain') || !_0x2f5ea9.test(_0x20232d + 'input')
      ? _0x20232d('0')
      : _0x57884c()
  })()
})()
const config = require('../config'),
  { cmd, commands } = require('../lib/command'),
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
  } = require('../lib/functions')
let gis = require('g-i-s')
const axios = require('axios'),
  { ChatGpt } = require('chatgpt-scraper'),
  { subsearch, subdl } = require('@sl-code-lords/si-subdl')
var pkg = require('../package.json')
;(pkg.author != 'Janith sadanuwan' || pkg.name != 'ROWDY-BABY-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
const openai = require('@sl-code-lords/openai-chatgpt')
var N_FOUND = ''
global.LANG === 'SI'
  ? (N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*')
  : (N_FOUND = "*I couldn't find anything :(*")
const _0x4cc7e1 = {}
_0x4cc7e1.pattern = 'movie'
_0x4cc7e1.alias = ['imdb']
_0x4cc7e1.use = '.movie spider man'
_0x4cc7e1.react = '\uD83D\uDD0E'
_0x4cc7e1.desc = 'Sends details of asked Movie/Series.'
_0x4cc7e1.category = 'search'
_0x4cc7e1.filename = __filename
cmd(
  _0x4cc7e1,
  async (
    _0x30b4a8,
    _0x301344,
    _0x594cca,
    {
      from: _0x3ba3e7,
      l: _0xdb6a09,
      quoted: _0x31edd1,
      body: _0x30963e,
      isCmd: _0x3fadeb,
      command: _0x2c744e,
      args: _0x6a8a1f,
      q: _0x2d9c83,
      isGroup: _0x477805,
      sender: _0x4ca26e,
      senderNumber: _0x43d2d3,
      botNumber2: _0x64169c,
      botNumber: _0x28713f,
      pushname: _0x239990,
      isMe: _0x3f5bdf,
      isOwner: _0x6db0cb,
      groupMetadata: _0x436c22,
      groupName: _0x160b86,
      participants: _0x17efce,
      groupAdmins: _0x3637ed,
      isBotAdmins: _0xdcadc5,
      isAdmins: _0x4a86cb,
      reply: _0x582cf5,
    }
  ) => {
    if (!_0x2d9c83) {
      return _0x301344.reply('_Name a Series or movie ')
    }
    let _0x193581 = await axios.get(
      'http://www.omdbapi.com/?apikey=742b2d09&t=' + _0x2d9c83 + '&plot=full'
    )
    let _0x39855c = ''
    console.log(_0x193581.data)
    _0x39855c +=
      '*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n*\uD83D\uDD0E ROWDY BABY Search Engine* \n\uD83D\uDEF0️ *Engine : Movie SAERCH*\n*\uD83D\uDCE1 Based site : IMDB* \n*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n'
    _0x39855c +=
      '\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268D\n ``` \uD835\uDD40\uD835\uDD44\uD835\uDD3B\uD835\uDD39 \uD835\uDD4A\uD835\uDD3C\uD835\uDD38ℝℂℍ```\n\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\n'
    _0x39855c += '\uD83C\uDFACTitle      : ' + _0x193581.data.Title + '\n'
    _0x39855c += '\uD83D\uDCC5Year       : ' + _0x193581.data.Year + '\n'
    _0x39855c += '\u2B50Rated      : ' + _0x193581.data.Rated + '\n'
    _0x39855c += '\uD83D\uDCC6Released   : ' + _0x193581.data.Released + '\n'
    _0x39855c += '\u23F3Runtime    : ' + _0x193581.data.Runtime + '\n'
    _0x39855c += '\uD83C\uDF00Genre      : ' + _0x193581.data.Genre + '\n'
    _0x39855c +=
      '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBBDirector   : ' +
      _0x193581.data.Director +
      '\n'
    _0x39855c += '\u270DWriter     : ' + _0x193581.data.Writer + '\n'
    _0x39855c += '\uD83D\uDC68Actors     : ' + _0x193581.data.Actors + '\n'
    _0x39855c += '\uD83D\uDCC3Plot       : ' + _0x193581.data.Plot + '\n'
    _0x39855c += '\uD83C\uDF10Language   : ' + _0x193581.data.Language + '\n'
    _0x39855c += '\uD83C\uDF0DCountry    : ' + _0x193581.data.Country + '\n'
    _0x39855c += '\uD83C\uDF96️Awards     : ' + _0x193581.data.Awards + '\n'
    _0x39855c += '\uD83D\uDCE6BoxOffice  : ' + _0x193581.data.BoxOffice + '\n'
    _0x39855c += '\uD83C\uDFD9️Production : ' + _0x193581.data.Production + '\n'
    _0x39855c += '\uD83C\uDF1FimdbRating : ' + _0x193581.data.imdbRating + '\n'
    _0x39855c += '\u274EimdbVotes  : ' + _0x193581.data.imdbVotes + ''
    const _0x5b03af = { url: _0x193581.data.Poster }
    const _0x3128e9 = {
      image: _0x5b03af,
      caption: _0x39855c,
    }
    const _0x100a9a = { quoted: _0x301344 }
    _0x30b4a8.sendMessage(_0x3ba3e7, _0x3128e9, _0x100a9a)
  }
)
const _0x483170 = {}
_0x483170.pattern = 'npm'
_0x483170.react = '\uD83D\uDD0E'
_0x483170.desc = 'Search Packages In Npm'
_0x483170.category = 'search'
_0x483170.use = '.npm <package name>'
_0x483170.filename = __filename
cmd(_0x483170, async (_0x4955ba, _0x25c062, _0x47ce58) => {
  if (!_0x47ce58) {
    return _0x25c062.reply('Please give me package name.\uD83D\uDCE6')
  }
  axios
    .get('https://api.npms.io/v2/search?q=' + _0x47ce58)
    .then(({ data: _0x4b09cd }) => {
      let _0x4e10fa = _0x4b09cd.results
        .map(
          ({ package: _0x234f37 }) =>
            '*' +
            _0x234f37.name +
            '* (v' +
            _0x234f37.version +
            ')\n_' +
            _0x234f37.links.npm +
            '_\n_' +
            _0x234f37.description +
            '_'
        )
        .join('\n\n')
      _0x25c062.reply(_0x4e10fa)
    })
    .catch((_0x1df5e6) => console.log(_0x1df5e6))
})
const _0x50dd0d = {}
_0x50dd0d.pattern = 'gpt'
_0x50dd0d.react = '\uD83D\uDD0E'
_0x50dd0d.alias = ['chat', 'ai', 'chatgpt']
_0x50dd0d.desc = 'Search and get details from chatgpt.'
_0x50dd0d.category = 'search'
_0x50dd0d.use = '.gpt What is Ai'
_0x50dd0d.filename = __filename
cmd(
  _0x50dd0d,
  async (
    _0x13740d,
    _0x33f7f8,
    _0x5c720,
    {
      from: _0x3f713d,
      l: _0x3e8766,
      quoted: _0x54ac74,
      body: _0x53bcca,
      isCmd: _0xc3cf5c,
      command: _0x19a97a,
      args: _0x45662b,
      q: _0x18348b,
      isGroup: _0x8ae1bb,
      sender: _0x159460,
      senderNumber: _0x19ff40,
      botNumber2: _0x4b52bb,
      botNumber: _0x33364f,
      pushname: _0x4d1c98,
      isMe: _0x324aa4,
      isOwner: _0x2c41ac,
      groupMetadata: _0x33d950,
      groupName: _0x2901d8,
      participants: _0x3df6c0,
      groupAdmins: _0xd95012,
      isBotAdmins: _0x404f5e,
      isAdmins: _0x35dfda,
      reply: _0x1aa21e,
    }
  ) => {
    try {
      if (!_0x18348b) {
        return _0x1aa21e('Please give me words to search')
      }
      const _0x53a1b6 = await fetchJson(
          'https://vihangayt.me/tools/chatgpt?q=' + _0x18348b
        ),
        _0x389600 = {
          url: 'https://www.noticiasradioreflejos.com.ar/2021/wp-content/uploads/2023/05/inteligenciaaritificial.png',
        }
      const _0x14712b = {
        image: _0x389600,
        caption:
          'MADE BY KALINDU :\n' +
          _0x53a1b6.data +
          '\n\n*ROWDY-BABY-MD*',
      }
      const _0x18e43b = { quoted: _0x33f7f8 }
      await _0x13740d.sendMessage(_0x3f713d, _0x14712b, _0x18e43b)
      await _0x1aa21e(res)
    } catch (_0x27b63f) {
      console.log(_0x27b63f)
    }
  }
)
const _0x714561 = {}
_0x714561.pattern = 'bard'
_0x714561.react = '\uD83D\uDD0E'
_0x714561.alias = ['bard', 'ai2']
_0x714561.desc = 'Search and get details from Google Bard.'
_0x714561.category = 'search'
_0x714561.use = '.gpt What is Ai'
_0x714561.filename = __filename
cmd(
  _0x714561,
  async (
    _0x39a7c8,
    _0x586e51,
    _0x2b4c70,
    {
      from: _0xb1e36d,
      l: _0x4dd9cc,
      quoted: _0x2f1c54,
      body: _0x626bd7,
      isCmd: _0x2a9d27,
      command: _0x5be7de,
      args: _0x587b24,
      q: _0x50e6a3,
      isGroup: _0x1a5607,
      sender: _0x74728d,
      senderNumber: _0x58fee3,
      botNumber2: _0x23cde2,
      botNumber: _0x3a2fd3,
      pushname: _0x58e5b4,
      isMe: _0x14f699,
      isOwner: _0x1df74f,
      groupMetadata: _0xd1ed76,
      groupName: _0x75741d,
      participants: _0x328e72,
      groupAdmins: _0xe592e3,
      isBotAdmins: _0x3c6ea2,
      isAdmins: _0x534698,
      reply: _0x3e8764,
    }
  ) => {
    try {
      const _0x5df58a = await fetchJson('')
    } catch (_0x5be2fc) {
      console.log(_0x5be2fc)
    }
  }
)
const _0x981ad1 = {}
_0x981ad1.pattern = 'google'
_0x981ad1.react = '\uD83D\uDD0E'
_0x981ad1.desc = 'Search and get details from google.'
_0x981ad1.category = 'search'
_0x981ad1.use = '.google What is Ai'
_0x981ad1.filename = __filename
cmd(
  _0x981ad1,
  async (
    _0x66afd3,
    _0x221ed8,
    _0x1cafa0,
    {
      from: _0x597526,
      l: _0x4e98ca,
      quoted: _0x3beb69,
      body: _0x4f0b62,
      isCmd: _0x1a2d39,
      command: _0x526f74,
      args: _0x1bf812,
      q: _0x2ec560,
      isGroup: _0x5cc543,
      sender: _0x2c1cf6,
      senderNumber: _0x28513a,
      botNumber2: _0x2b2ffd,
      botNumber: _0x5e9c1e,
      pushname: _0x3fa735,
      isMe: _0x1af47a,
      isOwner: _0x4b8cae,
      groupMetadata: _0x597c0d,
      groupName: _0x41108c,
      participants: _0x5823a9,
      groupAdmins: _0x9c3f,
      isBotAdmins: _0x4eaed1,
      isAdmins: _0x3acc26,
      reply: _0x29ebdd,
    }
  ) => {
    try {
      let _0x495e36 = require('google-it')
      const _0x444288 = { query: _0x2ec560 }
      _0x495e36(_0x444288).then((_0x2f1905) => {
        let _0x4beefb =
            '*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n*\uD83D\uDD0E ROWDY-BABY Search Engine*\n*\uD83D\uDEF0️ Engine : GOOGLE SAERCH*\n*\uD83D\uDCE1 Based site : Google *\n*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n\nGoogle Search From : *' +
            _0x2ec560 +
            '*\n\n',
          _0x4bb83a = 1
        for (let _0x4bee65 of _0x2f1905) {
          _0x4beefb +=
            '\uD83D\uDCD1No : ' +
            _0x4bb83a++ +
            '\n*\uD83D\uDCDAtitle :* ' +
            _0x4bee65.title +
            '\n*\uD83D\uDCAC Desc : ' +
            _0x4bee65.snippet +
            '*\n*\uD83D\uDD87️ url :* ' +
            _0x4bee65.link +
            '\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
        }
        _0x4beefb += '*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
        _0x221ed8.reply(_0x4beefb)
      })
    } catch (_0x3072ed) {}
  }
)
const _0x53dfab = {}
_0x53dfab.pattern = 'lyrics2'
_0x53dfab.react = '\uD83D\uDD0E'
_0x53dfab.desc = 'Search and get lyrics of song.'
_0x53dfab.category = 'search'
_0x53dfab.use = '.lyrics <song name >'
_0x53dfab.filename = __filename
cmd(
  _0x53dfab,
  async (
    _0x25c45d,
    _0x4e28cb,
    _0x19c8fb,
    {
      from: _0x44e373,
      l: _0x18699f,
      quoted: _0x1dc8b5,
      body: _0x8ef299,
      isCmd: _0x37bd45,
      command: _0x35fff1,
      args: _0x12ca06,
      q: _0x409f0a,
      isGroup: _0xd0be8d,
      sender: _0x4b4bdb,
      senderNumber: _0x7f8c3c,
      botNumber2: _0x1a7e88,
      botNumber: _0x16512e,
      pushname: _0x589402,
      isMe: _0x990649,
      isOwner: _0x2079a3,
      groupMetadata: _0x2c27ae,
      groupName: _0x2031f3,
      participants: _0x2842ba,
      groupAdmins: _0x4a38e8,
      isBotAdmins: _0x235f38,
      isAdmins: _0x6cd38d,
      reply: _0x4bf6f7,
    }
  ) => {
    try {
      if (!_0x409f0a) {
        throw 'Song name?'
      }
      const _0x3b0c25 = require('@jeve/lyrics-finder'),
        _0x2e7608 = await _0x3b0c25(_0x409f0a)
      if (_0x2e7608.lyrics == '') {
        return console.log("it's f up")
      }
      var _0x29414c =
        '\n        *\uD83D\uDDF3️ Title :* ' +
        _0x2e7608.title +
        '\n        *\uD83C\uDF97️Tittle :* ' +
        _0x2e7608.artist +
        '\n        *\uD83D\uDCDDLyrics :* \n\n        ' +
        _0x2e7608.lyrics
      console.log(_0x2e7608)
      const _0x3a4d85 = { text: _0x29414c }
      const _0x4a841d = { quoted: _0x4e28cb }
      await _0x25c45d.sendMessage(_0x44e373, _0x3a4d85, _0x4a841d)
    } catch (_0x2cf2e0) {
      console.log(_0x2cf2e0)
    }
  }
)
const _0x248cd1 = {}
_0x248cd1.pattern = 'lyrics'
_0x248cd1.react = '\uD83D\uDD0E'
_0x248cd1.desc = 'Search and get lyrics of song.'
_0x248cd1.category = 'search'
_0x248cd1.use = '.lyrics <song name >'
_0x248cd1.filename = __filename
cmd(
  _0x248cd1,
  async (
    _0x4b11f8,
    _0x43890a,
    _0x3e8cfb,
    {
      from: _0x1c89dd,
      l: _0x2edc15,
      quoted: _0x196248,
      body: _0x593f6a,
      isCmd: _0x5c088c,
      command: _0x1e88df,
      args: _0x201518,
      q: _0x18f087,
      isGroup: _0x405ac0,
      sender: _0x213889,
      senderNumber: _0x443928,
      botNumber2: _0xa6e58b,
      botNumber: _0x50a15f,
      pushname: _0x592e91,
      isMe: _0x3b2ece,
      isOwner: _0x196d28,
      groupMetadata: _0x1d231b,
      groupName: _0x3cb5ae,
      participants: _0x25291d,
      groupAdmins: _0x187fe8,
      isBotAdmins: _0xf35530,
      isAdmins: _0x4da9c5,
      reply: _0x117154,
    }
  ) => {
    try {
      if (!_0x18f087) {
        throw 'Song name?'
      }
      const _0x280239 = await fetchJson(
          'https://api.sdbots.tech/lyrics?song=' + _0x18f087
        ),
        _0xbf8883 =
          '\n     \uD83D\uDDF3️ Title : *' +
          _0x280239.title +
          '*\n     \uD83C\uDF97️Tittle : *' +
          _0x280239.artist +
          '*\n     \uD83D\uDCDDLyrics : *' +
          _0x280239.lyrics +
          '*\n          ',
        _0x242075 = { text: _0xbf8883 }
      _0x4b11f8.sendMessage(_0x43890a.chat, _0x242075, { quoted: _0x43890a })
    } catch (_0x35dae6) {
      console.log(_0x35dae6)
    }
  }
)
const _0x28bf99 = {}
_0x28bf99.pattern = 'weather'
_0x28bf99.react = '\uD83D\uDD0E'
_0x28bf99.desc = 'Sends weather info about asked place.'
_0x28bf99.category = 'search'
_0x28bf99.use = '.weather <location>'
_0x28bf99.filename = __filename
cmd(
  _0x28bf99,
  async (
    _0x59a8fd,
    _0x5eafb3,
    _0x4774a0,
    {
      from: _0x4bfb72,
      l: _0x362b0a,
      quoted: _0x42783b,
      body: _0x256f3f,
      isCmd: _0x43f517,
      command: _0x13bd41,
      args: _0x1968ab,
      q: _0x3a38e5,
      isGroup: _0x129f24,
      sender: _0x27aa81,
      senderNumber: _0x3e5f14,
      botNumber2: _0x1d800f,
      botNumber: _0x134e0e,
      pushname: _0x1f3e3f,
      isMe: _0x415244,
      isOwner: _0x117168,
      groupMetadata: _0x4d4982,
      groupName: _0x52d787,
      participants: _0x2ed85a,
      groupAdmins: _0x29fc32,
      isBotAdmins: _0x2585eb,
      isAdmins: _0x216f8f,
      reply: _0x2d8604,
    }
  ) => {
    try {
      if (!_0x3a38e5) {
        throw 'Gove Me A location..'
      }
      let _0x32e69d = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            _0x3a38e5 +
            '&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en'
        ),
        _0xe60e53 = ''
      _0xe60e53 += '*\uD83C\uDF1FWeather of  ' + _0x3a38e5 + '*\n\n'
      _0xe60e53 += '*Weather:-* ' + _0x32e69d.data.weather[0].main + '\n'
      _0xe60e53 +=
        '*Description:-* ' + _0x32e69d.data.weather[0].description + '\n'
      _0xe60e53 += '*Avg Temp:-* ' + _0x32e69d.data.main.temp + '\n'
      _0xe60e53 += '*Feels Like:-* ' + _0x32e69d.data.main.feels_like + '\n'
      _0xe60e53 += '*Pressure:-* ' + _0x32e69d.data.main.pressure + '\n'
      _0xe60e53 += '*Humidity:-* ' + _0x32e69d.data.main.humidity + '\n'
      _0xe60e53 += '*Humidity:-* ' + _0x32e69d.data.wind.speed + '\n'
      _0xe60e53 += '*Latitude:-* ' + _0x32e69d.data.coord.lat + '\n'
      _0xe60e53 += '*Longitude:-* ' + _0x32e69d.data.coord.lon + '\n'
      _0xe60e53 += '*Country:-* ' + _0x32e69d.data.sys.country + '\n'
      const _0x587b70 = { text: _0xe60e53 }
      _0x59a8fd.sendMessage(_0x5eafb3.chat, _0x587b70, { quoted: _0x5eafb3 })
    } catch (_0x41d9cd) {
      console.log(_0x41d9cd)
    }
  }
)
const _0x298294 = {}
_0x298294.pattern = 'wiki'
_0x298294.react = '\uD83D\uDD0E'
_0x298294.desc = 'Search and get details from wikipeadia.'
_0x298294.category = 'search'
_0x298294.use = '.wiki What is Ai'
_0x298294.filename = __filename
cmd(
  _0x298294,
  async (
    _0x40f222,
    _0x58d020,
    _0x468e5c,
    {
      from: _0x373197,
      l: _0x28e3b2,
      quoted: _0x49717f,
      body: _0x25a63b,
      isCmd: _0x39c928,
      command: _0x30eba0,
      args: _0x1a5b0,
      q: _0x169ec7,
      isGroup: _0x58bd8b,
      sender: _0x4f79ff,
      senderNumber: _0x2af50a,
      botNumber2: _0x5a94a8,
      botNumber: _0x27019e,
      pushname: _0x3d4fdb,
      isMe: _0x32d448,
      isOwner: _0x4ad591,
      groupMetadata: _0x420f16,
      groupName: _0xbbd8c5,
      participants: _0x25a6ae,
      groupAdmins: _0x3f7b1e,
      isBotAdmins: _0x2c2915,
      isAdmins: _0x50efef,
      reply: _0x48eb8c,
    }
  ) => {
    try {
      if (!_0x169ec7) {
        return _0x48eb8c('Please give me words to search')
      }
      const _0xb24439 = await fetchJson(
          'https://api.botcahx.live/api/search/wikipedia?text=' +
            _0x169ec7 +
            '&apikey=janithsadanuwan'
        ),
        _0x3444a4 = { url: _0xb24439.thumb }
      const _0x509270 = {
        image: _0x3444a4,
        caption:
          'MADE BY KALINDU :\n' +
          _0xb24439.isi +
          '\n\n*ROWDY-BABY-MD*',
      }
      const _0x4036e7 = { quoted: _0x58d020 }
      await _0x40f222.sendMessage(_0x373197, _0x509270, _0x4036e7)
    } catch (_0x4cd7d5) {
      console.log(_0x4cd7d5)
    }
  }
)
const _0x1a37a8 = {}
_0x1a37a8.pattern = 'img'
_0x1a37a8.react = '\uD83D\uDDBC️'
_0x1a37a8.desc = 'Search image'
_0x1a37a8.category = 'search'
_0x1a37a8.filename = __filename
cmd(
  _0x1a37a8,
  async (
    _0x3729ae,
    _0x3f1e62,
    _0x54beee,
    {
      from: _0x61ea53,
      l: _0x5c85c0,
      quoted: _0x57b92b,
      body: _0x438ccc,
      isCmd: _0x10e697,
      command: _0x4ac3d9,
      args: _0x1a5245,
      q: _0x2cbf2c,
      isGroup: _0x10969a,
      sender: _0x41fb93,
      senderNumber: _0x437298,
      botNumber2: _0x1b6228,
      botNumber: _0x12d6d1,
      pushname: _0x241f7a,
      isMe: _0x5c5c10,
      isOwner: _0x27416f,
      groupMetadata: _0x34d9b6,
      groupName: _0x30f80c,
      participants: _0x77cdd2,
      groupAdmins: _0x4da935,
      isBotAdmins: _0x2d5f55,
      isAdmins: _0x181305,
      reply: _0x4cd6fd,
    }
  ) => {
    try {
      if (!_0x2cbf2c) {
        return _0x4cd6fd('*Please give me name*')
      }
      const _0xdf9870 = await fetchJson(
        'https://api.akuari.my.id/search/googleimage?query=' + _0x2cbf2c
      )
      if (_0xdf9870.result[1]) {
        const _0x74f120 = { url: _0xdf9870.result[0] }
        const _0x2c6cc6 = {
          image: _0x74f120,
          caption: global.CAPTION,
        }
        const _0x4a2297 = { quoted: _0x3f1e62 }
        await _0x3729ae.sendMessage(_0x61ea53, _0x2c6cc6, _0x4a2297)
        const _0x474725 = { url: _0xdf9870.result[1] }
        const _0x21874f = {
          image: _0x474725,
          caption: global.CAPTION,
        }
        const _0x527080 = { quoted: _0x3f1e62 }
        await _0x3729ae.sendMessage(_0x61ea53, _0x21874f, _0x527080)
        const _0x2b145d = { url: _0xdf9870.result[3] }
        const _0x83c3d3 = {
          image: _0x2b145d,
          caption: global.CAPTION,
        }
        const _0x45631b = { quoted: _0x3f1e62 }
        await _0x3729ae.sendMessage(_0x61ea53, _0x83c3d3, _0x45631b)
        const _0x3965b0 = { url: _0xdf9870.result[4] }
        const _0x3d1a87 = {
          image: _0x3965b0,
          caption: global.CAPTION,
        }
        const _0x33f956 = { quoted: _0x3f1e62 }
        await _0x3729ae.sendMessage(_0x61ea53, _0x3d1a87, _0x33f956)
        const _0x5306cf = { url: _0xdf9870.result[5] }
        const _0x5afeb9 = {
          image: _0x5306cf,
          caption: global.CAPTION,
        }
        const _0x67db3e = { quoted: _0x3f1e62 }
        await _0x3729ae.sendMessage(_0x61ea53, _0x5afeb9, _0x67db3e)
      }
    } catch (_0x4fcf0f) {
      console.log(_0x4fcf0f)
    }
  }
)
const _0x51d656 = {}
_0x51d656.pattern = 'github'
_0x51d656.react = '\uD83D\uDD0E'
_0x51d656.desc = 'Search github account details'
_0x51d656.category = 'search'
_0x51d656.filename = __filename
cmd(
  _0x51d656,
  async (
    _0x28cab0,
    _0x278311,
    _0x407766,
    {
      from: _0x565ad2,
      l: _0x4a2c0d,
      quoted: _0x6a18ec,
      body: _0x4c6b64,
      isCmd: _0x3436c9,
      command: _0x261304,
      args: _0x5b0990,
      q: _0x5f2916,
      isGroup: _0x5319a2,
      sender: _0x45f36c,
      senderNumber: _0x16cae5,
      botNumber2: _0x1936f9,
      botNumber: _0x1ddfc2,
      pushname: _0x4ce207,
      isMe: _0x38b52a,
      isOwner: _0xced8d3,
      groupMetadata: _0x2d313a,
      groupName: _0xf4b0ea,
      participants: _0x579df0,
      groupAdmins: _0x51e74b,
      isBotAdmins: _0x49aa47,
      isAdmins: _0x235f67,
      reply: _0xc4321d,
    }
  ) => {
    try {
      if (!_0x5f2916) {
        return _0xc4321d('*Please give me Your Account name*')
      }
      const _0x53b1c2 = await fetchJson(
          'https://api.github.com/users/' + _0x5f2916
        ),
        _0x109811 =
          '*ROWDY-BABY User Informations \uD83D\uDCD1*\n\n\uD83E\uDE80.Account Name - ' +
          _0x53b1c2.name +
          '\n\n\uD83D\uDCC3.Created Date - ' +
          _0x53b1c2.created_at +
          '\n\n\u2692️.Updated Date - ' +
          _0x53b1c2.updated_at +
          '\n\n\uD83D\uDD87️.Url - ' +
          _0x53b1c2.html_url +
          '\n\n\uD83D\uDD11.Username - ' +
          _0x53b1c2.login +
          '\n\n\uD83C\uDFF5️.Bio - ' +
          _0x53b1c2.bio +
          '\n\n\uD83D\uDC7E.Followers - ' +
          _0x53b1c2.followers +
          '\n\n\uD83C\uDF3A.Following - ' +
          _0x53b1c2.following +
          '\n\n\uD83D\uDEA7.UserID - ' +
          _0x53b1c2.id +
          '\n\n\uD83D\uDEF4.Public Repose - ' +
          _0x53b1c2.public_repos +
          '\n\n*ROWDY-BABY-MD*',
        _0x22d9e7 = { url: _0x53b1c2.avatar_url }
      const _0x1f28f6 = {
        image: _0x22d9e7,
        caption: _0x109811,
      }
      const _0x43fcda = { quoted: _0x278311 }
      await _0x28cab0.sendMessage(_0x565ad2, _0x1f28f6, _0x43fcda)
    } catch (_0x1d199e) {
      console.log(_0x1d199e)
    }
  }
)

const _0x5c004a = {}
_0x5c004a.pattern = 'mod'
_0x5c004a.react = '\uD83D\uDD0E'
_0x5c004a.desc = 'Search Mod Aps In Happy Mod '
_0x5c004a.category = 'search'
_0x5c004a.use = '.mod whatsapp'
_0x5c004a.filename = __filename
cmd(
  _0x5c004a,
  async (
    _0x164db9,
    _0x1d5716,
    _0x1fbd5e,
    {
      from: _0x3dd01b,
      l: _0x49118f,
      quoted: _0x49fb19,
      body: _0x5696bc,
      isCmd: _0x3c20c1,
      command: _0x5d306b,
      args: _0x17837f,
      q: _0x39a8eb,
      isGroup: _0x5bc8c2,
      sender: _0x3f2d82,
      senderNumber: _0x26e60b,
      botNumber2: _0x3320c3,
      botNumber: _0x55d9ee,
      pushname: _0xb30b9,
      isMe: _0x38b69c,
      isOwner: _0x64952a,
      groupMetadata: _0x14056e,
      groupName: _0x2e0f35,
      participants: _0x26eeb3,
      groupAdmins: _0x44a7ee,
      isBotAdmins: _0x3c5d17,
      isAdmins: _0x5a7f86,
      reply: _0x3e63ea,
    }
  ) => {
    try {
      if (!_0x39a8eb) {
        return _0x3e63ea('Please give me words to search')
      }
      const _0x902cf4 = await fetchJson(
        'https://api.akuari.my.id/search/happymod?query=' + _0x39a8eb
      )
      let _0x18c3c6 =
          '*\uD835\uDE7C\uD835\uDE7E\uD835\uDE73 \uD835\uDE70\uD835\uDE7F\uD835\uDE7A \uD835\uDE82\uD835\uDE74\uD835\uDE70\uD835\uDE81\uD835\uDE72\uD835\uDE77*\n\n',
        _0x4bc11c = 1
      const _0x4fe59f = _0x902cf4.result
      for (let _0x7b4669 of _0x4fe59f) {
        _0x18c3c6 +=
          '\uD83D\uDCD1No : ' +
          _0x4bc11c++ +
          '\n*\uD83D\uDCDAtitle :* ' +
          _0x7b4669.title +
          '\n*\uD83D\uDD87️ url :* ' +
          _0x7b4669.link +
          '\n*\u2B50 Raiting:* ' +
          _0x7b4669.rating +
          '\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
      }
      _0x18c3c6 += '*ROWDY-BABY-MD*'
      const _0x16ee99 = {
        url: 'https://telegra.ph/file/80adc1c57d8e1d7209809.jpg',
      }
      const _0x599d49 = {
        image: _0x16ee99,
        caption: _0x18c3c6,
      }
      const _0x59dff9 = { quoted: _0x1d5716 }
      _0x164db9.sendMessage(_0x3dd01b, _0x599d49, _0x59dff9)
    } catch (_0x39d85c) {
      console.log(_0x39d85c)
    }
  }
)
const _0x409b3f = {}
_0x409b3f.pattern = 'stickers'
_0x409b3f.react = '\uD83D\uDD0E'
_0x409b3f.desc = 'Search and get stickers'
_0x409b3f.category = 'search'
_0x409b3f.use = '.stickers love'
_0x409b3f.filename = __filename
cmd(
  _0x409b3f,
  async (
    _0x91d9be,
    _0x525659,
    _0x2e3cc3,
    {
      from: _0x5e5ebb,
      l: _0x104d6f,
      quoted: _0x352e92,
      body: _0x47123a,
      isCmd: _0x4362b8,
      command: _0x2efe6e,
      args: _0x5ab259,
      q: _0x1085a0,
      isGroup: _0x6990a8,
      sender: _0x17274d,
      senderNumber: _0x430329,
      botNumber2: _0x452ef1,
      botNumber: _0x5457b1,
      pushname: _0x392a48,
      isMe: _0x1833cf,
      isOwner: _0x1e0d2c,
      groupMetadata: _0x2ce725,
      groupName: _0x197ab4,
      participants: _0x49e52e,
      groupAdmins: _0x4d94c3,
      isBotAdmins: _0xd354a1,
      isAdmins: _0x430883,
      reply: _0x993bb1,
    }
  ) => {
    try {
      const _0x4dfb37 = await fetchJson(
        'https://api.botcahx.live/api/search/sticker?text1=' +
          _0x1085a0 +
          '&apikey=janithsadanuwan'
      )
      if (_0x4dfb37.result[1]) {
        const _0xcd4cd9 = { url: _0x4dfb37.result.sticker_url[0] }
        const _0x2bf4f3 = { sticker: _0xcd4cd9 }
        return _0x91d9be.sendMessage(_0x525659.chat, _0x2bf4f3, {
          quoted: _0x525659,
        })
        const _0x211c65 = { url: _0x4dfb37.result.sticker_url[1] }
        const _0x11a3ff = { sticker: _0x211c65 }
        return _0x91d9be.sendMessage(_0x525659.chat, _0x11a3ff, {
          quoted: _0x525659,
        })
        const _0x402657 = { url: _0x4dfb37.result.sticker_url[2] }
        const _0x3787d7 = { sticker: _0x402657 }
        return _0x91d9be.sendMessage(_0x525659.chat, _0x3787d7, {
          quoted: _0x525659,
        })
        const _0x47cb96 = { url: _0x4dfb37.result.sticker_url[3] }
        const _0x53d826 = { sticker: _0x47cb96 }
        return _0x91d9be.sendMessage(_0x525659.chat, _0x53d826, {
          quoted: _0x525659,
        })
        const _0x21d487 = { url: _0x4dfb37.result.sticker_url[4] }
        const _0x579dac = { sticker: _0x21d487 }
        return _0x91d9be.sendMessage(_0x525659.chat, _0x579dac, {
          quoted: _0x525659,
        })
        const _0x3bdac4 = { url: _0x4dfb37.result.sticker_url[5] }
        const _0x132006 = {}
        return (
          (_0x132006.sticker = _0x3bdac4),
          _0x91d9be.sendMessage(_0x525659.chat, _0x132006, {
            quoted: _0x525659,
          })
        )
      }
    } catch (_0x5604d2) {
      console.log(_0x5604d2)
    }
  }
)
const _0x574fec = {}
_0x574fec.pattern = 'xvideo'
_0x574fec.react = '\uD83D\uDD1E'
_0x574fec.desc = 'Search porn video.'
_0x574fec.category = 'search'
_0x574fec.filename = __filename
cmd(
  _0x574fec,
  async (
    _0x25b91e,
    _0x1f0593,
    _0x37fc8f,
    {
      from: _0x5e699f,
      l: _0xfb3d73,
      quoted: _0x134f11,
      body: _0x1b106c,
      isCmd: _0x1461a1,
      command: _0x233436,
      args: _0x5503b1,
      q: _0xf79ffb,
      isGroup: _0x448a34,
      sender: _0x503d1e,
      senderNumber: _0x8893ef,
      botNumber2: _0x455f21,
      botNumber: _0x5e2962,
      pushname: _0x4e098d,
      isMe: _0x3b88c3,
      isOwner: _0x21f59c,
      groupMetadata: _0x339e72,
      groupName: _0x30c6f6,
      participants: _0x4231e0,
      groupAdmins: _0xfd7765,
      isBotAdmins: _0x5075ff,
      isAdmins: _0x17c41f,
      reply: _0x2628f7,
    }
  ) => {
    try {
      if (global.SEX_DL == 'true') {
        if (!_0xf79ffb) {
          return _0x2628f7(
            '*Please give me words to search*\n EX : .xvideo sister'
          )
        }
        const _0x28208d = await fetchJson(
          'https://api.botcahx.live/api/search/xvideos?query=' +
            _0xf79ffb +
            '&apikey=janithsadanuwan'
        )
        let _0x304748 =
            '*\uD83C\uDFAD  XVIDEO RESULTS  \uD83C\uDFAD* \u261E *' +
            _0xf79ffb +
            '*\n\n',
          _0xef8b36 = 1
        const _0x3d6249 = _0x28208d.result
        for (let _0x7b1a92 of _0x3d6249) {
          _0x304748 +=
            '\uD83D\uDD35 No : ' +
            _0xef8b36++ +
            '\n*\uD83D\uDC7D title :* ' +
            _0x7b1a92.title +
            '\n*\u261E url :* ' +
            _0x7b1a92.url +
            '\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
        }
        const _0x2177df = {
          url: 'https://telegra.ph/file/1d4a15912ba140214fa37.jpg',
        }
        const _0x254479 = {
          image: _0x2177df,
          caption: _0x304748,
        }
        const _0x28417b = { quoted: _0x1f0593 }
        _0x25b91e.sendMessage(_0x5e699f, _0x254479, _0x28417b)
      } else {
        _0x1f0593.reply('*18+ DOWNLOAD IS DESABLE BY OWNER*')
      }
    } catch (_0x4e322d) {
      console.log(_0x4e322d)
    }
  }
)
function _0x57884c(_0x1145cb) {
  function _0x10b19e(_0x16a5ef) {
    if (typeof _0x16a5ef === 'string') {
      return function (_0x10b32a) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x16a5ef / _0x16a5ef).length !== 1 || _0x16a5ef % 20 === 0
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
    _0x10b19e(++_0x16a5ef)
  }
  try {
    if (_0x1145cb) {
      return _0x10b19e
    } else {
      _0x10b19e(0)
    }
  } catch (_0x40f2dd) {}
}
