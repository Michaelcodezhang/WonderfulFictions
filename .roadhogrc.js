const path = require('path')

export default {
  'entry': 'src/index.js',
  'disableCSSModules': true,
  'hash': true,
  'env': {
    'development': {
      'extraBabelPlugins': [
        'dva-hmr',
        'transform-runtime',
        'transform-decorators-legacy',
        ["module-resolver", {
          "alias": {
            "dva": "dva-react-router-3",
            "components": "./src/components",
            "config": "./src/config",
            "images": "./src/images",
            "models": "./src/models",
            "pages": "./src/pages",
            "services": "./src/services",
            "utils": "./src/utils"
          }
        }],
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
      ]
    },
    'production': {
      'extraBabelPlugins': [
        'transform-runtime',
        'transform-decorators-legacy',
        ["module-resolver", {
          "alias": {
            "dva": "dva-react-router-3",
            "components": "./src/components",
            "config": "./src/config",
            "images": "./src/images",
            "models": "./src/models",
            "pages": "./src/pages",
            "services": "./src/services",
            "utils": "./src/utils"
          }
        }],
          ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
      ],
      'autoprefixer': {
        'browsers': [
          'iOS >= 8', 'Android >= 4', 'ie >=9'
        ]
      }
    }
  }
}
