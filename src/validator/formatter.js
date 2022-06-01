
const trimfunc= function() {
    const word = '  this    is    the    use    of     trim    ';
    console.log(word.trim());
}

const lowerfunc= function() {
    const sentence = 'ThE WoRlD Is FuLl Of SoRrOw';
    console.log(sentence.toLowerCase());
}

const upperfunc= function() {
    const sentence = 'ThE WoRlD Is FuLl Of SoRrOw';
    console.log(sentence.toUpperCase());
}

module.exports.trimfunc = trimfunc
module.exports.lowerfunc = lowerfunc
module.exports.upperfunc = upperfunc