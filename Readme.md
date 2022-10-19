### Testcase for react-dnd v10.0.2 with react 16 and esbuild

### Copy Pasta from react-dnd

https://github.com/react-dnd/react-dnd/tree/v10.0.2/packages/documentation/examples-decorators

### Notes how to use

```
yarn install

yarn build

// open dist/index.html in the browser
```

#### Notes on the build

- i needed to provide an at least empty tsconfig.json for esbuild to work correctly
  seems buggy? currenty tsconfig is not filled for esbuild. But it has to be at least `{}`
