(function ($) {
  $(document).ready(function() {
    $(document).on('click', 'span[class="mdl-checkbox__box-outline"]', function(){
      var $parent = $(this).parent();
      $($parent).find('label').click();
    })
  })
})(jQuery);
