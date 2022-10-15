import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import App from './App';
import {UpProvider} from "../src";

ReactDOM.render(
    <React.StrictMode>
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
    </React.StrictMode>,
    document.getElementById('root')
);
