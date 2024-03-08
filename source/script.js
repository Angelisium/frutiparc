$(document).ready(function() {

    $("body").on('click',"#pushbtnleft",function(){
        console.log('here');
        $('.wheel.rotating').toggleClass('hidden');
    }).on('click','#bouille',function() {
        $('#profil-card').removeClass('d-none');
    }).on('click','.close-card',function() {
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