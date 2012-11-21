$(function(){
    var Siberia = [
        'когда я открывал браузер, на улице ещё было лето',
        'ещё мой дед делал сайты в Сибири, чтобы не замерзнуть'
    ];
    var luck = Math.floor(Math.random()*Siberia.length);
    if(window.location.hash &&  /#\d{1,2}/.test(window.location.hash)){    
       var destiny = +window.location.hash.replace('#','')
       if(destiny <= Siberia.length){
           luck = destiny;
       }
    }
    $('body').addClass('siberia'+luck);
    $('h1').html(Siberia[luck]);
});
