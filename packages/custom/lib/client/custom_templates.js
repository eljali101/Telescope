var acceptedName = 'Assigned'

Telescope.utils.icons.upvote = "thumbs-up fa-2x";

Telescope.modules.remove('top', 'tagline_banner');

Telescope.modules.remove('secondaryNav', 'user_menu');

Telescope.modules.add('primaryNav', {
    template: 'user_menu',
    order: 1
});

Telescope.modules.remove('postComponents', 'post_discuss');

Telescope.modules.remove('postComponents', 'post_rank');

//Lord forgive me.
window.setInterval(function() {
  displayAccepted()
}, 2000);

$(document).ready(function() {
  displayAccepted();
});

var displayAccepted = function() {
  var i = setInterval(function() {
    if (document.getElementsByClassName('zone-wrapper top').length > 0) {
      clearInterval(i);
      var category = document.getElementsByClassName('main-category-title');
      var acceptedPosts = document.getElementsByClassName('post category-' + acceptedName);
      var posts = document.getElementsByClassName('post');
      if (category.length == 0 || category[0].innerHTML != acceptedName) {
        if (document.getElementsByClassName('single-post grid').length != 0) {
          for (i = 0; i < acceptedPosts.length; i++) {
            acceptedPosts[i].style.display = 'flex';
          }
        } else {
          for (i = 0; i < acceptedPosts.length; i++) {
            acceptedPosts[i].style.display = 'none';
          }
        }
      } else {
        for (i = 0; i < acceptedPosts.length; i++) {
          acceptedPosts[i].style.display = 'flex';
        }
      }
      linkClickFunctions();
      if (posts.length - acceptedPosts.length < 10) {
        if ($('.more-button').length > 0) {
          $('.more-button').click();
        }
      }
    }
  }, 10);

};

var linkClickFunctions = function() {
  console.log('called');
  links = document.getElementsByTagName('a');
  for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      $(document).ready(function () {
        displayAccepted()
      });
    }
  }
};

