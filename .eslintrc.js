const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: 'module',
    babelOptions: {
      configFile: path.join(__dirname, '.babelrc')
    }
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': 0,
    'arrow-parens': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
  },
  settings: {
    'import/resolver': {
      webpack: {
        //此处config对应webpack.config.js的路径
        config: path.resolve(__dirname, 'config/webpack.config.js')
      }
    }
  }
}
