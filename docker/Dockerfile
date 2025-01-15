FROM emscripten/emsdk:4.0.0-arm64 AS builder

#RUN apt-get -y update && apt-get -y install wget unzip python python3 openjdk-11-jre-headless gettext autogen autoconf libtool pkg-config

RUN apt-get -y update && apt-get -y install wget unzip autoconf autogen pkg-config libtool gettext openjdk-21-jre-headless


RUN wget https://github.com/voikko/corevoikko/archive/refs/tags/rel-libvoikko-4.3.2.zip \
  && unzip rel-libvoikko-4.3.2.zip

RUN cd ./corevoikko-rel-libvoikko-4.3.2/libvoikko && wget https://www.puimula.org/htp/testing/voikko-snapshot-v5/dict-morpho.zip \
  && unzip dict-morpho.zip
COPY build.sh ./corevoikko-rel-libvoikko-4.3.2/libvoikko/js/

RUN chmod +x ./corevoikko-rel-libvoikko-4.3.2/libvoikko/js/build.sh
RUN /bin/bash -c "cd ./corevoikko-rel-libvoikko-4.3.2/libvoikko && ./autogen.sh && ./js/configure.sh && NODE_OPTIONS=--max_old_space_size=12000 js/build.sh embed"

FROM node:22-alpine AS minifier

COPY --from=builder /src/corevoikko-rel-libvoikko-4.3.2/libvoikko/js/libvoikko.js /libvoikko.js
COPY --from=builder /src/corevoikko-rel-libvoikko-4.3.2/libvoikko/typescript/libvoikko.d.ts /libvoikko.d.ts

RUN npm install terser -g
RUN terser --compress --mangle -- libvoikko.js > libvoikko.min.js


FROM scratch
COPY --from=minifier /libvoikko.min.js /libvoikko.min.js
COPY --from=minifier /libvoikko.js /libvoikko.js
COPY --from=minifier /libvoikko.d.ts /libvoikko.d.ts

