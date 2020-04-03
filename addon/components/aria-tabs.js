import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AriaTabsComponent extends Component {
  constructor() {
    super(...arguments);
    console.log('constructor');
  } 

  @tracked panels = [];


  @action
  register(id) {
    console.log(id, ' tab registered');
    this.panels.push( id );
  }

  @action
  select(id) {
    console.log(id);
    this.active = id;
  }

  panelComponent = 'aria-tab-panel'

}
