// SIDEBAR
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 275, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
    $(".parallax").parallax();
});
 
 // START OPEN
  $('.button-collapse').sideNav('show');


// $(".fixed-action-btn").floatingActionButton({ options,
//   direction: 'left'
// });



  
 
 