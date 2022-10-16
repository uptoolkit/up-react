import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts],
    optimizeDeps: {
        include: ['react/jsx-runtime'],
    },
    build: {
        lib:
            {
                entry: path.resolve(__dirname, 'src'),
                name: 'use-up',
                formats: ["cjs", 'es', 'umd'],
                fileName: (format) => `index.${format}.js`
            }
        ,
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                'axios',
                "react",
                "react/jsx-runtime",
                "react-dom",
                "classnames",
                "antd",
                "i18next",
                "react-i18next",
                "@reduxjs/toolkit",
                "js-config-helper",
                "@apollo/client",
                "object-assign",
                "js-form-helper"
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    'axios': 'axios',
                    'js-config-helper': 'Config',
                    'js-form-helper': 'Form',
                    'react': 'React',
                    'react/jsx-runtime': 'jsxRuntime',
                    'antd': 'antd',
                    'i18next': 'i18next',
                    'object-assign': 'object-assign',
                    'react-i18next': 'reactI18next',
                    '@apollo/client': 'apolloClient',
                    "react-dom": 'ReactDOM'
                }
            }
        }
    }
})
