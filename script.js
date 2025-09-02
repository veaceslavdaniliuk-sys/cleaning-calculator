function calculate() {
    let objects = document.getElementById('objects').value;
    if (!objects || objects <= 0) {
        document.getElementById('result').innerText = "Введите количество объектов";
        return;
    }
    let minPrice = objects * 2000;
    let maxPrice = objects * 3000;
    document.getElementById('result').innerText = "Примерная стоимость: " + minPrice + " - " + maxPrice + " лей";
}