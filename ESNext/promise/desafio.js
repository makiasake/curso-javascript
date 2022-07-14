const fs = require('fs')

new Promise((resolve, reject) => {
    fs.readFile(__dirname +'/../dados.txt', 'utf-8', (error, content) =>
        error ? reject(error) : resolve(content))
}).then(console.log).catch(console.log)