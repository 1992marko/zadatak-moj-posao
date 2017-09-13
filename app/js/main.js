
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//ucitavanje podataka iz mocka
(function(){
    //logika za postavu htmla vezan za javascript
    var struktura = {
        tablica: function(tablica){
                    return  "<div>"+
                            tablica.map(function(x){
                                return "<ul class='brojPrijava-parent'>" +
                                                "<li  class='brojPrijava'>" +
                                                    x.datum +
                                                "</li>" +
                                                "<li  class='brojPrijava'>" +
                                                    x.brojPregleda + 
                                                "</li>" + 
                                                "<li class='brojPrijava'>" + 
                                                    x.brojPrijava +
                                                 "</li>"+
                                            "</ul>"  })
                            .reduce(function(x,xx){
                                return xx.concat(x)
                            }) +
                        "</div>"
                    },
    
        brojPrijava: function(prijave){
            return "<div>" + prijave + "</div>";
        },
        biljeske: function(biljeske){
            return biljeske.map(function(x){
                var initials = x.korisnik.split(" ")
                return '<div class="loremIpsum1">' +
                         '<span>' + initials[0][0]+initials[1][0] + '</span>'+
                         '<span>' + x.biljeska + '</span>'+
                       '</div>'
            }).reduce(function(x,xx){
                return xx.concat(x);
            })
        
           },
           aktivnosti: function(aktivnosti){
            return aktivnosti.map(function(x){
                var initials = x.korisnik.split(" ")
                return '<div class="aktivnosti">' +
                         '<span>' + initials[0][0]+initials[1][0] + '</span>'+
                         '<span>' + x.aktivnost + '</span>'+
                       '</div>'
            }).reduce(function(x,xx){
                return xx.concat(x);
            })
        
           }
        }

//logika za prikaz
  $.get("/js/mockdata.json",function(data){
    $("#input1").text(data.res.brojPrijava);
    $("#input2").text(data.res.brojPregleda);
    $("#input3").text(data.res.objavaRokPrijave);
    $("#input4").text(data.res.status);
    $("#tablica").html(struktura.tablica(data.res.tablica));
    $(".loremIpsum").html(struktura.biljeske(data.res.biljeske));
    $(".aktivnosti").html(struktura.aktivnosti(data.res.aktivnosti));
})
})();

