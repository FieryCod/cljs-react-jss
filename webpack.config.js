const path = require('path');

const DEFAULT_CONFIG = {
    entry: './resources/react-jss.js',
    output: {
        filename: 'react-jss.js',
        path: path.resolve(__dirname, 'public'),
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
