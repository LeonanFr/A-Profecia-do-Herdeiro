class ExplorePage {
    constructor() {
        this.currentMode = 'atlas';
        this.map = null;
        this.currentSedeIndex = 0;
        this.currentPlaceIndex = 0;
        this.mapInitialized = false;
        this.isMobile = window.innerWidth <= 768;

        this.allSedes = [
            {
                lat: 51.3000,
                lng: -0.1278,
                nome: 'Castelo Sheridan - Inglaterra',
                status: 'inoperante',
                descricao: 'Localizada em uma floresta ao sul de Londres, era protegida por magia rúnica até ser massacrada. Último registro: 1843.',
                fundador: 'Linhagem Sheridan',
                detalhes: 'Onde Ariel Sheridan tentou resistir ao ataque final antes da queda da Ordem. O castelo foi consumido por fogo místico que ainda arde nas fundações.',
                membrosNotaveis: ['Ariel Sheridan', 'Eleanor Van Der Linde'],
                anoFundacao: 1567,
                ultimoContato: '15 de Março, 1843'
            },
            {
                lat: -23.5505,
                lng: -46.6333,
                nome: 'A Fortaleza - Brasil',
                status: 'active',
                descricao: 'A sede mais poderosa da Ordem. Permanece com fronteiras fechadas e isolada das outras sedes.',
                fundador: 'Miguel Arcanjo',
                detalhes: 'Manteve sua integridade mágica enquanto as sedes norte-americanas e europeias caíam. Protegida por selos antigos da tradição indígena brasileira.',
                membrosNotaveis: ['Arquivista Silva', 'Guardião Torres'],
                anoFundacao: 1654,
                ultimoContato: 'Presente'
            },
            {
                lat: 48.8566,
                lng: 2.3522,
                nome: 'Torre das Sombras - França',
                status: 'inoperante',
                descricao: 'Paris foi uma das primeiras a sofrer ataques em escala global, gerando o alerta de contingência.',
                fundador: 'Conselho de Guardiões',
                detalhes: 'A queda de Paris forçou Ariel a tomar decisões drásticas sobre o futuro dos herdeiros. A torre desmoronou durante o Cerco das Almas.',
                membrosNotaveis: ['Marie Leclair', 'Jean DuMont'],
                anoFundacao: 1621,
                ultimoContato: '12 de Julho, 1789'
            },
            {
                lat: 40.7128,
                lng: -74.0060,
                nome: 'Abadia de Nova Iorque - EUA',
                status: 'inoperante',
                descricao: 'Chegou a ser reconquistada brevemente, mas sucumbiu à falta de suprimentos e ataques constantes.',
                fundador: 'Guardiões do Norte',
                detalhes: 'A perda definitiva desta sede marcou o início do declínio irreversível da Ordem. Localizada sob o Central Park, hoje está inundada.',
                membrosNotaveis: ['Thomas Oaken', 'Elizabeth Grey'],
                anoFundacao: 1723,
                ultimoContato: '31 de Outubro, 1923'
            }
        ];

        this.allPlaces = [
            {
                id: 1,
                nome: 'Lyndhurst Square',
                tipo: 'real',
                categoria: 'urbano',
                descricao: 'A casa de Ariadne em Londres. Um local de arquitetura antiga que abriga portais para todo o mundo.',
                detalhes: 'O número 12 de Lyndhurst Square permanece vazio desde o desaparecimento de Ariadne. Vizinhos relatam luzes à meia-noite e sons de páginas virando.',
                imagem: '../../assets/images/lyndhurst.jpg',
                coordenadas: { lat: 51.5074, lng: -0.1278 }
            },
            {
                id: 2,
                nome: 'Durham',
                tipo: 'real',
                categoria: 'rural',
                descricao: 'Cidade no nordeste da Inglaterra onde Peter e James viveram escondidos por 18 anos.',
                detalhes: 'As colinas ao redor de Durham possuem antigos círculos de pedra que amplificam a magia. Foi aqui que os irmãos descobriram seu primeiro feitiço.',
                imagem: '../../assets/images/placeholder.webp',
                coordenadas: { lat: 54.7753, lng: -1.5849 }
            },
            {
                id: 3,
                nome: 'Potters Bank',
                tipo: 'real',
                categoria: 'natural',
                descricao: 'O caminho sombrio e arborizado onde Peter e James caminhavam voltando da escola.',
                detalhes: 'A ponte de pedra em Potters Bank marca um ponto de convergência dimensional. Em noites de lua cheia, sombras se movem independentemente de seus donos.',
                imagem: '../../assets/images/potters.jpg',
                coordenadas: { lat: 54.7852, lng: -1.5684 }
            },
            {
                id: 4,
                nome: 'Reino Inerte',
                tipo: 'ficticio',
                categoria: 'historico',
                descricao: 'A dimensão dos sonhos que conecta o passado e o futuro, acessível a raros guardiões.',
                detalhes: 'Neste reino, o tempo flui como um rio com múltiplos afluentes. Os Arquitetos do Destino mantêm esta biblioteca viva de futuros potenciais.',
                imagem: '../../assets/images/inerte.jpg',
                coordenadas: null
            }
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
            if (this.currentMode === 'atlas') {
                this.initMap();
            }
        }, 100);
    }

    animateEntrance() {
        gsap.from('.explore-container', {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out"
        });
    }

    setupResponsive() {
        this.checkMobile();

        window.addEventListener('resize', () => {
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
        const worldMap = document.getElementById('world-map');
        if (worldMap && this.isMobile) {
            worldMap.style.minHeight = '400px';
        }
    }

    setupMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!menuToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });

            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    setupModeTabs() {
        const tabs = document.querySelectorAll('.archive-nav-btn');
        const contents = document.querySelectorAll('.mode-content');
        const navigation = document.querySelector('.explore-navigation');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const mode = tab.dataset.mode;

                const menuToggle = document.getElementById('menuToggle');
                const navMenu = document.getElementById('navMenu');
                if (menuToggle && navMenu && navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                contents.forEach(c => {
                    c.classList.remove('active');
                    gsap.killTweensOf(c);
                    c.style.display = 'none';
                    c.style.opacity = '0';
                });

                const activeContent = document.getElementById(`${mode}-content`);
                if (activeContent) {
                    activeContent.style.display = 'flex';
                    activeContent.classList.add('active');

                    activeContent.offsetHeight;

                    gsap.to(activeContent, {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power1.out",
                        onComplete: () => {
                            activeContent.style.opacity = '1';
                        }
                    });
                }

                if (mode === 'lugares') {
                    if (navigation) {
                        navigation.style.display = 'flex';
                    }
                    this.updateNavigation();
                } else {
                    if (navigation) {
                        navigation.style.display = 'none';
                    }
                }

                if (mode === 'atlas' && !this.mapInitialized) {
                    this.initMap();
                } else if (mode === 'atlas' && this.map) {
                    setTimeout(() => {
                        this.map.invalidateSize();
                    }, 100);
                }

                this.currentMode = mode;

                this.closePanel('atlas');
                this.closePanel('lugares');
            });
        });
    }

    initMap() {
        const mapContainer = document.getElementById('world-map');
        if (!mapContainer || this.mapInitialized) return;

        const loading = mapContainer.querySelector('.map-loading');

        setTimeout(() => {
            if (loading) {
                gsap.to(loading, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (loading.parentNode) {
                            loading.remove();
                        }
                    }
                });
            }

            const initialZoom = this.isMobile ? 1.5 : 2;

            this.map = L.map('world-map', {
                zoomControl: true,
                minZoom: this.isMobile ? 1 : 2,
                maxZoom: 18,
                maxBounds: [[-85, -180], [85, 180]],
                maxBoundsViscosity: 1.0,
                zoomSnap: 0.5,
                zoomDelta: 0.5
            }).setView([20, 0], initialZoom);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '©OpenStreetMap, ©CartoDB',
                maxZoom: 19,
                noWrap: true
            }).addTo(this.map);

            if (this.isMobile) {
                this.map.zoomControl.setPosition('bottomright');
            }

            this.addMarkers();

            this.mapInitialized = true;

            setTimeout(() => {
                this.map.invalidateSize();
                if (mapContainer) {
                    mapContainer.style.opacity = '1';
                }
            }, 100);
        }, 800);
    }

    addMarkers() {
        if (!this.map) return;

        this.allSedes.forEach((sede, index) => {
            const icon = L.divIcon({
                html: `<div class="custom-marker ${sede.status}" style="background: ${sede.status === 'active' ? '#4CAF50' : '#F44336'}; border: 2px solid white; box-shadow: 0 0 10px ${sede.status === 'active' ? '#4CAF50' : '#F44336'}"></div>`,
                className: 'custom-div-icon',
                iconSize: this.isMobile ? [24, 24] : [20, 20]
            });

            const marker = L.marker([sede.lat, sede.lng], { icon }).addTo(this.map);

            const popupContent = `
                <div class="map-popup">
                    <h4>${sede.nome}</h4>
                    <div class="popup-status ${sede.status}">
                        ${sede.status === 'active' ? 'Sede Ativa' : 'Sede Inoperante'}
                    </div>
                    <p class="popup-desc">${sede.descricao}</p>
                    <button class="popup-btn" onclick="explorePage.showSedeDetails(${index})">
                        Ver Detalhes Completos
                    </button>
                </div>
            `;

            const popupOptions = this.isMobile ? {
                maxWidth: 280,
                minWidth: 250,
                className: 'mobile-popup',
                autoPanPadding: [50, 50]
            } : {
                maxWidth: 300,
                minWidth: 250
            };

            marker.bindPopup(popupContent, popupOptions);

            marker.on('click', () => {
                marker.openPopup();

                if (this.isMobile) {
                    this.map.flyTo([sede.lat, sede.lng], 5, {
                        duration: 1,
                        easeLinearity: 0.25
                    });
                }
            });
        });
    }

    showSedeDetails(index) {
        const sede = this.allSedes[index];
        const panel = document.getElementById('atlas-sede-details');
        const infoPanel = document.getElementById('atlas-info-panel');

        if (!panel || !infoPanel) return;

        panel.innerHTML = `
            <div class="sede-details-content">
                <div class="sede-header">
                    <h4>${sede.nome}</h4>
                    <span class="sede-status ${sede.status}">
                        ${sede.status === 'active' ? 'Ativa' : 'Inoperante'}
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
                        ${sede.membrosNotaveis.map(member => `
                            <span class="member-tag">${member}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        gsap.killTweensOf(infoPanel);
        infoPanel.style.display = 'flex';
        infoPanel.style.opacity = '0';
        infoPanel.style.transform = 'translateX(50px)';

        gsap.to(infoPanel, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                infoPanel.style.opacity = '1';
            }
        });

        if (this.isMobile) {
            setTimeout(() => {
                infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }

        if (this.map) {
            this.map.flyTo([sede.lat, sede.lng], this.isMobile ? 4 : 5, {
                duration: 1.5
            });
        }

        this.currentSedeIndex = index;
    }

    loadPlaces(data = this.filteredPlaces) {
        const grid = document.getElementById('lugares-grid');
        if (!grid) return;

        grid.innerHTML = '';

        data.forEach((lugar, index) => {
            const card = document.createElement('div');
            card.className = 'place-card';

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.animation = 'none';

            const imagem = lugar.imagem || '../../assets/images/placeholder.webp';

            card.innerHTML = `
                <div class="place-image" style="background-image: url('${imagem}')">
                    <div class="place-overlay">
                        <span class="place-type">${lugar.tipo === 'real' ? 'Real' : 'Fictício'}</span>
                    </div>
                </div>
                <div class="place-info">
                    <div class="place-title">${lugar.nome}</div>
                    <div class="place-meta">
                        <span class="place-tag ${lugar.categoria}">${lugar.categoria}</span>
                        <span class="place-tag ${lugar.tipo}">${lugar.tipo === 'real' ? 'Real' : 'Fictício'}</span>
                    </div>
                    <div class="place-desc">${lugar.descricao}</div>
                    <button class="place-action-btn" onclick="explorePage.showPlaceDetails(${index})">
                        <i class="fas fa-search"></i> Explorar Local
                    </button>
                </div>
            `;

            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            grid.appendChild(card);

            setTimeout(() => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "power1.out"
                });
            }, 10);
        });

        this.filteredPlaces = data;
        this.currentPlaceIndex = 0;
        this.updateNavigation();
    }

    showPlaceDetails(index) {
        const place = this.filteredPlaces[index];
        const panel = document.getElementById('lugares-place-details');
        const infoPanel = document.getElementById('lugares-info-panel');

        if (!panel || !infoPanel) return;

        const imagem = place.imagem || '../../assets/images/placeholder.webp';

        panel.innerHTML = `
            <div class="place-details-content">
                <div class="place-header">
                    <h4>${place.nome}</h4>
                    <div class="place-meta-details">
                        <span class="place-tag ${place.tipo}">${place.tipo === 'real' ? 'Real' : 'Fictício'}</span>
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
                        
                        ${place.coordenadas ? `
                        <div class="place-coordinates">
                            <h5>Coordenadas:</h5>
                            <p>Lat: ${place.coordenadas.lat.toFixed(4)}°, Lng: ${place.coordenadas.lng.toFixed(4)}°</p>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="place-actions">
                    ${place.coordenadas ? `
                    <button class="action-btn" onclick="explorePage.showOnMap(${place.coordenadas.lat}, ${place.coordenadas.lng}, '${place.nome}')">
                        <i class="fas fa-map-marker-alt"></i> Ver no Mapa
                    </button>
                    ` : ''}
                </div>
            </div>
        `;

        gsap.killTweensOf(infoPanel);
        infoPanel.style.display = 'flex';
        infoPanel.style.opacity = '0';
        infoPanel.style.transform = 'translateX(50px)';

        gsap.to(infoPanel, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                infoPanel.style.opacity = '1';
            }
        });

        if (this.isMobile) {
            setTimeout(() => {
                infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }

        this.currentPlaceIndex = index;
        this.updateNavigation();
    }

    showOnMap(lat, lng, title) {
        const atlasTab = document.querySelector('.archive-nav-btn[data-mode="atlas"]');
        if (atlasTab) {
            atlasTab.click();
        }

        setTimeout(() => {
            if (this.map) {
                this.map.flyTo([lat, lng], this.isMobile ? 8 : 10, { duration: 2 });

                const tempMarker = L.marker([lat, lng]).addTo(this.map);
                tempMarker.bindPopup(`<strong>${title}</strong><br>Local do livro`).openPopup();

                setTimeout(() => {
                    if (tempMarker) {
                        this.map.removeLayer(tempMarker);
                    }
                }, 5000);
            }
        }, 300);
    }

    setupNavigation() {
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentPlaceIndex > 0) {
                    this.currentPlaceIndex--;
                    this.showPlaceDetails(this.currentPlaceIndex);
                }
            });

            nextBtn.addEventListener('click', () => {
                if (this.currentPlaceIndex < this.filteredPlaces.length - 1) {
                    this.currentPlaceIndex++;
                    this.showPlaceDetails(this.currentPlaceIndex);
                }
            });
        }
    }

    updateNavigation() {
        const currentSpan = document.querySelector('.nav-progress .current');
        const totalSpan = document.querySelector('.nav-progress .total');
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');

        if (currentSpan && totalSpan) {
            currentSpan.textContent = this.currentPlaceIndex + 1;
            totalSpan.textContent = this.filteredPlaces.length;
        }

        if (prevBtn && nextBtn) {
            prevBtn.disabled = this.currentPlaceIndex === 0;
            nextBtn.disabled = this.currentPlaceIndex === this.filteredPlaces.length - 1;
        }
    }

    setupEventListeners() {
        const searchBtn = document.querySelector('.search-btn');
        const searchInput = document.getElementById('search-sede');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => this.performSearch(searchInput.value));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(searchInput.value);
                }
            });
        }

        document.getElementById('tipo-filtro')?.addEventListener('change', (e) => {
            this.filterPlaces('tipo', e.target.value);
        });

        document.getElementById('categoria-filtro')?.addEventListener('change', (e) => {
            this.filterPlaces('categoria', e.target.value);
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
                infoPanel.style.display = 'none';
                infoPanel.style.opacity = '0';
            }
        });
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

        const filtered = this.allSedes.filter(s =>
            s.nome.toLowerCase().includes(query.toLowerCase()) ||
            s.descricao.toLowerCase().includes(query.toLowerCase()) ||
            s.fundador.toLowerCase().includes(query.toLowerCase())
        );

        if (this.map) {
            this.map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    this.map.removeLayer(layer);
                }
            });

            filtered.forEach((sede, index) => {
                const icon = L.divIcon({
                    html: `<div class="custom-marker ${sede.status}" style="background: ${sede.status === 'active' ? '#4CAF50' : '#F44336'}; border: 2px solid white; box-shadow: 0 0 10px ${sede.status === 'active' ? '#4CAF50' : '#F44336'}"></div>`,
                    className: 'custom-div-icon',
                    iconSize: this.isMobile ? [24, 24] : [20, 20]
                });

                const marker = L.marker([sede.lat, sede.lng], { icon }).addTo(this.map);

                marker.bindPopup(`
                    <div class="map-popup">
                        <h4>${sede.nome}</h4>
                        <div class="popup-status ${sede.status}">
                            ${sede.status === 'active' ? 'Sede Ativa' : 'Sede Inoperante'}
                        </div>
                        <p class="popup-desc">${sede.descricao}</p>
                        <button class="popup-btn" onclick="explorePage.showSedeDetails(${this.allSedes.indexOf(sede)})">
                            Ver Detalhes Completos
                        </button>
                    </div>
                `);

                marker.on('click', () => {
                    marker.openPopup();
                });
            });

            if (filtered.length > 0) {
                this.map.flyTo([filtered[0].lat, filtered[0].lng], this.isMobile ? 4 : 5, { duration: 1 });
            }
        }
    }

    filterPlaces(type, value) {
        if (value === 'todos') {
            this.loadPlaces(this.allPlaces);
        } else {
            const filtered = this.allPlaces.filter(p => p[type] === value);
            this.loadPlaces(filtered);
        }
    }
}

let explorePage;

document.addEventListener('DOMContentLoaded', () => {
    explorePage = new ExplorePage();
});