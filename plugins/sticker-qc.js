var handler = async m => 

m.reply(`*YO AQUI ESPERANDO MI DIAMANTES XD NECESITO HOY RICARDO ASI DESARROLLAMOS MAS EL BOT*`.trim())
 
 handler.help = ['Midiamantes']
 handler.tags = ['Ricardo']
 handler.command = /^Midiamantes$/i
 
 handler.limit = true
 
 export default handler 