$(document).ready(function() {

    $("body").on('click','#menu-profil .onglet', function(){
        $('#menu-profil .onglet').removeClass('active d-flex');
        $(this).addClass('active');
        $('.panel-profil').addClass('d-none');
        $($(this).attr('data-target')).removeClass('d-none');
        console.log('puic');
    });
	$('.card.draggable').draggable({ containment: "#bodycontainer"/*, scroll: false */});
});