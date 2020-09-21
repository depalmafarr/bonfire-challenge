'use strict'

jQuery(document).ready(function(){
    jQuery('#showAll').live('click', function(event) {
         jQuery('#all').toggle('show');
    });
});

jQuery(document).ready(function(){
    jQuery('#showEven').live('click', function(event) {
         jQuery('#even').toggle('show');
         jQuery('#odd').toggle('hide');
    });
});

jQuery(document).ready(function(){
    jQuery('#showOdd').live('click', function(event) {
         jQuery('#odd').toggle('show');
         jQuery('#even').toggle('hide');
    });
});
