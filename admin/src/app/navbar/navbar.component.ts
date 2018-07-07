import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  @Input() isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  @Output() isCollapsedEmitter: EventEmitter<boolean> = new EventEmitter();

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  collapseExpand() {
    this.isCollapsed=!this.isCollapsed;
    this.isCollapsedEmitter.emit(this.isCollapsed);
    // console.log("Is collapsed: ",this.isCollapsed);
  }

}
