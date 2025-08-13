if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('js/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

let installButton = document.createElement('button');

let prompt;
window.addEventListener('beforeinstallprompt', function (e) {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    prompt = e;
});

let installed = false;
installButton.addEventListener('click', async function () {
    prompt.prompt();
    let result = await that.prompt.userChoice;
    if (result && result.outcome === 'accepted') {
        installed = true;
    }
})

window.addEventListener('appinstalled', async function (e) {
    installButton.style.display = "none";
});