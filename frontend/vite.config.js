export default {
    root: '.',
    server: {
        host: '0.0.0.0',
        allowedHosts: true,
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
};