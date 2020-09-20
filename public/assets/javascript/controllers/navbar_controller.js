import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['menu', 'menuButton']

  toggleMenu() {
    this.menuTarget.classList.toggle('is-active')
    this.menuButtonTarget.classList.toggle('is-active')
  }
}
