module.exports = ({ env }) => ({
    url: env('your-app-url'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS', ['key1', 'key2']),
    },
});