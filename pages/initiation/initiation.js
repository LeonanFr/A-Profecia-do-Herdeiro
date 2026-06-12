import { StoryNodes } from "./story-data.js";

class InitiationGame {
  constructor() {
    this.storyArea = document.getElementById("story-area");
    this.storyText = document.getElementById("story-text");
    this.choicesArea = document.getElementById("choices-area");
    this.resetBtn = document.getElementById("reset-game");

    this.currentNodeKey =
      localStorage.getItem("limiar_initiation_node") || "start";

    this.init();
  }

  init() {
    if (!StoryNodes[this.currentNodeKey]) {
      this.currentNodeKey = "start";
    }

    this.setupMobileMenu();
    this.resetBtn.addEventListener("click", () => this.resetGame());

    this.renderNode(this.currentNodeKey, false);
  }

  renderNode(nodeKey, animate = true) {
    const node = StoryNodes[nodeKey];
    if (!node) return;

    localStorage.setItem("limiar_initiation_node", nodeKey);
    this.currentNodeKey = nodeKey;

    if (animate) {
      gsap.to([this.storyText, this.choicesArea], {
        opacity: 0,
        y: 10,
        duration: 0.3,
        onComplete: () => {
          this.updateDOM(node);
          gsap.to([this.storyText, this.choicesArea], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          });
        },
      });
    } else {
      this.updateDOM(node);
      gsap.set([this.storyText, this.choicesArea], { opacity: 1, y: 0 });
    }
  }

  updateDOM(node) {
    this.storyText.innerHTML = node.text;
    this.choicesArea.innerHTML = "";

    if (this.currentNodeKey === "end") {
      this.storyText.style.textAlign = "center";
    } else {
      this.storyText.style.textAlign = "";
    }

    if (node.choices && node.choices.length > 0) {
      node.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.text;
        btn.addEventListener("click", () => this.renderNode(choice.next));
        this.choicesArea.appendChild(btn);
      });
    } else {
      this.renderFinalCTA();
    }
  }

  renderFinalCTA() {
    const ctaContainer = document.createElement("div");
    ctaContainer.className = "cta-group";

    ctaContainer.innerHTML = `
            <a href="https://flyve.com.br/840/a-profecia-do-herdeiro" target="_blank" rel="noopener noreferrer" class="cta-primary">
                Adquirir o Livro Físico
            </a>
            <a href="../book/book.html" class="cta-secondary">
                Ler Degustação 3D
            </a>
        `;

    this.choicesArea.appendChild(ctaContainer);
  }

  resetGame() {
    localStorage.removeItem("limiar_initiation_node");
    this.renderNode("start");
  }

  setupMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          navMenu.classList.remove("active");
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new InitiationGame();
});
