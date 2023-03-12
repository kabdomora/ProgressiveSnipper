const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Pre-Install handler
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// OnClick handler
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Post-Install handler
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
});
