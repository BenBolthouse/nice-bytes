document.addEventListener('DOMContentLoaded', evt => {
    const pageAwaiting = document.getElementById('pageAwaiting');
    pageAwaiting.classList.remove('page__awaiting--show');
    pageAwaiting.classList.add('page__awaiting--hide');
})