/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/14/2018
 * Time: 6:40 PM
 */
"use strict";
(function() {
    var racun = {};
    // var racun = {
    //     datum:"12.05.2018.",
    //     mesto:"Zbojstica",
    //     stavke:[
    //         {
    //             artikal:"gace",
    //             cena:400,
    //             kolicina:5
    //         },
    //         {
    //             artikal:"majica",
    //             cena:500,
    //             kolicina:5
    //         },
    //         {
    //             artikal:"Vegeta",
    //             cena:120,
    //             kolicina:1
    //         }
    //
    //     ]
    // };

    $.ajax({
        url    : 'js/data/racuni.json',
        dataType:'json',
        success: function(data) {
            racun = data;

            console.log(GetTotal());
        },
        error  : function(data) {
            console.log('ERROR', data);
        }
    });



    function GetTotal() {
        var total = 0;
        for(var i = 0; i < racun.stavke.length; i++) {
            var currentStavka = racun.stavke[i];
            total += currentStavka.kolicina * currentStavka.cena;

        }

        return total;
    }


}());