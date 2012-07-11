/*
 * jQuery GreekKeys Converter: jQuery plugin to convert GreekKeys to Unicode
 *
 * © 2012 Sean Redmond.
 *
 * This file is part of jQuery BetaCode Converter.
 * 
 * jQuery GreekKeys Converter is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 * 
 * jQuery GreekKeys Converter is distributed in the hope that it will be 
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General 
 * Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * with jQuery GreekKeys Converter.  If not, see 
 * <http://www.gnu.org/licenses/>.
 */

(function ($) {
    "use strict";


    var methods = {
        init: function (options) {
            var x = 1;
            return this.each(function () {
                var lmnt = $(this);
            });
        },

        convert: function () {
            var lmnt = this;
            lmnt.contents().each(function (i, n) {
                if (n.nodeType === 3) {
                    try {
                        n.data = methods._postprocess(methods._atoms(n.data));
                    } catch (e) {
                        console.log(e.message + ' in ' + n.data);
                    }
                } else {
                    $(n).greekkeys2utf8('convert');
                }
            });
        }
    };

    $.fn.greekkeys2utf8 = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }

        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }

        $.error('Method ' +  method + ' does not exist on jQuery.greekkeys2utf8');
    };
}(jQuery));