function toggleDarkMode() {
    const root = document.documentElement;

    if (root.style.getPropertyValue('--background-color') === '#f4f4f4') {
        root.style.setProperty('--background-color', '#333');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--header-background-color', '#222');
        root.style.setProperty('--header-text-color', '#fff');
        root.style.setProperty('--article-background-color', '#444');
        root.style.setProperty('--article-border-color', '#666');
        root.style.setProperty('--footer-background-color', '#222');
        root.style.setProperty('--footer-text-color', '#fff');
    } else {
        root.style.setProperty('--background-color', '#f4f4f4');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--header-background-color', '#333');
        root.style.setProperty('--header-text-color', '#fff');
        root.style.setProperty('--article-background-color', '#fff');
        root.style.setProperty('--article-border-color', '#ddd');
        root.style.setProperty('--footer-background-color', '#333');
        root.style.setProperty('--footer-text-color', '#fff');
    }
}
