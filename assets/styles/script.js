const toggleBtn = document.getElementById('theme-toggle');

const applyTheme = (isDark) => {
  document.body.classList.toggle('dark-mode', isDark);

  if (toggleBtn) {
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }
};

if (toggleBtn) {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  applyTheme(isDark);

  toggleBtn.addEventListener('click', () => {
    const shouldUseDarkTheme = !document.body.classList.contains('dark-mode');
    applyTheme(shouldUseDarkTheme);
    localStorage.setItem('theme', shouldUseDarkTheme ? 'dark' : 'light');
  });
}

