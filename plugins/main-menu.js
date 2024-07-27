import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'Info 📚',
  'buscador': 'Busquedas 🔎',
  'fun': 'Juegos 🎮',
  'jadibot': 'Sub Bots 🤖',
  'rpg': 'RPG 🌠',
  'rg': 'Registro 📁',
  'xp': 'Exp 🏷',
  'sticker': 'Stickers 🏞',
  'anime': 'Animes 🍧',
  'database': 'Database ✨️',
  'fix': 'Fixmsgespera 💭',
  'grupo': 'Grupos 👥',
  'nable': 'On / Off 📴', 
  'descargas': 'Descargas 📥',
  'youtube': 'Youtube Play 📥',
  'tools': 'Herramientas 🔧',
  'info': 'Información 🐢',
  'nsfw': 'Nsfw 🔞', 
  'owner': 'Creador 👑', 
  'mods': 'Staff Luffy 🍟',
  'audio': 'Audios 🔉', 
  'ai': 'Ai 🌹',
  'transformador': 'Convertidores 🚩',
}

const defaultMenu = {
  before: `*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷*

“ Hola *%name*, mi nombre es *SpiderBot*, Cómo se encuentra el día de hoy?  ”

*〔🕷️SPIDER MAN BOT 🕸️〕

╭━〔SPIDER MAN 〕━⬣
┃ACTIVO: 03.06.2024
┃   CREADORES:
┃RICARDO—ANTHONY
╰━━━━━━━━━━━⬣
╭━〔COMANDOS〕━⬣
┃.menu | .comandos
🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️🕷️
┃PERMANENTE | MENSUAL
╰━━━━━━━━━━━⬣

╭━ VS / REGLAS / FICHA━⬣
┃🫅🌺 ➺ .Fem4
┃🫅🌺 ➺ .Fem6
┃🫅🌺 ➺ .FemInterna4
┃🫅🌺 ➺ .FemInterna6
┃🫅🌺 ➺ .vs8fem
┃🫅🌺 ➺ .vs12fem
┃🫅🌺 ➺ .scrimfem
┃🤴 ➺ .Masc4
┃🤴 ➺ .Masc6
┃🤴 ➺ .MascInterna4
┃🤴 ➺ .MascInterna6
┃👫 ➺ .Mixto4
┃👫 ➺ .Mixto6
┃👫 ➺ .MixtoInterna4
┃👫 ➺ .MixtoInterna6
┃📏 ➺ .reglasclk
┃🇬🇬 ➺ .guerra
┃📐 ➺ .apos
┃📝 ➺ .Ficha / jugador
┃👑 ➺ .Vs4
┃👑 ➺ .Vs6
┃👑 ➺ .Vs8
┃👑 ➺ .Vs12
┃👑 ➺ .Vs16
┃👑 ➺ .Vs20
╰━━━━━━━━━━━━⬣

╭━〔 TREND TIK TOK 〕⬣
┃💃🕺➺ .Trendtiktok
╰━━━━━━━━━━━⬣

╭━〔 SPAM Y EDITS 〕⬣
┃🗂️➺ .SpamComu
╰━━━━━━━━━━━⬣

╭━ MULTI JUEGOS ━⬣
┃🕷️ ➺ .Abrazo
┃🕷️ ➺ .Cumple
┃🕷️ ➺ .Follar
┃🕷️ ➺ .Huevo
┃🕷️ ➺ .Formartrio
┃🕷️ ➺ .Sorteo
┃🕷️ ➺ .Nalga
┃🕷️ ➺ .Sega
┃🕷️ ➺ .math |matemáticas
┃🕷️ ➺ .lanzar cara | cruz
┃🕷️ ➺ .ppt piedra : papel : tijera
┃🕷️ ➺ .tictactoe | ttt sala
┃🕷️ ➺ .deltictactoe | delttt
┃🕷️ ➺ .topgays
┃🕷️ ➺ .topotakus
┃🕷️ ➺ .toppajer@s
┃🕷️ ➺ .topput@s
┃🕷️ ➺ .topintegrantes
┃🕷️ ➺ .toplagrasa | topgrasa
┃🕷️ ➺ .toppanafrescos
┃🕷️ ➺ .topshiposters
┃🕷️ ➺ .toplindos | toplind@s
┃🕷️ ➺ .topfamosos/@s
┃🕷️ ➺ .topparejas
┃🕷️ ➺ .gay | gay @tag
┃🕷️ ➺ .gay2 nombre : @tag
┃🕷️ ➺ .lesbiana nombre : @tag
┃🕷️ ➺ .manca nombre : @tag
┃🕷️ ➺ .manco nombre : @tag
┃🕷️ ➺ .pajero nombre : @tag
┃🕷️ ➺ .pajera nombre : @tag
┃🕷️ ➺ .puto nombre : @tag
┃🕷️ ➺ .puta nombre : @tag
┃🕷️ ➺ .rata nombre : @tag
┃🕷️ ➺ .love nombre : @tag
┃🕷️ ➺ .doxear nombre : @tag
┃🕷️ ➺ .doxxeame
┃🕷️ ➺ .pregunta texto
┃🕷️ ➺ .apostar | slot cantidad
┃🕷️ ➺ .formarpareja
┃🕷️ ➺ .dado
┃🕷️ ➺ .verdad
┃🕷️ ➺ .reto
┃🫧➺ .anuel
┃🫧➺ .ferxxo
╰━━━━━━━━━━━⬣

╭━━━[ AJUSTES - CHATS ]━━━⬣
┃⚙️ .on : off bienvenida
┃⚙️ .on : off avisos
┃⚙️ .on : off restringir
┃⚙️ .on : off antillamar
┃⚙️ .on : off publico
┃⚙️ .on : off autovisto
┃⚙️ .on : off temporal
┃⚙️ .on : off stickers
┃⚙️ .on : off autosticker
┃⚙️ .on : off reacciones
┃⚙️ .on : off audios
┃⚙️ .on : off modocaliente
┃⚙️ .on : off antitoxicos
┃⚙️ .on : off antiver
┃⚙️ .on : off antieliminar
┃⚙️ .on : off antinternacional
┃⚙️ .on : off antienlace
┃⚙️ .on : off antienlace2
┃⚙️ .on : off antitiktok
┃⚙️ .on : off antiyoutube
┃⚙️ .on : off antitelegram
┃⚙️ .on : off antifacebook
┃⚙️ .on : off antinstagram
┃⚙️ .on : off antitwitter
┃⚙️ .on : off soloprivados
┃⚙️ .on : off sologrupos
╰━━━━━━━━━━━━⬣

╭━〔 GRUPO - RESUMEN 〕━⬣
┃🔖 ➺ .configuracion
┃🔖 ➺ .settings
┃🔖 ➺ .vergrupo
╰━━━━━━━━━━━⬣

╭━[ DESCARGAS | DOWNLOADS ]━⬣
┃🕸️ ➺ .imagen | image texto
┃🕸️ ➺ .pinterest | dlpinterest texto
┃🕸️ ➺ .wallpaper|wp texto
┃🕸️ ➺ .play | play2 texto link
┃🕸️ ➺ .tw |twdl | twitter link
┃🕸️ ➺ .facebook | fb link
┃🕸️ ➺ .verig | igstalk usuario(a)
┃🕸️ ➺ .ighistoria | igstory usuario(a)
┃🕸️ ➺ .tiktok link
┃🕸️ ➺ .tiktokimagen | ttimagen link
┃🕸️ ➺ .tiktokfoto | tiktokphoto usuario(a)
┃🕸️ ➺ .vertiktok | tiktokstalk usuario(a)
┃🕸️ ➺ .mediafire | dlmediafire link
┃🕸️ ➺ .clonarepo | gitclone link
┃🕸️ ➺ .consejo
┃🕸️ ➺ .morse codificar texto
┃🕸️ ➺ .morse decodificar morse
┃🕸️ ➺ .fraseromantica
┃🕸️ ➺ .historia
╰━━━━━━━━━━━⬣

╭━[ CHAT ANONIMO ]━⬣
┃🧵 ➺ .chatanonimo | anonimochat
┃🧵 ➺ .anonimoch
┃🧵 ➺ .start
┃🧵 ➺ .next
┃🧵 ➺ .leave
╰━━━━━━━━━━━⬣

╭━[ CONFIGURACIÓN - GRUPOS ]━⬣
┃⚪️ ➺ .add numero
┃⚫️ ➺ .sacar | ban | kick  @tag
┃🟣 ➺ .grupo abrir : cerrar
┃🔵 ➺ .group open : close
┃🟢 ➺ .daradmin | promote @tag
┃🟡 ➺ .quitar | demote @tag
┃🟠 ➺ .banchat
┃🔴 ➺ .unbanchat
┃🟤 ➺ .banuser @tag
┃⚪️ ➺ .unbanuser @tag
┃⚫️ ➺ .admins texto
┃🟣 ➺ .invocar texto
┃🔵 ➺ .tagall texto
┃🟢 ➺ .hidetag texto
┃🟡 ➺ .infogrupo | infogroup
┃🟠 ➺ .grupotiempo | grouptime Cantidad
┃🔴 ➺ .advertencia @tag
┃🟤 ➺ .deladvertencia @tag
┃⚪️ ➺ .delwarn @tag
┃⚫️ ➺ .enlace | link
┃🟣 ➺ .newnombre | nuevonombre texto
┃🔵 ➺ .newdesc | descripcion texto
┃🟢 ➺ .setwelcome | bienvenida texto
┃🟡 ➺ .setbye | despedida texto
┃🟠 ➺ .nuevoenlace | resetlink
┃🔴 ➺ .on
┃🔘 ➺ .off
╰━━━━━━━━━━━⬣

╭━━[ CONTENIDO ]━━⬣
┃🔞➺ .hornymenu
╰━━━━━━━━━━━⬣

╭━[ CONVERTIDORES ]━⬣
┃🧸 ➺ .toimg | img | jpg sticker
┃🧸 ➺ .toanime | jadianime foto
┃🧸 ➺ .tomp3 |video|nota
┃🧸 ➺ .tovn |vn|vid|audio
┃🧸 ➺ .tovideo audio
┃🧸 ➺ .tourl video, imagen
┃🧸 ➺ .toenlace  vid|img|au
┃🧸 ➺ .tts es texto
╰━━━━━━━━━━━⬣


╭━━━[ EFECTOS ]━━⬣
┃🦠 .simpcard @tag
┃🦠 .hornycard @tag
┃🦠 .lolice @tag
┃🦠 .ytcomment texto
┃🦠 .itssostupid
┃🦠 .pixelar
┃🦠 .blur
╰━━━━━━━━━━━⬣

╭━[ RANDOM | ANIME ]━⬣
┃🛣️ .chico
┃🌁 .cristianoronaldo
┃🌉 .meme
┃🌌 .meme2
┃🌃 .itzy
┃🏙️ .blackpink
┃🌇 .kpop blackpink : exo : bts
┃🎆 .lolivid
┃🎇 .loli
┃🌠 .navidad
┃🌄 .ppcouple
┃🌅 .neko
┃🏞️ .waifu
┃🎑 .akira
┃🗾 .akiyama
┃🛣️ .anna
┃🌁 .asuna
┃🌉 .ayuzawa
┃🌃 .boruto
┃🌌 .chiho
┃🏙️ .chitoge
┃🌆 .deidara
┃🌇 .erza
┃🎆 .elaina
┃🌠 .eba
┃🌄 .emilia
┃🌅 .hestia
┃🏞️ .hinata
┃🎑 .inori
┃🛣️ .isuzu
┃🕋 .itachi
┃🛤️ .itori
┃🏦 .kaga
┃🛕 .kagura
┃⛩️ .kaori
┃🏤 .keneki
┃🏣 .kotori
┃🏪 .kurumi
┃🏩 .madara
┃🏥 .mikasa
┃🏢 .miku
┃⛰️ .minato
┃⛺️ .naruto
┃🌋 .nezuko
┃🏜️ .sagiri
┃🏔️ .sasuke
┃🏝️ .sakura
┃🏖️ .cosplay
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR AUDIO]⬣
┃🚁 .bass
┃🚆 .blown
┃🚑 .deep
┃🚘 .earrape
┃🚍 .fast
┃🚜 .fat
┃🚛 .nightcore
┃🚒 .reverse
┃🚌 .robot
┃🚙 .slow
┃🚕 .smooth
┃🚗 .tupai
╰━━━━━━━━━━━⬣

╭━━[ BÚSQUEDAS🔍]━⬣
┃🌎 ➺ .animeinfo texto
┃🌎 ➺ .mangainfo texto
┃🌎 ➺ .google texto
┃🌎 ➺ .googlelyrics texto
┃🌎 ➺ .letra | lirik texto
┃🌎 ➺ .ytsearch | yts texto
┃🌎 ➺ .wiki | wikipedia texto
╰━━━━━━━━━━━⬣

╭━[ HERRAMIENTAS ]━⬣
┃🛠️ .afk motivo
┃🛠️ .acortar url
┃🛠️ .calc operacion math
┃🛠️ .del 
┃🛠️ .qrcode texto
┃🛠️ .readmore texto1|texto2
┃🛠️ .spamwa #/texto/10
┃🛠️ .styletext texto
┃🛠️ .traducir texto
┃🛠️ .morse codificar texto
┃🛠️ .morse decodificar
┃🛠️ .encuesta | poll Motivo
┃🛠️ .horario
╰━━━━━━━━━━━⬣

╭━[ FUNCIÓN RPG ]━⬣
┃🥧 ➺ .pase premium
┃🍿 ➺ .pass premium
┃🥛 ➺ .listapremium
┃🥫➺ .transfer tipo cantidad 
┃🍛 ➺ .dar tipo cantidad 
┃🦪 ➺ .enviar tipo cantidad 
┃🍦 ➺ .balance
┃🍘 ➺ .cartera | wallet
┃🌰 ➺ .experiencia | exp
┃☕️ ➺ .top | lb | leaderboard
┃🍼 ➺ .rol | rango
┃🥮 ➺ .inventario | inventory
┃🍤 ➺ .aventura | adventure
┃🍚 ➺ .caza | cazar | hunt
┃🍩 ➺ .pescar | fishing
┃🍫 ➺ .animales
┃🍭 ➺ .alimentos
┃🥟 ➺ .curar | heal
┃🥓 ➺ .sell
┃🍝 ➺ .verificar | registrar
┃🥩 ➺ .perfil | profile
┃🥗 ➺ .myns
┃🍔 ➺ .unreg # de serie
┃🌭 ➺ .minardiamantes 
┃🧇 ➺ .minarcoins
┃🥖 ➺ .minarexp
┃🧀 ➺ .minar : minar2
┃🥚 ➺ .minar3
┃🧁 ➺ .reclamar | regalo 
┃🍧 ➺ .cadahora | hourly
┃🍰 ➺ .cadasemana  
┃🥪 ➺ .cadames | mes 
┃🍱 ➺ .cofre | abrircofre 
┃🍖 ➺ .trabajar | work
╰━━━━━━━━━━━⬣

╭━[ TOP EN OPTIMUS ]━⬣
┃🏆➺ .top
╰━━━━━━━━━━━⬣

╭━[ STICKERS ]━⬣
┃🌮 .sticker | s img/video
┃🍟 .sticker | s url tipo jpg
┃🥨 .emojimix 😺+😆
┃🧊 .dado
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR STICKERS ]━⬣
┃🧃 .wm packname|author
┃🧃 .wm texto1|texto2
╰━━━━━━━━━━━⬣

╭━[ STICKERS DINÁMICOS ]━⬣
┃🍥 .palmaditas | pat @tag
┃🍥 .bofetada | slap @tag
┃🍥 .golpear @tag
┃🍥 .besar | kiss @tag
┃🍥 .alimentar | food @tag
╰━━━━━━━━━━━⬣

╭━[ MENU PARA PROPIETARIO/A ]━⬣
┃💎➺ .join enlace
┃💎➺ .unete enlace
┃💎➺ .dardiamantes cantidad
┃💎➺ .darxp cantidad
┃💎➺ .darcoins cantidad
┃💎➺ .addprem | userpremium @tag cantidad
┃💎➺ .addprem2 | userpremium2 @tag cantidad
┃💎➺ .addprem3 | userpremium3 @tag cantidad
┃💎➺ .addprem4 | userpremium4 @tag cantidad
┃💎➺ .idioma | language
┃💎➺ .cajafuerte
┃💎➺ .comunicar | broadcastall | bc texto
┃💎➺ .broadcastchats | bcc texto
┃💎➺ .comunicarpv texto
┃💎➺ .broadcastgc texto
┃💎➺ .comunicargrupos texto
┃💎➺ .borrartmp | cleartmp
┃💎➺ .delexp @tag
┃💎➺ .delcoins @tag
┃💎➺ .deldiamantes @tag
┃💎➺ .reiniciar | restart
┃💎➺ .ctualizar | update
┃💎➺ .addprem | +prem @tag
┃💎➺ .delprem | -prem @tag
┃💎➺ .listapremium | listprem
┃💎➺ .añadirdiamantes @tag cantidad
┃💎➺ .añadirxp @tag cantidad
┃💎➺ .añadircoins @tag cantidad
╰━━━━━━━━━━⬣*,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, estrellas, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        estrellas: plugin.estrellas,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? '🚩 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙲' : `🚩 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴: Wa.me/${global.conn.user.jid.split`@`[0]}`), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, estrellas, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

  let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  global.vid = rlink
  const response = await fetch(vid)
  const gif = await response.buffer()
 // const img = imagen1

await conn.reply(m.chat, '*ꪹ͜𓂃͡𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗠𝗲𝗻𝘂 𝗗𝗲𝗹 𝗕𝗼𝘁...𓏲੭*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: packname, body: '🍟 ¡Super Bot De WhatsApp!', sourceUrl: redes, thumbnail: icons }}})

// await conn.reply(m.chat, '*ꪹ͜𓂃͡𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗠𝗲𝗻𝘂 𝗗𝗲𝗹 𝗕𝗼𝘁...𓏲੭*', m, rcanal)

m.react(emoji2) 

await conn.sendFile(m.chat, imagen1, 'luffy.jpg', text.trim(), fkontak, null, rcanal)

  } catch (e) {
    conn.reply(m.chat, '🔵 Lo sentimos, el menú tiene un error', m, rcanal, )
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'menuall', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;
