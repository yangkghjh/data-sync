const csv = require("./csv/csv");

module.exports = function(format) {
    switch (format) {
        case 'csv': return csv; break;
        default:
            throw new Error('unsupport encode format');
    }
}
