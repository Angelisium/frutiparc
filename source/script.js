$(document).ready(function() {

    $("body").on('click','.close-card',function() {
        $(this).closest('.card').addClass('d-none');
    }).on('click','#menu-profil .onglet', function(){

        $('#menu-profil .onglet').removeClass('active');
        $(this).addClass('active');
        $('.panel-profil').addClass('d-none');
        $($(this).attr('data-target')).removeClass('d-none');
        console.log('puic');
    });
	$('.card.draggable').draggable({ containment: "#bodycontainer"/*, scroll: false */});
});