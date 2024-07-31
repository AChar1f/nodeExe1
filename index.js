const fs = require('fs')

fs.writeFile('data.txt', 'Welcome to Node.js!', function (err){
    if (err) throw err;
    console.log('Saved')
})

fs.writeFile('data.txt', ' If you reading this content, it has replaced the previous content.', function (err) {
    if (err) throw err;
    console.log('Replaced!')
})
//  The Second Content has overwritten the previous content.

fs.appendFile('data.txt', ' The content you are reading was appended to the document.', function (err){
    if (err) throw err;
    console.log('Updated!')
})