class CodeBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const language = this.getAttribute('language') || 'plaintext';
    const code = this.textContent.trim();

    // 清空 slot 原本的內容
    this.textContent = '';

    // 套用樣式 + 結構
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
      <style>
        .code-block {
          position: relative;
          margin: 1em 0;
        }
        .copy-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ffb6c1;
          border: none;
          padding: 5px 10px;
          color: #fff;
          font-size: 0.8em;
          border-radius: 4px;
          cursor: pointer;
          opacity: 0.8;
        }
        .copy-button:hover {
          opacity: 1;
        }
      </style>
      <div class="code-block">
        <button class="copy-button">Copy</button>
        <pre><code class="language-${language}">${this.escapeHtml(code)}</code></pre>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    `;

    // Highlight.js 需手動呼叫
    import('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js')
      .then(hljs => hljs.default.highlightElement(this.shadowRoot.querySelector('code')));

    // 複製按鈕事件
    const button = this.shadowRoot.querySelector('.copy-button');
    const codeEl = this.shadowRoot.querySelector('code');

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1500);
      });
    });
  }

  escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
}

customElements.define('code-block', CodeBlock);
