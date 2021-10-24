import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {useUp} from '../packages/use-up'

//1. You must instanciate the useUp singleton
useUp({
    debug: true,
    project : {
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
    // store: store, // if defined you can define your vuex store if you choose vuex
    api: {
        url: 'https://uptoolkit/demo/api', // Replace with your api endpoint
    },
    translations: {
        en_EN: {
            hello: 'Hello World !',
        },
        fr_FR: {
            hello: 'Bonjour le monde',
        },
    },
    locale: 'en_EN',
    locales: [
        'en_EN', 'fr_FR'
    ],
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
