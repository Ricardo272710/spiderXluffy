var handler = async m => 

m.reply(`*YO AQUI ESPERANDO MI DIAMANTES XD NECESITO HOY RICARDO ASI DESARROLLAMOS MAS EL BOT*`.trim())
 
 handler.help = ['ricardo']
 handler.tags = ['Ricardo']
 handler.command = /^Ricardo$/i
 
 handler.limit = true
 
 export default handler 