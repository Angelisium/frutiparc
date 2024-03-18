$(document).ready(function() {

    $("body").on('click','#menu-profil .onglet', function(){
        $('#menu-profil .onglet').removeClass('active d-flex');
        $(this).addClass('active');
        $('.panel-profil').addClass('d-none');
        $($(this).attr('data-target')).removeClass('d-none');
        console.log('puic');
    });
    $("body").on('click','#console', function() {
        $('.cdrom').css('opacity','1');
    });
	$('.card.draggable').draggable({ containment: "#bodycontainer"/*, scroll: false */});
});