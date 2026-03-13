FROM debian:trixie-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    git \
    ruby \
    ruby-dev \
    build-essential \
    zlib1g-dev \
    libffi-dev \
    sudo \
    && rm -rf /var/lib/apt/lists/*

RUN gem install jekyll bundler --no-document

ENV BUNDLE_PATH="vendor/bundle"

WORKDIR /src

CMD ["/bin/bash"]