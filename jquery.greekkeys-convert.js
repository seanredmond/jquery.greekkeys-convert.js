/*
 * jQuery GreekKeys Converter: jQuery plugin to convert GreekKeys to Unicode
 *
 * © 2012 Sean Redmond.
 *
 * This file is part of jQuery GreekKeys Converter.
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


    var alphabet = {
        'A': '\u0391', // greek capital letter alpha
        'B': '\u0392', // greek capital letter beta
        'C': '\u03A8', // greek capital letter psi
        'D': '\u0394', // greek capital letter delta
        'E': '\u0395', // greek capital letter epsilon
        'F': '\u03A6', // greek capital letter phi
        'G': '\u0393', // greek capital letter gamma
        'H': '\u0397', // greek capital letter eta
        'I': '\u0399', // greek capital letter iota
        'J': '\u039E', // greek capital letter xi
        'K': '\u039A', // greek capital letter kappa
        'L': '\u039B', // greek capital letter lamda
        'M': '\u039C', // greek capital letter mu
        'N': '\u039D', // greek capital letter nu
        'O': '\u039F', // greek capital letter omicron
        'P': '\u03A0', // greek capital letter pi
        'Q': '\u03E0', // greek letter sampi
        'R': '\u03A1', // greek capital letter rho
        'S': '\u03A3', // greek capital letter sigma
        'T': '\u03A4', // greek capital letter tau
        'U': '\u03A5', // greek capital letter upsilon
        'V': '\u03A9', // greek capital letter omega
        'W': '\u03DC', // greek letter digamma
        'X': '\u03A7', // greek capital letter chi
        'Y': '\u0398', // greek capital letter theta
        'Z': '\u0396',  // greek capital letter zeta
        'a': '\u03B1', // greek small letter alpha
        'b': '\u03B2', // greek small letter beta
        'c': '\u03C8', // greek small letter psi
        'd': '\u03B4', // greek small letter delta
        'e': '\u03B5', // greek small letter epsilon
        'f': '\u03C6', // greek small letter phi
        'g': '\u03B3', // greek small letter gamma
        'h': '\u03B7', // greek small letter eta
        'i': '\u03B9', // greek small letter iota
        'j': '\u03BE', // greek small letter xi
        'k': '\u03BA', // greek small letter kappa
        'l': '\u03BB', // greek small letter lamda
        'm': '\u03BC', // greek small letter mu
        'n': '\u03BD', // greek small letter nu
        'o': '\u03BF', // greek small letter omicron
        'p': '\u03C0', // greek small letter pi
        'q': '\u03DE', // greek letter koppa
        'r': '\u03C1', // greek small letter rho
        's': '\u03C3', // greek small letter sigma
        't': '\u03C4', // greek small letter tau
        'u': '\u03C5', // greek small letter upsilon
        'v': '\u03C9', // greek small letter omega
        'w': '\u03C2', // greek small letter final sigma
        'x': '\u03C7', // greek small letter chi
        'y': '\u03B8', // greek small letter theta
        'z': '\u03B6', // greek small letter zeta
        '\u008b': '\u1f71', // greek small letter alpha with oxia
        '\u008c': '\u1f70', // greek small letter alpha with varia
        '\u008d': '\u1fB6', // greek small letter alpha with perispomeni
        '\u008e': '\u1f00', // greek small letter alpha with psili
        '\u008f': '\u1f01', // greek small letter alpha with dasia
        '\u0090': '\u1f04', // greek small letter alpha with psili and oxia
        '\u0091': '\u1f05', // greek small letter alpha with dasia and oxia
        '\u0092': '\u1f02', // greek small letter alpha with psili and varia
        '\u0093': '\u1f03', // greek small letter alpha with dasia and varia
        '\u0094': '\u1f06', // greek small letter alpha with psili and perispomeni
        '\u0095': '\u1f07', // greek small letter alpha with dasia and perispomeni
        '\u0096': '\u1fB4', // greek small letter alpha with oxia and ypogegrammeni
        '\u0097': '\u1fB2', // greek small letter alpha with varia and ypogegrammeni
        '\u0098': '\u1fB7', // greek small letter alpha with perispomeni and ypogegrammeni
        '\u0099': '\u1f80', // greek small letter alpha with psili and ypogegrammeni
        '\u009a': '\u1f81', // greek small letter alpha with dasia and ypogegrammeni
        '\u009b': '\u1f84', // greek small letter alpha with psili and oxia and ypogegrammeni
        '\u009c': '\u1f85', // greek small letter alpha with dasia and oxia and ypogegrammeni
        '\u009d': '\u1f82', // greek small letter alpha with psili and varia and ypogegrammeni
        '\u009e': '\u1f83', // greek small letter alpha with dasia and varia and ypogegrammeni
        '\u009f': '\u1f86', // greek small letter alpha with psili and perispomeni and ypogegrammeni
        '\u00a0': '\u1f87', // greek small letter alpha with dasia and perispomeni and ypogegrammeni
        '\u00a1': '\u1F73', // greek small letter epsilon with oxia
        '\u00a2': '\u1f72', // greek small letter epsilon with varia
        '\u00a3': '\u1fE2', // greek small letter upsilon with dialytika and varia
        '\u00a4': '\u1f10', // greek small letter epsilon with psili
        '\u00a5': '\u1f11', // greek small letter epsilon with dasia
        '\u00a6': '\u1f14', // greek small letter epsilon with psili and oxia
        '\u00a7': '\u1f15', // greek small letter epsilon with dasia and oxia
        '\u00a8': '\u1f12', // greek small letter epsilon with psili and varia
        '\u00a9': '\u1f13', // greek small letter epsilon with dasia and varia
        '\u00db': '\u1F77', // greek small letter iota with oxia
        '\u00dc': '\u1F76', // greek small letter iota with varia
        '\u00dd': '\u1FD6', // greek small letter iota with perispomeni
        '\u00de': '\u1F30', // greek small letter iota with psili
        '\u00df': '\u1F31', // greek small letter iota with dasia
        '\u00e0': '\u1F34', // greek small letter iota with psili and oxia
        '\u00e1': '\u1F35', // greek small letter iota with dasia and oxia
        '\u00e2': '\u1F32', // greek small letter iota with psili and varia
        '\u00e3': '\u1F33', // greek small letter iota with dasia and varia
        '\u00e4': '\u1F36', // greek small letter iota with psili and perispomeni
        '\u00e5': '\u1F37', // greek small letter iota with dasia and perispomeni
    },
        RE_LETTER = 1,
        RE_PASSTHRU = 8,
        regexes = [
            [/^([A-Za-z\u008b-\u00a9\u00db-\u00e5])/, [RE_LETTER]],
            [/^([\s])/, [RE_PASSTHRU]]
        ],

        methods = {
            init: function (options) {
                var x = 1;
                return this.each(function () {
                    var lmnt = $(this);
                });
            },

            _atoms: function (greekkeys) {
                var match = null,
                    greek;

                if (!greekkeys) {
                    return '';
                }

                $.each(regexes, function (i, re) {
                    match = re[0].exec(greekkeys);
                    if (match) {
                        var letter;
                        if (re[1][0] === RE_LETTER) {
                            letter = match[1];
                        } else if (re[1][0] === RE_PASSTHRU) {
                            greek = match[1];
                            return false;
                        }

                        if (alphabet.hasOwnProperty(letter)) {
                            greek = alphabet[letter];
                        } else {
                            greek = '⟦' + match[0] + '⟧';
                        }
                        return false;
                    }
                });

                if (match === null) {
                    $.error('Invalid character \"' + greekkeys[0] + '\"');
                }

                return greek +
                    methods._atoms(
                        greekkeys.substring(match.index + match[0].length)
                    );
            },

            convert: function () {
                var lmnt = this;
                lmnt.contents().each(function (i, n) {
                    if (n.nodeType === 3) {
                        try {
                            n.data = methods._atoms(n.data);
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