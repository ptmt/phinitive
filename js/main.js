$(function(){
    var Siberia = [
        'когда я открывал браузер, на улице ещё было лето',
        'ещё мой дед делал сайты в Сибири, чтобы не замерзнуть'
    ];
    var luck = Math.floor(Math.random()*Siberia.length);
    $('body').addClass('siberia'+luck);
    $('h1').html(Siberia[luck]);
});
