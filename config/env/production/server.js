module.exports = ({ env }) => ({
    url: env('https://ma3-strapi.herokuapp.com/'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS', ['key1', 'key2']),
    },
});