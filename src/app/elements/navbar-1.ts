import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'navbar-1',
  templateUrl: '../elements/navbar-1.html'
})

export class Navbar1Component {

  constructor() {
  }

ngOnInit() {
  $('[data-toggle="tooltip"]').tooltip();
     $('[data-toggle="tooltip"]').tooltip({ 
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });

}

  toggleLayout(): void {
    const body = $('body');
    const collapsed = body.attr('data-collapsed') === 'true' ? true : false;
    body.attr('data-collapsed', !collapsed);
    const layout = body.attr('data-layout');
    if (layout === 'sidebar-over-1') {
      var backdrop = $('.left-sidebar-backdrop');
      if (backdrop.hasClass('in')) {
        backdrop.removeClass('fade');
        backdrop.removeClass('in');
      } else {
        backdrop.toggleClass('fade in');
      }
    }
  }

  toggleRightSidebar(): void {
    $('.right-sidebar-outer').toggleClass('show-from-right');
    if ($('.right-sidebar-outer').hasClass('show-from-right')) {
      $('.right-sidebar-backdrop').toggleClass('fade in');
    } else {
      $('.right-sidebar-backdrop')
        .removeClass('fade')
        .removeClass('in');
    }
  }

  toggleFullscreen(): void {
    const body = $('body');
    const value = body.attr('data-fullscreen') === 'true' ? true : false;
    body.attr('data-fullscreen', !value);
  }


}

