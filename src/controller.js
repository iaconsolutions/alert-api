const { config } = require('dotenv')
const { join } = require('path')

config({ path: join(__dirname, '..', '.env') })

exports.greetings = (req, res) => {
    res.send('Olá, seja bem-vindo(a) Alert API.')
}

exports.sendMessage = async (req, res) => {
    try {
        const { TOKEN: token } = process.env
        const { channel, message } = req.body

        console.log(`token: ${token}`)
        console.log(`channel: ${channel}`)
        console.log(message)

        const formData = new FormData()
        formData.set('chat_id', channel)
        formData.set('text', message)
        
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const request = await fetch(url, {
            method: 'post',
            body: formData
        })
        const response = await request.json()
    
        res.json(response)
    } catch (error) {
        res.send(error.message)
    }
}
