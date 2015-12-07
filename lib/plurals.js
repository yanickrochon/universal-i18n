const C = require('./const');

module.exports = {
  "af": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "ak": {
    "cardinal": cardinal2
  },
  "am": {
    "cardinal": cardinal3,
    "ordinal": ordinal1
  },
  "ar": {
    "cardinal": cardinal4,
    "ordinal": ordinal1
  },
  "as": {
    "cardinal": cardinal3,
    "ordinal": ordinal2
  },
  "asa": {
    "cardinal": cardinal1
  },
  "ast": {
    "cardinal": cardinal5
  },
  "az": {
    "cardinal": cardinal1,
    "ordinal": ordinal3
  },
  "be": {
    "cardinal": cardinal6,
    "ordinal": ordinal4
  },
  "bem": {
    "cardinal": cardinal1
  },
  "bez": {
    "cardinal": cardinal1
  },
  "bg": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "bh": {
    "cardinal": cardinal2
  },
  "bm": {
    "cardinal": cardinal7
  },
  "bn": {
    "cardinal": cardinal3,
    "ordinal": ordinal2
  },
  "bo": {
    "cardinal": cardinal7
  },
  "br": {
    "cardinal": cardinal8
  },
  "brx": {
    "cardinal": cardinal1
  },
  "bs": {
    "cardinal": cardinal9,
    "ordinal": ordinal1
  },
  "ca": {
    "cardinal": cardinal5,
    "ordinal": ordinal5
  },
  "ce": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "cgg": {
    "cardinal": cardinal1
  },
  "chr": {
    "cardinal": cardinal1
  },
  "ckb": {
    "cardinal": cardinal1
  },
  "cs": {
    "cardinal": cardinal10,
    "ordinal": ordinal1
  },
  "cy": {
    "cardinal": cardinal11,
    "ordinal": ordinal6
  },
  "da": {
    "cardinal": cardinal12,
    "ordinal": ordinal1
  },
  "de": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "dsb": {
    "cardinal": cardinal13,
    "ordinal": ordinal1
  },
  "dv": {
    "cardinal": cardinal1
  },
  "dz": {
    "cardinal": cardinal7
  },
  "ee": {
    "cardinal": cardinal1
  },
  "el": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "en": {
    "cardinal": cardinal5,
    "ordinal": ordinal7
  },
  "eo": {
    "cardinal": cardinal1
  },
  "es": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "et": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "eu": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "fa": {
    "cardinal": cardinal3,
    "ordinal": ordinal1
  },
  "ff": {
    "cardinal": cardinal14
  },
  "fi": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "fil": {
    "cardinal": cardinal15,
    "ordinal": ordinal8
  },
  "fo": {
    "cardinal": cardinal1
  },
  "fr": {
    "cardinal": cardinal14,
    "ordinal": ordinal8
  },
  "fur": {
    "cardinal": cardinal1
  },
  "fy": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "ga": {
    "cardinal": cardinal16,
    "ordinal": ordinal8
  },
  "gd": {
    "cardinal": cardinal17
  },
  "gl": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "gsw": {
    "cardinal": cardinal1
  },
  "gu": {
    "cardinal": cardinal3,
    "ordinal": ordinal9
  },
  "guw": {
    "cardinal": cardinal2
  },
  "gv": {
    "cardinal": cardinal18
  },
  "ha": {
    "cardinal": cardinal1
  },
  "haw": {
    "cardinal": cardinal1
  },
  "he": {
    "cardinal": cardinal19,
    "ordinal": ordinal1
  },
  "hi": {
    "cardinal": cardinal3,
    "ordinal": ordinal9
  },
  "hr": {
    "cardinal": cardinal9,
    "ordinal": ordinal1
  },
  "hsb": {
    "cardinal": cardinal13,
    "ordinal": ordinal1
  },
  "hu": {
    "cardinal": cardinal1,
    "ordinal": ordinal10
  },
  "hy": {
    "cardinal": cardinal14,
    "ordinal": ordinal8
  },
  "id": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "ig": {
    "cardinal": cardinal7
  },
  "ii": {
    "cardinal": cardinal7
  },
  "in": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "is": {
    "cardinal": cardinal20,
    "ordinal": ordinal1
  },
  "it": {
    "cardinal": cardinal5,
    "ordinal": ordinal11
  },
  "iu": {
    "cardinal": cardinal21
  },
  "iw": {
    "cardinal": cardinal19,
    "ordinal": ordinal1
  },
  "ja": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "jbo": {
    "cardinal": cardinal7
  },
  "jgo": {
    "cardinal": cardinal1
  },
  "ji": {
    "cardinal": cardinal5
  },
  "jmc": {
    "cardinal": cardinal1
  },
  "jv": {
    "cardinal": cardinal7
  },
  "jw": {
    "cardinal": cardinal7
  },
  "ka": {
    "cardinal": cardinal1,
    "ordinal": ordinal12
  },
  "kab": {
    "cardinal": cardinal14
  },
  "kaj": {
    "cardinal": cardinal1
  },
  "kcg": {
    "cardinal": cardinal1
  },
  "kde": {
    "cardinal": cardinal7
  },
  "kea": {
    "cardinal": cardinal7
  },
  "kk": {
    "cardinal": cardinal1,
    "ordinal": ordinal13
  },
  "kkj": {
    "cardinal": cardinal1
  },
  "kl": {
    "cardinal": cardinal1
  },
  "km": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "kn": {
    "cardinal": cardinal3,
    "ordinal": ordinal1
  },
  "ko": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "ks": {
    "cardinal": cardinal1
  },
  "ksb": {
    "cardinal": cardinal1
  },
  "ksh": {
    "cardinal": cardinal22
  },
  "ku": {
    "cardinal": cardinal1
  },
  "kw": {
    "cardinal": cardinal21
  },
  "ky": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "lag": {
    "cardinal": cardinal23
  },
  "lb": {
    "cardinal": cardinal1
  },
  "lg": {
    "cardinal": cardinal1
  },
  "lkt": {
    "cardinal": cardinal7
  },
  "ln": {
    "cardinal": cardinal2
  },
  "lo": {
    "cardinal": cardinal7,
    "ordinal": ordinal8
  },
  "lt": {
    "cardinal": cardinal24,
    "ordinal": ordinal1
  },
  "lv": {
    "cardinal": cardinal25,
    "ordinal": ordinal1
  },
  "mas": {
    "cardinal": cardinal1
  },
  "mg": {
    "cardinal": cardinal2
  },
  "mgo": {
    "cardinal": cardinal1
  },
  "mk": {
    "cardinal": cardinal26,
    "ordinal": ordinal14
  },
  "ml": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "mn": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "mo": {
    "cardinal": cardinal27,
    "ordinal": ordinal8
  },
  "mr": {
    "cardinal": cardinal3,
    "ordinal": ordinal15
  },
  "ms": {
    "cardinal": cardinal7,
    "ordinal": ordinal8
  },
  "mt": {
    "cardinal": cardinal28
  },
  "my": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "nah": {
    "cardinal": cardinal1
  },
  "naq": {
    "cardinal": cardinal21
  },
  "nb": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "nd": {
    "cardinal": cardinal1
  },
  "ne": {
    "cardinal": cardinal1,
    "ordinal": ordinal16
  },
  "nl": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "nn": {
    "cardinal": cardinal1
  },
  "nnh": {
    "cardinal": cardinal1
  },
  "no": {
    "cardinal": cardinal1
  },
  "nqo": {
    "cardinal": cardinal7
  },
  "nr": {
    "cardinal": cardinal1
  },
  "nso": {
    "cardinal": cardinal2
  },
  "ny": {
    "cardinal": cardinal1
  },
  "nyn": {
    "cardinal": cardinal1
  },
  "om": {
    "cardinal": cardinal1
  },
  "or": {
    "cardinal": cardinal1
  },
  "os": {
    "cardinal": cardinal1
  },
  "pa": {
    "cardinal": cardinal2,
    "ordinal": ordinal1
  },
  "pap": {
    "cardinal": cardinal1
  },
  "pl": {
    "cardinal": cardinal29,
    "ordinal": ordinal1
  },
  "prg": {
    "cardinal": cardinal25,
    "ordinal": ordinal1
  },
  "ps": {
    "cardinal": cardinal1
  },
  "pt": {
    "cardinal": cardinal30,
    "ordinal": ordinal1
  },
  "pt-PT": {
    "cardinal": cardinal31
  },
  "rm": {
    "cardinal": cardinal1
  },
  "ro": {
    "cardinal": cardinal27,
    "ordinal": ordinal8
  },
  "rof": {
    "cardinal": cardinal1
  },
  "root": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "ru": {
    "cardinal": cardinal32,
    "ordinal": ordinal1
  },
  "rwk": {
    "cardinal": cardinal1
  },
  "sah": {
    "cardinal": cardinal7
  },
  "saq": {
    "cardinal": cardinal1
  },
  "sdh": {
    "cardinal": cardinal1
  },
  "se": {
    "cardinal": cardinal21
  },
  "seh": {
    "cardinal": cardinal1
  },
  "ses": {
    "cardinal": cardinal7
  },
  "sg": {
    "cardinal": cardinal7
  },
  "sh": {
    "cardinal": cardinal9,
    "ordinal": ordinal1
  },
  "shi": {
    "cardinal": cardinal33
  },
  "si": {
    "cardinal": cardinal34,
    "ordinal": ordinal1
  },
  "sk": {
    "cardinal": cardinal10,
    "ordinal": ordinal1
  },
  "sl": {
    "cardinal": cardinal35,
    "ordinal": ordinal1
  },
  "sma": {
    "cardinal": cardinal21
  },
  "smi": {
    "cardinal": cardinal21
  },
  "smj": {
    "cardinal": cardinal21
  },
  "smn": {
    "cardinal": cardinal21
  },
  "sms": {
    "cardinal": cardinal21
  },
  "sn": {
    "cardinal": cardinal1
  },
  "so": {
    "cardinal": cardinal1
  },
  "sq": {
    "cardinal": cardinal1,
    "ordinal": ordinal17
  },
  "sr": {
    "cardinal": cardinal9,
    "ordinal": ordinal1
  },
  "ss": {
    "cardinal": cardinal1
  },
  "ssy": {
    "cardinal": cardinal1
  },
  "st": {
    "cardinal": cardinal1
  },
  "sv": {
    "cardinal": cardinal5,
    "ordinal": ordinal18
  },
  "sw": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "syr": {
    "cardinal": cardinal1
  },
  "ta": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "te": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "teo": {
    "cardinal": cardinal1
  },
  "th": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "ti": {
    "cardinal": cardinal2
  },
  "tig": {
    "cardinal": cardinal1
  },
  "tk": {
    "cardinal": cardinal1
  },
  "tl": {
    "cardinal": cardinal15,
    "ordinal": ordinal8
  },
  "tn": {
    "cardinal": cardinal1
  },
  "to": {
    "cardinal": cardinal7
  },
  "tr": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "ts": {
    "cardinal": cardinal1
  },
  "tzm": {
    "cardinal": cardinal36
  },
  "ug": {
    "cardinal": cardinal1
  },
  "uk": {
    "cardinal": cardinal32,
    "ordinal": ordinal19
  },
  "ur": {
    "cardinal": cardinal5,
    "ordinal": ordinal1
  },
  "uz": {
    "cardinal": cardinal1,
    "ordinal": ordinal1
  },
  "ve": {
    "cardinal": cardinal1
  },
  "vi": {
    "cardinal": cardinal7,
    "ordinal": ordinal8
  },
  "vo": {
    "cardinal": cardinal1
  },
  "vun": {
    "cardinal": cardinal1
  },
  "wa": {
    "cardinal": cardinal2
  },
  "wae": {
    "cardinal": cardinal1
  },
  "wo": {
    "cardinal": cardinal7
  },
  "xh": {
    "cardinal": cardinal1
  },
  "xog": {
    "cardinal": cardinal1
  },
  "yi": {
    "cardinal": cardinal5
  },
  "yo": {
    "cardinal": cardinal7
  },
  "zh": {
    "cardinal": cardinal7,
    "ordinal": ordinal1
  },
  "zu": {
    "cardinal": cardinal3,
    "ordinal": ordinal1
  }
};

