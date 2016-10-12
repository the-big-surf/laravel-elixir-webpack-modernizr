var Elixir = require('laravel-elixir')
var _path = require('path')
var _fileExists = require('file-exists')

var rootMRC = _path.resolve(__dirname, "../../.modernizrrc")

var ModernizrRC = _fileExists(rootMRC) ? rootMRC : _path.resolve(__dirname, ".modernizrrc")

Elixir.ready(function () {

    Elixir.webpack.mergeConfig({

        // ensure we are using the version of Vue that supports templates
        resolve: {
            alias: {
                'modernizr$': ModernizrRC
            }
        },

        module: {
            loaders: [
                {
                    test: /\.modernizrrc$/,
                    loader: "modernizr"
                },
            ]
        }

    })

})
