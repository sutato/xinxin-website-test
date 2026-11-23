---
layout: page
permalink: /publications/
title: publications
description: Journal articles and conference papers in battery manufacturing and additive manufacturing.
nav: true
nav_order: 2
---

<p class="pub-intro">
  Full record and citation metrics on <a href="https://scholar.google.com/citations?hl=en&user=BJ12R6oAAAAJ">Google Scholar</a>.
  <span class="pub-legend"><span class="pub-star" aria-hidden="true">★</span> Selected publication · <sup>†</sup> Equal contribution</span>
</p>

<div class="pub-toolbar">
  <div class="pub-filters btn-group" role="group" aria-label="Filter publications by research area">
    <button type="button" class="btn btn-sm btn-outline-primary active" data-pub-filter="all" aria-pressed="true">All</button>
    <button type="button" class="btn btn-sm btn-outline-primary" data-pub-filter="battery" aria-pressed="false">Battery Manufacturing</button>
    <button type="button" class="btn btn-sm btn-outline-primary" data-pub-filter="am" aria-pressed="false">Additive Manufacturing</button>
  </div>
  {% include bib_search.liquid %}
</div>

<div class="publications pub-list">

{% bibliography --group_by none %}

</div>

<p class="pub-empty-note text-muted" hidden>No publications match the current filter and search.</p>

{% comment %}
Area and "selected" flags live only in _bibliography/papers.bib (fields `area` and `selected`).
The gem's entry template does not expose custom fields, so the matching entry keys are rendered
into inert text/html blocks below. They are never shown, searched, or loaded as images; the
script only reads the entry ids out of them.
{% endcomment %}

<script type="text/html" id="pub-keys-battery">
{% bibliography --query @*[area=battery] --group_by none %}
</script>

<script type="text/html" id="pub-keys-am">
{% bibliography --query @*[area=am] --group_by none %}
</script>

<script type="text/html" id="pub-keys-selected">
{% bibliography --query @*[selected=true] --group_by none %}
</script>

<style>
  .pub-intro {
    margin-bottom: 1rem;
  }
  .pub-legend {
    display: block;
    font-size: 0.875rem;
    color: var(--global-text-color-light);
  }
  .pub-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
  .pub-filters {
    flex-wrap: wrap;
  }
  .pub-toolbar .bibsearch-form-input {
    flex: 1 1 12rem;
    margin: 0;
  }
  /* Text-only list: hide the thumbnail/venue column on this page only (About keeps its images). */
  .pub-list .abbr {
    display: none;
  }
  .pub-list .row > [class*="col-sm-"] {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .pub-list ol.bibliography li {
    margin-bottom: 0.75rem;
  }
  /* The title links to the DOI, so the separate DOI button row is not needed. */
  .pub-list .links {
    display: none;
  }
  .pub-list .title a {
    color: inherit;
  }
  .pub-list .title a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }
  .pub-star {
    color: var(--global-theme-color);
    font-size: 0.85em;
    margin-right: 0.3em;
  }
  .pub-list .pub-filtered {
    display: none !important;
  }
</style>

<script>
  (function () {
    function keysFrom(id) {
      var el = document.getElementById(id);
      if (!el) return {};
      var doc = new DOMParser().parseFromString(el.textContent, "text/html");
      var keys = {};
      doc.querySelectorAll(".bibliography > li [id]").forEach(function (n) {
        keys[n.id] = true;
      });
      return keys;
    }
    var areas = { battery: keysFrom("pub-keys-battery"), am: keysFrom("pub-keys-am") };
    var selected = keysFrom("pub-keys-selected");

    function entryKey(li) {
      var n = li.querySelector("[id]");
      return n ? n.id : "";
    }

    document.querySelectorAll(".pub-list .bibliography > li").forEach(function (li) {
      var title = li.querySelector(".title");
      if (!title) return;

      // Make the title the DOI link.
      var doi = li.querySelector('.links a[href*="doi.org/"]');
      if (doi) {
        var link = document.createElement("a");
        link.href = doi.href;
        link.target = "_blank";
        link.rel = "external nofollow noopener";
        while (title.firstChild) link.appendChild(title.firstChild);
        title.appendChild(link);
      }

      // Mark selected papers with a star before the title.
      if (!selected[entryKey(li)]) return;
      var star = document.createElement("span");
      star.className = "pub-star";
      star.textContent = "★";
      star.title = "Selected publication";
      star.setAttribute("aria-label", "Selected publication");
      title.insertBefore(star, title.firstChild);
    });

    // Show the empty-state note when the area filter and search leave nothing visible.
    function syncGroups() {
      var anyVisible = false;
      document.querySelectorAll(".pub-list ol.bibliography").forEach(function (ol) {
        var visible = ol.querySelectorAll(":scope > li:not(.pub-filtered):not(.unloaded)").length;
        if (visible) anyVisible = true;
      });
      document.querySelector(".pub-empty-note").hidden = anyVisible;
    }

    function applyFilter(area) {
      document.querySelectorAll("[data-pub-filter]").forEach(function (b) {
        var on = b.getAttribute("data-pub-filter") === area;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.querySelectorAll(".pub-list .bibliography > li").forEach(function (li) {
        var keep = area === "all" || !!areas[area][entryKey(li)];
        li.classList.toggle("pub-filtered", !keep);
      });
      syncGroups();
    }

    document.querySelectorAll("[data-pub-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        applyFilter(b.getAttribute("data-pub-filter"));
      });
    });

    // The search box (bibsearch.js) filters independently; re-sync year headings after it runs.
    document.addEventListener("DOMContentLoaded", function () {
      var input = document.getElementById("bibsearch");
      if (input) {
        input.addEventListener("input", function () {
          setTimeout(syncGroups, 350);
        });
      }
      window.addEventListener("hashchange", function () {
        setTimeout(syncGroups, 50);
      });
      setTimeout(syncGroups, 50);
    });

    applyFilter("all");
  })();
</script>
