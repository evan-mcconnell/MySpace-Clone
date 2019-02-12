$(document).ready(function() {
  for (i=0; i< 50; i++) {
    $(".comments").append("<div class='comment'><div class='commentprofile'><div class='commentusername'><a href='#'><p>Mr. Darcy</p></a></div><div class='commentuserpicture'><img src='img/friend.jpeg' alt='a llama'></div></div><div class='commentcontent'><div class='date'><p>4/22/2006 6:54 PM</p></div><p>Dude, Appetite for Destruction Rocks, same with Alice Cooper and KISS</p></div></div>");
  }
  $(".comments").append("<div id='addComment'><p><a href='#'><strong>Add Comment</strong></a></p></div>")
});
