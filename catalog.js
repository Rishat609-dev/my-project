// Сортировка по цене
document.getElementById('sortPrice').addEventListener('change', function () {
    const sortOrder = this.value;
    const catalog = document.querySelector('.catalog');
    const cars = Array.from(catalog.querySelectorAll('.car'));

    cars.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'), 10);
        const priceB = parseInt(b.getAttribute('data-price'), 10);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    // Очистка и добавление отсортированных элементов
    catalog.innerHTML = '';
    cars.forEach(car => catalog.appendChild(car));
});