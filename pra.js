function timeSince(date) {
    console.log('came');
var seconds = Math.floor((new Date() - date) / 1000);
var interval = seconds / 31536000;

let finalTime;
if (interval > 1) {
finalTime = Math.floor(interval);
return finalTime === 1 ? `${finalTime} year ago`:`${finalTime} years ago`;
}
interval = seconds / 2592000;
if (interval > 1) {
finalTime = Math.floor(interval);
return finalTime === 1 ? `${finalTime} month ago`:`${finalTime} months ago`;
}
interval = seconds / 86400;
if (interval > 1) {
finalTime = Math.floor(interval);
return finalTime === 1 ? `${finalTime} day ago`:`${finalTime} days ago`;

}
interval = seconds / 3600;
if (interval > 1) {
finalTime = Math.floor(interval);
return finalTime === 1 ? `${finalTime} hour ago`:`${finalTime} hours ago`;
}
interval = seconds / 60;
if (interval > 1) {
finalTime = Math.floor(interval);
return finalTime === 1 ? `${finalTime} minute ago`:`${finalTime} minutes ago`;
}
console.log(seconds);
if(interval < 1) return `1 second ago`;

return seconds === 1 ? `${seconds} second ago`:`${seconds} seconds ago`;
}

let t = new Date();

setTimeout(() => {
    
    
    
    var seconds = Math.floor((new Date() - t) / 1000);
    console.log(seconds);
    
}, 500);