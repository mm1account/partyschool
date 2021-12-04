// let proxyObj = {
//   "/api": {
//     //target: `https://122.9.100.157:8090`,
//     target: `http://localhost:8080`,
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': ''
//     }
//   },
// };

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
//   indexPath: 'index.html',
//   outputDir: 'test_env',
//   css: {
//     sourceMap: true
//   },
//   devServer: {
//     https: true,
//     proxy: proxyObj
//   }
// };
module.exports = {
  // devServer: {
  //   //跨域
  //   Proxy: {
  //     'api': {
  //       //目标路径
  //       target: "https://www.bilibili.com",
  //       //允许跨域
  //       changOrigin: true,
  //       //重写路径
  //       pathRewrite: {
  //         "^/api": "",
  //       }
  //     }
  //   }
  // }

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://www.bilibli.com/', //接口的前缀
  //       secure: true,
  //       ws: true, //代理websocked
  //       changeOrigin: true, //虚拟的站点需要更管origin
  //       pathRewrite: {
  //         '^/api': '' //重写路径
  //       }
  //     }
  //   }
  // },

}
