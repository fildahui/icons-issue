# icons-issue

This is a simple app that shows how icons are not properly loaded since fabric v. 7.79.1.

It's a react-app that loads two different libraries (both with same exact source code) and use
an `IconButton` component that wraps the fabric `IconButton`.

The icons registered are from `font-awesome 5 free`.

You will see the `test-lib-7790` lib that uses fabric version `7.79.0` will render the icon correctly.
The `test-lib-7791` lib, instead, that's using fabric version `7.79.1` will not render any icon.


> same code, different fabric versions, different result

To start the react app run:

```bash
npm start
```