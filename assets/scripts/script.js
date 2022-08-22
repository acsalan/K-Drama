function handleMouseEnter() {
    this.classList.add('d-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('d-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('d-card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter',handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    } 
}

document.addEventListener("DOMContentLoaded",addEventListenersToCards,false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel =document.querySelector('.d-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.d-controler__button--active');
    activeButtonElement.classList.remove('d-controler__button--active');
    selectedButtonElement.classList.add('d-controller__button--active');
}