#!/bin/bash
export RUBYOPT="-E utf-8:utf-8"
exec bundle exec jekyll "$@"