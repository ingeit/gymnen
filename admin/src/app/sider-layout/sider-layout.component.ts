import { Component, TemplateRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'sider-layout',
  templateUrl: './sider-layout.component.html',
  styleUrls: ['./sider-layout.component.css']
})

export class SiderLayoutComponent {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  @Input() 
  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
