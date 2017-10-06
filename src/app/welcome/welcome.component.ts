import { Component, OnInit } from '@angular/core';

declare var $: any; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
$('[data-toggle="tooltip"]').tooltip();
	   $('[data-toggle="tooltip"]').tooltip({ 
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });


    $('.popup-options').mouseover(function(){
      /*$('.child-more-options').css('display','none');*/
      if($(this).children('.chat-actions-hover').css('display') == 'none')
      {
        $(this).children('.chat-actions-hover').css('display','block');
      }
    });

     $('.popup-options').mouseout(function(){
      if($(this).children('.chat-actions-hover').css('display') == 'block')
      {
        $(this).children('.chat-actions-hover').css('display','none');
      }
    });


     $('.more-options').click(function(){

        if($(this).parent('ul').next('div').css('display') == 'block')
        {
          $(this).parent('ul').next('div').css('display','none');
        }
        else
        {
          $(this).parent('ul').next('div').css('display','block');
        }

        
     });
    /*var hoverfunction = 0;
    
    $('.more-options').click(function(){
      if(hoverfunction == 0){
      
      $('.popup-options').unbind('mouseout');
      $('.child-more-options').css('display','block');
      hoverfunction = 1;
      }
      else
      {
        $('.child-more-options').css('display','none');
        hoverfunction = 0;
      }
    });


    $('.media-body').click(function(){
      $('.chat-actions-hover').css('display','none');
      $('.child-more-options').css('display','none');
    });*/


    // for thread section

    $('.popup-options-thread').mouseover(function(){
      $(this).children('.chat-actions-hover-thread').css('display','block');
    });

     $('.popup-options-thread').mouseout(function(){
      $(this).children('.chat-actions-hover-thread').css('display','none');
    });

    var hoverfunction1 = 0;
    
    $('.more-options-thread').click(function(){
      if(hoverfunction1 == 0){
      $(this).parents('.chat-actions-hover-thread').css('display','block');
      $('.popup-options-thread').unbind('mouseout');
      $('.child-more-options-thread').css('display','block');
      hoverfunction1 = 1;
      }
      else
      {
        $('.child-more-options-thread').css('display','none');
        hoverfunction1 = 0;
      }
    });


    $('.media-body-thread').click(function(){
      $('.chat-actions-hover-thread').css('display','none');
      $('.child-more-options-thread').css('display','none');
    });


    // for display thread section

    $('#display-thread').click(function(){
      $('.message-box').addClass('message-box-resize');
      $('.start-thread-sec').css('display', 'block');
    });

    $('.close-thread').click(function(){
      $('.message-box').removeClass('message-box-resize');
      $('.start-thread-sec').css('display', 'none');
    });

    // for display conversation deatail section
    // $('#display-conversation-detail').click(function(){
    //   $('.message-box').toggleClass('message-box-resize');
    //   $('.conversation-details').css('display', 'block');
    // });

    // $('.close-thread').click(function(){
    //   $('.message-box').removeClass('message-box-resize');
    //   $('.conversation-details').css('display', 'none');
    // });


    $('#display-conversation-detail').click(function(){
      $('.conversation-details').addClass('dis-block');
      $('.activity-section').removeClass('dis-block');
      $('.starred-items').removeClass('dis-block');
      $('.start-thread-sec').removeClass('dis-block');
      $('.start-thread-sec').addClass('dis-none');
      $('.message-box').addClass('message-box-resize');
      $('.workspace-directory').removeClass('dis-block');
      $('.workspace-directory2').removeClass('dis-block');
    });

    $('#display-activity-sec').click(function(){
      $('.conversation-details').removeClass('dis-block');
      $('.activity-section').addClass('dis-block');
      $('.starred-items').removeClass('dis-block');
      $('.start-thread-sec').removeClass('dis-block');
      $('.message-box').addClass('message-box-resize');
      $('.workspace-directory').removeClass('dis-block');
      $('.workspace-directory2').removeClass('dis-block');
    });

    $('#display-starred-items').click(function(){ 
      $('.conversation-details').removeClass('dis-block');
      $('.activity-section').removeClass('dis-block');
      $('.starred-items').addClass('dis-block');
      $('.start-thread-sec').removeClass('dis-block');
      $('.message-box').addClass('message-box-resize');
      $('.workspace-directory').removeClass('dis-block');
      $('.workspace-directory2').removeClass('dis-block');
    });

    $('#display-thread').click(function(){
      $('.conversation-details').removeClass('dis-block');
      $('.activity-section').removeClass('dis-block');
      $('.starred-items').removeClass('dis-block');
      $('.start-thread-sec').addClass('dis-block'); 
      $('.message-box').addClass('message-box-resize');
      $('.workspace-directory').removeClass('dis-block');
      $('.workspace-directory2').removeClass('dis-block');
    });

    $('.display-pro-account').click(function(){
      $('.conversation-details').removeClass('dis-block');
      $('.activity-section').removeClass('dis-block');
      $('.starred-items').removeClass('dis-block');
      $('.start-thread-sec').removeClass('dis-block');
      $('.workspace-directory').addClass('dis-block');
      $('.workspace-directory2').removeClass('dis-block');
      $('.message-box').addClass('message-box-resize'); 
    });

    $('#display-workspace-dire').click(function(){
      $('.conversation-details').removeClass('dis-block');
      $('.activity-section').removeClass('dis-block');
      $('.starred-items').removeClass('dis-block');
      $('.start-thread-sec').removeClass('dis-block');
      $('.workspace-directory').removeClass('dis-block');
      $('.workspace-directory2').addClass('dis-block');
      $('.message-box').addClass('message-box-resize'); 
    });

    $('.close-thread, .close-thread1, .close-thread2, .close-thread3, .close-thread4, .close-thread5').click(function(){
      $('.message-box').removeClass('message-box-resize'); 
      $('.conversation-details').removeClass('dis-block');
      $('.conversation-details').addClass('dis-none');
      $('.activity-section').removeClass('dis-block');
      $('.activity-section').addClass('dis-none');
      $('.starred-items').removeClass('dis-block');
      $('.starred-items').addClass('dis-none');
      $('.start-thread-sec').removeClass('dis-block'); 
      $('.start-thread-sec').addClass('dis-none'); 
      $('.workspace-directory').removeClass('dis-block'); 
      $('.workspace-directory').addClass('dis-none'); 
      $('.workspace-directory2').removeClass('dis-block'); 
      $('.workspace-directory2').addClass('dis-none'); 
    });


    // for display activity section
    // $('#display-activity-sec').click(function(){
    //   $('.message-box').addClass('message-box-resize');
    //   $('.activity-section').css('display', 'block');
    // });

    // $('.close-thread').click(function(){
    //   $('.message-box').removeClass('message-box-resize');
    //   $('.activity-section').css('display', 'none');
    // });

    // for accordion tabs
    $(".toggle-accordion").on("click", function() {
      var accordionId = $(this).attr("accordion-id"),
        numPanelOpen = $(accordionId + ' .collapse.in').length;
      
    });

    // for starred items
    // $('#display-starred-items').click(function(){
    //   $('.message-box').addClass('message-box-resize');
    //   $('.starred-items').css('display', 'block');
    // });

    // $('.close-thread').click(function(){
    //   $('.message-box').removeClass('message-box-resize');
    //   $('.starred-items').css('display', 'none');
    // });
    


  }

}
