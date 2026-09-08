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

A curated selection of representative work most closely aligned with my current research directions.

<div class="publications">

{% bibliography --query @*[selected=true] %}

</div>

<p><small><sup>†</sup> Equal contribution (co-first authors).</small></p>

## Complete publication list

The complete list below includes the selected publications above together with additional journal articles, conference papers, preprints, and dissertation work. Use the search box to quickly find papers by topic, title, venue, or year.

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<script>
  (() => {
    const coFirstPapers = {
      cao2025fast: 'Zhang Cao',
      xiao2025ultrasonics: 'Yaohong Xiao',
    };

    Object.entries(coFirstPapers).forEach(([paperId, firstAuthor]) => {
      document.querySelectorAll(`[id="${paperId}"] .author`).forEach((authorLine) => {
        const firstTextNode = Array.from(authorLine.childNodes).find(
          (node) => node.nodeType === Node.TEXT_NODE && node.textContent.includes(firstAuthor),
        );

        if (firstTextNode) {
          const text = firstTextNode.textContent;
          const index = text.indexOf(firstAuthor);
          const fragment = document.createDocumentFragment();
          fragment.append(document.createTextNode(text.slice(0, index)));

          const highlightedAuthor = document.createElement('em');
          highlightedAuthor.className = 'co-first-author';
          highlightedAuthor.textContent = firstAuthor;
          fragment.append(highlightedAuthor);

          const marker = document.createElement('sup');
          marker.textContent = '†';
          fragment.append(marker);
          fragment.append(document.createTextNode(text.slice(index + firstAuthor.length)));
          firstTextNode.replaceWith(fragment);
        }

        const xinxin = Array.from(authorLine.querySelectorAll('em')).find(
          (element) => element.textContent.trim() === 'Xinxin Yao',
        );
        if (xinxin && !xinxin.nextElementSibling?.classList.contains('co-first-marker')) {
          const marker = document.createElement('sup');
          marker.className = 'co-first-marker';
          marker.textContent = '†';
          xinxin.insertAdjacentElement('afterend', marker);
        }
      });
    });
  })();
</script>
