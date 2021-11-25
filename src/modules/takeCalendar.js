// import from lib 'date-fns'
import {
    startOfMonth , startOfWeek ,
    endOfMonth , endOfWeek ,
    startOfDay , addDays
} from 'date-fns'

// Generators 
// return week-array of select date
// every time run takeWeek() => return next week / 7 day
export function takeWeek(start = new Date()) {
    let date = startOfWeek(startOfDay(start));

    return function() {
        const week = [...Array(7)].map((_, i) => addDays(date ,i));
        date = addDays(week[6], 1);
        console.log(date)
        return week;
    };
};

// return month- [week1,...] of select date
export function takeMonth(start = new Date()){
    let month = [];
    let date = start;
    function lastDayOfRange(range){
        // console.log(range[range.length - 1][6]);
        return range[range.length - 1][6];
    };

    return function() {
        const weekGen = takeWeek(startOfMonth(date));
        // startOfDay() for timezone issues
        const endDate = startOfDay(endOfWeek(endOfMonth(date)));
        // console.log(endDate)
        month.push(weekGen());
        while (lastDayOfRange(month) < endDate) {
            month.push(weekGen())
        }
        const range = month;
        month = [];
        date = addDays(lastDayOfRange(range) , 1);

        return range;
    }
};

