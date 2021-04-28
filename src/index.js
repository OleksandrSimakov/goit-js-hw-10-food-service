// Theme import
import './styles.css';

// Theme const
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const LOCAL_STORAGE_KEY = 'currentTheme'
const switchEl = document.querySelector('#theme-switch-toggle')
const bodyEl = document.querySelector('body')

// 1. Theme code
if (localStorage.getItem(LOCAL_STORAGE_KEY) !== Theme.DARK) {
    bodyEl.classList.add(Theme.LIGHT)
}
else {
    switchEl.checked = true;
    bodyEl.classList.add(Theme.DARK)
}

switchEl.addEventListener('change', onSwitchElChange);

function onSwitchElChange() {
    bodyEl.classList.toggle(Theme.DARK);
    bodyEl.classList.toggle(Theme.LIGHT);
    localStorage.setItem(LOCAL_STORAGE_KEY, bodyEl.classList)
}

// Template import
import menuItemTpl from './template.hbs'
import menu from './menu.json'

// Template const
const menuEl = document.querySelector('.js-menu')
const menuMarkUp = createMenuMarkUp(menu)

// 2. Template code
function createMenuMarkUp(menu) {
    return menuItemTpl(menu)
}

menuEl.insertAdjacentHTML('afterbegin', menuMarkUp)