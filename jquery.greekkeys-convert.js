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
 * w/ jQuery GreekKeys Converter.  If not, see 
 * <http://www.gnu.org/licenses/>.
 */

(function ($) {
    "use strict";


    var alphabet = {
        '\u0021': '\u03F2', // greek lunate sigma symbol
        '\u0022': '\u201d', // right double quotation mark
        '\u0023': '\u03cb', // small upsilon w/ dialytika
        '\u0024': '\u230a', // left low corner bracket
        '\u0025': '\u03F9', // greek capital lunate sigma symbol
        '\u0026': '\u1FB3', // small alpha w/ ypogegrammeni
        '\u0027': '\u2019', // right single quotation mark
        '\u002b': '\u1FBE', // greek prosgegrammeni
        '\u003a': '\u0387', // greek ano teleia
        '\u003b': '\u037E', // greek question mark
        '\u003d': '\u1FE5', // small rho w/ dasia
        '\u0040': '\u1FE3', // small upsilon w/ dialytika & oxia
        'A': '\u0391', // capital alpha
        'B': '\u0392', // capital beta
        'C': '\u03A8', // capital psi
        'D': '\u0394', // capital delta
        'E': '\u0395', // capital epsilon
        'F': '\u03A6', // capital phi
        'G': '\u0393', // capital gamma
        'H': '\u0397', // capital eta
        'I': '\u0399', // capital iota
        'J': '\u039E', // capital xi
        'K': '\u039A', // capital kappa
        'L': '\u039B', // capital lamda
        'M': '\u039C', // capital mu
        'N': '\u039D', // capital nu
        'O': '\u039F', // capital omicron
        'P': '\u03A0', // capital pi
        'Q': '\u03E0', // greek letter sampi
        'R': '\u03A1', // capital rho
        'S': '\u03A3', // capital sigma
        'T': '\u03A4', // capital tau
        'U': '\u03A5', // capital upsilon
        'V': '\u03A9', // capital omega
        'W': '\u03DC', // greek letter digamma
        'X': '\u03A7', // capital chi
        'Y': '\u0398', // capital theta
        'Z': '\u0396',  // capital zeta
        'a': '\u03B1', // small alpha
        'b': '\u03B2', // small beta
        'c': '\u03C8', // small psi
        'd': '\u03B4', // small delta
        'e': '\u03B5', // small epsilon
        'f': '\u03C6', // small phi
        'g': '\u03B3', // small gamma
        'h': '\u03B7', // small eta
        'i': '\u03B9', // small iota
        'j': '\u03BE', // small xi
        'k': '\u03BA', // small kappa
        'l': '\u03BB', // small lamda
        'm': '\u03BC', // small mu
        'n': '\u03BD', // small nu
        'o': '\u03BF', // small omicron
        'p': '\u03C0', // small pi
        'q': '\u03D8', // greek letter archaic koppa
        'r': '\u03C1', // small rho
        's': '\u03C3', // small sigma
        't': '\u03C4', // small tau
        'u': '\u03C5', // small upsilon
        'v': '\u03C9', // small omega
        'w': '\u03C2', // small final sigma
        'x': '\u03C7', // small chi
        'y': '\u03B8', // small theta
        'z': '\u03B6', // small zeta
        '\u005f': '\u27E6', // mathematical left white square bracket
        '\u0060': '\u0323', // combining dot below
        '\u007e': '\u2020', // dagger
        '\u0080': '\u1FFD', // greek oxia
        '\u0081': '\u1FEF', // greek varia
        '\u0082': '\u1FC0', // greek perispomeni 
        '\u0083': '\u1FBF', // greek psili
        '\u0084': '\u1FFE', // greek dasia
        '\u0085': '\u1FCE', // greek psili & oxia
        '\u0086': '\u1FDE', // greek dasia & oxia
        '\u0087': '\u1FCD', // greek psili & varia
        '\u0088': '\u1FDD', // greek dasia & varia
        '\u0089': '\u1FCF', // greek psili & perispomeni
        '\u008a': '\u1FDF', // greek dasia & perispomeni
        '\u008b': '\u1f71', // small alpha w/ oxia
        '\u008c': '\u1f70', // small alpha w/ varia
        '\u008d': '\u1fB6', // small alpha w/ perispomeni
        '\u008e': '\u1f00', // small alpha w/ psili
        '\u008f': '\u1f01', // small alpha w/ dasia
        '\u0090': '\u1f04', // small alpha w/ psili & oxia
        '\u0091': '\u1f05', // small alpha w/ dasia & oxia
        '\u0092': '\u1f02', // small alpha w/ psili & varia
        '\u0093': '\u1f03', // small alpha w/ dasia & varia
        '\u0094': '\u1f06', // small alpha w/ psili & perispomeni
        '\u0095': '\u1f07', // small alpha w/ dasia & perispomeni
        '\u0096': '\u1fB4', // small alpha w/ oxia & ypogegrammeni
        '\u0097': '\u1fB2', // small alpha w/ varia & ypogegrammeni
        '\u0098': '\u1fB7', // small alpha w/ perispomeni & ypogegrammeni
        '\u0099': '\u1f80', // small alpha w/ psili & ypogegrammeni
        '\u009a': '\u1f81', // small alpha w/ dasia & ypogegrammeni
        '\u009b': '\u1f84', // small alpha w/ psili & oxia & ypogegrammeni
        '\u009c': '\u1f85', // small alpha w/ dasia & oxia & ypogegrammeni
        '\u009d': '\u1f82', // small alpha w/ psili & varia & ypogegrammeni
        '\u009e': '\u1f83', // small alpha w/ dasia & varia & ypogegrammeni
        '\u009f': '\u1f86', // small alpha w/ psili & perispomeni & ypogegrammeni
        '\u00a1': '\u1F73', // small epsilon w/ oxia
        '\u00a2': '\u1f72', // small epsilon w/ varia
        '\u00a3': '\u1fE2', // small upsilon w/ dialytika & varia
        '\u00a4': '\u1f10', // small epsilon w/ psili
        '\u00a5': '\u1f11', // small epsilon w/ dasia
        '\u00a6': '\u1f14', // small epsilon w/ psili & oxia
        '\u00a7': '\u1f15', // small epsilon w/ dasia & oxia
        '\u00a8': '\u1f12', // small epsilon w/ psili & varia
        '\u00a9': '\u1f13', // small epsilon w/ dasia & varia
        '\u00aa': '\u1f87', // small alpha w/ dasia & perispomeni & ypogegrammeni
        '\u00ab': '\u27E7', // mathematical right white square bracket
        '\u00ad': '\u02D8', // breve
        '\u00ae': '\u1F75', // small eta w/ oxia
        '\u00af': '\u1F74', // small eta w/ varia
        '\u00b0': '\u1FC6', // small eta w/ perispomeni
        '\u00b1': '\u1F20', // small eta w/ psili
        '\u00b2': '\u1F21', // small eta w/ dasia
        '\u00b3': '\u1F24', // small eta w/ psili & oxia
        '\u00b4': '\u1F25', // small eta w/ dasia & oxia
        '\u00b5': '\u1F22', // small eta w/ psili & varia
        '\u00b6': '\u1F23', // small eta w/ dasia & varia
        '\u00b7': '\u1F26', // small eta w/ psili & perispomeni
        '\u00b8': '\u1F27', // small eta w/ dasia & perispomeni
        '\u00b9': '\u1FC4', // small eta w/ oxia & ypogegrammeni
        '\u00ba': '\u1FC2', // small eta w/ varia & ypogegrammeni
        '\u00bb': '\u1FC7', // small eta w/ perispomeni & ypogegrammeni
        '\u00bc': '\u1F90', // small eta w/ psili & ypogegrammeni
        '\u00bd': '\u1F91', // small eta w/ dasia & ypogegrammeni
        '\u00be': '\u1F94', // small eta w/ psili & oxia & ypogegrammeni
        '\u00bf': '\u1F95', // small eta w/ dasia & oxia & ypogegrammeni
        '\u00c0': '\u1F92', // small eta w/ psili & varia & ypogegrammeni
        '\u00c1': '\u1F93', // small eta w/ dasia & varia & ypogegrammeni
        '\u00c2': '\u1F96', // small eta w/ psili & perispomeni & ypogegrammeni
        '\u00c3': '\u1F97', // small eta w/ dasia & perispomeni & ypogegrammeni
        '\u00c4': '\u1FF3', // small omega w/ ypogegrammeni
        '\u00c5': '\u1F7D', // small omega w/ oxia
        '\u00c6': '\u1F7C', // small omega w/ varia
        '\u00c7': '\u1FF6', // small omega w/ perispomeni
        '\u00c8': '\u1F60', // small omega w/ psili
        '\u00c9': '\u1F61', // small omega w/ dasia
        '\u00ca': '\u1F64', // small omega w/ psili & oxia
        '\u00cb': '\u1F65', // small omega w/ dasia & oxia
        '\u00cc': '\u1F62', // small omega w/ psili & varia
        '\u00cd': '\u1F63', // small omega w/ dasia & varia
        '\u00ce': '\u1F66', // small omega w/ psili & perispomeni
        '\u00cf': '\u1F67', // small omega w/ dasia & perispomeni
        '\u00d0': '\u1FF4', // small omega w/ oxia & ypogegrammeni
        '\u00d1': '\u1FF2', // small omega w/ varia & ypogegrammeni
        '\u00d2': '\u1FF7', // small omega w/ perispomeni & ypogegrammeni
        '\u00d3': '\u1FA0', // small omega w/ psili & ypogegrammeni
        '\u00d4': '\u1FA1', // small omega w/ dasia & ypogegrammeni
        '\u00d5': '\u1FA4', // small omega w/ psili & oxia & ypogegrammeni
        '\u00d6': '\u1FA5', // small omega w/ dasia & oxia & ypogegrammeni
        '\u00d7': '\u1FA2', // small omega w/ psili & varia & ypogegrammeni
        '\u00d8': '\u1FA3', // small omega w/ dasia & varia & ypogegrammeni
        '\u00d9': '\u1FA6', // small omega w/ psili & perispomeni & ypogegrammeni
        '\u00da': '\u1FA7', // small omega w/ dasia & perispomeni & ypogegrammeni
        '\u00db': '\u1F77', // small iota w/ oxia
        '\u00dc': '\u1F76', // small iota w/ varia
        '\u00dd': '\u1FD6', // small iota w/ perispomeni
        '\u00de': '\u1F30', // small iota w/ psili
        '\u00df': '\u1F31', // small iota w/ dasia
        '\u00e0': '\u1F34', // small iota w/ psili & oxia
        '\u00e1': '\u1F35', // small iota w/ dasia & oxia
        '\u00e2': '\u1F32', // small iota w/ psili & varia
        '\u00e3': '\u1F33', // small iota w/ dasia & varia
        '\u00e4': '\u1F36', // small iota w/ psili & perispomeni
        '\u00e5': '\u1F37', // small iota w/ dasia & perispomeni
        '\u00e6': '\u1F7B', // small upsilon w/ oxia
        '\u00e7': '\u1F7A', // small upsilon w/ varia
        '\u00e8': '\u1FE6', // small upsilon w/ perispomeni
        '\u00e9': '\u1F50', // small upsilon w/ psili
        '\u00ea': '\u1F51', // small upsilon w/ dasia
        '\u00eb': '\u1F54', // small upsilon w/ psili & oxia
        '\u00ec': '\u1F55', // small upsilon w/ dasia & oxia
        '\u00ed': '\u1F52', // small upsilon w/ psili & varia
        '\u00ee': '\u1F53', // small upsilon w/ dasia & varia
        '\u00ef': '\u1F56', // small upsilon w/ psili & perispomeni
        '\u00f0': '\u1F57', // small upsilon w/ dasia & perispomeni
        '\u00f1': '\u1F79', // small omicron w/ oxia
        '\u00f2': '\u1F78', // small omicron w/ varia
        '\u00f3': '\u03CA', // small iota w/ dialytika
        '\u00f4': '\u1F40', // small omicron w/ psili
        '\u00f5': '\u1F41', // small omicron w/ dasia
        '\u00f6': '\u1F44', // small omicron w/ psili & oxia
        '\u00f7': '\u1F45', // small omicron w/ dasia & oxia
        '\u00f8': '\u1F42', // small omicron w/ psili & varia
        '\u00f9': '\u1F43', // small omicron w/ dasia & varia
        '\u00fa': '\u1FC3', // small eta w/ ypogegrammeni
        '\u00fb': '\u03DA', // greek letter stigma
        '\u00fc': '\u230B', // right low corner bracket
        '\u00fd': '\u1Fd3', // small iota w/ dialytika & oxia
        '\u00fe': '\u1Fd2', // small iota w/ dialytika & varia
    },
        ansi_conversion = {
            '\u20ac': '\u0080', // oxia
            // no mapping 0x0081   varia
            // no mapping 0x0082   perispomeni
            '\u0192': '\u0083', // psili
            '\u201e': '\u0084', // dasia
            '\u2026': '\u0085', // psili & oxia
            '\u2020': '\u0086', // dasia & oxia
            '\u2021': '\u0087', // psili & varia
            '\u02c6': '\u0088', // dasia & varia
            '\u2030': '\u0089', // psili & perispomeni
            '\u0160': '\u008a', // dasia & perispomeni


            '\u2039': '\u008b', // small alpha w/ oxia
            '\u0152': '\u008c', // small alpha w/ varia
            // no mapping 0x008d   small alpha w/ perispomeni
            '\u017d': '\u008e', // small alpha w/ psili
            // no mapping 0x008f   small alpha w/ dasia
            // no mapping 0x0090   small alpha w/ psili & oxia
            '\u2018': '\u0091', // small alpha w/ dasia & oxia
            '\u2019': '\u0092', // small alpha w/ psili & varia
            '\u201a': '\u0082', // small alpha w/ dasia & varia
            '\u201c': '\u0093', // small alpha w/ dasia & varia
            '\u201d': '\u0094', // small alpha w/ psili & perispomeni
            '\u2022': '\u0095', // small alpha w/ dasia & perispomeni
            '\u2013': '\u0096', // small alpha w/ oxia & ypogegrammeni
            '\u2014': '\u0097', // small alpha w/ varia & ypogegrammeni
            '\u02dc': '\u0098', // small alpha w/ perispomeni & ypogegrammeni
            '\u2122': '\u0099', // small alpha w/ psili & ypogegrammeni
            '\u0161': '\u009a', // small alpha w/ dasia & ypogegrammeni
            '\u203a': '\u009b', // small alpha w/ psili & oxia & ypogegrammeni
            '\u0153': '\u009c', // small alpha w/ dasia & oxia & ypogegrammeni
            // no mapping 0x009d   small alpha w/ psili & varia & ypogegrammeni
            '\u017e': '\u009e', // small alpha w/ dasia & varia & ypogegrammeni
            '\u0178': '\u009f', // small alpha w/ psili & perispomeni & ypogegrammeni
        },
        combinations = {
            '\u1FFD\u0391': '\u1FBB', // capital alpha w/ oxia
            '\u1FFD\u0395': '\u1FC9', // capital epsilon w/ oxia
            '\u1FFD\u0397': '\u1FCB', // capital eta w/ oxia
            '\u1FFD\u0399': '\u1FDB', // capital iota w/ oxia
            '\u1FFD\u039F': '\u1FF9', // capital omicron w/ oxia
            '\u1FFD\u03A5': '\u1FEB', // capital upsilon w/ oxia
            '\u1FFD\u03A9': '\u1FFB', // capital omega w/ oxia

            '\u1FEF\u0391': '\u1FBA', // capital alpha w/ varia
            '\u1FEF\u0395': '\u1FC8', // capital epsilon w/ varia
            '\u1FEF\u0397': '\u1FCA', // capital eta w/ varia
            '\u1FEF\u0399': '\u1FDA', // capital iota w/ varia
            '\u1FEF\u039F': '\u1FF8', // capital omicron w/ varia
            '\u1FEF\u03A5': '\u1FEA', // capital upsilon w/ varia
            '\u1FEF\u03A9': '\u1FFA', // capital omega w/ varia

            '\u1FBF\u0391': '\u1F08', // capital alpha w/ psili
            '\u1FBF\u0395': '\u1F18', // capital epsilon w/ psili
            '\u1FBF\u0397': '\u1F28', // capital eta w/ psili
            '\u1FBF\u0399': '\u1F38', // capital iota w/ psili
            '\u1FBF\u039F': '\u1F48', // capital omicron w/ psili
            '\u1FBF\u03A9': '\u1F68', // capital omega w/ psili

            '\u1FFE\u0391': '\u1F09', // capital alpha w/ dasia
            '\u1FFE\u0395': '\u1F19', // capital epsilon w/ dasia
            '\u1FFE\u0397': '\u1F29', // capital eta w/ dasia
            '\u1FFE\u0399': '\u1F39', // capital iota w/ dasia
            '\u1FFE\u039F': '\u1F49', // capital omicron w/ dasia
            '\u1FFE\u03A5': '\u1F59', // capital upsilon w/ dasia
            '\u1FFE\u03A9': '\u1F69', // capital omega w/ dasia
            '\u1FFE\u03A1': '\u1FEC', // capital rho w/ dasia

            '\u1FCD\u0391': '\u1F0a', // capital alpha w/ psili and varia
            '\u1FCD\u0395': '\u1F1a', // capital epsilon w/ psili and varia
            '\u1FCD\u0397': '\u1F2a', // capital eta w/ psili and varia
            '\u1FCD\u0399': '\u1F3a', // capital iota w/ psili and varia
            '\u1FCD\u039F': '\u1F4a', // capital omicron w/ psili and varia
            '\u1FCD\u03A9': '\u1F6a', // capital omega w/ psili and varia

            '\u1FDD\u0391': '\u1F0b', // capital alpha w/ dasia and varia
            '\u1FDD\u0395': '\u1F1b', // capital epsilon w/ dasia and varia
            '\u1FDD\u0397': '\u1F2b', // capital eta w/ dasia and varia
            '\u1FDD\u0399': '\u1F3b', // capital iota w/ dasia and varia
            '\u1FDD\u039F': '\u1F4b', // capital omicron w/ dasia and varia
            '\u1FDD\u03A5': '\u1F5b', // capital upsilon w/ dasia and varia
            '\u1FDD\u03A9': '\u1F6b', // capital omega w/ dasia and varia

            '\u1FCE\u0391': '\u1F0c', // capital alpha w/ psili and oxia
            '\u1FCE\u0395': '\u1F1c', // capital epsilon w/ psili and oxia
            '\u1FCE\u0397': '\u1F2c', // capital eta w/ psili and oxia
            '\u1FCE\u0399': '\u1F3c', // capital iota w/ psili and oxia
            '\u1FCE\u039F': '\u1F4c', // capital omicron w/ psili and oxia
            '\u1FCE\u03A9': '\u1F6c', // capital omega w/ psili and oxia

            '\u1FDE\u0391': '\u1F0d', // capital alpha w/ dasia and oxia
            '\u1FDE\u0395': '\u1F1d', // capital epsilon w/ dasia and oxia
            '\u1FDE\u0397': '\u1F2d', // capital eta w/ dasia and oxia
            '\u1FDE\u0399': '\u1F3d', // capital iota w/ dasia and oxia
            '\u1FDE\u039F': '\u1F4d', // capital omicron w/ dasia and oxia
            '\u1FDE\u03A5': '\u1F5d', // capital upsilon w/ dasia and oxia
            '\u1FDE\u03A9': '\u1F6d', // capital omega w/ dasia and oxia

            '\u1FCF\u0391': '\u1F0e', // capital alpha w/ psili and perispomeni
            '\u1FCF\u0397': '\u1F2e', // capital eta w/ psili and perispomeni
            '\u1FCF\u0399': '\u1F3e', // capital iota w/ psili and perispomeni
            '\u1FCF\u03A9': '\u1F6e', // capital omega w/ psili and perispomeni

            '\u1FDF\u0391': '\u1F0f', // capital alpha w/ dasia and perispomeni
            '\u1FDF\u0397': '\u1F2f', // capital eta w/ dasia and perispomeni
            '\u1FDF\u0399': '\u1F3f', // capital iota w/ dasia and perispomeni
            '\u1FDF\u03A5': '\u1F5f', // capital upsilon w/ dasia and perispomeni
            '\u1FDF\u03A9': '\u1F6f', // capital omega w/ dasia and perispomeni
        },
        RE_LETTER = 1,
        RE_ANSI_CONV = 2,
        RE_PASSTHRU = 8,
        regexes = [
            [/^([\u0021-\u0027\u002b\u003a-\u003b\u003d\u0040A-Za-z\u005f-\u0060\u007e\u0081\u008d\u008f-\u0090\u009d\u00a1-\u00ab\u00ad-\u00f9\u00fa-\u00fe])/, [RE_LETTER]],
            [/^([\s\.\(\),\-\.\/0-9\<\>\[\\\]\{\|\}])/, [RE_PASSTHRU]],
            [/^([\u0152-\u0153\u0160\u0161\u0178\u017d-\u017e\u0192\u02c6\u20ac\u02dc\u2013-\u2014\u2018-\u2021\u201a\u201c-\u201e\u2022\u2026\u2030\u2039\u203a\u2122])/, [RE_ANSI_CONV]]
        ],
        RX_DIAC = '[\u1FBF\u1FC0\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FEF\u1FFD\u1FFE]',
        RX_CAPVOWELS = '[\u0391\u0395\u0397\u0399\u039F\u03A1\u03A5\u03A9]', 

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
                        } else if (re[1][0] === RE_ANSI_CONV) {
                            if (ansi_conversion.hasOwnProperty(match[1])) {
                                letter = ansi_conversion[match[1]];
                            } else {
                                $.error('Can\'t convert probable ANSI ' +
                                    'character ' + match[1]);
                            }
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
                    $.error('Invalid character \"' + greekkeys[0] + '\" (' + greekkeys[0].charCodeAt(0) + ')');
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
                            var converted = methods._atoms(n.data),
                                uncombined = new RegExp(
                                    RX_DIAC + RX_CAPVOWELS, 'g'),
                                match;

                            // Look for characters that can be combined
                            match = converted.match(uncombined);
                            if (match) {
                                $.each(match, function (i, m) {
                                    if (combinations.hasOwnProperty(m)) {
                                        converted = converted.replace(
                                            new RegExp(m, "g"), 
                                            combinations[m]);
                                    }
                                });
                            }
                            n.data = converted;
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

/*
 * UNICODE NOTES
 *
 * According to the TLG Beta Code Manual 2011, corner brackets will have 
 * different representations in the "next version" (after Unicode 5.0, but not,
 * apparently, yet in 6.0). 
 *
 * lower left  0x24 0x230a 0x2e44 [5
 * lower right      0x230b 0x2e45 ]5
 * 
 * <http://www.tlg.uci.edu/encoding/BCM2011.pdf>
 */

