# Game of Life

A simple game of life game written with Rust, WebAssembly and Javascript.

## Rust/WebAssembly

### Building
```
wasm-pack build
```

### Testing
```
wasm-pack test --headless --firefox
```

### Publishing to NPM
```
wasm-pack publish
```

## Javascript/Webpack

### Building/Bundling
```
cd www
npm run build
```

### Testing
```
cd www
npm run start
```
