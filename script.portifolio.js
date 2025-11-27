
        function mudouTamanho() {
            if (window.innerWidth >= 768) {
                itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }

        function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }

const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.flex-card-container');

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveclass() {
    const elm = document.querySelector ('.${ACTIVECLASS} ');
    if (elm) {
        elm.classList.remove(ACTIVECLASS);
       } 
}

function addClass($event) {
    $event.StopPropagation();
    removeActiveclass ();
    const target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image =>  {
    image.addEventListener('click', addClass);
});