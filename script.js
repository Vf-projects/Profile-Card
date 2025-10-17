const userTime = document.getElementById('user-time');
setInterval(() => {
  userTime.innerText = `Current Time (ms): ${Date.now()}`;
}, 1000);