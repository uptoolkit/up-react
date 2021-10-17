import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts],
    build: {
        lib:
            {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'upReact',
                fileName: (format) => `index.${format}.js`
            }
        ,
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                "@bundled-es-modules/axios",
                'axios',
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    axios: 'axios'
                }
            }
        }
    }
})
