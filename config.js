import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51934199112', 'FG98', true], 
  ['56972464547'], 
  ['528128736132']
  
] //Numeros de owner 

global.mods = [] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  zenz: 'https://zenzapis.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll', 
  'https://zenzapis.xyz': '675e34de8a'
}

// Sticker WM
global.packname = 'dylux-bot'
global.author = '@fg98._'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg._\n' 
global.fgsc = 'https://github.com/FG98F/dylux' 
global.fgyt = 'https://youtube.com/fg'

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱▱*'

global.multiplier = 69 


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
