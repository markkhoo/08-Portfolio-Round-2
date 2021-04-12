

// Display for time since started coding
let timeSince = document.getElementById("time-since");
setInterval(function() {
    let time = dayjs().diff(dayjs(1615262400000),'day',true); // Days since March 8, 2020
    timeSince.innerText = time.toString().substring(0,9);
},50);

