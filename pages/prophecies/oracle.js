document.addEventListener("DOMContentLoaded", function () {
  const MESSAGES = [
    "A palavra de Deus, para os guardiões, era uma que lhes rodeava impiedosamente: morte.",
    "E quando se subestima o mal, ele toma tudo.",
    "A todo ser que pensa é inerente o medo do futuro.",
    "Qualquer passo em falso o fará se atolar em ainda mais problemas.",
    "Focar em uma coisa só ajuda a manter pensamentos ruins distantes.",
    "Nossa Ordem é tão poderosa quanto o elo mais fraco.",
    "O medo da batalha costumeiramente assola aqueles que muitas outras já lutaram.",
    "A Chama nos fez para protegê-los. Esse é o nosso propósito.",
    "Vejam o que o medo faz com as pessoas.",
    "A alvorada de um novo tempo nasce no horizonte.",
    "Os sonhos de uma criança são doces, já a vida adulta nem tanto.",
    "Em toda crise há um momento que tem o poder de mudar os rumos do conflito.",
    "Ficar de luto só faz com que você ou mais alguém que ama morra.",
    "A cada um dos seus passos está destinada a incerteza.",
    "Se estiver equivocada, saiba que não haverá uma segunda chance.",
    "Revüert. Justo é o fogo.",
    "No olho de qualquer ser está seu destino.",
    "Toda profecia, já dita ou pensada, está guardada no tecido do tempo.",
    "Um erro no tecido do universo ainda possui um propósito oculto.",
    "O próprio tempo se recusa a professar certas verdades sombrias.",
    "Nada de bom vem da carta de um morto.",
    "A vida, repentina, sempre tem outros planos para aqueles que ignoram o futuro.",
    "A escuridão nunca vai embora, mas você deve tentar fugir dela.",
    "A memória e o conhecimento são as armas mais importantes de um guardião.",
    "O passado é longe demais e alguns desejos repousam ainda mais distantes.",
    "Os caminhos tomados pela pressão e medo dificilmente são satisfatórios.",
    "As coisas podem não estar tranquilas do outro lado. Coragem.",
    "A esperança é o único sentimento que nos permitem ter.",
    "A melhor forma de honrar os que se foram é lutando e salvando outras vidas.",
    "O impossível já era apenas uma palavra qualquer, que perdeu o significado.",
    "Mitos são apenas histórias cuja veracidade foi apagada pelo tempo.",
    "Siga o seu coração acima de qualquer coisa.",
    "A liberdade de tomar as suas próprias escolhas e viver suas consequências é o maior presente que um humano pode ter.",
    "Armas são como pincéis para a magnífica arte do combate.",
    "Relaxe a mente, sinta a lâmina como uma extensão do seu corpo.",
    "Aquele que terminar rendido perde o combate.",
    "A criação é uma transformação, e não há como vir do vazio.",
    "A fé move montanhas e tem o poder de moldar o próprio universo inteligível.",
    "Tenha fé e ela o guiará para os sonhos mais bonitos.",
    "Não há surpresas nesta guerra, apenas as consequências da própria covardia.",
    "A ganância, no fundo, é a língua universal dos homens.",
    "Os sonhos são a quintessência de uma existência inventada, mas escondem uma verdade residual.",
    "Conhece-te a ti mesmo, e conhecerás os deuses, e o universo.",
    "O humor é a mais bela das criações.",
    "Um bruxo é forjado pela perda. A desgraça pavimenta seu caminho e a dor institui sua glória.",
    "Há a chama, e há o fogo. A chama é apenas a luz, o fogo é o que realmente queima.",
    "Você tem que deixar as pessoas encontrarem seu caminho para fora de seu próprio problemão.",
    "O destino serve chá, aceite a xícara.",
    "A terra dos sonhos é um lugar tão real e físico quanto o céu ou o inferno.",
    "O Limiar não é um lugar para negociações terrenas.",
  ];

  const crystalBall = document.getElementById("crystalBall");
  const consultButton = document.getElementById("consultButton");
  const prophecyText = document.getElementById("prophecyText");
  const prophecyDate = document.getElementById("prophecyDate");
  const shareProphecyBtn = document.getElementById("shareProphecy");
  const newProphecyBtn = document.getElementById("newProphecy");
  const prophecyCard = document.getElementById("prophecyCard");
  const prophecyActions = document.getElementById("prophecyActions");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  let currentMessage = null;
  let isGenerating = false;

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

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  crystalBall.addEventListener("click", handleOracleConsultation);
  consultButton.addEventListener("click", handleOracleConsultation);
  shareProphecyBtn.addEventListener("click", shareProphecyAsImage);

  if (newProphecyBtn) {
    newProphecyBtn.style.display = "none";
  }

  const bg = document.querySelector(".oracle-background");
  if (bg) {
    const s = document.createElement("style");
    s.id = "mist-anim";
    s.textContent = `@keyframes mistFloat { 0%,100%{transform:translate(0,0) scale(1);opacity:0.1} 50%{transform:translate(20px,-20px) scale(1.2);opacity:0.15} }`;
    document.head.appendChild(s);

    for (let i = 0; i < 6; i++) {
      const p = document.createElement("div");
      p.style.cssText = `position:absolute; left:${Math.random() * 100}%; top:${Math.random() * 100}%; width:150px; height:150px; border-radius:50%; background:radial-gradient(circle, rgba(200,165,93,0.05), transparent 70%); filter:blur(30px); animation: mistFloat ${15 + Math.random() * 10}s infinite linear; pointer-events:none;`;
      bg.appendChild(p);
    }
  }

  function checkDailyEligibility() {
    const lastConsultation = localStorage.getItem("limiar_oracle_date");
    const today = new Date().toDateString();
    return lastConsultation !== today;
  }

  function handleOracleConsultation() {
    if (isGenerating) return;

    if (!checkDailyEligibility()) {
      showExistingProphecy();
      return;
    }

    generateNewProphecy();
  }

  function showExistingProphecy() {
    const savedMessage = localStorage.getItem("limiar_oracle_message");
    if (savedMessage) {
      currentMessage = savedMessage;
      displayCard(true);
    }
  }

  function generateNewProphecy() {
    isGenerating = true;

    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }

    crystalBall.style.filter = "drop-shadow(0 0 60px rgba(200, 165, 93, 0.9))";
    crystalBall.style.transform = "scale(1.05)";
    prophecyText.innerHTML = `<p style="opacity: 0.7; text-align: center;">Lendo os fios do destino...</p>`;

    setTimeout(() => {
      currentMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

      const today = new Date().toDateString();
      localStorage.setItem("limiar_oracle_date", today);
      localStorage.setItem("limiar_oracle_message", currentMessage);

      crystalBall.style.filter =
        "drop-shadow(0 0 30px rgba(200, 165, 93, 0.3))";
      crystalBall.style.transform = "scale(1)";

      displayCard(false);
      isGenerating = false;
    }, 1200);
  }

  function displayCard(isReturningUser) {
    const now = new Date();
    prophecyDate.textContent = now.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    prophecyText.innerHTML = `
            <div style="font-size: 1.4rem; font-style: italic; color: #3a3429; line-height: 1.6; text-align: center; margin: 20px 0;">
                "${currentMessage}"
            </div>
            ${isReturningUser ? '<p style="font-size: 0.9rem; color: #8b7e5a; text-align: center; margin-top: 20px;">O Oráculo só se pronuncia uma vez ao dia. Retorne amanhã.</p>' : ""}
        `;

    prophecyCard.classList.add("open");

    setTimeout(() => {
      prophecyActions.classList.add("visible");
    }, 500);
  }

  async function shareProphecyAsImage() {
    if (!currentMessage) return;

    const originalBtnText = shareProphecyBtn.innerHTML;
    shareProphecyBtn.innerHTML = `<span>Gerando Imagem...</span>`;
    shareProphecyBtn.style.pointerEvents = "none";

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1080;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#0f0e18";
      ctx.fillRect(0, 0, 1080, 1080);

      const margin = 60;
      ctx.fillStyle = "#f5f1e6";
      ctx.fillRect(margin, margin, 1080 - margin * 2, 1080 - margin * 2);

      ctx.strokeStyle = "#C8A55D";
      ctx.lineWidth = 4;
      ctx.strokeRect(
        margin + 20,
        margin + 20,
        1080 - margin * 2 - 40,
        1080 - margin * 2 - 40,
      );

      ctx.textAlign = "center";
      ctx.fillStyle = "#3a3429";
      ctx.font = "bold 48px 'Cinzel', serif";
      ctx.fillText("O LIMIAR", 540, 180);

      ctx.fillStyle = "#8b7e5a";
      ctx.font = "24px 'Cinzel', serif";
      ctx.fillText("ORÁCULO DA NÉVOA", 540, 230);

      ctx.fillStyle = "#1a1828";
      ctx.font = "italic 44px 'Crimson Text', serif";

      const maxWidth = 800;
      const lineHeight = 60;
      const textToDraw = `"${currentMessage}"`;
      const words = textToDraw.split(" ");
      let line = "";
      let lines = [];

      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + " ";
        let metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          lines.push(line);
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      let startY = 540 - (lines.length * lineHeight) / 2 + 20;
      lines.forEach((l) => {
        ctx.fillText(l, 540, startY);
        startY += lineHeight;
      });

      ctx.fillStyle = "#C8A55D";
      ctx.font = "40px 'Cinzel', serif";
      ctx.fillText("⌘", 540, 920);

      const today = new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      ctx.fillStyle = "#8b7e5a";
      ctx.font = "24px 'Cinzel', serif";
      ctx.fillText(today, 540, 970);

      const dataUrl = canvas.toDataURL("image/png");

      function dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(",");
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      }

      const file = dataURLtoFile(dataUrl, "o-limiar-oraculo.png");
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );

      if (
        isMobile &&
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({
            files: [file],
          });
        } catch (shareError) {
          if (shareError.name !== "AbortError") {
            downloadFallback(dataUrl);
          }
        }
      } else {
        downloadFallback(dataUrl);
      }

      resetButton();
    } catch (error) {
      console.error(error);
      resetButton();
      alert("Não foi possível gerar a imagem no momento.");
    }

    function downloadFallback(url) {
      const link = document.createElement("a");
      link.href = url;
      link.download = "o-limiar-oraculo.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    function resetButton() {
      shareProphecyBtn.innerHTML = originalBtnText;
      shareProphecyBtn.style.pointerEvents = "auto";
    }
  }
});
