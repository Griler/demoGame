function clockCotainerFunc(){
    clockCotainer = document.getElementById("clockContainer");
    clockCotainer.style.position = "relative";
    clockCotainer.style.margin = 'auto';
    clockCotainer.style.height = '40vw';
    clockCotainer.style.wight = '40vw';
    clockCotainer.style.backgroundSize = '100%';
    clockCotainer.style.borderRadius= '50%';
    clockCotainer.style.borderColor = "#cd707"
    clockCotainer.style.borderWidth = "1px"
    clockCotainer.style.boxShadow = "rgb(202, 142, 195) 0px 2px 10px 0px, rgb(205, 112, 167) 0px 2px 10px 0px";
    return clockCotainer
}
document.body.appendChild(clockCotainerFunc());

setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
// Calling showTime function at every second
