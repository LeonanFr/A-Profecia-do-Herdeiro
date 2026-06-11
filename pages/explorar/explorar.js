class ExplorePage {
  constructor() {
    this.currentMode = "atlas";
    this.map = null;
    this.currentSedeIndex = 0;
    this.currentPlaceIndex = 0;
    this.mapInitialized = false;
    this.isMobile = window.innerWidth <= 768;

    this.allSedes = [
      {
        lat: 51.3,
        lng: -0.1278,
        nome: "Sede Inglesa da Ordem",
        status: "inoperante",
        descricao:
          "Escondida por magia rúnica no coração de uma floresta ao sul de Londres, foi o último lar de Ariel Sheridan e a linha de frente do massacre de 2004.",
        fundador: "Ordem dos Guardiões",
        detalhes:
          "O castelo foi o palco da última resistência de Ariel antes de esconder seus filhos. Abriga um salão de guerra ornamentado e uma varanda histórica. Destruída na ofensiva demoníaca global.",
        membrosNotaveis: [
          "Ariel Sheridan",
          "Arthuro Blake",
          "Steven",
          "Iron",
          "Ava",
        ],
        anoFundacao: "Desconhecido",
        ultimoContato: "29 de novembro de 2004",
      },
      {
        lat: -1.4558,
        lng: -48.4902,
        nome: "Sede Brasileira - O Último Refúgio",
        status: "active",
        descricao:
          "A mais poderosa e a única sede que restou de pé. Escondida no meio da selva amazônica, abriga os refugiados sob uma barreira de energia de um cristal puro.",
        fundador: "Ordem dos Guardiões",
        detalhes:
          "Possui arquitetura de igreja gótica disfarçada pela vegetação. Sobreviveu expulsando os demônios de seu território, liderada por Miguel. Abriga milhares em acomodações improvisadas.",
        membrosNotaveis: [
          "Miguel",
          "Helena Carvalho",
          "Carlos Silva",
          "Nicholas Naidoo",
        ],
        anoFundacao: "Desconhecido",
        ultimoContato: "Presente",
      },
      {
        lat: 56.1304,
        lng: -106.3468,
        nome: "Castelo Abandonado do Canadá",
        status: "inoperante",
        descricao:
          "Sede abandonada situada em uma porção de terra elevada, com vista para extensos pinhais. Local onde a essência do guardião Cassiel foi preservada em sua espada.",
        fundador: "Ordem dos Guardiões",
        detalhes:
          "O castelo continha uma biblioteca preservada e armaduras enferrujadas. Foi restaurado temporariamente por um feitiço de restauração acidental lançado por Peter.",
        membrosNotaveis: ["Cassiel"],
        anoFundacao: "Desconhecido",
        ultimoContato: "Fevereiro de 1956",
      },
      {
        lat: 40.7128,
        lng: -74.006,
        nome: "Sede Norte-Americana",
        status: "inoperante",
        descricao:
          "Base importante que chegou a ser reconquistada bravamente pelas tropas, mas sucumbiu à falta de suprimentos e aos contínuos ataques das forças das sombras.",
        fundador: "Ordem dos Guardiões",
        detalhes:
          "A queda brutal desta sede e de Paris marcou o início do declínio irreversível da Ordem e da fé na Chama, culminando no isolamento e massacre de 2004.",
        membrosNotaveis: ["Ordem dos Guardiões"],
        anoFundacao: "Desconhecido",
        ultimoContato: "Novembro de 2004",
      },
    ];

    this.allPlaces = [
      {
        id: 1,
        nome: "Casa 12 da Lyndhurst Square",
        tipo: "real",
        categoria: "Urbano",
        descricao:
          "A imponente casa vitoriana verde musgo em Londres, refúgio secreto e lar da imortal Ariadne.",
        detalhes:
          "Protegida por magia, sua entrada só é revelada ao girar a maçaneta em formato de chama. O salão interno abrigava portais flutuantes que interligavam as bases do mundo inteiro.",
        imagem: "../../assets/images/lyndhurst.jpg",
        coordenadas: { lat: 51.4722, lng: -0.076 },
      },
      {
        id: 2,
        nome: "Durham (Avenida Westhouse)",
        tipo: "real",
        categoria: "Urbano",
        descricao:
          "A pacata cidade no nordeste da Inglaterra onde os gêmeos Sheridan viveram protegidos entre os humanos.",
        detalhes:
          "Cercada por florestas espessas e lagos, a casa simplória de Amélia e John foi cercada por um escudo de energia por quase 18 anos, ocultando os gêmeos do mundo sombrio.",
        imagem: "../../assets/images/durham.jpg",
        coordenadas: { lat: 54.7753, lng: -1.5849 },
      },
      {
        id: 3,
        nome: "Cidade dos Sonhos Perdidos",
        tipo: "ficticio",
        categoria: "Urbano",
        descricao:
          "Uma cidadela mágica banhada por múltiplos sóis coloridos, servindo de morada para seres supraterrenos banidos.",
        detalhes:
          "Acessada através do portal na Cascata Norvan. Foi erguida pelos exilados fugindo da humanidade. Lá fica a taverna pitoresca onde residem as bruxas Aurian e Tunys.",
        imagem: "../../assets/images/dreams.jpg",
        coordenadas: null,
      },
      {
        id: 4,
        nome: "Reino Inerte",
        tipo: "ficticio",
        categoria: "Natural",
        descricao:
          "A vastidão da terra dos sonhos, habitada pela deusa do destino Ananque em seu Templo do Tempo.",
        detalhes:
          "Uma dimensão oceânica de maravilhas impossíveis e areias de cores vibrantes. É através deste reino que os Sonhos Faidáticos conectam mentes, projetando verdades apagadas.",
        imagem: "../../assets/images/inerte.jpg",
        coordenadas: null,
      },
      {
        id: 5,
        nome: "Dimensão dos Condenados",
        tipo: "ficticio",
        categoria: "historico",
        descricao:
          "O gélido e sombrio destino do pós-vida, percorrido pelo Navio Fantasma de proa de sereia.",
        detalhes:
          "Águas cintilantes em verde abrigam almas lúgubres que vagam cegas em direção a lanternas de ossos. Serviu de passagem segura de fuga de Londres ao Brasil.",
        imagem: "../../assets/images/damned.jpg",
        coordenadas: null,
      },
      {
        id: 6,
        nome: "Estação das Docas",
        tipo: "real",
        categoria: "Urbano",
        descricao:
          "O vibrante ponto turístico em Belém, no Brasil, utilizado como camuflagem para encontros mágicos.",
        detalhes:
          "À beira do rio, em frente ao prédio histórico da Alfândega, os guardiões encontraram o homem Uirapuru para barganhar pelo extrato de scribr, um componente vital de portal.",
        imagem: "../../assets/images/docas.jpg",
        coordenadas: { lat: -1.45, lng: -48.4975 },
      },
      {
        id: 7,
        nome: "Bosque de Hedonê",
        tipo: "ficticio",
        categoria: "Natural",
        descricao:
          "Uma selva mística e primitiva governada pelo caos, lar de monstruosidades como a Empusa.",
        detalhes:
          "Local lendário que guarda as Planícies de Prata e a antiga Profecia do Herdeiro. Magia bruxa não funciona nas suas terras tomadas pelo poder do Tártaro.",
        imagem: "../../assets/images/bosque.jpg",
        coordenadas: null,
      },
    ];

    this.filteredPlaces = [...this.allPlaces];
    this.init();
  }

  init() {
    this.setupResponsive();
    this.setupModeTabs();
    this.setupEventListeners();
    this.setupNavigation();
    this.setupMobileMenu();
    this.loadPlaces();
    this.animateEntrance();

    setTimeout(() => {
      if (this.currentMode === "atlas") {
        this.initMap();
      }
    }, 100);
  }

  animateEntrance() {
    gsap.from(".explore-container", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
    });
  }

  setupResponsive() {
    this.checkMobile();

    window.addEventListener("resize", () => {
      this.checkMobile();
      if (this.map) {
        setTimeout(() => {
          this.map.invalidateSize();
        }, 100);
      }
    });
  }

  checkMobile() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    if (wasMobile !== this.isMobile) {
      this.updateMobileUI();
    }
  }

  updateMobileUI() {
    const worldMap = document.getElementById("world-map");
    if (worldMap && this.isMobile) {
      worldMap.style.minHeight = "400px";
    }
  }

  setupMobileMenu() {
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
  }

  setupModeTabs() {
    const tabs = document.querySelectorAll(".archive-nav-btn");
    const contents = document.querySelectorAll(".mode-content");
    const navigation = document.querySelector(".explore-navigation");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const mode = tab.dataset.mode;

        const menuToggle = document.getElementById("menuToggle");
        const navMenu = document.getElementById("navMenu");
        if (menuToggle && navMenu && navMenu.classList.contains("active")) {
          menuToggle.classList.remove("active");
          navMenu.classList.remove("active");
        }

        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        contents.forEach((c) => {
          c.classList.remove("active");
          gsap.killTweensOf(c);
          c.style.display = "none";
          c.style.opacity = "0";
        });

        const activeContent = document.getElementById(`${mode}-content`);
        if (activeContent) {
          activeContent.style.display = "flex";
          activeContent.classList.add("active");

          activeContent.offsetHeight;

          gsap.to(activeContent, {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
              activeContent.style.opacity = "1";
            },
          });
        }

        if (mode === "lugares") {
          if (navigation) {
            navigation.style.display = "flex";
          }
          this.updateNavigation();
        } else {
          if (navigation) {
            navigation.style.display = "none";
          }
        }

        if (mode === "atlas" && !this.mapInitialized) {
          this.initMap();
        } else if (mode === "atlas" && this.map) {
          setTimeout(() => {
            this.map.invalidateSize();
          }, 100);
        }

        this.currentMode = mode;

        this.closePanel("atlas");
        this.closePanel("lugares");
      });
    });
  }

  initMap() {
    const mapContainer = document.getElementById("world-map");
    if (!mapContainer || this.mapInitialized) return;

    const loading = mapContainer.querySelector(".map-loading");

    setTimeout(() => {
      if (loading) {
        gsap.to(loading, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (loading.parentNode) {
              loading.remove();
            }
          },
        });
      }

      const initialZoom = this.isMobile ? 1.5 : 2;

      this.map = L.map("world-map", {
        zoomControl: true,
        minZoom: this.isMobile ? 1 : 2,
        maxZoom: 18,
        maxBounds: [
          [-85, -180],
          [85, 180],
        ],
        maxBoundsViscosity: 1.0,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
      }).setView([20, 0], initialZoom);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution: "©OpenStreetMap, ©CartoDB",
          maxZoom: 19,
          noWrap: true,
        },
      ).addTo(this.map);

      if (this.isMobile) {
        this.map.zoomControl.setPosition("bottomright");
      }

      this.addMarkers();

      this.mapInitialized = true;

      setTimeout(() => {
        this.map.invalidateSize();
        if (mapContainer) {
          mapContainer.style.opacity = "1";
        }
      }, 100);
    }, 800);
  }

  addMarkers() {
    if (!this.map) return;

    this.allSedes.forEach((sede, index) => {
      const icon = L.divIcon({
        html: `<div class="custom-marker ${sede.status}" style="background: ${sede.status === "active" ? "#4CAF50" : "#F44336"}; border: 2px solid white; box-shadow: 0 0 10px ${sede.status === "active" ? "#4CAF50" : "#F44336"}"></div>`,
        className: "custom-div-icon",
        iconSize: this.isMobile ? [24, 24] : [20, 20],
      });

      const marker = L.marker([sede.lat, sede.lng], { icon }).addTo(this.map);

      marker.on("click", () => {
        this.showSedeDetails(index);
      });
    });
  }

  showSedeDetails(index) {
    const sede = this.allSedes[index];
    const panel = document.getElementById("atlas-sede-details");
    const infoPanel = document.getElementById("atlas-info-panel");

    if (!panel || !infoPanel) return;

    panel.innerHTML = `
            <div class="sede-details-content">
                <div class="sede-header">
                    <h4>${sede.nome}</h4>
                    <span class="sede-status ${sede.status}">
                        ${sede.status === "active" ? "Ativa" : "Inoperante"}
                    </span>
                </div>
                
                <div class="sede-main-info">
                    <p class="sede-desc">${sede.descricao}</p>
                    <div class="sede-history">
                        <h5>Histórico Detalhado:</h5>
                        <p>${sede.detalhes}</p>
                    </div>
                </div>
                
                <div class="sede-details-grid">
                    <div class="detail-item">
                        <span class="detail-label">Fundador:</span>
                        <span class="detail-value">${sede.fundador}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Ano de Fundação:</span>
                        <span class="detail-value">${sede.anoFundacao}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Último Contato:</span>
                        <span class="detail-value">${sede.ultimoContato}</span>
                    </div>
                </div>
                
                <div class="sede-members">
                    <h5>Membros Notáveis:</h5>
                    <div class="members-list">
                        ${sede.membrosNotaveis
                          .map(
                            (member) => `
                            <span class="member-tag">${member}</span>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;

    gsap.killTweensOf(infoPanel);
    infoPanel.style.display = "flex";
    infoPanel.style.opacity = "0";
    infoPanel.style.transform = "translateX(50px)";

    gsap.to(infoPanel, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        infoPanel.style.opacity = "1";
      },
    });

    if (this.isMobile) {
      setTimeout(() => {
        infoPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }

    if (this.map) {
      this.map.flyTo([sede.lat, sede.lng], this.isMobile ? 4 : 5, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }

    this.currentSedeIndex = index;
  }

  performSearch(query) {
    if (!query.trim()) {
      if (this.map) {
        this.map.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            this.map.removeLayer(layer);
          }
        });
        this.addMarkers();
      }
      return;
    }

    const filtered = this.allSedes.filter(
      (s) =>
        s.nome.toLowerCase().includes(query.toLowerCase()) ||
        s.descricao.toLowerCase().includes(query.toLowerCase()) ||
        s.fundador.toLowerCase().includes(query.toLowerCase()),
    );

    if (this.map) {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer);
        }
      });

      filtered.forEach((sede) => {
        const icon = L.divIcon({
          html: `<div class="custom-marker ${sede.status}" style="background: ${sede.status === "active" ? "#4CAF50" : "#F44336"}; border: 2px solid white; box-shadow: 0 0 10px ${sede.status === "active" ? "#4CAF50" : "#F44336"}"></div>`,
          className: "custom-div-icon",
          iconSize: this.isMobile ? [24, 24] : [20, 20],
        });

        const marker = L.marker([sede.lat, sede.lng], { icon }).addTo(this.map);
        const originalIndex = this.allSedes.indexOf(sede);

        marker.on("click", () => {
          this.showSedeDetails(originalIndex);
        });
      });

      if (filtered.length > 0) {
        this.map.flyTo(
          [filtered[0].lat, filtered[0].lng],
          this.isMobile ? 4 : 5,
          { duration: 1 },
        );
        this.showSedeDetails(this.allSedes.indexOf(filtered[0]));
      }
    }
  }

  loadPlaces(data = this.filteredPlaces) {
    const grid = document.getElementById("lugares-grid");
    if (!grid) return;

    grid.innerHTML = "";

    data.forEach((lugar, index) => {
      const card = document.createElement("div");
      card.className = "place-card";

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.animation = "none";

      const imagem = lugar.imagem || "../../assets/images/placeholder.webp";

      card.innerHTML = `
                <div class="place-image" style="background-image: url('${imagem}')">
                    <div class="place-overlay">
                        <span class="place-type">${lugar.tipo === "real" ? "Real" : "Fictício"}</span>
                    </div>
                </div>
                <div class="place-info">
                    <div class="place-title">${lugar.nome}</div>
                    <div class="place-meta">
                        <span class="place-tag ${lugar.categoria}">${lugar.categoria}</span>
                        <span class="place-tag ${lugar.tipo}">${lugar.tipo === "real" ? "Real" : "Fictício"}</span>
                    </div>
                    <div class="place-desc">${lugar.descricao}</div>
                    <button class="place-action-btn" onclick="explorePage.showPlaceDetails(${index})">
                        <i class="fas fa-search"></i> Explorar Local
                    </button>
                </div>
            `;

      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      grid.appendChild(card);

      setTimeout(() => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: index * 0.05,
          ease: "power1.out",
        });
      }, 10);
    });

    this.filteredPlaces = data;
    this.currentPlaceIndex = 0;
    this.updateNavigation();
  }

  showPlaceDetails(index) {
    const place = this.filteredPlaces[index];
    const panel = document.getElementById("lugares-place-details");
    const infoPanel = document.getElementById("lugares-info-panel");

    if (!panel || !infoPanel) return;

    const imagem = place.imagem || "../../assets/images/placeholder.webp";

    panel.innerHTML = `
            <div class="place-details-content">
                <div class="place-header">
                    <h4>${place.nome}</h4>
                    <div class="place-meta-details">
                        <span class="place-tag ${place.tipo}">${place.tipo === "real" ? "Real" : "Fictício"}</span>
                        <span class="place-tag ${place.categoria}">${place.categoria}</span>
                    </div>
                </div>
                
                <div class="place-main-info">
                    <div class="place-image-large" style="background-image: url('${imagem}')"></div>
                    <div class="place-description">
                        <h5>Descrição:</h5>
                        <p>${place.descricao}</p>
                        
                        <h5>Detalhes Relevantes:</h5>
                        <p>${place.detalhes}</p>
                        
                        ${
                          place.coordenadas
                            ? `
                        <div class="place-coordinates">
                            <h5>Coordenadas:</h5>
                            <p>Lat: ${place.coordenadas.lat.toFixed(4)}°, Lng: ${place.coordenadas.lng.toFixed(4)}°</p>
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>
                
                <div class="place-actions">
                    ${
                      place.coordenadas
                        ? `
                    <button class="action-btn" onclick="explorePage.showOnMap(${place.coordenadas.lat}, ${place.coordenadas.lng}, '${place.nome}')">
                        <i class="fas fa-map-marker-alt"></i> Ver no Mapa
                    </button>
                    `
                        : ""
                    }
                </div>
            </div>
        `;

    gsap.killTweensOf(infoPanel);
    infoPanel.style.display = "flex";
    infoPanel.style.opacity = "0";
    infoPanel.style.transform = "translateX(50px)";

    gsap.to(infoPanel, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        infoPanel.style.opacity = "1";
      },
    });

    if (this.isMobile) {
      setTimeout(() => {
        infoPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }

    this.currentPlaceIndex = index;
    this.updateNavigation();
  }

  showOnMap(lat, lng, title) {
    const atlasTab = document.querySelector(
      '.archive-nav-btn[data-mode="atlas"]',
    );
    if (atlasTab) {
      atlasTab.click();
    }

    setTimeout(() => {
      if (this.map) {
        this.map.flyTo([lat, lng], this.isMobile ? 8 : 10, { duration: 2 });

        const tempMarker = L.marker([lat, lng]).addTo(this.map);
        tempMarker
          .bindPopup(`<strong>${title}</strong><br>Local do livro`)
          .openPopup();

        setTimeout(() => {
          if (tempMarker) {
            this.map.removeLayer(tempMarker);
          }
        }, 5000);
      }
    }, 300);
  }

  setupNavigation() {
    const prevBtn = document.querySelector(".nav-btn.prev");
    const nextBtn = document.querySelector(".nav-btn.next");

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        if (this.currentPlaceIndex > 0) {
          this.currentPlaceIndex--;
          this.showPlaceDetails(this.currentPlaceIndex);
        }
      });

      nextBtn.addEventListener("click", () => {
        if (this.currentPlaceIndex < this.filteredPlaces.length - 1) {
          this.currentPlaceIndex++;
          this.showPlaceDetails(this.currentPlaceIndex);
        }
      });
    }
  }

  updateNavigation() {
    const currentSpan = document.querySelector(".nav-progress .current");
    const totalSpan = document.querySelector(".nav-progress .total");
    const prevBtn = document.querySelector(".nav-btn.prev");
    const nextBtn = document.querySelector(".nav-btn.next");

    if (currentSpan && totalSpan) {
      currentSpan.textContent = this.currentPlaceIndex + 1;
      totalSpan.textContent = this.filteredPlaces.length;
    }

    if (prevBtn && nextBtn) {
      prevBtn.disabled = this.currentPlaceIndex === 0;
      nextBtn.disabled =
        this.currentPlaceIndex === this.filteredPlaces.length - 1;
    }
  }

  setupEventListeners() {
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.getElementById("search-sede");

    if (searchBtn && searchInput) {
      searchBtn.addEventListener("click", () =>
        this.performSearch(searchInput.value),
      );
      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.performSearch(searchInput.value);
        }
      });
    }

    document.getElementById("tipo-filtro")?.addEventListener("change", (e) => {
      this.filterPlaces("tipo", e.target.value);
    });

    document
      .getElementById("categoria-filtro")
      ?.addEventListener("change", (e) => {
        this.filterPlaces("categoria", e.target.value);
      });
  }

  closePanel(mode) {
    const panelId = `${mode}-info-panel`;
    const infoPanel = document.getElementById(panelId);

    if (!infoPanel) return;

    gsap.killTweensOf(infoPanel);
    gsap.to(infoPanel, {
      opacity: 0,
      x: 50,
      duration: 0.3,
      onComplete: () => {
        infoPanel.style.display = "none";
        infoPanel.style.opacity = "0";
      },
    });
  }

  filterPlaces(type, value) {
    if (value === "todos") {
      this.loadPlaces(this.allPlaces);
    } else {
      const filtered = this.allPlaces.filter((p) => p[type] === value);
      this.loadPlaces(filtered);
    }
  }
}

let explorePage;

document.addEventListener("DOMContentLoaded", () => {
  explorePage = new ExplorePage();
});
