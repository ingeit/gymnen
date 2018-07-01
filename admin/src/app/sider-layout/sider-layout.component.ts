import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'sider-layout',
  templateUrl: './sider-layout.component.html',
  styleUrls: ['./sider-layout.component.css']
})

export class SiderLayoutComponent {
  
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  @Input() menuIconState;
  
  constructor(){}

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  
  colapseExpand(): void {
    this.isCollapsed=!this.isCollapsed;
  }

}
