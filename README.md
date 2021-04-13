# Game of Life

[https://kamiyaa.github.io/game-of-life/](https://kamiyaa.github.io/game-of-life/)

A simple game of life game written with Rust, WebAssembly and Javascript.

![Alt text](screenshot.png?raw=true "game-of-life")

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
