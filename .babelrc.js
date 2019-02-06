module.exports = {
    presets: [
        [ '@wordpress/default' ],
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@wordpress/babel-plugin-import-jsx-pragma',
        '@babel/transform-react-jsx',
    ]
};