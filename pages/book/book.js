import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const gsap = window.gsap;

const BOOK_PAGES_IMAGES = [
  "../../assets/pages/capa.jpg",
  "../../assets/pages/page1.jpg",
  "../../assets/pages/page2.jpg",
  "../../assets/pages/page3.jpg",
  "../../assets/pages/page4.jpg",
  "../../assets/pages/page5.jpg",
  "../../assets/pages/page6.jpg",
  "../../assets/pages/page7.jpg",
  "../../assets/pages/page8.jpg",
  "../../assets/pages/page9.jpg",
  "../../assets/pages/page10.jpg",
  "../../assets/pages/page11.jpg",
  "../../assets/pages/page12.jpg",
  "../../assets/pages/page13.jpg",
  "../../assets/pages/page14.jpg",
  "../../assets/pages/page15.jpg",
  "../../assets/pages/page16.jpg",
  "../../assets/pages/page17.jpg",
  "../../assets/pages/page18.jpg",
  "../../assets/pages/page19.jpg",
  "../../assets/pages/page20.jpg",
  "../../assets/pages/page21.jpg",
  "../../assets/pages/page22.jpg",
  "../../assets/pages/page23.jpg",
  "../../assets/pages/page24.jpg",
  "../../assets/pages/page25.jpg",
  "../../assets/pages/page26.jpg",
  "../../assets/pages/page27.jpg",
  "../../assets/pages/page28.jpg",
  "../../assets/pages/page29.jpg",
  "../../assets/pages/page30.jpg",
  "../../assets/pages/page31.jpg",
  "../../assets/pages/page32.jpg",
];
const TOTAL_BOOK_PAGES = 300;
const SAMPLE_PAGES =
  BOOK_PAGES_IMAGES.length === 0 ? 10 : BOOK_PAGES_IMAGES.length;

const PAGE_WIDTH = 1.4;
const PAGE_HEIGHT = 2.1;
const PAGE_THICKNESS = 0.0005;

const BONE_PAGE_SEGMENTS = 30;
const BONE_SEGMENT_WIDTH = PAGE_WIDTH / BONE_PAGE_SEGMENTS;

const PAPER_COLOR = 0xfaf5e8;
const COVER_COLOR = 0x1c1417;

class PremiumHybridBook {
  constructor() {
    this.container = document.getElementById("canvas-container");
    this.textures = [];
    this.currentSpread = -1;
    this.isAnimating = false;
    this.clock = new THREE.Clock();

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.isHoveringCTA = false;

    this.leafSheets = [];
    this.rightBlock = null;
    this.spineMesh = null;
    this.ctaTexture = null;

    this.initScene();
    this.loadTextures().then(() => {
      this.totalLeaves = Math.ceil((this.textures.length - 1) / 2) + 1;
      this.maxSpread = this.totalLeaves - 2;

      this.buildSpine();
      this.buildRightBlock();
      this.buildLeaves();
      this.setupUI();
      this.animate();
      this.preloadRemainingTextures();
    });
  }

  initScene() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      38,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    this.camera.position.set(0, 0, 3.4);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    dirLight.position.set(3, 7, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.bias = -0.0002;
    this.scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xddeeff, 0.6);
    fillLight.position.set(-4, 3, -2);
    this.scene.add(fillLight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.enableRotate = false;

    this.controls.enablePan = true;
    this.controls.panSpeed = 0.6;

    this.controls.enableZoom = true;
    this.controls.zoomToCursor = true;
    this.controls.zoomSpeed = 0.35;

    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.controls.minDistance = 2.2;
    this.controls.maxDistance = 4.8;

    this.controls.minTargetRadius = 0;
    this.controls.maxTargetRadius = 1;

    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    };
    window.addEventListener("wheel", (e) => {
      console.log(e.deltaY);
    });
    this.controls.target.set(0, 0, 0);
    this.controls.update();

