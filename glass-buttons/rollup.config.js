import styles from 'rollup-plugin-styles';
const autoprefixer = require('autoprefixer');
import {terser} from 'rollup-plugin-terser'
import sourcemaps from 'rollup-plugin-sourcemaps'
import babel from '@rollup/plugin-babel';

//entrypoint for library 
const input = 'src/index.js'

//
var MODE = [
    {
        fomart: 'cjs'
    },
    {
        fomart: 'esm'
    },
    {
        fomart: 'umd'
    }
]

var config = []

MODE.map((m) => {
    var conf = {
        input: input,
        output: {
            //the name of package
            name: 'glass-buttons',
            file: `dist/index.${m.fomart}.js`,
            format: m.fomart,
            exports: 'auto'

        },
        // this externalizes react to prevent rollup from compiling it 
        external: ["react", /@babel\/runtime/],
        plugins: [
            //babel config
            babel({
                exclude: 'node-modules/**',
                plugins: ['@babel/transform-runtime'],
                babelHelpers: 'runtime'
            }),
            // this adds sourcemaps
            sourcemaps(),
            // this adds support fors tyles
            styles({
                postcss: {
                    plugins: [
                        autoprefixer()
                    ]
                }
            })
        ]
    }
    config.push(conf)
})

export default [
    ...config,
]