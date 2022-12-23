const path = require('path')

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true // automatically run as you save file
}