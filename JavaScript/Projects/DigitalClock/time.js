const clock = document.getElementById('clock')


setInterval(() => {
    let date = new Date()
    clock.textContent = date.toLocaleTimeString();
}, 1000)


