const getTime = () => {
    const currentDate = new Date();
    let hours = currentDate.getUTCHours();
    let minutes = currentDate.getUTCMinutes();
    const timeFrame = hours >= 12 ? 'pm' : 'am';
    let seconds = currentDate.getUTCSeconds;
    const time = document.querySelector('[data-testid="currentTimeUTC"]');
    const dayElement = document.querySelector('[data-testid="currentDay"]');
    time.textContent = `${hours}:${minutes}${timeFrame}`;
}

const getDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    let today = currentDate.getUTCDay();
    const day = document.querySelector('[data-testid="currentDay"]');
    day.textContent = days[today];
}



document.addEventListener('DOMContentLoaded', function() {
    getTime();
    getDate();

})