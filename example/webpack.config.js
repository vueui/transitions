
var path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
	    path: path.join(__dirname, 'build'),
        filename: "build.js"
    },

    module: {
        loaders: [
            { test: /\.jade$/, loader: 'html!jade' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
