import { Component } from './component';

export class Header extends Component {
  template: string;
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
  }

  createTemplate() {
    return `<header class="header">
            <div class="header__div">
                <img class="./src/pokemon-logo-CSTyfZa-.svg" alt="Pokemon logo"/>
                <h1 class="header__h1">Gotta Catch 'Em All!</h1>
               
            </div>
        </header>`;
  }
}
