define([
    'Magento_Ui/js/form/element/date'
], function(Date) {
    'use strict';
    return Date.extend({
        defaults: {
            options: {
                showsDate:true,
                showsTime: true,
                beforeShowDay: function (d) {
                    var dmy = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
                    var arr = dmy.split("-");
                    var day = arr[0];
                    var ableDay = ['8','9','10','11','12'];
                    var check = ableDay.indexOf(day);
                    return [(day == ableDay[check])];
                }
            },

            elementTmpl: 'ui/form/element/date'
        }
    });
});