'use strict'

$(function(){
    $('.showAll').on('click', function(event) {
         $('.all').show();
         // console.log('SHOWALL')
    });

    $('.showEven').on('click', function(event) {
         $('.even').show();
         $('.odd').hide();
    });

    $('.showOdd').on('click', function(event) {
         $('.odd').show();
         $('.even').hide();
    });

});
