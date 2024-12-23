/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        localPatterns:[
            {
                pathname:'./public/',
                search:'',
            },
        ],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.pexels.com/',
                port:'',
                search:'',
            }
        ],
    },
};

export default nextConfig;
