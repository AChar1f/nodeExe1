const fs = require('fs')

fs.writeFile('data.txt', 'Welcome to Node.js!', function (err){
    if (err) throw err;
    console.log('Saved')
})

fs.writeFile('data.txt', ' If you reading this the previous content was replaced.', function (err) {
    if (err) throw err;
    console.log('Replaced!')
})
fs.appendFile('data.txt', 'The content you are reading was appended to the document.', function (err){
    if (err) throw err;
    console.log('Updated!')
})

//  Content