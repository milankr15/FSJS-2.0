//12.  Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

var now = new Date();
var today = {
    year: now.getFullYear(),
    month: now.getMonth()+1,
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes()
}



console.log(`${today.year}-${today.month}-${today.date} ${today.hour}:${today.minute}`);
console.log(`${today.date}-${today.month}-${today.year} ${today.hour}:${today.minute}`);
console.log(`${today.date}/${today.month}/${today.year} ${today.hour}:${today.minute}`);

// Output: 2023-6-27 10:18
//         27-6-2023 10:18
//         27/6/2023 10:18
