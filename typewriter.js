const quotes = [
    '"A profecia é o sonho perdido, que ligará o mundo à nova Era."',
    '"A palavra de Deus, para os guardiões, era uma que lhes rodeava impiedosamente: morte."',
    '"Suas decisões mudarão o mundo, para o bem ou para o mal."',
    '"A cada um dos seus passos está destinada a incerteza."',
    '"No olho de qualquer ser está seu destino."',
    '"Quando se subestima o mal, ele toma tudo."',
    '"A todo ser que pensa é inerente o medo do futuro."'
];

class Typewriter {
    constructor(element) {
        this.element = element;
        this.originalText = '';
        this.currentText = '';
        this.currentIndex = 0;
        this.isTyping = false;
        this.isDeleting = false;
        this.typeSpeed = 50;
        this.deleteSpeed = 30;
        this.pauseDuration = 3000;
        this.timeout = null;
        this.availableIndices = [];
        this.quoteIndex = this.getNextIndex();

        this.element.textContent = '';
    }

    getNextIndex() {
        if (this.availableIndices.length === 0) {
            this.availableIndices = quotes.map((_, i) => i);
        }
        const randomIndex = Math.floor(Math.random() * this.availableIndices.length);
        return this.availableIndices.splice(randomIndex, 1)[0];
    }

    start() {
        this.startTyping();
    }

    startTyping() {
        this.originalText = quotes[this.quoteIndex];
        this.currentText = '';
        this.currentIndex = 0;
        this.isTyping = true;
        this.isDeleting = false;
        this.typeCharacter();
    }

    typeCharacter() {
        if (this.currentIndex < this.originalText.length) {
            this.currentText += this.originalText[this.currentIndex];
            this.element.textContent = this.currentText;
            this.currentIndex++;

            const nextChar = this.originalText[this.currentIndex];
            const delay = (nextChar === ',' || nextChar === '.' || nextChar === ';' || nextChar === ':')
                ? this.typeSpeed * 3
                : this.typeSpeed;

            this.timeout = setTimeout(() => this.typeCharacter(), delay);
        } else {
            this.isTyping = false;
            this.timeout = setTimeout(() => this.startDeleting(), this.pauseDuration);
        }
    }

    startDeleting() {
        this.isDeleting = true;
        this.deleteCharacter();
    }

    deleteCharacter() {
        if (this.currentText.length > 0) {
            this.currentText = this.currentText.slice(0, -1);
            this.element.textContent = this.currentText;

            this.timeout = setTimeout(() => this.deleteCharacter(), this.deleteSpeed);
        } else {
            this.isDeleting = false;
            this.quoteIndex = this.getNextIndex();
            this.timeout = setTimeout(() => this.startTyping(), 500);
        }
    }

    stop() {
        clearTimeout(this.timeout);
    }

    destroy() {
        this.stop();
    }
}