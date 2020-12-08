const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('client is ready!')

    command(client, ['ping', 'test'], message => {
        message.channel.send('Pong!')
    })
    command(client, 'bing', message =>{
        message.channel.send('bong!')
    })
})

client.login(config.token)