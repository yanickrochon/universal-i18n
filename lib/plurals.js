const C = require('./const');

module.exports = {
  "af": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ak": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "am": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ar": {
    "cardinal": function (p) { var n = Math.abs(p)||0, n100 = n % 100; return (n === 0) ? C.PLURAL_ZERO : (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : ((n100 >= 3 && n100 <= 10)) ? C.PLURAL_FEW : ((n100 >= 11 && n100 <= 99)) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "as": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1 || n === 5 || n === 7 || n === 8 || n === 9 || n === 10) ? C.PLURAL_ONE : (n === 2 || n === 3) ? C.PLURAL_TWO : (n === 4) ? C.PLURAL_FEW : (n === 6) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "asa": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ast": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "az": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, i10 = i % 10, i100 = i % 100, i1000 = i % 1000; return (i10 === 1 || i10 === 2 || i10 === 5 || i10 === 7 || i10 === 8) || (i100 === 20 || i100 === 50 || i100 === 70 || i100 === 80) ? C.PLURAL_ONE : (i10 === 3 || i10 === 4) || (i1000 === 100 || i1000 === 200 || i1000 === 300 || i1000 === 400 || i1000 === 500 || i1000 === 600 || i1000 === 700 || i1000 === 800 || i1000 === 900) ? C.PLURAL_FEW : (i === 0) || (i10 === 6) || (i100 === 40 || i100 === 60 || i100 === 90) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "be": {
    "cardinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return (n10 === 1) && (n100 !== 11) ? C.PLURAL_ONE : ((n10 >= 2 && n10 <= 4)) && (!(n100 >= 12 && n100 <= 14)) ? C.PLURAL_FEW : (n10 === 0) || ((n10 >= 5 && n10 <= 9)) || ((n100 >= 11 && n100 <= 14)) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return (n10 === 2 || n10 === 3) && (n100 !== 12 && n100 !== 13) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "bem": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "bez": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "bg": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "bh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "bm": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "bn": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1 || n === 5 || n === 7 || n === 8 || n === 9 || n === 10) ? C.PLURAL_ONE : (n === 2 || n === 3) ? C.PLURAL_TWO : (n === 4) ? C.PLURAL_FEW : (n === 6) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "bo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "br": {
    "cardinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100, n1000000 = n % 1000000; return (n10 === 1) && (n100 !== 11 && n100 !== 71 && n100 !== 91) ? C.PLURAL_ONE : (n10 === 2) && (n100 !== 12 && n100 !== 72 && n100 !== 92) ? C.PLURAL_TWO : ((n10 >= 3 && n10 <= 4) || n10 === 9) && (!(n100 >= 10 && n100 <= 19) && !(n100 >= 70 && n100 <= 79) && !(n100 >= 90 && n100 <= 99)) ? C.PLURAL_FEW : (n !== 0) && (n1000000 === 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "brx": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "bs": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100, f10 = f % 10, f100 = f % 100; return (v === 0) && (i10 === 1) && (i100 !== 11) || (f10 === 1) && (f100 !== 11) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) || ((f10 >= 2 && f10 <= 4)) && (!(f100 >= 12 && f100 <= 14)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ca": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1 || n === 3) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : (n === 4) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "ce": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "cgg": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "chr": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ckb": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "cs": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : ((i >= 2 && i <= 4)) && (v === 0) ? C.PLURAL_FEW : (v !== 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "cy": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 0) ? C.PLURAL_ZERO : (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : (n === 3) ? C.PLURAL_FEW : (n === 6) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 0 || n === 7 || n === 8 || n === 9) ? C.PLURAL_ZERO : (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : (n === 3 || n === 4) ? C.PLURAL_FEW : (n === 5 || n === 6) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "da": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, t = parseInt((n+"").split(".")[1],10)||0; return (n === 1) || (t !== 0) && (i === 0 || i === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "de": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "dsb": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i100 = i % 100, f100 = f % 100; return (v === 0) && (i100 === 1) || (f100 === 1) ? C.PLURAL_ONE : (v === 0) && (i100 === 2) || (f100 === 2) ? C.PLURAL_TWO : (v === 0) && ((i100 >= 3 && i100 <= 4)) || ((f100 >= 3 && f100 <= 4)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "dv": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "dz": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ee": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "el": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "en": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return (n10 === 1) && (n100 !== 11) ? C.PLURAL_ONE : (n10 === 2) && (n100 !== 12) ? C.PLURAL_TWO : (n10 === 3) && (n100 !== 13) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "eo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "es": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "et": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "eu": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "fa": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ff": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0 || i === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "fi": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "fil": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, f10 = f % 10; return (v === 0) && (i === 1 || i === 2 || i === 3) || (v === 0) && (i10 !== 4 && i10 !== 6 && i10 !== 9) || (v !== 0) && (f10 !== 4 && f10 !== 6 && f10 !== 9) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "fo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "fr": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0 || i === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "fur": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "fy": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ga": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : ((n >= 3 && n <= 6)) ? C.PLURAL_FEW : ((n >= 7 && n <= 10)) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "gd": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1 || n === 11) ? C.PLURAL_ONE : (n === 2 || n === 12) ? C.PLURAL_TWO : ((n >= 3 && n <= 10) || (n >= 13 && n <= 19)) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "gl": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "gsw": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "gu": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2 || n === 3) ? C.PLURAL_TWO : (n === 4) ? C.PLURAL_FEW : (n === 6) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "guw": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "gv": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return (v === 0) && (i10 === 1) ? C.PLURAL_ONE : (v === 0) && (i10 === 2) ? C.PLURAL_TWO : (v === 0) && (i100 === 0 || i100 === 20 || i100 === 40 || i100 === 60 || i100 === 80) ? C.PLURAL_FEW : (v !== 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "ha": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "haw": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "he": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, n10 = n % 10; return (i === 1) && (v === 0) ? C.PLURAL_ONE : (i === 2) && (v === 0) ? C.PLURAL_TWO : (v === 0) && (!(n >= 0 && n <= 10)) && (n10 === 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "hi": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2 || n === 3) ? C.PLURAL_TWO : (n === 4) ? C.PLURAL_FEW : (n === 6) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "hr": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100, f10 = f % 10, f100 = f % 100; return (v === 0) && (i10 === 1) && (i100 !== 11) || (f10 === 1) && (f100 !== 11) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) || ((f10 >= 2 && f10 <= 4)) && (!(f100 >= 12 && f100 <= 14)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "hsb": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i100 = i % 100, f100 = f % 100; return (v === 0) && (i100 === 1) || (f100 === 1) ? C.PLURAL_ONE : (v === 0) && (i100 === 2) || (f100 === 2) ? C.PLURAL_TWO : (v === 0) && ((i100 >= 3 && i100 <= 4)) || ((f100 >= 3 && f100 <= 4)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "hu": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1 || n === 5) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "hy": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0 || i === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "id": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ig": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ii": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "in": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "is": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, t = parseInt((n+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100; return (t === 0) && (i10 === 1) && (i100 !== 11) || (t !== 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "it": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 11 || n === 8 || n === 80 || n === 800) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "iu": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "iw": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, n10 = n % 10; return (i === 1) && (v === 0) ? C.PLURAL_ONE : (i === 2) && (v === 0) ? C.PLURAL_TWO : (v === 0) && (!(n >= 0 && n <= 10)) && (n10 === 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ja": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "jbo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "jgo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ji": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "jmc": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "jv": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "jw": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ka": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, i100 = i % 100; return (i === 1) ? C.PLURAL_ONE : (i === 0) || ((i100 >= 2 && i100 <= 20) || i100 === 40 || i100 === 60 || i100 === 80) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "kab": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0 || i === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "kaj": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "kcg": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "kde": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "kea": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "kk": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10; return (n10 === 6) || (n10 === 9) || (n10 === 0) && (n !== 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "kkj": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "kl": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "km": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "kn": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ko": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ks": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ksb": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ksh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 0) ? C.PLURAL_ZERO : (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ku": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "kw": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "ky": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "lag": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (n === 0) ? C.PLURAL_ZERO : (i === 0 || i === 1) && (n !== 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "lb": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "lg": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "lkt": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ln": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "lo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "lt": {
    "cardinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100, f = parseInt((p+"").split(".")[1],10)||0; return (n10 === 1) && (!(n100 >= 11 && n100 <= 19)) ? C.PLURAL_ONE : ((n10 >= 2 && n10 <= 9)) && (!(n100 >= 11 && n100 <= 19)) ? C.PLURAL_FEW : (f !== 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "lv": {
    "cardinal": function (p) { var n = Math.abs(p)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, n10 = n % 10, n100 = n % 100, f100 = f % 100, f10 = f % 10; return (n10 === 0) || ((n100 >= 11 && n100 <= 19)) || (v === 2) && ((f100 >= 11 && f100 <= 19)) ? C.PLURAL_ZERO : (n10 === 1) && (n100 !== 11) || (v === 2) && (f10 === 1) && (f100 !== 11) || (v !== 2) && (f10 === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "mas": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "mg": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "mgo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "mk": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, f10 = f % 10; return (v === 0) && (i10 === 1) || (f10 === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, i10 = i % 10, i100 = i % 100; return (i10 === 1) && (i100 !== 11) ? C.PLURAL_ONE : (i10 === 2) && (i100 !== 12) ? C.PLURAL_TWO : (i10 === 7 || i10 === 8) && (i100 !== 17 && i100 !== 18) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "ml": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "mn": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "mo": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, n100 = n % 100; return (i === 1) && (v === 0) ? C.PLURAL_ONE : (v !== 0) || (n === 0) || (n !== 1) && ((n100 >= 1 && n100 <= 19)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "mr": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2 || n === 3) ? C.PLURAL_TWO : (n === 4) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "ms": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "mt": {
    "cardinal": function (p) { var n = Math.abs(p)||0, n100 = n % 100; return (n === 1) ? C.PLURAL_ONE : (n === 0) || ((n100 >= 2 && n100 <= 10)) ? C.PLURAL_FEW : ((n100 >= 11 && n100 <= 19)) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "my": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "nah": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "naq": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "nb": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "nd": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ne": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return ((n >= 1 && n <= 4)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "nl": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "nn": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "nnh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "no": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "nqo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "nr": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "nso": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ny": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "nyn": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "om": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "or": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "os": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "pa": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "pap": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "pl": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return (i === 1) && (v === 0) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) ? C.PLURAL_FEW : (v === 0) && (i !== 1) && ((i10 >= 0 && i10 <= 1)) || (v === 0) && ((i10 >= 5 && i10 <= 9)) || (v === 0) && ((i100 >= 12 && i100 <= 14)) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "prg": {
    "cardinal": function (p) { var n = Math.abs(p)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, n10 = n % 10, n100 = n % 100, f100 = f % 100, f10 = f % 10; return (n10 === 0) || ((n100 >= 11 && n100 <= 19)) || (v === 2) && ((f100 >= 11 && f100 <= 19)) ? C.PLURAL_ZERO : (n10 === 1) && (n100 !== 11) || (v === 2) && (f10 === 1) && (f100 !== 11) || (v !== 2) && (f10 === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ps": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "pt": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 2)) && (n !== 2) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "pt-PT": {
    "cardinal": function (p) { var n = Math.abs(p)||0, v = ((p+"").split(".")[1]||"").length; return (n === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "rm": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ro": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, n100 = n % 100; return (i === 1) && (v === 0) ? C.PLURAL_ONE : (v !== 0) || (n === 0) || (n !== 1) && ((n100 >= 1 && n100 <= 19)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "rof": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "root": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ru": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return (v === 0) && (i10 === 1) && (i100 !== 11) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) ? C.PLURAL_FEW : (v === 0) && (i10 === 0) || (v === 0) && ((i10 >= 5 && i10 <= 9)) || (v === 0) && ((i100 >= 11 && i100 <= 14)) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "rwk": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "sah": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "saq": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "sdh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "se": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "seh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ses": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "sg": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "sh": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100, f10 = f % 10, f100 = f % 100; return (v === 0) && (i10 === 1) && (i100 !== 11) || (f10 === 1) && (f100 !== 11) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) || ((f10 >= 2 && f10 <= 4)) && (!(f100 >= 12 && f100 <= 14)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "shi": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : ((n >= 2 && n <= 10)) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "si": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, f = parseInt((p+"").split(".")[1],10)||0; return (n === 0 || n === 1) || (i === 0) && (f === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "sk": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : ((i >= 2 && i <= 4)) && (v === 0) ? C.PLURAL_FEW : (v !== 0) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "sl": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i100 = i % 100; return (v === 0) && (i100 === 1) ? C.PLURAL_ONE : (v === 0) && (i100 === 2) ? C.PLURAL_TWO : (v === 0) && ((i100 >= 3 && i100 <= 4)) || (v !== 0) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "sma": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "smi": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "smj": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "smn": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "sms": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : (n === 2) ? C.PLURAL_TWO : C.PLURAL_OTHER; }
  },
  "sn": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "so": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "sq": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return (n === 1) ? C.PLURAL_ONE : (n10 === 4) && (n100 !== 14) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
  },
  "sr": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100, f10 = f % 10, f100 = f % 100; return (v === 0) && (i10 === 1) && (i100 !== 11) || (f10 === 1) && (f100 !== 11) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) || ((f10 >= 2 && f10 <= 4)) && (!(f100 >= 12 && f100 <= 14)) ? C.PLURAL_FEW : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ss": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ssy": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "st": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "sv": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return (n10 === 1 || n10 === 2) && (n100 !== 11 && n100 !== 12) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "sw": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "syr": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ta": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "te": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "teo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "th": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ti": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "tig": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "tk": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "tl": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, f10 = f % 10; return (v === 0) && (i === 1 || i === 2 || i === 3) || (v === 0) && (i10 !== 4 && i10 !== 6 && i10 !== 9) || (v !== 0) && (f10 !== 4 && f10 !== 6 && f10 !== 9) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "tn": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "to": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "tr": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ts": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "tzm": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) || ((n >= 11 && n <= 99)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "ug": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "uk": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return (v === 0) && (i10 === 1) && (i100 !== 11) ? C.PLURAL_ONE : (v === 0) && ((i10 >= 2 && i10 <= 4)) && (!(i100 >= 12 && i100 <= 14)) ? C.PLURAL_FEW : (v === 0) && (i10 === 0) || (v === 0) && ((i10 >= 5 && i10 <= 9)) || (v === 0) && ((i100 >= 11 && i100 <= 14)) ? C.PLURAL_MANY : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return (n10 === 3) && (n100 !== 13) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
  },
  "ur": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "uz": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "ve": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "vi": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "vo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "vun": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "wa": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return ((n >= 0 && n <= 1)) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "wae": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "wo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "xh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "xog": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "yi": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return (i === 1) && (v === 0) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
  },
  "yo": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "zh": {
    "cardinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  },
  "zu": {
    "cardinal": function (p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return (i === 0) || (n === 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; },
    "ordinal": function (p) { var n = Math.abs(p)||0; return C.PLURAL_OTHER; }
  }
};