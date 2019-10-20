const withCss = require('@zeit/next-css');

// const configs = {
//   // 编译文件输出目录
//   distDir: 'dist', // 默认.next,
//   // 是否给每个路由生成etag
//   generateEtags: true,
//   // 页面内容缓存配置
//   onDemandEntries: {
//     // 内容在内存中缓存的时长 (ms)
//     maxInactiveAge: 25 * 1000,
//     // 同时缓存多少个页面
//     pagesBufferLength: 2
//   },
//   // 在pages目录下哪些后缀名的文件会被认为是页面
//   pageExtendsions: ['jsx', 'js'],
//   // 手动修改webpack config
//   webpack(config, options) {
//     return config
//   },
//   // 修改webpackDevMiddleware 配置
//   webpackDevMiddleware: config => {
//     return config
//   },
//   // 可以在页面上通过process.env.customKey 获取 value
//   env: {
//     customKey: 'value'
//   },
//   // 下面两个要通过 'next/config' 来读取
//   // 只有在服务端渲染时才会获取的配置
//   serverRuntimeConfig: {
//     mySecret: 'secret'
//   },
//   // 在服务端和客户端渲染都可以获取的配置
//   publicRuntimeConfig: {
//     staticFolder: '/static'
//   }
// }

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({
  distDir: 'dist'
})