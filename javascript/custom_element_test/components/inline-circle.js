customElements.define(
  'inline-circle',
  class InlineCircle extends HTMLElement {
    connectedCallback() {
      this.style.display = 'inline-block';
      this.style.borderRadius = '50%';
      this.style.border = 'solid black 1px';
      this.style.transform = 'translateY(10%)';

      if (!this.style.width) {
        this.style.width = '0.8em';
        this.style.height = '0.8em';
      }
    }

    //정적 프로퍼티 observedAttributes에 '이벤트'로 등록할 속성을 지정한다.
    static get observedAttributes() {
      return ['diameter', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case 'diameter':
          this.style.width = newValue;
          this.style.height = newValue;
          break;
        case 'color':
          this.style.backgroundColor = newValue;
      }
    }

    get diameter() {
      return this.getAttribute('diameter');
    }
    set diameter(diameter) {
      this.setAttribute('diameter', diameter);
    }
    get color() {
      return this.getAttribute('color');
    }
    set color(color) {
      this.setAttribute('color', color);
    }
  }
);
