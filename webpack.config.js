const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new Dotenv()],
};