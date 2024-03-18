let body = document.getElementsByTagName('body')[0];
let mode = document.getElementById('mode');

mode.addEventListener('click', function() {
    body.classList.toggle('dark');
    this.classList.toggle('btn');
});