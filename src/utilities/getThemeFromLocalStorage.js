export const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme');
    if (theme) return theme;
}