    window.addEventListener("resize", () => this.onWindowResize());
    window.addEventListener("pointermove", (e) => this.onPointerMove(e));
    window.addEventListener("click", () => this.onClick());
  }

  applyTextureSettings(tex) {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
  }

  async loadTextures() {
    this.ctaTexture = this.createCTATexture();

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 2;
    tempCanvas.height = 2;
    const ctx = tempCanvas.getContext("2d");
    ctx.fillStyle = "#faf5e8";
    ctx.fillRect(0, 0, 2, 2);
    const tempTex = new THREE.CanvasTexture(tempCanvas);
    tempTex.colorSpace = THREE.SRGBColorSpace;

    if (BOOK_PAGES_IMAGES.length === 0) {
      this.textures.push(this.createFallbackTexture(0, true));
      for (let i = 1; i <= SAMPLE_PAGES; i++) {
        this.textures.push(this.createFallbackTexture(i, false));
      }
    } else {
      const loader = new THREE.TextureLoader();
      for (let i = 0; i < Math.min(4, BOOK_PAGES_IMAGES.length); i++) {
        const tex = await loader.loadAsync(BOOK_PAGES_IMAGES[i]);
        this.applyTextureSettings(tex);
        this.textures.push(tex);
      }
      for (let i = 4; i < BOOK_PAGES_IMAGES.length; i++) {
        this.textures.push(tempTex);
      }
    }
    this.textures.push(this.ctaTexture);
  }

  async preloadRemainingTextures() {
    if (BOOK_PAGES_IMAGES.length <= 4) return;
    const loader = new THREE.TextureLoader();

    for (let i = 4; i < BOOK_PAGES_IMAGES.length; i++) {
      loader.load(BOOK_PAGES_IMAGES[i], (tex) => {
        this.applyTextureSettings(tex);
        this.textures[i] = tex;

        const leafIndex = Math.ceil(i / 2);
        this.updateLeafMaterial(leafIndex);
      });

      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  }

  async preloadRemainingTextures() {
    if (BOOK_PAGES_IMAGES.length <= 4) return;
    const loader = new THREE.TextureLoader();
    for (let i = 4; i < BOOK_PAGES_IMAGES.length; i++) {
      const tex = await loader.loadAsync(BOOK_PAGES_IMAGES[i]);
      this.applyTextureSettings(tex);
      this.textures[i] = tex;

      const leafIndex = Math.ceil(i / 2);
      this.updateLeafMaterial(leafIndex);
    }
  }

  updateLeafMaterial(leafIndex) {
    const leaf = this.leafSheets[leafIndex];
    if (!leaf) return;

    let frontTex, backTex;
    if (leafIndex === 0) {
      frontTex = this.textures[0];
      leaf.mesh.material[4].map = frontTex;
      leaf.mesh.material[4].needsUpdate = true;
    } else {
      const pRight = (leafIndex - 1) * 2 + 1;
      const pLeft = (leafIndex - 1) * 2 + 2;
      frontTex = this.textures[pRight] || this.textures[1];
      backTex = this.textures[pLeft] || this.textures[1];

      leaf.mesh.material[4].map = frontTex;
      leaf.mesh.material[5].map = backTex;
      leaf.mesh.material[4].needsUpdate = true;
      leaf.mesh.material[5].needsUpdate = true;
    }

    leaf.mesh.userData.isCTALeaf = false;

    if (frontTex === this.ctaTexture) {
      leaf.mesh.userData.isCTALeaf = true;
      leaf.mesh.userData.ctaFace = 4;
    }

    if (backTex === this.ctaTexture) {
      leaf.mesh.userData.isCTALeaf = true;
      leaf.mesh.userData.ctaFace = 5;
    }
  }

  createFallbackTexture(index, isCover = false) {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 2924;
    const ctx = canvas.getContext("2d");

    if (isCover) {
      ctx.fillStyle = "#1c1417";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#C8A55D";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 152px Cinzel";
      ctx.fillText("A PROFECIA", canvas.width / 2, canvas.height / 2 - 110);
      ctx.fillText("DO HERDEIRO", canvas.width / 2, canvas.height / 2 + 110);
      ctx.strokeStyle = "#C8A55D";
      ctx.lineWidth = 24;
      ctx.strokeRect(120, 120, canvas.width - 240, canvas.height - 240);
    } else {
      ctx.fillStyle = "#faf5e8";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#222222";
      ctx.textAlign = "center";
      ctx.font = 'bold 84px "Crimson Text"';
      ctx.fillText(`Capítulo I — O Limiar`, canvas.width / 2, 280);
      ctx.font = 'italic 68px "Crimson Text"';
      ctx.fillText(
        `Amostra Digital — Página ${index}`,
        canvas.width / 2,
        canvas.height - 240,
      );
      ctx.textAlign = "left";
      ctx.fillStyle = "#333333";
      ctx.font = '72px "Crimson Text"';
      const lines = [
        "O silêncio reinava nas fundações de pedra secular.",
        "Peter observava a névoa dançar sob os portais,",
        "enquanto o eco dos antigos guardiões sussurrava",
        "promessas esquecidas pelo próprio tempo.",
      ];
      let y = 640;
      for (let line of lines) {
        ctx.fillText(line, 240, y);
        y += 130;
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    this.applyTextureSettings(tex);
    return tex;
  }

  createCTATexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 2924;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#faf5e8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#222222";
    ctx.textAlign = "center";
    ctx.font = 'bold 110px "Crimson Text"';
    ctx.fillText("A Jornada Continua...", canvas.width / 2, 900);

    ctx.font = 'italic 76px "Crimson Text"';
    ctx.fillStyle = "#444444";
    ctx.fillText(
      "Descubra o destino de Peter e os segredos",
      canvas.width / 2,
      1120,
    );
    ctx.fillText(
      "da Ordem dos Guardiões na obra completa.",
      canvas.width / 2,
      1240,
    );

    ctx.fillStyle = "#1c1417";
    ctx.fillRect(524, 1700, 1000, 220);

    ctx.strokeStyle = "#C8A55D";
    ctx.lineWidth = 8;
    ctx.strokeRect(536, 1712, 976, 196);

    ctx.fillStyle = "#C8A55D";
    ctx.font = 'bold 68px "Cinzel"';
    ctx.textBaseline = "middle";
    ctx.fillText("ADQUIRIR LIVRO", canvas.width / 2, 1810);

    const tex = new THREE.CanvasTexture(canvas);
    this.applyTextureSettings(tex);
    return tex;
  }

  buildSpine() {
    const thickness = TOTAL_BOOK_PAGES * PAGE_THICKNESS;
    const spineThickness = 0.012;
    const spineGeo = new THREE.BoxGeometry(
      spineThickness,
      PAGE_HEIGHT,
      thickness,
    );
    spineGeo.translate(-spineThickness / 2, 0, thickness / 2);

    const spineMat = new THREE.MeshStandardMaterial({
      color: COVER_COLOR,
      roughness: 0.8,
    });
    this.spineMesh = new THREE.Mesh(spineGeo, spineMat);
    this.spineMesh.castShadow = true;
    this.spineMesh.receiveShadow = true;
    this.spineMesh.position.set(0, 0, 0);
    this.scene.add(this.spineMesh);
  }

  buildRightBlock() {
    const unreadAfterSample = Math.max(0, TOTAL_BOOK_PAGES - SAMPLE_PAGES);
    const thickness = unreadAfterSample * PAGE_THICKNESS;
    const geometry = new THREE.BoxGeometry(PAGE_WIDTH, PAGE_HEIGHT, thickness);
    geometry.translate(PAGE_WIDTH / 2, 0, thickness / 2);

    const material = new THREE.MeshStandardMaterial({
      color: PAPER_COLOR,
      roughness: 0.9,
    });
    this.rightBlock = new THREE.Mesh(geometry, material);
    this.rightBlock.castShadow = true;
    this.rightBlock.receiveShadow = true;
    this.rightBlock.position.x = 0;
    this.rightBlock.position.z = 0;
    this.scene.add(this.rightBlock);
  }

  buildLeaves() {
    const geometry = new THREE.BoxGeometry(
      PAGE_WIDTH,
      PAGE_HEIGHT,
      PAGE_THICKNESS,
      BONE_PAGE_SEGMENTS,
      1,
    );
    geometry.translate(PAGE_WIDTH / 2, 0, 0);

    const position = geometry.attributes.position;
    const skinIndexArr = [];
    const skinWeightArr = [];

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      let boneIdx = Math.floor(x / BONE_SEGMENT_WIDTH);
      boneIdx = Math.max(0, Math.min(boneIdx, BONE_PAGE_SEGMENTS));
      let weight = 0;
      if (boneIdx < BONE_PAGE_SEGMENTS) {
        weight = (x - boneIdx * BONE_SEGMENT_WIDTH) / BONE_SEGMENT_WIDTH;
      }
      const idx1 = boneIdx;
      const idx2 = Math.min(boneIdx + 1, BONE_PAGE_SEGMENTS);
      skinIndexArr.push(idx1, idx2, 0, 0);
      skinWeightArr.push(1 - weight, weight, 0, 0);
    }

    geometry.setAttribute(
      "skinIndex",
      new THREE.Uint16BufferAttribute(skinIndexArr, 4),
    );
    geometry.setAttribute(
      "skinWeight",
      new THREE.Float32BufferAttribute(skinWeightArr, 4),
    );

    for (let i = 0; i < this.totalLeaves; i++) {
      const bones = [];
      const rootBone = new THREE.Bone();
      rootBone.position.set(0, 0, 0);
      bones.push(rootBone);

      for (let j = 1; j <= BONE_PAGE_SEGMENTS; j++) {
        const bone = new THREE.Bone();
        bone.position.x = BONE_SEGMENT_WIDTH;
        bones[j - 1].add(bone);
        bones.push(bone);
      }

      const skeleton = new THREE.Skeleton(bones);

      let materials;
      let frontTex, backTex;

      if (i === 0) {
        frontTex = this.textures[0];
        backTex = null;
        materials = [
          new THREE.MeshStandardMaterial({ color: COVER_COLOR }),
          new THREE.MeshStandardMaterial({ color: COVER_COLOR }),
          new THREE.MeshStandardMaterial({ color: COVER_COLOR }),
          new THREE.MeshStandardMaterial({ color: COVER_COLOR }),
          new THREE.MeshStandardMaterial({
            map: frontTex,
            color: 0xffffff,
            roughness: 0.5,
          }),
          new THREE.MeshStandardMaterial({
            color: PAPER_COLOR,
            roughness: 0.9,
          }),
        ];
      } else {
        const pRight = (i - 1) * 2 + 1;
        const pLeft = (i - 1) * 2 + 2;
        frontTex = this.textures[pRight] || this.textures[1];
        backTex = this.textures[pLeft] || this.textures[1];

        materials = [
          new THREE.MeshStandardMaterial({ color: PAPER_COLOR }),
          new THREE.MeshStandardMaterial({ color: PAPER_COLOR }),
          new THREE.MeshStandardMaterial({ color: PAPER_COLOR }),
          new THREE.MeshStandardMaterial({ color: PAPER_COLOR }),
          new THREE.MeshStandardMaterial({
            map: frontTex,
            color: 0xffffff,
            roughness: 0.8,
          }),
          new THREE.MeshStandardMaterial({
            map: backTex,
            color: 0xffffff,
            roughness: 0.8,
          }),
        ];
      }

      const mesh = new THREE.SkinnedMesh(geometry, materials);
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      mesh.frustumCulled = false;
      mesh.add(bones[0]);
      mesh.bind(skeleton);

      mesh.userData.isCTALeaf = false;
      if (i !== 0) {
        if (frontTex === this.ctaTexture) {
          mesh.userData.isCTALeaf = true;
          mesh.userData.ctaFace = 4;
        } else if (backTex === this.ctaTexture) {
          mesh.userData.isCTALeaf = true;
          mesh.userData.ctaFace = 5;
        }
      }

      this.scene.add(mesh);

      this.leafSheets.push({
        mesh,
        bones,
        rootBone,
        index: i,
        opened: false,
        turningProgress: 0,
      });
    }
  }

  updateLeafStates(delta) {
    this.leafSheets.forEach((leaf) => {
      const shouldBeOpened = this.currentSpread >= leaf.index;
      if (leaf.opened !== shouldBeOpened) {
        leaf.opened = shouldBeOpened;
      }

      if (leaf.opened && leaf.turningProgress < 1) {
        leaf.turningProgress = Math.min(1, leaf.turningProgress + delta * 2.0);
      } else if (!leaf.opened && leaf.turningProgress > 0) {
        leaf.turningProgress = Math.max(0, leaf.turningProgress - delta * 2.0);
      }

      const t = leaf.turningProgress;
      const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const targetRootY = -Math.PI * easedT;
      leaf.rootBone.rotation.y = targetRootY;
      leaf.rootBone.position.x = 0;

      const zClosed = this.computeLeafZ(leaf.index, false);
      const zOpen = this.computeLeafZ(leaf.index, true);
      const baseZ = zClosed + (zOpen - zClosed) * easedT;

      const isMoving = t > 0 && t < 1;
      const liftZ = isMoving ? Math.sin(easedT * Math.PI) * 0.4 : 0;

      leaf.mesh.position.z = baseZ + liftZ;
      leaf.mesh.position.y = 0;

      if (isMoving) {
        const curveAmplitude = Math.sin(easedT * Math.PI) * 0.9;
        for (let j = 1; j < leaf.bones.length; j++) {
          const bone = leaf.bones[j];
          const normalizedIndex = (j - 1) / (BONE_PAGE_SEGMENTS - 1);
          const targetCurlY =
            Math.pow(normalizedIndex, 1.2) * 0.15 * curveAmplitude;

          bone.rotation.y = targetCurlY;
          bone.rotation.x = 0;
          bone.rotation.z = 0;
        }
      } else {
        for (let j = 1; j < leaf.bones.length; j++) {
          leaf.bones[j].rotation.y = 0;
          leaf.bones[j].rotation.x = 0;
          leaf.bones[j].rotation.z = 0;
        }
      }
    });
  }

  computeLeafZ(leafIndex, opened) {
    const rightBlockThickness =
      Math.max(0, TOTAL_BOOK_PAGES - SAMPLE_PAGES) * PAGE_THICKNESS;

    if (opened) {
      const openCount = this.leafSheets.filter(
        (l) => l.opened && l.index < leafIndex,
      ).length;
      return openCount * PAGE_THICKNESS + 0.001;
    } else {
      const closedLeavesAbove = this.leafSheets.filter(
        (l) => !l.opened && l.index < leafIndex,
      ).length;
      const totalClosed = this.leafSheets.filter((l) => !l.opened).length;
      return (
        rightBlockThickness + (totalClosed - closedLeavesAbove) * PAGE_THICKNESS
      );
    }
  }

  onPointerMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.checkHover();
  }

  checkHover() {
    this.isHoveringCTA = false;

    if (this.currentSpread === this.maxSpread) {
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(
        this.scene.children,
        true,
      );

      for (let intersect of intersects) {
        const mesh = intersect.object;

        if (mesh.userData && mesh.userData.isCTALeaf) {
          if (
            intersect.face &&
            intersect.face.materialIndex === mesh.userData.ctaFace
          ) {
            const uv = intersect.uv;
            if (uv) {
              const u = uv.x;
              const v = uv.y;

              if (u >= 0.255 && u <= 0.744 && v >= 0.343 && v <= 0.418) {
                this.isHoveringCTA = true;
                break;
              }
            }
          }
        }
      }
    }

    document.body.style.cursor = this.isHoveringCTA ? "pointer" : "default";
  }

  onClick() {
    if (this.isHoveringCTA && this.currentSpread === this.maxSpread) {
      window.open("https://flyve.com.br/840/a-profecia-do-herdeiro", "_blank");
    }
  }

  turnNext() {
    if (this.isAnimating) return;
    if (this.currentSpread >= this.maxSpread) return;

    this.isAnimating = true;
    this.currentSpread++;
    this.updateUI();

    setTimeout(() => {
      this.isAnimating = false;
      this.updateUI();
    }, 600);
  }

  turnPrev() {
    if (this.isAnimating) return;
    if (this.currentSpread <= -1) return;

    this.isAnimating = true;
    this.currentSpread--;
    this.updateUI();

    setTimeout(() => {
      this.isAnimating = false;
      this.updateUI();
    }, 600);
  }

  setupUI() {
    this.btnPrev = document.getElementById("btn-prev");
    this.btnNext = document.getElementById("btn-next");
    this.counter = document.getElementById("page-counter");

    this.btnPrev.addEventListener("click", () => this.turnPrev());
    this.btnNext.addEventListener("click", () => this.turnNext());
    this.updateUI();
  }

  updateUI() {
    this.btnPrev.disabled = this.currentSpread <= -1 || this.isAnimating;
    this.btnNext.disabled =
      this.currentSpread >= this.maxSpread || this.isAnimating;

    if (this.currentSpread === -1) {
      this.counter.textContent = "Capa";
    } else if (this.currentSpread >= this.maxSpread) {
      this.counter.textContent = "Fim da Amostra";
    } else if (this.currentSpread === 0) {
      this.counter.textContent = "Rosto";
    } else {
      const pLeft = this.currentSpread * 2;
      const pRight = this.currentSpread * 2 + 1;
      this.counter.textContent = `Pág. ${pLeft} - ${pRight}`;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const delta = Math.min(this.clock.getDelta(), 0.1);
    this.controls.update();
    this.updateLeafStates(delta);
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new PremiumHybridBook();
});
