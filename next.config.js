/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

module.exports = {
    pageExtensions: ["*.tsx"], // somente arquivos .tsx são paginas
};

module.exports = nextConfig;
