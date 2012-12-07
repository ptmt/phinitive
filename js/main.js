$(function(){

    $('.show-team').on('click', function (){$('.team').toggle();})
    var Siberia = {
        siberia0: 'а ведь когда я открывал браузер, на улице стояло лето',
        siberia1: 'делаем сайты в Сибири, чтобы не мерзнуть',
        siberia2: 'поднимаем в облака, чтобы не занесло снегом',
        siberia3: 'надежная опора из бесценных знаний',
        siberia4: 'конструкции должны быть адаптивными — знаем с детства'
    };
    
    var sights = 0;
    for(sight in Siberia){
        sights++;
    }
    

   
    var luck = Math.floor(Math.random()*sights) + 1;
    var destiny = false;
    if(window.location.hash){     
        if(/#\d+/.test(window.location.hash)){
           destiny = +window.location.hash.replace('#','');
           if(destiny <= sights) {
               luck = destiny;
           }
        } else {
            $(window.location.hash.replace('#','.')).show();
        }
        
    }
    
    
    var seen = null;
    if(Modernizr.localstorage){
        seen = localStorage.seen ? localStorage.seen.split(',') : [luck];
    }
    var luckLoop = function() {
        if(seen && !destiny){
            var already = false;
            for (var i=0; i<seen.length; i++){
                if(seen[i] == luck){
                    already = true;
                }
            }
            if(already){
                luck = Math.floor(Math.random()*sights) + 1;
                luckLoop();
            } else {
                var history = Math.floor(sights/2);
                var next = seen;
                if(next.length == history){
                   next.shift();
                }
               next.push(luck);
               localStorage.seen = next.join(',');
            }
        }    
    };
    
    luckLoop();

    var showSiberia = function(sight){
        var goto = sight || luck;
        var walk = 0;
        for(sight in Siberia){
            walk++;
            if(walk == goto){
                $('body').css('background-image','url(img/'+sight+'.jpg)');
                $('h1').html(Siberia[sight]);
            }
        }
    };
      
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