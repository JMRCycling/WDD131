
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        console.log('dark mode');
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        document.querySelector('h3').style.color = '#5680b6';
        document.querySelector('hr').style.backgroundColor = '#5680b6';
        logo.setAttribute('src', 'byui-logo-white.png');
    } else {
        console.log('light mode');
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = 'black';
        document.querySelector('h3').style.color = '#035f9c';
        document.querySelector('hr').style.backgroundColor = '#035f9c';
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');
        // code for changes to colors and logo
    }
}           
                    