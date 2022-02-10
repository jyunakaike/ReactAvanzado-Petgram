const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ],
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
 }
