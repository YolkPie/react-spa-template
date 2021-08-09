const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
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
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
		"no-use-before-define": [0],
		'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
		'import/extensions': ['error', 'ignorePackages', {
			"js": 'never',
			"jsx": 'never',
			"ts": 'never',
			"tsx": 'never'
		}],
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-unused-vars': [0, { args: 'none' }], // 不限制定义的类型是否使用
		'@typescript-eslint/no-empty-function': 0, // 不限制是空函数
		'@typescript-eslint/no-explicit-any': 0 // 不限制设置any类型
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      },
      webpack: {
        //此处config对应webpack.config.js的路径
        config: path.resolve(__dirname, 'config/webpack.config.js')
      }
    }
  }
}
