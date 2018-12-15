import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpa-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public selectedItem = -1;

  items: SidebarItem[] = [
    { action: 'nav_home', text: 'Home', icon: 'home' },
    { action: 'nav_home', text: 'New', icon: 'plus' },
    { action: 'nav_home', text: 'Projects', icon: 'minus' },
    { action: 'nav_home', text: 'Archive', icon: 'archive' },
    { action: 'nav_home', text: 'Settings', icon: 'cog' },
  ];

  constructor() { }

  ngOnInit() {
  }

  itemClicked(item: SidebarItem, index: number) {
    this.selectedItem = index;
  }

}

interface SidebarItem {
  text: string;
  icon: string;
  action: string;
}