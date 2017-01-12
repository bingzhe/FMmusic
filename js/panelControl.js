$(function(){



var $play = $('.vc-control-play'),
    $rew = $('.vc-control-rewind'),
    $ff = $('.vc-controd-fforward'),
    $stop = $('.vc-control-stop'),
    $back = $('.vc-control-switch'),
    $controlBtn = $('.vc-controls li');

$controlBtn.on('click', function(){
  $(this).addClass('vc-control-active')
        .siblings().removeClass('vc-control-active');
})


})
