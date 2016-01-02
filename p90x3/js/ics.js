/**
 * Created by michal on 1/2/16.
 */

var ICS = (function () {

    var VCalendar = function (params) {
        this.name = params.name;
        this.events = [];
    };

    VCalendar.prototype.dataUri = function() {
        return "data:text/calendar," + encodeURIComponent(this.toString());
    };

    var formatDate = function (date) {
        return date.toISOString().replace(/[-:]/g, '').replace(/\..*/, 'Z')
    };

    var crlf = function (inputArray) {
        return inputArray.join('\r\n');
    };

    VCalendar.prototype.toString = function () {
        var out = [];
        out.push('BEGIN:VCALENDAR');
        out.push('VERSION:2.0');
        out.push('PRODID:-//michals//NONSGML P90X3 Generator//EN');
        this.events.forEach(function (event) {
            out.push(event);
        });
        out.push('END:VCALENDAR');
        return crlf(out);
    };

    var VEvent = function (params) {
        this.start = params.start;
        this.end = params.end;
        this.summary = params.summary;
    };

    VEvent.prototype.toString = function () {
        var out = [];
        out.push('BEGIN:VEVENT');
        out.push('DTSTART:' + formatDate(this.start));
        out.push('DTEND:' + formatDate(this.end));
        out.push('SUMMARY:' + this.summary);
        out.push('END:VEVENT');
        return crlf(out);
    };

    return {
        VCalendar: VCalendar,
        VEvent: VEvent
    };
})();
