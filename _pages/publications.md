---
layout: page
permalink: /publications/
title: publications
description: Selected and complete publications in battery manufacturing, additive manufacturing, computational materials science, and physics-informed AI.
nav: true
nav_order: 2
---

My research spans **battery manufacturing**, **additive manufacturing**, **computational materials science**, and **physics-informed AI**. For citation metrics and the most up-to-date publication record, please visit my [Google Scholar profile](https://scholar.google.com/citations?hl=en&user=BJ12R6oAAAAJ).

## Selected publications

Representative work in my two research thrusts.

### Battery manufacturing

<div class="publications">

{% bibliography --query @*[selected=true,area=battery] --group_by none %}

</div>

### Additive manufacturing

<div class="publications">

{% bibliography --query @*[selected=true,area=am] --group_by none %}

</div>

<p><small><sup>†</sup> Equal contribution (co-first authors).</small></p>

## Complete publication list

The complete list includes the selected publications above together with additional journal articles and conference papers. Browse by research area or by year, or use the search box to find papers by topic, title, venue, or year.

<div class="pub-view-toggle btn-group mb-3" role="group" aria-label="Organize publications by">
  <button type="button" class="btn btn-sm btn-outline-primary active" data-pub-view="area" aria-pressed="true">Research area</button>
  <button type="button" class="btn btn-sm btn-outline-primary" data-pub-view="year" aria-pressed="false">Year</button>
</div>

{% include bib_search.liquid %}

<div id="pub-view-area" class="pub-view">

<h3 class="pub-area-heading">Battery manufacturing &amp; energy storage</h3>

<div class="publications">

{% bibliography --query @*[area=battery] --group_by none %}

</div>

<h3 class="pub-area-heading">Additive manufacturing</h3>

<div class="publications">

{% bibliography --query @*[area=am] --group_by none %}

</div>

<h3 class="pub-area-heading">Other materials processing</h3>

<div class="publications">

{% bibliography --query @*[area=other] --group_by none %}

</div>

</div>

<div id="pub-view-year" class="pub-view" hidden>

<div class="publications">

{% bibliography %}

</div>

</div>

<style>
  .pub-view-toggle .btn {
    min-width: 7.5rem;
  }
  .pub-area-heading.unloaded {
    display: none;
  }
</style>

<script>
  (function () {
    var buttons = document.querySelectorAll("[data-pub-view]");
    function show(view) {
      buttons.forEach(function (b) {
        var on = b.getAttribute("data-pub-view") === view;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.getElementById("pub-view-area").hidden = view !== "area";
      document.getElementById("pub-view-year").hidden = view !== "year";
      try {
        localStorage.setItem("pub-view", view);
      } catch (e) {}
    }
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        show(b.getAttribute("data-pub-view"));
      });
    });
    try {
      var saved = localStorage.getItem("pub-view");
      if (saved === "year" || saved === "area") show(saved);
    } catch (e) {}

    // Hide a research-area heading when the search box filters out all of its papers.
    function syncAreaHeadings() {
      document.querySelectorAll(".pub-area-heading").forEach(function (h) {
        var list = h.nextElementSibling && h.nextElementSibling.querySelector(".bibliography");
        if (!list) return;
        var total = list.querySelectorAll(":scope > li").length;
        var hidden = list.querySelectorAll(":scope > li.unloaded").length;
        h.classList.toggle("unloaded", total > 0 && hidden === total);
      });
    }
    document.addEventListener("DOMContentLoaded", function () {
      var input = document.getElementById("bibsearch");
      if (input) {
        input.addEventListener("input", function () {
          setTimeout(syncAreaHeadings, 400);
        });
      }
      window.addEventListener("hashchange", function () { setTimeout(syncAreaHeadings, 50); });
      setTimeout(syncAreaHeadings, 50);
    });
  })();
</script>
