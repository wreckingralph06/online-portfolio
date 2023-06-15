FROM docker.io/khazu/anyreact:waldo-port

COPY ./components /app/components
COPY ./next.config.js /app/
COPY ./package.json /app/
COPY ./pages /app/pages
COPY ./postcss.config.js /app/
COPY ./public /app/public
COPY ./styles /app/styles
COPY ./tailwind.config.js /app/

RUN npm i
RUN npm run build
