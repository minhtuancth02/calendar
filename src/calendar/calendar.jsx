import React from 'react'
import { takeMonth } from '../modules/takeCalendar.js'
import { format , isSameMonth ,isSameDay } from 'date-fns'

// Thứ Row
function WeekNames() {

    function cornerClassName(idx) { 
        if (idx === 0) return 'rounded-tl-lg';
        if (idx === 6) return 'rounded-tr-lg';
    };

    return (
        <div className="grid grid-cols-7 mt-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                .map((dayName, i) =>
                    <div key={i} className={`${cornerClassName(i)} bg-blue-200 h-16 w-17 flex items-center justify-center border border-blue-200`}>
                        {dayName}
                    </div>
                )    
            }
        </div>
    )
};


 const Calendar = () => {

    const [currDate, setCurrDate] = React.useState(new Date());
    const [pickDay, setPickDay] = React.useState(null);
    // Month array
    const data = takeMonth(pickDay ?? currDate)(); 

    function cornerClassName(weekIndex, dayIndex) {
        if (weekIndex !== data.length - 1) return;
        if (dayIndex === 0) return 'rounded-bl-lg';
        if (dayIndex === 6) return 'rounded-br-lg';
    };

    function colorDay(day) {
        if (isSameDay(day , pickDay)) return 'bg-blue-200'
        if (isSameDay(day, currDate)) return 'bg-red-300'
        if (isSameMonth(day, currDate)) {
            return 'text-blue-700'
        }
        else { return 'text-gray-400' }
     };
     
    // React.useEffect(() => localStorage.setItem('pickDay', JSON.stringify(pickDay)) ,[pickDay])

    return (
        <>
            <div className='min-w-max justify-center box-border m-6 flex font-mono'>
                <div className={"border rounded-xl p-2"}>
                    <h3 className={`flex w-full items-center justify-center text-red-400 font-bold text-xl pb-2`}>
                        {`${format(currDate, "EEEE MMMM dd yyyy")}`}
                    </h3>
                    <div className={`flex w-full items-center justify-center text-gray-400`}>
                        { pickDay && format(pickDay,"EEEE MMMM dd yyyy") }
                    </div>
                    <WeekNames />

                    {data.map((week, wIdx) =>
                        <div className="grid grid-cols-7 flex-col justify-center">
                            {week.map((day, dIdx) =>
                                <div
                                    className={`${colorDay(day)} h-16 w-16 flex items-center justify-center border border-blue-200 ${cornerClassName(wIdx, dIdx)} `}
                                    onClick={() => { return setPickDay(day) }}
                                    style={{transition:'300ms'}}
                                >
                                    { format(day, 'dd') }
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
};

export default Calendar;