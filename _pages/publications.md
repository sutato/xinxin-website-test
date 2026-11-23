---
layout: page
permalink: /publications/
title: publications
description: "Developing predictive, physics-based computational frameworks to connect manufacturing process–microstructure–performance across metal additive manufacturing and battery manufacturing."
nav: true
nav_order: 2
---

<div class="pub-page">

<div class="pub-toolbar">
  <div class="pub-filters" role="group" aria-label="Filter publications by research area">
    <button type="button" class="pub-filter active" data-pub-filter="all" aria-pressed="true">All</button>
    <button type="button" class="pub-filter" data-pub-filter="battery" aria-pressed="false" title="Battery Manufacturing">Battery<span class="pub-long"> Manufacturing</span></button>
    <button type="button" class="pub-filter" data-pub-filter="am" aria-pressed="false" title="Additive Manufacturing">Additive<span class="pub-long"> Manufacturing</span></button>
  </div>
  <a class="pub-scholar" href="https://scholar.google.com/citations?hl=en&user=BJ12R6oAAAAJ" target="_blank" rel="noopener">Google Scholar ↗</a>
</div>

<p class="pub-legend"><span class="pub-star" aria-hidden="true">★</span> Selected publication · <sup>†</sup> Equal contribution · <sup>*</sup> Corresponding author</p>

<div class="publications pub-list">

{% bibliography --group_by none %}

</div>

</div>

{% comment %}
Area and "selected" flags live only in _bibliography/papers.bib (fields `area` and `selected`).
The gem's entry template does not expose custom fields, so the matching entry keys are rendered
into inert text/html blocks below. They are never shown or loaded as images; the script only
reads the entry ids out of them.
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
  .pub-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem 1rem;
    margin-bottom: 0.5rem;
  }
  .pub-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .pub-filter {
    padding: 0.25rem 0.8rem;
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--global-text-color);
    background: transparent;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    cursor: pointer;
  }
  .pub-filter:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .pub-filter.active {
    background: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: #fff;
  }
  .pub-scholar {
    margin-left: auto;
    font-size: 0.9rem;
  }
  .pub-legend {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    margin-bottom: 1rem;
  }
  /* Text-only list: hide the thumbnail/venue column on this page only (About keeps its images). */
  .pub-list .abbr,
  .pub-list .links {
    display: none;
  }
  .pub-list .row > [class*="col-sm-"] {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .pub-list ol.bibliography li {
    margin-bottom: 0.9rem;
  }
  .pub-list .title a {
    color: inherit;
  }
  .pub-list .title a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }
  .pub-list .pub-more {
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .pub-list .pub-more:hover {
    color: var(--global-theme-color);
  }
  /* Owner's name: bold instead of the theme's italic highlight. */
  .pub-list .author em {
    font-style: normal;
    font-weight: 700;
  }
  /* Count badge: grey with dark text by default, white with theme-colour text on the selected filter. */
  .pub-count {
    display: inline-block;
    min-width: 1.6em;
    margin-left: 0.45em;
    padding: 0 0.45em;
    font-size: 0.75em;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    border-radius: 999px;
    background: rgba(128, 128, 128, 0.18);
    color: var(--global-text-color);
  }
  .pub-filter.active .pub-count {
    background: #fff;
    color: var(--global-theme-color);
  }
  .pub-star {
    color: var(--global-theme-color);
    font-size: 0.85em;
    margin-right: 0.3em;
  }
  .pub-list .pub-filtered {
    display: none !important;
  }

  /* Phones: one tidy row of equal filters with short labels, Scholar link right under them,
     and the legend moved below the list as a footnote so the top stays short. */
  @media (max-width: 575.98px) {
    .pub-page {
      display: flex;
      flex-direction: column;
    }
    .pub-toolbar {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .pub-filters {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.4rem;
      width: 100%;
    }
    .pub-filter {
      padding: 0.3rem 0.4rem;
      font-size: 0.8rem;
      white-space: nowrap;
      text-align: center;
    }
    .pub-long {
      display: none;
    }
    .pub-scholar {
      margin-left: 0;
      font-size: 0.85rem;
    }
    .pub-legend {
      order: 3;
      margin: 0.5rem 0 0;
      font-size: 0.75rem;
    }
  }
</style>

<script>
  (function () {
    var SHOW_FIRST = 3; // authors shown before "et al."; the site owner is always kept visible

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

    // Shorten long author lists to "A, B, C, …, Owner, et al." (the owner always stays visible).
    // Clicking "…" or "et al." expands the full list.
    function shortenAuthors(div) {
      var full = div.innerHTML.trim();
      var names = full.split(/,\s*and\s+|,\s+|\s+and\s+/);
      if (names.length <= SHOW_FIRST + 1) return;
      var owner = names.findIndex(function (n) {
        return n.indexOf("<em>") !== -1;
      });
      var last = Math.max(SHOW_FIRST - 1, owner); // index of the last name shown
      var skipped = owner >= SHOW_FIRST ? owner - SHOW_FIRST : 0; // names hidden before the owner
      var trailing = names.length - 1 - last; // names hidden after the last shown name
      if (skipped + trailing === 0) return;

      function moreButton(label) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "pub-more";
        b.textContent = label;
        b.title = "Show all " + names.length + " authors";
        b.addEventListener("click", function () {
          div.innerHTML = full;
        });
        return b;
      }
      function addHTML(html) {
        div.insertAdjacentHTML("beforeend", html);
      }

      div.innerHTML = "";
      addHTML(names.slice(0, SHOW_FIRST).join(", "));
      if (owner >= SHOW_FIRST) {
        addHTML(", ");
        if (skipped > 0) {
          div.appendChild(moreButton("…"));
          addHTML(", ");
        }
        addHTML(names[owner]);
      }
      if (trailing > 0) {
        addHTML(", ");
        div.appendChild(moreButton("et al."));
      }
    }

    document.querySelectorAll(".pub-list .bibliography > li").forEach(function (li) {
      var title = li.querySelector(".title");
      var author = li.querySelector(".author");
      if (author) shortenAuthors(author);
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
    }

    document.querySelectorAll("[data-pub-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        applyFilter(b.getAttribute("data-pub-filter"));
      });
    });

    // Paper count on each filter button.
    var total = document.querySelectorAll(".pub-list .bibliography > li").length;
    document.querySelectorAll("[data-pub-filter]").forEach(function (b) {
      var f = b.getAttribute("data-pub-filter");
      var n = f === "all" ? total : Object.keys(areas[f] || {}).length;
      var c = document.createElement("span");
      c.className = "pub-count";
      c.textContent = n;
      b.appendChild(c);
    });

    applyFilter("all");
  })();
</script>
