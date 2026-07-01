---
layout: projects
title: Papirus Folder Icons
permalink: /projects/papirus-folder-icons/
source: https://gitlab.com/benleppke/papirus-folder-icons
summary: An expanded set of custom folder icons for the [Papirus Icon Theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) built with python.
featured: true
---

I only set out to make a couple of folder icons, but once you're automating things it's easy to get carried away. I use the [Papirus Icon](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) theme on my workstations. Not only is it a great Material Design inspired theme it is also *extensive*, with folder color palletes to match almost every linux distribution or desktop environment.

You'd think this would be enough for me, but it was not.

I wanted more symbolic icons for my folders and I was getting tired of making them one at a time, particularly when I foolishly decided I wanted to use different colors across my various workstations which meant I needed even more. I thought *What if I just put every symbolic icon on every folder color and just made every possible combination all at once?*

At first I thought I'd have to use some sort of scripted workflow with a desktop graphics editor like Inkscape but it turns out it's fairly easy to scale and position SVG icons entirely in python.

With that in mind I just had to grab every free icon from [Font Awesome](https://fontawesome.com/) and run it through a script. The only major hurdle were a few inconsistencies around the *viewspace* of the symbolics. Because scalable vectors are... well... scalable... It's not always obvious how to resize them and position them to look visually correct.

I was able to set a few constraints to handle very tall or thin symbolics but I did still need to manually create a series of overrides to get the end result to look correct. I'd still like to find a more reliable way to calculate the proper scaling ratio without having to include this.

Not that I'm planning to add any more icons... Well maybe just one more.