import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['trigger'];

  moveToItem() {
    const { targetId, behavior } = this.triggerTarget.dataset;
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: behavior || 'smooth' });
  }
}
