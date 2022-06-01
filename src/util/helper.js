
const printDate= function() {
    var day=(new Date()).getDate();
    console.log(day);
}

const printMonth= function() {
    var month=(new Date()).getMonth();
    console.log(month);
}

const getBatchInfo=function() {
    console.log('Radon, week 3, day 3, the topic for today is nodejs module system')
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo