$('document').ready(function(){
    $('#linha-nova-tarefa').change(function(){
        var linhaNovaTarefa = $(this).val();
        $('ul').append('<li>' +linhaNovaTarefa+ ' <i class="fas fa-check"></i> </li>');
        $(this).val('');
    });

    $('ul').on('click', '.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    });
});
