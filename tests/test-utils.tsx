/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'
import {UpProvider} from "../src";

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, {
      // wrap provider(s) here if needed
        wrapper: ({ children }) => <UpProvider options={{
            debug: false,
            project: {
                name: 'Up Toolkit Demo',
                logo: {
                    src: '/img/logo.svg',
                },
                url: '/'
            },
            graphql: {
                url: "https://api.mocki.io/v2/c4d7a195/graphql"
            },
            storeMode: 'reactive', // could be reactive|vuex
            // store: store, // if defined you can define a Store that you can reuse
            api: {
                url: 'https://uptoolkit/demo/api', // Replace with your api endpoint
            },
            i18n: {
                lng: "en_EN",
                supportedLngs: ['en_EN', 'fr_FR'],
                resources: {
                    en_EN: {
                        translation: {
                            hello: 'Hello World !',
                        }
                    },
                    fr_FR: {
                        translation: {
                            hello: 'Allo la terre !',
                        }
                    },
                }
            },
        }}>
            {children}
        </UpProvider>,
      ...options,
    })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
