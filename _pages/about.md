---
layout: about
title: about
permalink: /
subtitle: Assistant Research Scientist · Mechanical Engineering · University of Michigan

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am an Assistant Research Scientist in the Department of Mechanical Engineering at the University of Michigan. My research focuses on developing physics-based and AI-accelerated computational frameworks to understand and optimize advanced manufacturing processes, with an emphasis on battery electrode manufacturing and metal additive manufacturing.

My work integrates multiscale modeling, multiphysics simulations, and machine learning to establish quantitative relationships between manufacturing processes, microstructure evolution, and material performance. I have developed computational approaches spanning particle-scale interactions, continuum transport, solidification and grain evolution, and data-driven surrogate modeling.

Through collaborations with academic institutions, national laboratories, and industry partners, I aim to translate computational advances into practical solutions for manufacturing process design and optimization.

### Research highlights

- **29 peer-reviewed journal articles**, including **12 as first or co-first author** (10 first-author, 2 co-first<sup>†</sup>), plus 1 first-author ASME MSEC conference paper
- **Selected venues:** _Science Advances_<sup>†</sup>, _Advanced Energy Materials_<sup>†</sup>, _Acta Materialia_, _Energy Storage Materials_, _International Journal of Mechanical Sciences_, _Chemical Engineering Journal_
- **Collaborations:** General Motors Global R&D, Pacific Northwest National Laboratory, and the DARPA SURGE program with Texas A&M University and AlphaSTAR
- **Methods:** phase-field, CALPHAD, crystal plasticity, CFD–DEM, coarse-grained molecular dynamics, and Gaussian-process surrogate modeling with uncertainty quantification

<small><sup>†</sup> Equal contribution (co-first author).</small>

### Research areas

**Battery electrode manufacturing** — I model how drying conditions in industrial roll-to-roll and laser-assisted processes shape electrode microstructure, binder distribution, and quality. The aim is physics-based guidance for selecting drying settings, developed in collaboration with General Motors Global R&D.

**Metal additive manufacturing** — I study solidification and grain selection in laser-based metal additive manufacturing to predict and control the grain structure of printed parts. Physics-informed machine learning reduces the most expensive thermodynamic calculations by roughly two orders of magnitude, as part of the DARPA SURGE program.

**Computational framework development** — Underlying both areas, I build multiscale, multiphysics simulation frameworks and physics-informed AI surrogates that link manufacturing processes to microstructure and performance. These frameworks are designed to transfer to new materials and processes.

Specific studies are described on the [projects]({{ '/projects/' | relative_url }}) page, grouped by area and tagged by method.

I am interested in research and industry opportunities involving **computational science, battery R&D, modeling & simulation, and advanced manufacturing**.

<style>
  /* Selected papers: the title links to the DOI, so the DOI button is removed. */
  .publications .title a {
    color: inherit;
  }
  .publications .title a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".publications .bibliography > li").forEach(function (li) {
      var title = li.querySelector(".title");
      var doi = li.querySelector('.links a[href*="doi.org/"]');
      if (!title || !doi) return;
      var link = document.createElement("a");
      link.href = doi.href;
      link.target = "_blank";
      link.rel = "external nofollow noopener";
      while (title.firstChild) link.appendChild(title.firstChild);
      title.appendChild(link);
      var links = doi.parentNode;
      doi.remove();
      if (!links.querySelector("a, button")) links.remove();
    });
  });
</script>
