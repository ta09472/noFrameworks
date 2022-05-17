export default function Greeting({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "Greeting-container";
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
    <h1 class="Greeting" value="${this.state}">안녕하세요</h1>
    `;
  };

  this.render();
}
