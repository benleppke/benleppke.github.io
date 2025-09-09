---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects-grid">
  {% for project in site.projects %}
    <div class="project-card">
      <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
      <p>{{ project.content | markdownify }}</p>
    </div>
  {% endfor %}
</div>
