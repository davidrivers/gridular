(function(){
  $('.edit').click(function(){
    if ($(this).find('.change-class').length == 0) {
      $(this).append(' \
        <select class="change-class"> \
          <option value="volvo">Volvo</option> \
          <option value="saab">Saab</option> \
          <option value="mercedes">Mercedes</option> \
          <option value="audi">Audi</option> \
        </select> \
      ');
    } else {
      $('.change-class').show();
    }
  });
  $('.change-class').live('click', function(event){
    //console.log($(this).val());
    $(this).hide();
  });
  $('.add').live('click', function(){
    $(this).closest('.gr').clone().css({opacity: 0}).insertAfter($(this).closest('.gr')).animate({opacity: 1});
  });
  $('.remove').live('click', function(){
    $(this).closest('.gr').fadeOut();
  });
})();
