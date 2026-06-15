---
layout: projects
title: Keeper Flatpak
permalink: /projects/keeper-flatpak/
source: https://gitlab.com/benleppke/keeper
summary: The Keeper Password Manager repackaged as a flatpak.
featured: true
---

Keeper packages their password manager as a DEB, RPM and Snap. I use an atomic Fedora spin (an immutable operating system), which meant I typically needed to run the application within a containerized environment like distrobox. While this worked well it wasn't a very polished experience and I decided to take a shot at packaging it as a flatpak.

That was a fairly easy process to build using the DEB and most of the work involved was configuring gitlab pages to host a public repository and properly GPG signing the package.

The gitlab CICD pipeline packages and publishes the flatpak, and has a weekly scheduled job that automatically checks for upstream package updates and creates a new pull request to include new changes.

I'm considering submitting this package to [Flathub](https://flathub.org) although I know their guidelines for unofficial packages have changed recently. If you found this project and would like me to submit it let me know!
