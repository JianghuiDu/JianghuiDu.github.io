---
layout: page
permalink: /repositories/
title: resources
description: Code and data created by my research.
nav: true
nav_order: 3
---
<!-- 
## GitHub users

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div> -->

<!-- --- -->
<!-- 
{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
  {% if site.data.repositories.github_users.size > 1 %}
  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.html username=user %}
  </div>

  ---

{% endfor %}
{% endif %}
{% endif %} -->

## Code

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}

## Data
<a href="https://zenodo.org/record/7006610" title=""><img src="https://blog.zenodo.org/static/img/logos/zenodo-gradient-1000.png" width="100%" style="max-width: 850px;" alt=""></a><br>Provided by <a href="https://zenodo.org" target="_blank">Zenodo</a>

