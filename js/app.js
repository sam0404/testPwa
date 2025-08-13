if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('js/sw.js')
            .then(() => {
                console.log('Service Worker registered with scope:');
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}