var acceptedCategorySlug = 'Assigned';
var acceptedCategory = 'Assigned Projects';

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
      var categories = document.getElementsByClassName('main-category-title');
      if (categories.length > 0) {
        var categoryIncludesAccepted = false;
        for (i = 0; i < categories.length; i++) {
          if (categories[i].innerHTML.indexOf(acceptedCategory) > -1) {
            categoryIncludesAccepted = true;
          }
        }
      }
      var acceptedPosts = document.getElementsByClassName('post category-' + acceptedCategorySlug);
      var posts = document.getElementsByClassName('post');
      if (categories.length == 0 || !categoryIncludesAccepted) {
        if (document.getElementsByClassName('single-post grid').length != 0) {
          for (i = 0; i < acceptedPosts.length; i++) {
            acceptedPosts[i].style.display = 'flex';
          }
        } else {
          for (i = 0; i < acceptedPosts.length; i++) {
            acceptedPosts[i].style.display = 'none';
          }
        }
        linkClickFunctions();
        if (posts.length - acceptedPosts.length < 10) {
          if ($('.more-button').length > 0) {
            $('.more-button').click();
          }
        }
      } else {
        for (i = 0; i < acceptedPosts.length; i++) {
          acceptedPosts[i].style.display = 'flex';
        }
        linkClickFunctions();
      }
    }
  }, 10);

};

var linkClickFunctions = function() {
  links = document.getElementsByTagName('a');
  for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      $(document).ready(function () {
        displayAccepted()
      });
    }
  }
};

