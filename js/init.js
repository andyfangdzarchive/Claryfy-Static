(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function useSearch() {
	$('#mainSearch').hide(0);
	$('#subSearch').show(0);
	$('#search').focus();
}
function disableSearch() {
	$('#mainSearch').show(0);
	$('#subSearch').hide(0);
}
var attachFastClick = Origami.fastclick;
attachFastClick(document.body);