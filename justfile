docker-image := "benleppke/jekyll"
docker-flags := "--rm -v .:/src"

# Build site into _site/
build:
    docker run {{docker-flags}} {{docker-image}} \
        bash -c "bundle exec jekyll build"

# Dev server at localhost:4000
serve:
    docker run {{docker-flags}} -p 4000:4000 {{docker-image}} \
        bash -c "bundle exec jekyll serve --host 0.0.0.0"

# Verify site builds cleanly
check: build

# Rebuild the Docker image
docker-build:
    docker build -t {{docker-image}} .

# Remove generated and cached files
clean:
    rm -rf _site .jekyll-cache vendor
