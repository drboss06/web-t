// Копирование текста из списка в абзац
document.getElementById('copyButton').addEventListener('click', function() {
    const menuItems = document.querySelectorAll('#menu li');
    let menuText = '';
    menuItems.forEach(item => {
        menuText += item.textContent + ' ';
    });
    document.getElementById('paragraph').textContent += menuText.trim();
});

// Изменение стиля всех элементов класса menu-item
document.getElementById('changeStyleButton').addEventListener('click', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.color = 'blue';
    });
});

// Поиск строки в пунктах меню и подсветка результатов
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('#menu li');

    menuItems.forEach(item => {
        item.classList.remove('highlight');
        if (item.textContent.toLowerCase().includes(query)) {
            item.classList.add('highlight');
        }
    });
});
