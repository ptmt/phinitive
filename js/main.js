$(function(){

    $('h1').on('click', function (){
        window.location.hash = $('.team').toggle().is(':visible') ? 'team' : '';
        return false;
    })
    
    $('.dots').on('click', function(){
        window.location.reload();
    });
    
    var Siberia = {
        siberia0: {
            headline:'а ведь когда я открывал браузер, на улице стояло лето',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae eius corporis earum ea accusantium voluptates ratione dicta laborum in magnam culpa illum asperiores quisquam voluptatibus possimus tempora libero porro ipsum non atque labore sunt nisi distinctio veniam repellat molestias! Sequi porro sapiente provident nisi sit incidunt non quis nihil tenetur repellat adipisci quisquam veritatis dolor tempore facilis odit necessitatibus tempora. Quae possimus ad voluptas sunt rerum eveniet nulla ratione doloremque temporibus et doloribus similique quo natus modi nam. Consequuntur accusamus amet reiciendis delectus sit illum soluta molestias quo facilis itaque. Aliquam cum sed assumenda sequi sapiente totam dicta laboriosam distinctio soluta ab recusandae illo eligendi quaerat blanditiis alias quia ex voluptates eaque aliquid omnis rerum veniam hic! Fugiat magnam.',
            photo:'example.png'
        },
        siberia1: {
            headline:'делаем сайты в Сибири, чтобы не мерзнуть',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae eius corporis earum ea accusantium voluptates ratione dicta laborum in magnam culpa illum asperiores quisquam voluptatibus possimus tempora libero porro ipsum non atque labore sunt nisi distinctio veniam repellat molestias! Sequi porro sapiente provident nisi sit incidunt non quis nihil tenetur repellat adipisci quisquam veritatis dolor tempore facilis odit necessitatibus tempora. Quae possimus ad voluptas sunt rerum eveniet nulla ratione doloremque temporibus et doloribus similique quo natus modi nam. Consequuntur accusamus amet reiciendis delectus sit illum soluta molestias quo facilis itaque. Aliquam cum sed assumenda sequi sapiente totam dicta laboriosam distinctio soluta ab recusandae illo eligendi quaerat blanditiis alias quia ex voluptates eaque aliquid omnis rerum veniam hic! Fugiat magnam.',
            photo:'example.png'
        },
        siberia2: {
            headline:'поднимаем инфраструктуру в облака, чтобы не занесло снегом',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae eius corporis earum ea accusantium voluptates ratione dicta laborum in magnam culpa illum asperiores quisquam voluptatibus possimus tempora libero porro ipsum non atque labore sunt nisi distinctio veniam repellat molestias! Sequi porro sapiente provident nisi sit incidunt non quis nihil tenetur repellat adipisci quisquam veritatis dolor tempore facilis odit necessitatibus tempora. Quae possimus ad voluptas sunt rerum eveniet nulla ratione doloremque temporibus et doloribus similique quo natus modi nam. Consequuntur accusamus amet reiciendis delectus sit illum soluta molestias quo facilis itaque. Aliquam cum sed assumenda sequi sapiente totam dicta laboriosam distinctio soluta ab recusandae illo eligendi quaerat blanditiis alias quia ex voluptates eaque aliquid omnis rerum veniam hic! Fugiat magnam.',
            photo:'example.png'
        },
        siberia3: {
            headline:'используем надёжную опору из бесценных знаний',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae eius corporis earum ea accusantium voluptates ratione dicta laborum in magnam culpa illum asperiores quisquam voluptatibus possimus tempora libero porro ipsum non atque labore sunt nisi distinctio veniam repellat molestias! Sequi porro sapiente provident nisi sit incidunt non quis nihil tenetur repellat adipisci quisquam veritatis dolor tempore facilis odit necessitatibus tempora. Quae possimus ad voluptas sunt rerum eveniet nulla ratione doloremque temporibus et doloribus similique quo natus modi nam. Consequuntur accusamus amet reiciendis delectus sit illum soluta molestias quo facilis itaque. Aliquam cum sed assumenda sequi sapiente totam dicta laboriosam distinctio soluta ab recusandae illo eligendi quaerat blanditiis alias quia ex voluptates eaque aliquid omnis rerum veniam hic! Fugiat magnam.',
            photo:'example.png'
        },
        siberia4: {
            headline:'у нас здесь своя атмосфера из адаптивного дизайна и гибких методологий',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae eius corporis earum ea accusantium voluptates ratione dicta laborum in magnam culpa illum asperiores quisquam voluptatibus possimus tempora libero porro ipsum non atque labore sunt nisi distinctio veniam repellat molestias! Sequi porro sapiente provident nisi sit incidunt non quis nihil tenetur repellat adipisci quisquam veritatis dolor tempore facilis odit necessitatibus tempora. Quae possimus ad voluptas sunt rerum eveniet nulla ratione doloremque temporibus et doloribus similique quo natus modi nam. Consequuntur accusamus amet reiciendis delectus sit illum soluta molestias quo facilis itaque. Aliquam cum sed assumenda sequi sapiente totam dicta laboriosam distinctio soluta ab recusandae illo eligendi quaerat blanditiis alias quia ex voluptates eaque aliquid omnis rerum veniam hic! Fugiat magnam.',
            photo:'example.png'
        },
        siberia5: {
            headline:'фрилансим в Сибири — с пляжем, солнцем и оптимизмом',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae eius corporis earum ea accusantium voluptates ratione dicta laborum in magnam culpa illum asperiores quisquam voluptatibus possimus tempora libero porro ipsum non atque labore sunt nisi distinctio veniam repellat molestias! Sequi porro sapiente provident nisi sit incidunt non quis nihil tenetur repellat adipisci quisquam veritatis dolor tempore facilis odit necessitatibus tempora. Quae possimus ad voluptas sunt rerum eveniet nulla ratione doloremque temporibus et doloribus similique quo natus modi nam. Consequuntur accusamus amet reiciendis delectus sit illum soluta molestias quo facilis itaque. Aliquam cum sed assumenda sequi sapiente totam dicta laboriosam distinctio soluta ab recusandae illo eligendi quaerat blanditiis alias quia ex voluptates eaque aliquid omnis rerum veniam hic! Fugiat magnam.',
            photo:'example.png'
        }
    };
    
    var sights = 0;
    for(sight in Siberia){
        sights++;
    }
    
    var luck = Math.floor(Math.random()*sights) + 1;
    var destiny = false;
    var predestination = window.location.hash;
    if(predestination){     
        if(/#\d+/.test(predestination)){
           destiny = +predestination.replace('#','');
           if(destiny <= sights) {
               luck = destiny;
           }
        } else {
            $(predestination.replace('#','.')).show();
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
                var headline = Siberia[sight].headline;
                var paragraph = Siberia[sight].text;
                var img = Siberia[sight].photo ? '<img src="./img/inplace/'+Siberia[sight].photo+'">' : '';
                $('body').css('background-image','url(img/'+sight+'.jpg)');
                $('h1').html('<span>'+headline+'</span>');
                if(paragraph) $('.team').prepend('<p>'+img+paragraph+'</p>');
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