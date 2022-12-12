FROM docker.io/khazu/anyreact:waldo-port

COPY ./src /app/src
COPY ./next.config.js /app/
COPY ./tailwind.config.js /app/
COPY ./postcss.config.js /app/
COPY ./public /app/public
COPY ./pages /app/pages
COPY ./styles /app/styles
