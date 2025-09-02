// === Цены (можно менять здесь) ===
const prices = {
    area: 45,          // за 1 м²
    window: 50,        // за окно

    fridge: [150, 250],
    stove: [200, 350],
    microwave: [50, 100],

    chair: [50, 100],
    armchair: [150, 200],
    sofaSmall: [400, 500],
    sofa3: [600, 700],
    sofaCornerSmall: [700, 900],
    sofaCornerBig: [900, 1100],
    kitchenSofa: [600, 800],
    mattress1: 400,
    mattress2: 600,

    worker: 700
};

function avgPrice(value) {
    if (Array.isArray(value)) {
        return (value[0] + value[1]) / 2; // среднее значение, если диапазон
    }
    return value; // фиксированная цена
}

function calculate() {
    let area = parseFloat(document.getElementById('area').value) || 0;
    let windows = parseFloat(document.getElementById('windows').value) || 0;
    let workers = parseFloat(document.getElementById('workers').value) || 0;
    let tariff = parseFloat(document.getElementById('tariff').value) || prices.worker;
    let markup = parseFloat(document.getElementById('markup').value) || 0;
    let discount = parseFloat(document.getElementById('discount').value) || 0;

    // Основные работы
    let total = 0;
    total += area * prices.area;
    total += windows * prices.window;

    // Техника
    total += parseInt(document.getElementById('fridge').value) * avgPrice(prices.fridge) || 0;
    total += parseInt(document.getElementById('stove').value) * avgPrice(prices.stove) || 0;
    total += parseInt(document.getElementById('microwave').value) * avgPrice(prices.microwave) || 0;

    // Мягкая мебель
    total += parseInt(document.getElementById('chair').value) * avgPrice(prices.chair) || 0;
    total += parseInt(document.getElementById('armchair').value) * avgPrice(prices.armchair) || 0;
    total += parseInt(document.getElementById('sofaSmall').value) * avgPrice(prices.sofaSmall) || 0;
    total += parseInt(document.getElementById('sofa3').value) * avgPrice(prices.sofa3) || 0;
    total += parseInt(document.getElementById('sofaCornerSmall').value) * avgPrice(prices.sofaCornerSmall) || 0;
    total += parseInt(document.getElementById('sofaCornerBig').value) * avgPrice(prices.sofaCornerBig) || 0;
    total += parseInt(document.getElementById('kitchenSofa').value) * avgPrice(prices.kitchenSofa) || 0;
    total += parseInt(document.getElementById('mattress1').value) * avgPrice(prices.mattress1) || 0;
    total += parseInt(document.getElementById('mattress2').value) * avgPrice(prices.mattress2) || 0;

    // Работники
    total += workers * tariff;

    // Наценка
    total = total + (total * markup / 100);

    // Скидка
    total = total - (total * discount / 100);

    // Итог
    document.getElementById('result').innerHTML = `Итого: ${Math.round(total)} лей`;
}
