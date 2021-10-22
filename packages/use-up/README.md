# Up React

## Why ?

🥸 : Bootstrapping a project is unexpectedly very difficult because there are so many choices, too many setups and configs to do before just working on a project...

😩 : "Hell yeah, you're right. Javascript fatigue..."

🥸 : Up React help you to have everything you need to start for creating a webapp as simple as that :

- [React for the Javascript framework](https://reactjs.org/)
- [Tailwind as a Front-End Utilities](https://tailwindcss.com/)
- [DaisyUI a Tailwind components extension](https://daisyui.com/)
- [AntDesign as Ui Library](https://ant.design/)
- [Axios for the ajax request](https://axios-http.com/)
- [I18n for the translations helpers](https://www.npmjs.com/package/@cherrypulp/i18n)
- [JsConfigHelper for config provider](https://www.npmjs.com/package/js-config-helper)
- [JsFormHelper as form helper](https://www.npmjs.com/package/js-form-helper)
- [DayJS as date helper](https://day.js.org/)

🧐 : "Mmh, interesting..."

🥸 : At the best, you can just use our components or layouts making a breeze for your quick prototyping or web development with everything to start included and UP to date.

🧐 : "Mmh, yes but what if I want to..."

🥸 : Shut ! I know your dev syndrom... At the minimum, you will have a good boilerplate and UP to you to
override it when you will feel the need. Thanks to our "[convention over configuration philosophy](https://en.wikipedia.org/wiki/Convention_over_configuration)" and [S.O.L.I.D principle](https://en.wikipedia.org/wiki/SOLID) :-).

😁 : "Ok now I want to start !!!"

## Getting started

There is also a Next.js boilerplate available here : [https://github.com/uptoolkit/upfront-nextjs](https://github.com/uptoolkit/upfront-nextjs)

In your React project just make :

````bash
yarn add up-react #or npm i use-up --save
````

Then in your main app (likely very soon in your instanciation), do :

````javascript
// this will be likely in your main.js or pages/__app.js in Next
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import useUp from 'use-up';

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
````

Then in your component you can simply use the useUp() helper : 

````javascript
import {useState} from 'react'
import useUp from 'use-up';

function App() {

  const {
    config, // config helper
    api, // api helper
    t, // translation helper
  } = useUp();

  return (
    <div className="App">
      <header className="App-header">
        {config.get('project.name')}
        {t('hello')}
      </header>
    </div>
  )
}
````

# Available variable helpers

| Properties   |      Description      |  Link |
|----------|:-------------:|------:|
| config |  Config Helper | https://www.npmjs.com/package/js-config-helper |
| http |    Axios instance   |   https://axios-http.com/ |
| api | Axios instance with your api as baseUrl | https://axios-http.com/ |
| i18n | Axios instance with your api as baseUrl | https://axios-http.com/ |
| form | Form validation helper | https://www.npmjs.com/package/js-form-helper |
| formApi | Form validation helper with your Api as baseUrl | https://www.npmjs.com/package/js-form-helper |
| message | Message helper from AntDesign Ui | https://ant.design/components/message/ |
| notification | Notification helper from AntDesign Ui | https://ant.design/components/notification/ |

# What if I need to adapt or don't need a components ?

UseUp use a convention over configuration principle but also a S.O.L.I.D design pattern. 

It means that you can override everything if you follow the Typed interface conventions.

To override an element in your initialisation config, just do : 

`````javascript
useUp({
  override: {
    api: MyCustomApiService,
    message: MyOtherMessagePlugin
  },
  exclude: [
    'notification',
    'i18n'
  ]
});
`````

## Digging deeper

You can get full documentation or check our complete example :

- [https://use-up.uptoolkit.com](https://vue.uptoolkit.com)
- [https://github.com/uptoolkit/use-up/tree/main/example](https://github.com/uptoolkit/use-up/tree/main/example)

### Discover the whole ecosystem of Up Toolkit

Up Vue is a part of the Up Toolkit ecosystem a set of packages and utilities for changemakers.

For more information go to :

- [https://uptoolkit.com](https://uptoolkit.com)

# How to contribute ?

Everyone can contribute and propose any components or post an issues, make a suggestion :

- [https://github.com/uptoolkit/up-react/issues](https://github.com/uptoolkit/use-up/issues)
- [You can also share your package in Awesome Up](https://github.com/uptoolkit)

# To dos :

- [x] Testing using Jest
- [x] Customising AntDesign style
- [x] Documenting code
- [x] Setting up Storybook
- [x] More typehint and typescript
- [x] Add more useful components and libs :-)

Any helps wanted !

# Support us

Support us on Open Collective or buy us a Tree :

- [https://opencollective.com/uptoolkit](https://opencollective.com/uptoolkit)

# License

MIT

# Treeware license

This package is also a [Treeware](https://treeware.earth).

If you use it in production, then we kindly ask [**buy the world a tree**](https://plant.treeware.earth/uptoolkit/use-up) to thank us for our work.

By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.