function cardinal1(p) { var n = Math.abs(p)||0; return n === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal2(p) { var n = Math.abs(p)||0; return (n >= 0 && n <= 1) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal3(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return i === 0 || n === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal4(p) { var n = Math.abs(p)||0, n100 = n % 100; return n === 0 ? C.PLURAL_ZERO : n === 1 ? C.PLURAL_ONE : n === 2 ? C.PLURAL_TWO : (n100 >= 3 && n100 <= 10) ? C.PLURAL_FEW : (n100 >= 11 && n100 <= 99) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal5(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return i === 1 && v === 0 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal6(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return n10 === 1 && n100 !== 11 ? C.PLURAL_ONE : (n10 >= 2 && n10 <= 4) && !(n100 >= 12 && n100 <= 14) ? C.PLURAL_FEW : n10 === 0 || (n10 >= 5 && n10 <= 9) || (n100 >= 11 && n100 <= 14) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal7(p) { return C.PLURAL_OTHER; }
function cardinal8(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100, n1000000 = n % 1000000; return n10 === 1 && n100 !== 11 && n100 !== 71 && n100 !== 91 ? C.PLURAL_ONE : n10 === 2 && n100 !== 12 && n100 !== 72 && n100 !== 92 ? C.PLURAL_TWO : (n10 >= 3 && n10 <= 4) || n10 === 9 && !(n100 >= 10 && n100 <= 19) && !(n100 >= 70 && n100 <= 79) && !(n100 >= 90 && n100 <= 99) ? C.PLURAL_FEW : n !== 0 && n1000000 === 0 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal9(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100, f10 = f % 10, f100 = f % 100; return v === 0 && i10 === 1 && i100 !== 11 || f10 === 1 && f100 !== 11 ? C.PLURAL_ONE : v === 0 && (i10 >= 2 && i10 <= 4) && !(i100 >= 12 && i100 <= 14) || (f10 >= 2 && f10 <= 4) && !(f100 >= 12 && f100 <= 14) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function cardinal10(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length; return i === 1 && v === 0 ? C.PLURAL_ONE : (i >= 2 && i <= 4) && v === 0 ? C.PLURAL_FEW : v !== 0 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal11(p) { var n = Math.abs(p)||0; return n === 0 ? C.PLURAL_ZERO : n === 1 ? C.PLURAL_ONE : n === 2 ? C.PLURAL_TWO : n === 3 ? C.PLURAL_FEW : n === 6 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal12(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, t = parseInt((n+"").split(".")[1],10)||0; return n === 1 || t !== 0 && i === 0 || i === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal13(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i100 = i % 100, f100 = f % 100; return v === 0 && i100 === 1 || f100 === 1 ? C.PLURAL_ONE : v === 0 && i100 === 2 || f100 === 2 ? C.PLURAL_TWO : v === 0 && (i100 >= 3 && i100 <= 4) || (f100 >= 3 && f100 <= 4) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function cardinal14(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return i === 0 || i === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal15(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, f10 = f % 10; return v === 0 && i === 1 || i === 2 || i === 3 || v === 0 && i10 !== 4 && i10 !== 6 && i10 !== 9 || v !== 0 && f10 !== 4 && f10 !== 6 && f10 !== 9 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal16(p) { var n = Math.abs(p)||0; return n === 1 ? C.PLURAL_ONE : n === 2 ? C.PLURAL_TWO : (n >= 3 && n <= 6) ? C.PLURAL_FEW : (n >= 7 && n <= 10) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal17(p) { var n = Math.abs(p)||0; return n === 1 || n === 11 ? C.PLURAL_ONE : n === 2 || n === 12 ? C.PLURAL_TWO : (n >= 3 && n <= 10) || (n >= 13 && n <= 19) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function cardinal18(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return v === 0 && i10 === 1 ? C.PLURAL_ONE : v === 0 && i10 === 2 ? C.PLURAL_TWO : v === 0 && i100 === 0 || i100 === 20 || i100 === 40 || i100 === 60 || i100 === 80 ? C.PLURAL_FEW : v !== 0 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal19(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, n10 = n % 10; return i === 1 && v === 0 ? C.PLURAL_ONE : i === 2 && v === 0 ? C.PLURAL_TWO : v === 0 && !(n >= 0 && n <= 10) && n10 === 0 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal20(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, t = parseInt((n+"").split(".")[1],10)||0, i10 = i % 10, i100 = i % 100; return t === 0 && i10 === 1 && i100 !== 11 || t !== 0 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal21(p) { var n = Math.abs(p)||0; return n === 1 ? C.PLURAL_ONE : n === 2 ? C.PLURAL_TWO : C.PLURAL_OTHER; }
function cardinal22(p) { var n = Math.abs(p)||0; return n === 0 ? C.PLURAL_ZERO : n === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal23(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return n === 0 ? C.PLURAL_ZERO : i === 0 || i === 1 && n !== 0 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal24(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100, f = parseInt((p+"").split(".")[1],10)||0; return n10 === 1 && !(n100 >= 11 && n100 <= 19) ? C.PLURAL_ONE : (n10 >= 2 && n10 <= 9) && !(n100 >= 11 && n100 <= 19) ? C.PLURAL_FEW : f !== 0 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal25(p) { var n = Math.abs(p)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, n10 = n % 10, n100 = n % 100, f100 = f % 100, f10 = f % 10; return n10 === 0 || (n100 >= 11 && n100 <= 19) || v === 2 && (f100 >= 11 && f100 <= 19) ? C.PLURAL_ZERO : n10 === 1 && n100 !== 11 || v === 2 && f10 === 1 && f100 !== 11 || v !== 2 && f10 === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal26(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, f = parseInt((p+"").split(".")[1],10)||0, i10 = i % 10, f10 = f % 10; return v === 0 && i10 === 1 || f10 === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal27(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, n100 = n % 100; return i === 1 && v === 0 ? C.PLURAL_ONE : v !== 0 || n === 0 || n !== 1 && (n100 >= 1 && n100 <= 19) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function cardinal28(p) { var n = Math.abs(p)||0, n100 = n % 100; return n === 1 ? C.PLURAL_ONE : n === 0 || (n100 >= 2 && n100 <= 10) ? C.PLURAL_FEW : (n100 >= 11 && n100 <= 19) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal29(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return i === 1 && v === 0 ? C.PLURAL_ONE : v === 0 && (i10 >= 2 && i10 <= 4) && !(i100 >= 12 && i100 <= 14) ? C.PLURAL_FEW : v === 0 && i !== 1 && (i10 >= 0 && i10 <= 1) || v === 0 && (i10 >= 5 && i10 <= 9) || v === 0 && (i100 >= 12 && i100 <= 14) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal30(p) { var n = Math.abs(p)||0; return (n >= 0 && n <= 2) && n !== 2 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal31(p) { var n = Math.abs(p)||0, v = ((p+"").split(".")[1]||"").length; return n === 1 && v === 0 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal32(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i10 = i % 10, i100 = i % 100; return v === 0 && i10 === 1 && i100 !== 11 ? C.PLURAL_ONE : v === 0 && (i10 >= 2 && i10 <= 4) && !(i100 >= 12 && i100 <= 14) ? C.PLURAL_FEW : v === 0 && i10 === 0 || v === 0 && (i10 >= 5 && i10 <= 9) || v === 0 && (i100 >= 11 && i100 <= 14) ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function cardinal33(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0; return i === 0 || n === 1 ? C.PLURAL_ONE : (n >= 2 && n <= 10) ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function cardinal34(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, f = parseInt((p+"").split(".")[1],10)||0; return n === 0 || n === 1 || i === 0 && f === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function cardinal35(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, v = ((p+"").split(".")[1]||"").length, i100 = i % 100; return v === 0 && i100 === 1 ? C.PLURAL_ONE : v === 0 && i100 === 2 ? C.PLURAL_TWO : v === 0 && (i100 >= 3 && i100 <= 4) || v !== 0 ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function cardinal36(p) { var n = Math.abs(p)||0; return (n >= 0 && n <= 1) || (n >= 11 && n <= 99) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function ordinal1(p) { return C.PLURAL_OTHER; }
function ordinal2(p) { var n = Math.abs(p)||0; return n === 1 || n === 5 || n === 7 || n === 8 || n === 9 || n === 10 ? C.PLURAL_ONE : n === 2 || n === 3 ? C.PLURAL_TWO : n === 4 ? C.PLURAL_FEW : n === 6 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal3(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, i10 = i % 10, i100 = i % 100, i1000 = i % 1000; return i10 === 1 || i10 === 2 || i10 === 5 || i10 === 7 || i10 === 8 || i100 === 20 || i100 === 50 || i100 === 70 || i100 === 80 ? C.PLURAL_ONE : i10 === 3 || i10 === 4 || i1000 === 100 || i1000 === 200 || i1000 === 300 || i1000 === 400 || i1000 === 500 || i1000 === 600 || i1000 === 700 || i1000 === 800 || i1000 === 900 ? C.PLURAL_FEW : i === 0 || i10 === 6 || i100 === 40 || i100 === 60 || i100 === 90 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal4(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return n10 === 2 || n10 === 3 && n100 !== 12 && n100 !== 13 ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function ordinal5(p) { var n = Math.abs(p)||0; return n === 1 || n === 3 ? C.PLURAL_ONE : n === 2 ? C.PLURAL_TWO : n === 4 ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function ordinal6(p) { var n = Math.abs(p)||0; return n === 0 || n === 7 || n === 8 || n === 9 ? C.PLURAL_ZERO : n === 1 ? C.PLURAL_ONE : n === 2 ? C.PLURAL_TWO : n === 3 || n === 4 ? C.PLURAL_FEW : n === 5 || n === 6 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal7(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return n10 === 1 && n100 !== 11 ? C.PLURAL_ONE : n10 === 2 && n100 !== 12 ? C.PLURAL_TWO : n10 === 3 && n100 !== 13 ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function ordinal8(p) { var n = Math.abs(p)||0; return n === 1 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function ordinal9(p) { var n = Math.abs(p)||0; return n === 1 ? C.PLURAL_ONE : n === 2 || n === 3 ? C.PLURAL_TWO : n === 4 ? C.PLURAL_FEW : n === 6 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal10(p) { var n = Math.abs(p)||0; return n === 1 || n === 5 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function ordinal11(p) { var n = Math.abs(p)||0; return n === 11 || n === 8 || n === 80 || n === 800 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal12(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, i100 = i % 100; return i === 1 ? C.PLURAL_ONE : i === 0 || (i100 >= 2 && i100 <= 20) || i100 === 40 || i100 === 60 || i100 === 80 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal13(p) { var n = Math.abs(p)||0, n10 = n % 10; return n10 === 6 || n10 === 9 || n10 === 0 && n !== 0 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal14(p) { var n = Math.abs(p)||0, i = parseInt(n,10)||0, i10 = i % 10, i100 = i % 100; return i10 === 1 && i100 !== 11 ? C.PLURAL_ONE : i10 === 2 && i100 !== 12 ? C.PLURAL_TWO : i10 === 7 || i10 === 8 && i100 !== 17 && i100 !== 18 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal15(p) { var n = Math.abs(p)||0; return n === 1 ? C.PLURAL_ONE : n === 2 || n === 3 ? C.PLURAL_TWO : n === 4 ? C.PLURAL_FEW : C.PLURAL_OTHER; }
function ordinal16(p) { var n = Math.abs(p)||0; return (n >= 1 && n <= 4) ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function ordinal17(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return n === 1 ? C.PLURAL_ONE : n10 === 4 && n100 !== 14 ? C.PLURAL_MANY : C.PLURAL_OTHER; }
function ordinal18(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return n10 === 1 || n10 === 2 && n100 !== 11 && n100 !== 12 ? C.PLURAL_ONE : C.PLURAL_OTHER; }
function ordinal19(p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100; return n10 === 3 && n100 !== 13 ? C.PLURAL_FEW : C.PLURAL_OTHER; }