
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        console.log('dark mode');
        document.body.style.backgroundColor = '#3b3b3b';
        document.body.style.color = 'white';
        document.querySelector('hr').style.backgroundColor = 'white';
        logo.setAttribute('src', 'byui-logo-white.png');
    } else {
        console.log('light mode');
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = 'black';
        document.querySelector('hr').style.backgroundColor = '#035f9c';
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');
        // code for changes to colors and logo
    }
}           
                    