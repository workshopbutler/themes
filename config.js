
const isDev = (process.env.NODE_ENV !== "build");

const options = {
    apiKey: process.env.API_KEY,
    widgetVersion: '0.5.0',
    theme: 'hayes'
};

const mapping = {
    'templates': './app.js',
    'styles': 'styles/common.less'
};

module.exports = {
    isDev,
    src: isDev ? `.tmp/` : `dist/`,
    entry: mapping,
    options: options
};
