---
layout: page
title: Ocean and Sediment Biogeochemistry
description: Understanding the oceanic budgets and fluxes of elements and isotopes
# img: assets/img/12.jpg
importance: 1
# category: work
# related_publications: einstein1956investigations, einstein1950meaning
---

<div class="card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab">
            <li class="nav-item">
                <a href="#project1" class="nav-link active" data-toggle="tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#Nd" class="nav-link" data-toggle="tab">Nd isotopes</a>
            </li>
            <li class="nav-item">
                <a href="#REE" class="nav-link" data-toggle="tab">REE</a>
            </li>
        </ul>
    </div>
      <img class="card-img-top img-fluid" src="/assets/img/Nd_project.jpg" alt="Card image cap">
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project1">
                <h5 class="card-title">Rare Earth Elements and radiogenic Nd isotope composition</h5>
                <p class="card-text">
                    The radiogenic isotope composition (εNd) of Neodymium (Nd, one of the REE) is a key tracer of ocean circulation and water mass distribution, but it has long been recognized that the river and dust inputs are insufficient to balance the oceanic Nd budget. Using laboratory experiments and ocean diagnostic models my research showed that the sediment-water interface is the primary source of marine Nd and REE. This has led to a new approach of using the non-conservative component of εNd to trace ocean circulation rate.
                </p>
            </div>
            <div class="tab-pane fade" id="Nd">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=Nd_isotopes] %}
                    </div>
                </p>
            </div>
            <div class="tab-pane fade" id="REE">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=REE] %}
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
                <a href="#project" class="nav-link active" data-toggle="tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#Ni" class="nav-link" data-toggle="tab">Ni isotopes</a>
            </li>
        </ul>
    </div>
      <img class="card-img-top img-fluid" src="/assets/img/Ni_project.jpg" alt="Card image cap">
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project">
                <h5 class="card-title">Transition metals and their stable isotopes</h5>
                <p class="card-text">
                    Transition metals such as Ni are essential nutrients that serve as metal co-factors in vital enzymes in marine organisms. The stable isotopes of transition metals thus have strong potentials to help us better understand the marine ecosystem functioning and the carbon cycle. However, transition metals also face the problem of budgetary imbalance. Together with collaborators, I have modeled how the composition of the phytoplankton community controls the distribution of Ni isotopes in the ocean and showed that Ni may play a key role in nitrogen fixation. I am currently co-supervising a Ph.D. project to quantify the sedimentary fluxes and processes of Ni, Cu, and Zn in a variety of sedimentary settings.
                </p>
            </div>
            <div class="tab-pane fade" id="Ni">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=Ni_isotopes] %}
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
                <a href="#project" class="nav-link active" data-toggle="tab" id = "project-tab" role = "tab">project</a>
            </li>
            <li class="nav-item">
                <a href="#Be" class="nav-link" data-toggle="tab" id = "Be-tab" role = "tab" >Be isotopes</a>
            </li>
        </ul>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="project" role="tabpanel" aria-labelledby="project-tab">
                <h5 class="card-title">Other trace elements and isotopes</h5>
                <p class="card-text">
                I have collaborated with other researchers to study a variety of trace elements and isotopes. Some of them are listed here.
                </p>
            </div>
            <div class="tab-pane fade" id="Be"  role="tabpanel" aria-labelledby="Be-tab">
                <h5 class="card-title">Related publications</h5>
                <p class="card-text">
                    <div class="publications">
                        {% bibliography -f {{ site.scholar.bibliography }} -q @*[tag=Be_isotopes] %}
                    </div>
                </p>
            </div>
        </div>
    </div>
</div>

<br>