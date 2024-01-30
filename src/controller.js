const axios = require('axios')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '..', '.env') })

exports.greetings = (req, res) => {
    res.send('Olá, seja bem-vindo(a) Alert API.')
}

exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { TOKEN: token, CHANNEL: channel } = process.env

        const formData = new FormData()
        formData.set('chat_id', channel)
        formData.set('text', message)
        
        console.log(token)
        console.log(formData.get('chat_id'))
        console.log(formData.get('text'))
        
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
