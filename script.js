function calculate() {
    let area = parseFloat(document.getElementById("area").value) || 0;
    let windows = parseFloat(document.getElementById("windows").value) || 0;
    let workers = parseFloat(document.getElementById("workers").value) || 0;
    let margin = parseFloat(document.getElementById("margin").value) || 0;
    let discount = parseFloat(document.getElementById("discount").value) || 0;

    let details = [];
    let minPrice = 0, maxPrice = 0;

    // Площадь
    if (area > 0) {
        details.push("Уборка площади: " + area + " м² × 40–55 лей");
        minPrice += area * 40;
        maxPrice += area * 55;
    }

    // Окна
    if (windows > 0) {
        details.push("Окна: " + windows + " м² × 50–90 лей");
        minPrice += windows * 50;
        maxPrice += windows * 90;
    }

    // Кухонная техника
    document.querySelectorAll('input[type=checkbox]:checked').forEach(item => {
        switch(item.value) {
            case "Холодильник":
                details.push("Холодильник: 150–250 лей");
                minPrice += 150; maxPrice += 250;
                break;
            case "Духовка":
                details.push("Духовка + плита + вытяжка: 200–350 лей");
                minPrice += 200; maxPrice += 350;
                break;
            case "Микроволновка":
                details.push("Микроволновка: 50–100 лей");
                minPrice += 50; maxPrice += 100;
                break;
            case "Стул":
                details.push("Стул: 50–100 лей");
                minPrice += 50; maxPrice += 100;
                break;
            case "Кресло":
                details.push("Кресло: 150–200 лей");
                minPrice += 150; maxPrice += 200;
                break;
            case "Диван детский":
                details.push("Диван детский: 400–500 лей");
                minPrice += 400; maxPrice += 500;
                break;
            case "Диван 3-х местный":
                details.push("Диван 3-х местный: 600–700 лей");
                minPrice += 600; maxPrice += 700;
                break;
            case "Диван угловой короткий":
                details.push("Диван угловой короткий: 700–900 лей");
                minPrice += 700; maxPrice += 900;
                break;
            case "Диван угловой длинный":
                details.push("Диван угловой длинный: 900–1100 лей");
                minPrice += 900; maxPrice += 1100;
                break;
            case "Кухонный уголок":
                details.push("Кухонный уголок: 600–800 лей");
                minPrice += 600; maxPrice += 800;
                break;
            case "Матрас1":
                details.push("Матрас (1 сторона): 400 лей");
                minPrice += 400; maxPrice += 400;
                break;
            case "Матрас2":
                details.push("Матрас (2 стороны): 600 лей");
                minPrice += 600; maxPrice += 600;
                break;
        }
    });

    // Работники
    if (workers > 0) {
        details.push("Работники: " + workers + " × 700 лей");
        minPrice += workers * 700;
        maxPrice += workers * 700;
    }

    // Маржа
    minPrice += minPrice * (margin / 100);
    maxPrice += maxPrice * (margin / 100);

    // Скидка
    minPrice -= minPrice * (discount / 100);
    maxPrice -= maxPrice * (discount / 100);

    document.getElementById("result").innerHTML = 
        "Итого: " + Math.round(minPrice) + " – " + Math.round(maxPrice) + " лей";

    document.getElementById("details").innerHTML = details.join("<br>");
}
