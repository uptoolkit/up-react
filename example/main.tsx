import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {UpProvider} from "../src";
import {ApolloClient, InMemoryCache} from "@apollo/client";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

/*const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
});*/

root.render(
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
            url: 'https://api.mocki.io/v2/c4d7a195/graphql',
            //client: client
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
);
