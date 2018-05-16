
const isDev = (process.env.NODE_ENV !== "build");

const options = {
    apiKey: process.env.API_KEY,
    widgetVersion: '0.3.2',
    theme: 'gatsby'
};

const mapping = {
    'templates': './app.js',
    'themes': 'styles/common.less'
};

module.exports = {
    isDev,
    src: isDev ? `.tmp/` : `dist/`,
    entry: mapping,
    options: options
};
