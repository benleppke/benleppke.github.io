---
layout: projects
title: Projects
permalink: /projects/
---

A collection of open-source projects and other things that I like to spend my time on.

<div class="projects-grid">
  {% for project in site.projects %}
    <div class="project-card">
      <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
      <p>{{ project.summary | markdownify }}</p>
      {% if project.source %}
        <a href="{{ project.source }}" class="source-button" target="_blank">Source</a>
      {% endif %}
    </div>
  {% endfor %}
</div>
