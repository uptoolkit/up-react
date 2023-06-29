# Up React

[![Latest Version on NPM](https://img.shields.io/npm/v/upvue.svg?style=flat-square)](https://npmjs.com/package/use-up)
![npm](https://img.shields.io/npm/dt/use-up)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

## Why ?

🥸 : Bootstrapping a project is unexpectedly very difficult because there are so many choices, too many setups and
configs to do before just working on a project...

😩 : "Hell yeah, you're right. Javascript fatigue..."

🥸 : Up React help you to have everything you need to start for creating a webapp as simple as that :

- [React for the Javascript framework](https://reactjs.org/)
- [Axios for the ajax request](https://axios-http.com/)
- [Next I18n for the translations helpers](https://react.i18next.com/)
- [JsConfigHelper for config provider](https://www.npmjs.com/package/js-config-helper)
- [JsFormHelper as form helper](https://www.npmjs.com/package/js-form-helper)

🧐 : "Mmh, interesting..."

🥸 : At the best, you can just use our components or layouts making a breeze for your quick prototyping or web
development with everything to start included and UP to date.

🧐 : "Mmh, yes but what if I want to..."

🥸 : Shut ! I know your dev syndrom... At the minimum, you will have a good boilerplate and UP to you to override it
when you will feel the need. Thanks to
our "[convention over configuration philosophy](https://en.wikipedia.org/wiki/Convention_over_configuration)"
and [S.O.L.I.D principle](https://en.wikipedia.org/wiki/SOLID) :-).

😁 : "Ok now I want to start !!!"

## Getting started

There is also a Next.js boilerplate available
here : [https://github.com/uptoolkit/upfront-nextjs](https://github.com/uptoolkit/upfront-nextjs)

In your React project just make :

````bash
yarn add up-react #or npm i up-react --save
````

Then in your main app (likely very soon in your instanciation), do :

````javascript
// this will be likely in your main.js or pages/__app.js in Next
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {useUp, setUp, UpProvider} from 'up-react';

//1. You must instanciate the setUp method in your react bootstrap code
const upConfig = {
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
  storeMode: 'reactive', // could be reactive|redux
  store: store, // if defined you can define a Store that you can reuse in your useUp
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
};

ReactDOM.render(
    <UpProvider options={upConfig}>
      <App/>
    </UpProvider>,
  document.getElementById('root')
)
````

Then in your component you can simply use the useUp() helper :

````javascript
import {useState} from 'react'
import {useUp} from 'up-react';

function App() {

  const {
    config, // config helper
    api, // api helper
    t, // translation helper
  } = useUp();

  // Up Provider will automatically instanciate a graphqlClient
  const {data, loading} = useQuery(gql`query Test{
        todos {
            id
            description
        }
    }`);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{config.get('project.name')}</h1>
        <p>{t('hello')}</p>
        <Skeleton loading={loading}>
          {data && <ul>
            {data.todos.map((t, k) => <li key={k}>{t.description}</li>)}
          </ul>}
        </Skeleton>
      </header>
    </div>
  )
}
````

# Available variable helpers

| Properties   |                   Description                   |  Link |
|--------------|:-----------------------------------------------:|------:|
| config       |                  Config Helper                  | https://www.npmjs.com/package/js-config-helper |
| http         |                 Axios instance                  |   https://axios-http.com/ |
| graphql      |                 GraphQl Client                  |   https://www.apollographql.com/docs/react/ |
| api          |     Axios instance with your api as baseUrl     | https://axios-http.com/ |
| i18n         |                 Next React I18n                 | https://react.i18next.com/ |
| form         |             Form validation helper              | https://www.npmjs.com/package/js-form-helper |
| formApi      | Form validation helper with your Api as baseUrl | https://www.npmjs.com/package/js-form-helper |

# What if I need to adapt or don't need a components ?

UseUp use a convention over configuration principle but also a S.O.L.I.D design pattern.

It means that you can override everything if you follow the Typed interface conventions.

To override an element in your initialisation config, just do :

`````javascript
index({
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

- [https://uptoolkit.com/docs](https://vue.uptoolkit.com)
- [https://github.com/uptoolkit/up-react/tree/main/example](https://github.com/uptoolkit/up-react/tree/main/example)

### Discover the whole ecosystem of Up Toolkit

Up Vue is a part of the Up Toolkit ecosystem a set of packages and utilities for changemakers.

For more information go to :

- [https://uptoolkit.com](https://uptoolkit.com)

# How to contribute ?

Everyone can contribute and propose any components or post an issues, make a suggestion :

- [https://github.com/uptoolkit/up-react/issues](https://github.com/uptoolkit/up-react/issues)
- [You can also share your package in Awesome Up](https://github.com/uptoolkit)

# To dos :

- [x] Testing using Jest
- [x] Help wanted to update package
- [v] Documenting code
- [v] Setting up Storybook
- [v] More typehint and typescript
- [x] Add more useful components and libs :-)

Any helps wanted !

# Support us

Support us on Open Collective or buy us a Tree :

- [https://opencollective.com/uptoolkit](https://opencollective.com/uptoolkit)

# License

MIT

# Treeware license

This package is also a [Treeware](https://treeware.earth).

If you use it in production, then we kindly ask [**buy the world a
tree**](https://plant.treeware.earth/uptoolkit/up-react) to thank us for our work.

By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.
