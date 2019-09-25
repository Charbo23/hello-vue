const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const tableData = require('./public/mock.json');
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devServer: {
        port: 8080,
        open: true,//自动打开浏览器窗口
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            },
            '/auth': {
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/auth': '' }
            }
        },
        before: function (app) {
            app.get('/api/mock', (req, res) => {
                res.json(tableData);
            })
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    process.env.SHOW_REPORT === 'true' ? new BundleAnalyzerPlugin() : function () { },
                    new webpack.BannerPlugin('© 2019 Charbo. All Right Reserved.')
                ]
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@style', resolve('src/style'));
        config.performance
            .set('maxAssetSize', 1024 * 1024)
            .set('maxEntrypointSize', 1024 * 1024);
    },
    // css: {
    //     sourceMap: true
    // }
};