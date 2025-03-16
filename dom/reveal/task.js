document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveals() {
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            const revealBottom = reveal.getBoundingClientRect().bottom;

            // Проверяем, находится ли элемент в поле зрения
            if (revealTop < window.innerHeight && revealBottom > 0) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    }

    // Вызываем функцию при загрузке страницы и при прокрутке
    window.addEventListener('scroll', checkReveals);
    window.addEventListener('resize', checkReveals);

    // Первоначальная проверка при загрузке страницы
    checkReveals();
});