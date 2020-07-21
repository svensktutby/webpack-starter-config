import './button.scss';

export default class Button {
  constructor({ text }) {
    this.btn = document.createElement('button');
    this.btn.className = 'btn';
    this.btn.innerHTML = text;

    this.btn.onclick = () => this.btn.classList.toggle('bg');
  }
}
