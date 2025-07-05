---
layout: page
permalink: /resources/
title: resources
description: Code and data created by my research.
nav: true
nav_order: 3
# related_publications: WOS:000878271000018
  # bibliography: papers.bib

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
<br>

## Data
<div class="card border-light" style="width: 90%;">
  <div class="card-body" style="margin-bottom: 1px; padding-bottom: 0">
  <h5 class="card-title">Northeast Pacific deoxygenation and volcanism during the last deglaciation.</h5>
  <h6 class="card-subtitle mb-2 text-muted"><a href="https://doi.org/10.5281/zenodo.7006610"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.7006610.svg" alt="DOI" width="200"></a></h6>
<p class="card-text"><div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=WOS:000878271000018] %}
</div>
</p>
</div>
</div>
<br>

<div class="card border-light" style="width: 90%;">
  <div class="card-body"  style="margin-bottom: 1px; padding-bottom: 0">
  <h5 class="card-title">Models of the early diagenesis of neodymium and its radiogenic isotope at deep-sea site HH3000, Oregon margin, Northeast Pacific.
  </h5>
  <h6 class="card-subtitle mb-2 text-muted">
<a href="https://doi.org/10.5281/zenodo.6998239"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.6998239.svg" alt="DOI" width="200"></a>
  </h6>
<p class="card-text"><div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=WOS:000863324200008] %}
</div>
</p>
</div>
</div>
<br>

<div class="card border-light" style="width: 90%; margin-bottom: 1px; padding-bottom: 0">
  <div class="card-body"  style="margin-bottom: 1px; padding-bottom: 0">
  <h5 class="card-title">ODP Site 807 benthic foraminiferal carbon and oxygen isotopes during the early Pleistocene.
  </h5>
  <h6 class="card-subtitle mb-2 text-muted" >
<a href="https://doi.org/10.5281/zenodo.6735636"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.6735636.svg" alt="DOI" width="200"></a>
  </h6>
<p class="card-text">
<div class="publications">
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=WOS:000390648400001] %}
</div>
</p>
</div>
</div>
