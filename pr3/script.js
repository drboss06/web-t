$(document).ready(function() {
    // 1. Проверка работы jQuery
    console.log("jQuery подключен!");

    // 2. Загрузка файла JSON
    $.ajax({
        url: "gallery.json",
        dataType: "json",
        success: function(data) {
            $("#gallery-title").text(data.gallery);
            createAccordion(data.images);
            createTabs(data.images);
            createProgressBar(data.images.length);
            setupDatepicker();
        },
        error: function() {
            alert("Ошибка загрузки галереи!");
        }
    });

    // 3. Создание аккордеона
    function createAccordion(images) {
        var accordionHtml = '<h3>Изображения</h3><div>';
        images.forEach(image => {
            accordionHtml += `<p>${image.name}</p>`;
        });
        accordionHtml += '</div>';
        $("#accordion").append(accordionHtml).accordion();
        $("#accordion").hide().slideDown(500); // Эффект Slide
    }

    // 4. Создание вкладок
    function createTabs(images) {
        images.forEach((image, index) => {
            $("#tabs ul").append(`<li><a href="#tab-${index}">${image.name}</a></li>`);
            $("#tabs").append(`<div id="tab-${index}"><img src="${image.file}" alt="${image.name}" class="tab-image"></div>`);
        });
        $("#tabs").tabs();

        $(".tab-image").click(function() {
            var imgSrc = $(this).attr("src");
            $("#lightbox-img").attr("src", imgSrc);
            $("#lightbox").fadeIn(500); // Эффект Fade
        });
    }

    // 5. Настройка выбора даты
    function setupDatepicker() {
        $("#datepicker").datepicker();
    }

    // 6. Прогресс-бар
    function createProgressBar(totalImages) {
        $("#progressbar").progressbar({
            value: false
        });
        
        $("#progressbar").progressbar("option", "value", 100);
    }

    // 7. Управление lightbox
    $("#close-lightbox").click(function() {
        $("#lightbox").fadeOut(500); // Эффект Fade
    });

    $("#next-image").click(function() {
        var currentImage = $("#lightbox-img").attr("src");
        var currentIndex = $(".tab-image").index($(`img[src='${currentImage}']`));
        var nextIndex = (currentIndex + 1) % $(".tab-image").length;
        var nextImage = $(".tab-image").eq(nextIndex).attr("src");
        
        // Применение эффекта Puff перед заменой изображения
        $("#lightbox-img").fadeOut(300, function() {
            $(this).attr("src", nextImage).fadeIn(300); // Эффект Fade
        });
    });

    // 8. Переключение классов изображений
    $("#toggle-images").click(function() {
        $(".tab-image").toggleClass("highlight").effect("puff", { times: 2 }, 500); // Эффект Puff
    });
});
