---
layout: projects
title: Keeper Flatpak
permalink: /projects/keeper-flatpak/
source: https://gitlab.com/benleppke/keeper
summary: The Keeper Password Manager repackaged as a flatpak.
featured: true
---

Keeper Security distributes their password manager as a DEB, RPM and Snap. However, I use an immutable Linux distribution which can complicate installing packages like this. Initially I ran the application within podman/distrobox which worked well enough, but was a bit of a pain to manage. I decided to take a shot at packaging it as a flatpak.

Building the flatpak using the DEB package was fairly straightforward even for my first time building flatpaks. Most of the heavy lifting was configuring GitLab Pages to host a public repository and properly GPG-signing the package.

The part I'm most pleased with is the automatic updates I configured with the gitlab CI [pipeline](https://gitlab.com/benleppke/keeper/-/blob/main/.gitlab-ci.yml?ref_type=heads) and [yaml manifest](https://gitlab.com/benleppke/keeper/-/blob/main/io.gitlab.benleppke.KeeperPasswordManager.yml?ref_type=heads). Because this project is not built from source, the deb file is passed as `extra-data` in the form of a URL that is downloaded at build time from the Keeper website. This means it's trivial to run a weekly scheduled pipeline that checks the Keeper website for a deb with a newer version. If it finds one, it then updates the manifest, and makes a pull request, which kicks off a build. When the build completes successfully the pull request is merged and a new version is published to the repo.

I worried this might be a brittle solution but it's now published 11 new versions successfully. I get a real sense of joy any time I see new updates on my workstation even though I haven't touched this repo in months. 

I'm considering submitting this package to [Flathub](https://flathub.org) although I know their guidelines for unofficial packages have changed recently. If you found this project and would like me to submit it let me know!
