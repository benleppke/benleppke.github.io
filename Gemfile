source "https://rubygems.org"

# Use the latest Jekyll and a modern version of the theme
gem "jekyll", "~> 4.3"

# Replace this with the actual gem for the Primer theme if it's not a plugin
gem "jekyll-theme-primer" 

# Or use the meta-gem for GitHub Pages compatibility
# gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.16" # Update this to a more recent version
end

# Keep these platform-specific gems if you're on these platforms
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0" # Update these too
  gem "tzinfo-data"
end

gem "webrick"