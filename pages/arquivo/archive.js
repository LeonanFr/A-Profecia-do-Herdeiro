document.addEventListener("DOMContentLoaded", function () {
  const archiveNav = document.getElementById("archiveNavigation");
  const archiveSections = document.getElementById("archiveSections");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (
        !menuToggle.contains(e.target) &&
        !navMenu.contains(e.target) &&
        navMenu.classList.contains("active")
      ) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  function initializeNavigation() {
    ArchiveData.sections.forEach((section, index) => {
      const button = document.createElement("button");
      button.className = `archive-nav-btn ${index === 0 ? "active" : ""}`;
      button.setAttribute("data-section", section.id);
      button.innerHTML = `
                <i class="${section.icon}"></i>
                <span>${section.title}</span>
            `;

      button.addEventListener("click", () => {
        if (menuToggle && navMenu && navMenu.classList.contains("active")) {
          menuToggle.classList.remove("active");
          navMenu.classList.remove("active");
        }

        document.querySelectorAll(".archive-nav-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        loadSection(section.id);
      });

      archiveNav.appendChild(button);
    });
  }

  function loadSection(sectionId) {
    archiveSections.innerHTML = "";

    const sectionData = ArchiveData.sections.find((s) => s.id === sectionId);

    if (!sectionData) return;

    const sectionElement = document.createElement("section");
    sectionElement.id = sectionId;
    sectionElement.className = "archive-section active";

    sectionElement.innerHTML = `
            <div class="section-header">
                <h2><i class="${sectionData.icon}"></i> ${sectionData.title.toUpperCase()}</h2>
                <p class="section-subtitle">${sectionData.subtitle}</p>
            </div>
        `;

    const contentContainer = document.createElement("div");
    contentContainer.className = "section-content";

    switch (sectionId) {
      case "cartas":
        loadDocuments(contentContainer);
        break;
      case "bestiario":
        loadBestiary(contentContainer);
        break;
      case "glossario":
        loadGlossary(contentContainer);
        break;
      case "reliquias":
        loadRelics(contentContainer);
        break;
      case "timeline":
        loadTimeline(contentContainer);
        break;
    }

    sectionElement.appendChild(contentContainer);
    archiveSections.appendChild(sectionElement);
  }

  function loadDocuments(container) {
    const grid = document.createElement("div");
    grid.className = "documents-grid";

    ArchiveData.documents.forEach((doc) => {
      const card = document.createElement("div");
      card.className = "document-card";
      card.innerHTML = `
                <div class="document-header">
                    <span class="document-date">${doc.date}</span>
                    <span class="document-type">${doc.type}</span>
                </div>
                <h3 class="document-title">${doc.title}</h3>
                <p class="document-excerpt">${doc.excerpt}</p>
                <div class="document-footer">
                    <span class="document-author">${doc.author}</span>
                    <button class="document-view-btn" data-doc-id="${doc.id}">Ler Fragmento</button>
                </div>
            `;

      const viewBtn = card.querySelector(".document-view-btn");
      viewBtn.addEventListener("click", () => openModal(doc));

      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  function loadBestiary(container) {
    const bestiaryContainer = document.createElement("div");
    bestiaryContainer.className = "bestiary-container";

    ArchiveData.bestiary.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.className = "creature-category";
      categoryElement.innerHTML = `
                <h3 class="category-title">${category.category}</h3>
                <p class="category-desc">${category.description}</p>
            `;

      category.creatures.forEach((creature) => {
        const creatureCard = document.createElement("div");
        creatureCard.className = "creature-card";

        let dangerDots = "";
        for (let i = 0; i < 5; i++) {
          dangerDots += `<span class="danger-dot ${i < creature.dangerLevel ? "active" : ""}"></span>`;
        }

        creatureCard.innerHTML = `
                    <div class="creature-image">
                        <img src="${creature.imageUrl}" alt="${creature.name}" class="creature-symbol">
                    </div>
                    <div class="creature-info">
                        <h4>${creature.name}</h4>
                        <p class="creature-description">${creature.description}</p>
                        <div class="creature-details">
                            <div class="detail">
                                <span class="detail-label">Perigo:</span>
                                <div class="danger-level">${dangerDots}</div>
                            </div>
                            <div class="detail">
                                <span class="detail-label">Localização:</span>
                                <span class="detail-value">${creature.location}</span>
                            </div>
                            <div class="detail">
                                <span class="detail-label">Primeiro Avistamento:</span>
                                <span class="detail-value">${creature.firstSighting}</span>
                            </div>
                        </div>
                    </div>
                `;

        categoryElement.appendChild(creatureCard);
      });

      bestiaryContainer.appendChild(categoryElement);
    });

    container.appendChild(bestiaryContainer);
  }

  function loadGlossary(container) {
    const glossaryContainer = document.createElement("div");
    glossaryContainer.className = "glossary-container";

    ArchiveData.glossary.forEach((term) => {
      const termElement = document.createElement("div");
      termElement.className = "glossary-term";
      termElement.innerHTML = `
                <div class="term-header">
                    <div class="term-symbol">
                        <img src="${term.imageUrl ? term.imageUrl : "../../assets/images/rune.png"}" alt="${term.name}" class="term-symbol-img">
                    </div>
                    <div>
                        <h3 class="term-name">${term.name}</h3>
                        <p class="term-origin">Origem: ${term.origin}</p>
                    </div>
                </div>
                <p class="term-definition">${term.definition}</p>
                <div class="term-usage">"${term.usage}"</div>
            `;

      glossaryContainer.appendChild(termElement);
    });

    container.appendChild(glossaryContainer);
  }

  function loadRelics(container) {
    const relicsGrid = document.createElement("div");
    relicsGrid.className = "relics-grid";

    ArchiveData.relics.forEach((relic) => {
      const relicCard = document.createElement("div");
      relicCard.className = "relic-card";

      let powersHTML = "";
      relic.powers.forEach((power) => {
        powersHTML += `
                    <div class="power-item">
                        <i class="fas fa-circle"></i>
                        <span>${power}</span>
                    </div>
                `;
      });

      relicCard.innerHTML = `
                <div class="relic-image">
                    <i class="${relic.icon} relic-icon"></i>
                </div>
                <div class="relic-info">
                    <h3 class="relic-name">${relic.name}</h3>
                    <span class="relic-status">${relic.status}</span>
                    <p class="relic-description">${relic.description}</p>
                    <div class="relic-powers">${powersHTML}</div>
                </div>
            `;

      relicsGrid.appendChild(relicCard);
    });

    container.appendChild(relicsGrid);
  }

  function loadTimeline(container) {
    const timelineContainer = document.createElement("div");
    timelineContainer.className = "timeline-container";

    const timeline = document.createElement("div");
    timeline.className = "timeline";

    ArchiveData.timeline.forEach((event) => {
      const eventElement = document.createElement("div");
      eventElement.className = "timeline-event";

      let tagsHTML = "";
      event.tags.forEach((tag) => {
        tagsHTML += `<span class="event-tag">${tag}</span>`;
      });

      eventElement.innerHTML = `
                <div class="event-date">${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-tags">${tagsHTML}</div>
            `;

      timeline.appendChild(eventElement);
    });

    timelineContainer.appendChild(timeline);
    container.appendChild(timelineContainer);
  }

  function openModal(data) {
    modalContent.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">${data.title}</h2>
                <div class="modal-subtitle">
                    <span>${data.date}</span>
                    <span>${data.type}</span>
                </div>
            </div>
            <div class="modal-body">
                ${
                  data.fullContent ||
                  `
                    <p>${data.excerpt}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                `
                }
                <div class="modal-signature">— ${data.author}</div>
            </div>
        `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  initializeNavigation();

  if (ArchiveData.sections.length > 0) {
    loadSection(ArchiveData.sections[0].id);
  }
});
