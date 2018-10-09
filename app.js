function pigFun(phrase) {
    var prefix, finalstr, pst, ay = "ay", suffix;
    for (var i = 0; i < phrase.length; i++) {
        if (isvowelpst(phrase[i])) {
            pst = i;
            break;
        }
    }
    suffix = phrase.substring(0, pst) + ay;
    prefix = phrase.substring(pst, phrase.length);
    return prefix + suffix;
}