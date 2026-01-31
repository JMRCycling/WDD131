const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
});


const gallery = document.querySelector('main div');
const modal = document.createElement('dialog');
const modalImage = document.createElement('img');
const closeButton = document.createElement('button');


closeButton.textContent = 'X';
closeButton.className = 'close-viewer';
modal.appendChild(modalImage);
modal.appendChild(closeButton);
document.body.appendChild(modal);


gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const src = e.target.getAttribute('src').replace('.jpg', '-full.jpg');
        modalImage.src = src;
        modalImage.alt = e.target.alt;
        modal.showModal();
    }
});


closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
