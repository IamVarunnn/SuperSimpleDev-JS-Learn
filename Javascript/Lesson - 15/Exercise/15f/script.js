export default function isWeekend(date){

    let weekendDay = date.format("dddd");

    return weekendDay === 'Saturday' || weekendDay === 'Sunday';
}