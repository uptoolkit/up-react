# Js Form Helper

[![Latest Version on NPM](https://img.shields.io/npm/v/js-form-helper.svg?style=flat-square)](https://npmjs.com/package/js-form-helper)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

An easy way to validate forms using back-end errors return OR front-end defined rules on change.

It's based on the syntaxe of Laravel Validation : 

[https://laravel.com/docs/8.x/validation#available-validation-rules](https://laravel.com/docs/8.x/validation#available-validation-rules)

It's a fork of Form-backend-validation which include form frontend validation from : 

- [https://github.com/spatie/form-backend-validation](https://github.com/spatie/form-backend-validation)
- [https://www.npmjs.com/package/validatorjs](https://www.npmjs.com/package/validatorjs)

It's a part of the Uptoolkit Playwork : [https://uptoolkit.com](https://uptoolkit.com).

Available for VueJs or React project : 

- [https://upvue.uptoolkit.com](https://upvue.uptoolkit.com)
- [https://upreact.uptoolkit.com](https://upreact.uptoolkit.com)

## Install

You can install the package via yarn (or npm):

```bash
yarn add js-form-helper

// or

npm install js-form-helper
```

By default, this package expects `axios` to be installed (unless you're using your own http library, see the [Options](#options) section for that).

```bash
yarn add axios
```

## Usage

```js
import Form from 'js-form-helper';

// Instantiate a form class with some values
const form = new Form({
    field1: 'value 1',
    field2: 'value 2',
    person: {
        first_name: 'John',
        last_name: 'Doe',
    },
});

// A form can also be initiated with an array
const form = new Form(['field1', 'field2']);

// Validate a form from javascript rules
// @see : https://www.npmjs.com/package/validatorjs
form.validate({
  "field1": "required|string",
  "field2": "required|string",
  "person.*.first_name": "required|string",
})

// Submit the form, you can also use `.put`, `.patch` and `.delete`
form.post(anUrl)
   .then(response => ...)
   .catch(response => ...);

// Returns true if request is being executed
form.processing;

// If there were any validation errors, you easily access them

// Example error response (json)
{
    "errors": {
        "field1": ['Value is required'],
        "field2": ['Value is required']
    }
}

// Returns an object in which the keys are the field names
// and the values array with error message sent by the server
form.errors.all();

// Returns true if there were any error
form.errors.any();

// Returns object with errors for the specified keys in array.
form.errors.any(keys);

// Returns true if there is an error for the given field name or object
form.errors.has(key);

// Returns the first error for the given field name
form.errors.first(key);

// Returns an array with errors for the given field name
form.errors.get(key);

// Shortcut for getting the first error for the given field name
form.getError(key);

// Clear all errors
form.errors.clear();

// Clear the error of the given field name or all errors on the given object
form.errors.clear(key);

// Returns an object containing fields based on the given array of field names
form.only(keys);

// Reset the values of the form to those passed to the constructor
form.reset();

// Set the values which should be used when calling reset()
form.setInitialValues();

// Populate a form after its instantiation, the populated fields will override the initial fields
// Fields not present at instantiation will not be populated
const form = new Form({
    field1: '',
    field2: '',
});

form.populate({
    field1: 'foo',
    field2: 'bar',
});

```

### Options

The `Form` class accepts a second `options` parameter.

```js
const form = new Form({
    field1: 'value 1',
    field2: 'value 2',
}, {
    resetOnSuccess: false,
});
```

You can also pass options via a `withOptions` method (this example uses the `create` factory method.

```
const form = Form.create()
    .withOptions({ resetOnSuccess: false })
    .withData({
        field1: 'value 1',
        field2: 'value 2',
    });
```

#### `resetOnSuccess: bool`

Default: `true`. Set to `false` if you don't want the form to reset to its original values after a succesful submit.

#### `http: Object`

By default this library uses `axios` for http request. If you want, you can roll with your own http library (or your own axios instance).

*Advanced!* Pass a custom http library object. Your http library needs to adhere to the following interface for any http method you're using:

```ts
method(url: string, data: Object): Promise<Response>
```

Supported http methods are `get`, `delete`, `head`, `post`, `put` & `patch`.

If you want to see how the http library is used internally, refer to the `Form` class' `submit` method.

### Working with files

The form handles file inputs too. The data is then sent as `FormData`, which means it's encoded as `multipart/form-data`.

Some frameworks (like Laravel, Symfony) can't handle these incoming requests through other methods than `POST`, so you might need to take measures to work around this limitation. In Laravel or Symfony, that would mean adding a hidden `_method` field to your form containing the desired HTTP verb.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Security

If you discover any security related issues, please contact [Daniel Sum](https://github.com/danielsum) instead of using the issue tracker.

## Credits

This package it's a fork of the excellent [https://github.com/spatie/form-backend-validation](https://github.com/spatie/form-backend-validation) rewritten in Typescript and adapted to be compatible with ES6 module.

We add also some functionalities like using validation rules directly in the Javascript without passing by the back-end for more versatility.

All the credits goes to them :

- [Freek Van der Herten](https://github.com/freekmurze)
- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

Initial code of this package was copied from [Jeffrey Way](https://twitter.com/jeffrey_way)'s [Vue-Forms repo](https://github.com/laracasts/Vue-Forms/).

The idea to go about this way of validating forms comes from [Laravel Spark](https://spark.laravel.com/).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Treeware

This package is [https://treeware.org](Treeware).

If you use it in production, then we ask that you buy the world a tree to thank us for our work.

By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.