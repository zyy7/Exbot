let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉───
║│➸ *Nama* : ZyyXd ( nama samaran ) 
║│➸ *Umur* : 15
║│➸ *Kelas* :  9 SMP
║│➸ *Status* : can't be good atau everything
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉───
║│➸ *No.Owner* : wa.me/6285924761802
║│➸ *No.Bot* : wa.me/6285943140485
║│➸ *My Instagram* : https://www.instagram.com/jojo_wibu/
║│➸ *Gmail* : jojoganz191107@gmail.com
║│➸ *Github* : https://github.com/zyy7 
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'Recoded By Raditya', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
