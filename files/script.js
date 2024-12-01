document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const books = Array.from(slider.children);
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');
    const bookWidth = books[0].getBoundingClientRect().width;

    let currentIndex = 0;

    // 이동 함수
    function moveSlider(index) {
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = `translateX(-${index * bookWidth}px)`;
    }

    // 오른쪽 버튼
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % books.length; // 순환 처리
        moveSlider(currentIndex);
    });

    // 왼쪽 버튼
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + books.length) % books.length; // 순환 처리
        moveSlider(currentIndex);
    });
});