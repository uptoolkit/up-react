import * as React from 'react';
import {
    create,
    ReactTestRendererJSON,
    ReactTestRenderer
} from 'react-test-renderer';
import {UpProvider} from '../src';
import App from '../example/App';

function toJson(component: ReactTestRenderer) {
    const result = component.toJSON()
    expect(result).toBeDefined()
    expect(result).not.toBeInstanceOf(Array)
    return result as ReactTestRendererJSON
}

test('It provide Up React and show hello world', async () => {

    function TestComponent() {
        return (
            <UpProvider options={{
                debug: true,
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
                <App/>
            </UpProvider>
        )
    }

    const testRenderer = create(<TestComponent />);
    toJson(testRenderer);
    setTimeout(() => {
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({className: "test-config"}).children).toEqual(['Up Toolkit Demo']);
        expect(testInstance.findByProps({className: "test-i18n"}).children).toEqual(['Hello World !']);
    }, 1000);
})
