import { defineConfig } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    lib:
        {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'UpVue',
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
