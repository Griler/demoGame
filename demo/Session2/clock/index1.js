
// Defining showTime funcion
var montharr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let dayarr = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
function showTime()  {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
/*    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;*/

    let currentTime =
        hour +
        ":" +
        min +" "// Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;

    let currentDate =
        dayarr[time.getDay()] +
        "," +
        montharr[time.getMonth()] +
        " "+time.getDate();
    //  console.log(document.getElementById("date"))
    document.getElementById("date").innerHTML = currentDate
}
setInterval(showTime, 1000);
showTime();
