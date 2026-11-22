---
layout: page
title: projects
permalink: /projects/
description: Research projects in battery manufacturing and metal additive manufacturing, tagged by the computational methods they use.
nav: true
nav_order: 3
display_categories: [battery manufacturing, metal additive manufacturing]
horizontal: true
---

Projects are grouped by application area. The tags on each project show the computational methods behind it; the same multiscale, multiphysics, and physics-informed AI capabilities run across both areas.

<style>
  .projects .method-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.5rem;
  }
  .projects .method-tag {
    font-size: 0.75rem;
    line-height: 1.4;
    padding: 0.1rem 0.5rem;
    border: 1px solid var(--global-theme-color);
    border-radius: 999px;
    color: var(--global-theme-color);
    white-space: nowrap;
  }
</style>

<div class="projects">
{% for category in page.display_categories %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <a id="{{ category | slugify }}" href=".#{{ category | slugify }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      <div class="col mb-4">
        <a href="{{ project.url | relative_url }}">
          <div class="card h-100 hoverable">
            <div class="card-body">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-text">{{ project.description }}</p>
              {% if project.methods %}
                <div class="method-tags">
                  {% for method in project.methods %}
                    <span class="method-tag">{{ method }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
    </div>
  </div>
{% endfor %}
</div>
