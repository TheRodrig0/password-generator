import { defineConfig } from 'vite'

export default defineConfig({
    base: '/password-generator/',
    logLevel: 'warning',
    build: {
        outDir: 'docs',
        terserOptions: {
            compress: {
                passes: 2,
            },
            mangle: true,
            format: {
                comments: false,
            },
        },
    },
    server: {
        port: 8080,
    }
})