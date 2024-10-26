# Using Terser CLI

Mini project for learning how to use Terser CLI

### Setup Terser CLI

```bash
npm install -g terser
```

### Build JS

```bash
npm run build-js
```

### package.json

```json
{
  "name": "using-terser-cli",
  "description": "Mini project for learning how to use Terser CLI",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev":"live-server",
    "build-js": "terser dog.js index.js --ecma 2015 -c -o output.js"
  },
  "author": "Mr.Manit Treeprapankit",
  "license": "MIT"
}
```
