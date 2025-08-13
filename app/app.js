
let installButton = document.getElementById('install');
let closeButton = document.getElementById('close')
let modal = document.getElementById("modal");


closeButton.addEventListener('click', () => {
    modal.style.display = "none";
})


let installEvent = null;
window.addEventListener('beforeinstallprompt', function (e) {

    modal.style.display = "block";
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    installEvent = e;
});

let installed = false;
installButton.addEventListener('click', async function () {
    installEvent.prompt();
    let result = await that.prompt.userChoice;
    if (result && result.outcome === 'accepted') {
        installed = true;
    }
})

window.addEventListener('appinstalled', async function (e) {
    installButton.style.display = "none";
});