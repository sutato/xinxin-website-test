// Marks co-first (equal-contribution) authors with † in publication lists.
// Loaded from _pages/publications.md and _pages/about.md.
(() => {
  // BibTeX key → name of the other co-first author (Xinxin Yao is always marked too).
  const coFirstPapers = {
    cao2025fast: "Zhang Cao",
    xiao2025ultrasonics: "Yaohong Xiao",
  };

  const run = () => {
    let marked = false;

    Object.entries(coFirstPapers).forEach(([paperId, firstAuthor]) => {
      document.querySelectorAll(`[id="${paperId}"] .author`).forEach((authorLine) => {
        if (authorLine.dataset.coFirstMarked) return;
        authorLine.dataset.coFirstMarked = "true";
        marked = true;

        const firstTextNode = Array.from(authorLine.childNodes).find(
          (node) => node.nodeType === Node.TEXT_NODE && node.textContent.includes(firstAuthor)
        );

        if (firstTextNode) {
          const text = firstTextNode.textContent;
          const index = text.indexOf(firstAuthor);
          const fragment = document.createDocumentFragment();
          fragment.append(document.createTextNode(text.slice(0, index)));

          const highlightedAuthor = document.createElement("em");
          highlightedAuthor.className = "co-first-author";
          highlightedAuthor.textContent = firstAuthor;
          fragment.append(highlightedAuthor);

          const marker = document.createElement("sup");
          marker.textContent = "†";
          fragment.append(marker);
          fragment.append(document.createTextNode(text.slice(index + firstAuthor.length)));
          firstTextNode.replaceWith(fragment);
        }

        const xinxin = Array.from(authorLine.querySelectorAll("em")).find((element) => element.textContent.trim() === "Xinxin Yao");
        if (xinxin && !xinxin.nextElementSibling?.classList.contains("co-first-marker")) {
          const marker = document.createElement("sup");
          marker.className = "co-first-marker";
          marker.textContent = "†";
          xinxin.insertAdjacentElement("afterend", marker);
        }
      });
    });

    // Add the footnote under the first publication list if the page has none of its own.
    const firstList = document.querySelector(".publications");
    if (marked && firstList && !document.querySelector(".co-first-note")) {
      const note = document.createElement("p");
      note.className = "co-first-note";
      note.innerHTML = "<small><sup>†</sup> Equal contribution (co-first authors).</small>";
      firstList.insertAdjacentElement("afterend", note);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
