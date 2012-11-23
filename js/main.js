$(function(){

//   $('body').css('background-image','url(img/siberia0.jpg)')

    var Siberia = {
        siberia0: 'когда я открывал браузер, на улице стояло лето',
        siberia1: 'делаем сайты, чтобы не замерзнуть',
        siberia2: 'поднимаем инфраструктуру в облака, чтобы не засыпало снегом',
        siberia3: 'используем бесценные знания в качестве опоры'
    };
    
    var sights = 0;
    for(sight in Siberia){
        sights++;
    }
   
    var luck = Math.floor(Math.random()*sights) + 1;
    if(window.location.hash &&  /#\d+/.test(window.location.hash)){    
       var destiny = +window.location.hash.replace('#','')
       if(destiny <= sights) {
           luck = destiny;
       }
    }
    
    var showSiberia = function(sight){
        var goto = sight || luck;
        var walk = 0;
        for(sight in Siberia){
            walk++;
            if(walk == goto){
                $('body').css('background-image','url(img/'+sight+'.jpg)');
                $('h1').html(Siberia[sight])
            }
        }
    }
    
    var input = [];
    var code = '103,111';
    $(document).on('keypress', function(e){
        input.push(e.keyCode);
        if(input.length>2) {
            input.shift();
        }
        if(input.join() === code) {
            var goto = prompt('Welcome to Siberia', sights);
            if(goto && !/\D/.test(goto) && goto<=sights){
                window.location.hash = goto;
                window.location.reload();
            }
        }
    });
    
    showSiberia(luck);
});
