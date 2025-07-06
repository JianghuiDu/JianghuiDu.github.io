---
layout: page
title: Paleoceanography and Paleoclimatology
description: Using records of ocean chemistry to study past global changes
<!--img: assets/img/3.jpg-->
importance: 2
category: work
<!--giscus_comments: true-->
---

<div class="card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab">
            <li class="nav-item">
                <a href="#project1" class="nav-link active" data-toggle="tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#Circulation" class="nav-link" data-toggle="tab">Circulation</a>
            </li>
        </ul>
    </div>
      <img class="card-img-top img-fluid" src="/assets/img/circulation_project.png" alt="Card image cap">
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project1">
                <h5 class="card-title">Global overturning circulation during the last deglaciation</h5>
                <p class="card-text">
                </p>
            </div>
            <div class="tab-pane fade" id="Circulation">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=Ocean_circulation] %}
                    </div>
                </p>
            </div>
        </div>
    </div>
</div>

<br>


<div class="card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab">
            <li class="nav-item">
                <a href="#project2" class="nav-link active" data-toggle="tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#Deoxygenation" class="nav-link" data-toggle="tab">Deoxygenation</a>
            </li>
        </ul>
    </div>
      <img class="card-img-top img-fluid" src="/assets/img/deoxygenation_project.jpg" alt="Card image cap">
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project2">
                <h5 class="card-title">North Pacific deoxygenation during the last deglaciation</h5>
                <p class="card-text">
                </p>
            </div>
            <div class="tab-pane fade" id="Deoxygenation">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=Deoxygenation] %}
                    </div>
                </p>
            </div>
        </div>
    </div>
</div>

<br>


<div class="card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab">
            <li class="nav-item">
                <a href="#project3" class="nav-link active" data-toggle="tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#NP" class="nav-link" data-toggle="tab">North Pacific</a>
            </li>
        </ul>
    </div>
      <img class="card-img-top img-fluid" src="/assets/img/NP_project.jpeg" alt="Card image cap">
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project3">
                <h5 class="card-title">North Pacific paleoceanography during the last deglaciation</h5>
                <p class="card-text">
                </p>
            </div>
            <div class="tab-pane fade" id="NP">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=Ice_sheet] %}
                    </div>
                </p>
            </div>
        </div>
    </div>
</div>

<br>
