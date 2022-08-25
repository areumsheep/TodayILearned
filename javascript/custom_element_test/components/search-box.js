class SearchBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // 커스텀 컴포넌트의 자손 요소와 스타일시트를 정의하는 템플릿을 복제해서 섀도우 루트에 추가한다.
    this.shadowRoot.append(SearchBox.template.content.cloneNode(true));

    this.input = this.shadowRoot.querySelector('#input');
    let leftSlot = this.shadowRoot.querySelector('slot[name="left"]');
    let rightSlot = this.shadowRoot.querySelector('slot[name="right"]');

    this.input.onfocus = () => {
      this.setAttribute('focused', '');
    };
    this.input.onblur = () => {
      this.removeAttribute('focused');
    };

    leftSlot.onclick = this.input.onchange = (event) => {
      event.stopPropagation();
      if (this.disabled) return;
      this.dispatchEvent(
        new CustomEvent('search', { detail: this.input.value })
      );
    };
    rightSlot.onclick = (event) => {
      event.stopPropagation();
      if (this.disabled) return;
      let e = new CustomEvent('clear', { cancelable: true });
      this.dispatchEvent(e);
      if (!e.defaultPrevented) {
        //이벤트가 취소되지 않았다면
        this.input.value = '';
      }
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'disabled') {
      this.input.disabled = newValue !== null;
    } else if (name === 'placeholder') {
      this.input.placeholder = newValue;
    } else if (name === 'size') {
      this.input.size = newValue;
    } else if (name === 'value') {
      this.input.value = newValue;
    }
  }

  get placeholder() {
    return this.getAttribute('placeholder');
  }
  get size() {
    return this.getAttribute('size');
  }
  get value() {
    return this.getAttribute('value');
  }
  get disabled() {
    return this.getAttribute('disabled');
  }
  get hidden() {
    return this.getAttribute('hidden');
  }

  set placeholder(value) {
    this.setAttribute('placeholder', value);
  }
  set size(value) {
    this.setAttribute('size', value);
  }
  set value(value) {
    this.setAttribute('value', value);
  }
  set disabled(value) {
    if (value) this.setAttribute('disabled', '');
    else this.removeAttribute('disabled');
  }
  set hidden(value) {
    if (value) this.setAttribute('hidden', '');
    else this.removeAttribute('hidden');
  }
}

SearchBox.observedAttributes = ['disabled', 'placeholder', 'size', 'value'];
SearchBox.template = document.createElement('template');

SearchBox.template.innerHTML = `
  <style>
    /*
      :host 선택자는 라이트 DOM의 <search-box> 요소를 참조한다
    */
    :host {
      display: inline-block;
      border: 1px solid black;
      border-radius: 5px;
      padding: 4px 6px;
    }
    :host([hidden]) {
      display: none;
    }
    :host([disabled]) {
      opacity: 0.5;
    }
    :host([focused]) {
      box-shadow: 0 0 2px 2px #6AE;
    }

    /* 나머지 스타일시트는 섀도우 DOM 요소에만 적용된다 */
    input {
      border-width: 0;
      outline: none;
      font: inherit;
      background: inherit;
    }
    slot {
      cursor: default;
      user-select: none;
    }
  </style>

  <div>
    <slot name="left">\u{1f50d}</slot>
    <input type="text" id="input" />
    <slot name="right">\u{2573}</slot>
  </div>
`;

customElements.define('search-box', SearchBox);
