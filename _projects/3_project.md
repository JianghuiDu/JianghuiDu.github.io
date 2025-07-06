---
layout: page
title: Biogeochemical modeling
description: Modeling and quantifying biogeochemical processes and fluxes in the water column and sediments
<!--img: assets/img/7.jpg-->
<!--redirect: https://unsplash.com-->
importance: 3
category: work
---
<div class="card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab">
            <li class="nav-item">
                <a href="#project1" class="nav-link active" data-toggle="tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#Sed" class="nav-link" data-toggle="tab">SedTrace</a>
            </li>
            <li class="nav-item">
                <a href="#Nd" class="nav-link" data-toggle="tab">Nd</a>
            </li>
        </ul>
    </div>
      <!-- <img class="card-img-top img-fluid" src="/assets/img/SedTrace_project.jpg" alt="Card image cap"> -->
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project1">
                <h5 class="card-title">Modeling the sedimentary cycling of elements and isotopes</h5>
                <p class="card-text">
                                      <img class="img-fluid" src="/assets/img/SedTrace_project.jpg">

                </p>
            </div>
            <div class="tab-pane fade" id="Sed">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=gmd-2022-281] %}
                    </div>
                </p>
            </div>
            <div class="tab-pane fade" id="Nd">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=WOS:000863324200008] %}
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
                <a href="#Nd2" class="nav-link" data-toggle="tab">Nd isotopes</a>
            </li>
            <li class="nav-item">
                <a href="#Ni" class="nav-link" data-toggle="tab">Ni isotopes</a>
            </li>
        </ul>
    </div>
      <img class="card-img-top img-fluid" src="/assets/img/Ni_model_project.jpg" alt="Card image cap">
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project2">
                <h5 class="card-title">Modeling the distribution of elements and isotopes in the ocean</h5>
                <p class="card-text">
                </p>
            </div>
            <div class="tab-pane fade" id="Nd2">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=WOS:000551471300006] %}
                    </div>
                </p>
            </div>
            <div class="tab-pane fade" id="Ni">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[key=WOS:000820946400010] %}
                    </div>
                </p>
            </div>
        </div>
    </div>
</div>

<br>
