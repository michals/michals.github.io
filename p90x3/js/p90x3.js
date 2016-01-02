/**
 * Created by michal on 1/2/16.
 */

$(function () {
    var workout = {
        "classic": "Total Synergistics|Agility X|X3 Yoga|The Challenge|CVX|The Warrior|Dynamix|Total Synergistics|Agility X|X3 Yoga|The Challenge|CVX|The Warrior|Dynamix|Total Synergistics|Agility X|X3 Yoga|The Challenge|CVX|The Warrior|Dynamix|Isometrix|Dynamics|Accelerator|Pilates X|CVX |X3 Yoga|Dynamix|Eccentric Upper|Triometrics|X3 Yoga|Eccentric Lower|Incinerator|MMX|Dynamix|Eccentric Upper|Triometrics|X3 Yoga|Eccentric Lower|Incinerator|MMX|Dynamix|Eccentric Upper|Triometrics|X3 Yoga|Eccentric Lower|Incinerator|MMX|Dynamix|Isometrix|Dynamics|Accelerator|Pilates X|CVX |X3 Yoga|Dynamix|Decelerator|Agility X|The Challenge|X3 Yoga|Triometrics|Total Synergistics|Dynamix|Decelerator|MMX|Eccentric Upper|Triometrics|Pilates X|Eccentric Lower|Dynamix|Decelerator|Agility X|The Challenge|X3 Yoga|Triometrics|Total Synergistics|Dynamix|Decelerator|MMX|Eccentric Upper|Triometrics|Pilates X|Eccentric Lower|Dynamix|Isometrix|Accelerator|Pilates X|X3 Yoga|Dynamix|Dynamix"
    };

    var startDate = moment().day(8).hour(7).minute(0).second(0).toDate();

    $("#datetimepicker1").datetimepicker({
        format: "YYYY-MM-DD HH:mm",
        defaultDate: startDate,
        sideBySide: false
    });
    $("#datetimepicker1").on('dp.change', function(e) {
        $("#link").addClass("hide").attr("href", "#");
        console.log(e);
        startDate = e.date.toDate();
    });

    $("#generate").click(function () {
        var cal = new ICS.VCalendar({name: "P90X3-Classic"});
        var date = new Date(startDate);
        workout.classic.split('|').forEach(function(name) {
            cal.events.push(new ICS.VEvent({
                start: new Date(date.getFullYear(), date.getMonth(),
                    date.getDate(), date.getHours(), date.getMinutes(), 0),
                end: new Date(date.getFullYear(), date.getMonth(),
                    date.getDate(), date.getHours(), date.getMinutes() + 30, 0),
                summary: name
            }));
            date.setDate(date.getDate() + 1);
        });
        $("#download").attr("href", cal.dataUri());
        $("#link").removeClass("hide");
    });
});