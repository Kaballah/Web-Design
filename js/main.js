const theme_checkbox = document.getElementById('theme-checkbox');
function initTheme() {
  const e = null !== localStorage.getItem('theme-checkbox') && 'dark' === localStorage.getItem('theme-checkbox');
  theme_checkbox.checked = e,
  e ? document.body.setAttribute('data-theme', 'dark')  : document.body.removeAttribute('data-theme')
}
function resetTheme() {
    theme_checkbox.checked ? (document.body.setAttribute('data-theme', 'dark'), localStorage.setItem('theme-checkbox', 'dark'))  : (document.body.removeAttribute('data-theme'), localStorage.removeItem('theme-checkbox'))
}
window.addEventListener('load', () =>{
    theme_checkbox && (initTheme(), theme_checkbox.addEventListener('change', () =>{
    resetTheme()
  }))
});
