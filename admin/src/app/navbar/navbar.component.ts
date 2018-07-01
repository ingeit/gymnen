import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCollapsed = false;
  // triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  // changeTrigger(): void {
  //   this.triggerTemplate = this.customTrigger;
  // }
  

  colapseExpand() {
    this.isCollapsed=!this.isCollapsed;
    // this.menuIconState.emit(this.isCollapsed);
  }

}
