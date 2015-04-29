$(document).ready(function(){
  "use strict";

  $('.post-button').on('click', function(e){
    event.preventDefault();

    var $post = $('.post').val();
    var $notesList = $('.notes-list');

    if ($post.length === 0) {
      alert('This post is empty.');
    } else {
      $notesList.html("<li><span>" + $post + "</span></li>");
  }


  });

});