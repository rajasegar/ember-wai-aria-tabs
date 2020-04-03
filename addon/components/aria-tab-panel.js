import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AriaTabPanelComponent extends Component {

  constructor() {
    super(...arguments);
    this.args.register(this.args.id);
  }

  @tracked active;

  get isNotActive() {
    return !this.args.active === this.args.id;
  }
}

