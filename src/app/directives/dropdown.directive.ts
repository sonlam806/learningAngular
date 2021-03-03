import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isShow = false;

  @HostBinding('class.show') get t() {
    return this.isShow;
  }
  @HostListener('click')
  toggleDropdown() {
    this.isShow = !this.isShow;
  }

  constructor() {}
}

