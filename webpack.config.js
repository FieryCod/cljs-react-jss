const path = require('path');

const DEFAULT_CONFIG = {
    entry: './resources/webpack-compile/react-jss.js',
    output: {
        filename: 'react-jss.js',
        path: path.resolve(__dirname, 'resources', 'cljsjs'),
        library: 'ReactJSS',
        libraryExport: 'default'
    },
    externals: {
        "react": "React"
    }
};

module.exports = (env, argv) => {
    const config = DEFAULT_CONFIG;

    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
    }

    if (argv.mode === 'production') {
        config.output.filename = 'react-jss.min.js';
    }

    return config;
};
