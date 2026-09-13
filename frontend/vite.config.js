import { fileURLToPath } from 'node:url';

const frontendRoot = fileURLToPath(new URL('.', import.meta.url));

export default {
    root: frontendRoot,
    server: {
        host: '0.0.0.0',
        allowedHosts: true,
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
};