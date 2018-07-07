import { Component, TemplateRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  @Input() isCollapsed = false;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  triggerTemplate = null;

  constructor() {
    console.log(this.isCollapsed);
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

}
