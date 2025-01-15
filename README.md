# Voikko library for JavaScript with TypeScript type definitions

## In construction

Compiled from
[libvoikko-js](https://github.com/niilo/libvoikko-js)
[libvoikko](https://github.com/voikko/corevoikko/tree/master/libvoikko) with
[emscripten](https://emscripten.org/). Single file build with Finnish language
dictionary [Joukahainen](https://joukahainen.puimula.org/) included. Currently
only [morpho](https://www.puimula.org/htp/testing/voikko-snapshot-v5/)
dictionary is included.

Libvoikko is licensed under GPL3,
https://github.com/voikko/corevoikko/blob/master/LICENSE

Build yourself with apple silicon:

```bash
npm run build
```

or just copy the build command from package.json

```bash
docker build --output ./build -t voikko ./docker
```
