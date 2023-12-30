//your JS code here. If required.
const value=document.getElementById("browser-info");
// value.innerText="You are using " + navigator.userAgent + " version " + navigator.appVersion;

value.innerHTML=`You are using ${navigator.appName}  version ${navigator.appVersion}`;