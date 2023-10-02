export function updatePageHistory() {
    const currentPage = window.location.pathname;

    updateSessionHistory(currentPage);
    updateOverallHistory(currentPage);
}

function updateSessionHistory(currentPage) {
    let sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || {};

    sessionHistory[currentPage] = (sessionHistory[currentPage] || 0) + 1;

    localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));
}

function updateOverallHistory(currentPage) {
    let overallHistory = getCookie('overallHistory');

    overallHistory = overallHistory ? JSON.parse(overallHistory) : {};

    overallHistory[currentPage] = (overallHistory[currentPage] || 0) + 1;

    setCookie('overallHistory', JSON.stringify(overallHistory), 365);
}

export function getCookie(title) {
    const cookies = document.cookie.split('; ');

    for (let index = 0; index < cookies.length; index++) {
        const cookie = cookies[index].split('=');

        if (cookie[0] === title) {
            return cookie[1];
        }
    }

    return '';
}

function setCookie(title, value, exlpirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + exlpirationDays * 24 * 60 * 60 * 1000);

    const expires = 'expires=' + date.toUTCString();
    document.cookie = title + '=' + value + '; ' + expires + '; path=/'; 
}