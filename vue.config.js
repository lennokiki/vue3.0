'use strict'
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

const name = '军队后台管理系统'

// dev 启动端口
const port = process.env.port || 9090

// 启动打包配置项
module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: false, // 关闭eslint配置项
	productionSourceMap: false,
	devServer: {
		port: port,
		open: true,
		overlay: {
			warning: false,
			error: true,
		},
		// 本地代理
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000', // 接口地址
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	configureWebpack: {
		name: name,
		resolve: {
			alias: {
				'@': resolve('src'),
				'api': resolve('src/api'),
				'utils': resolve('src/utils'),
			}
		}
	}
}
