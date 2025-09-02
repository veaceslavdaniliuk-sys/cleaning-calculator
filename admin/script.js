let prices = {
    "Стул": [50, 100],
    "Кресло": [150, 200],
    "Диван детский": [400, 500],
    "Диван 3-х местный": [600, 700],
    "Диван угловой короткий": [700, 900],
    "Диван угловой длинный": [900, 1100],
    "Кухонный уголок": [600, 800],
    "Матрас (1 сторона)": [400, 400],
    "Матрас (2 стороны)": [600, 600]
};

const app = document.getElementById("app");
let html = '<div class="container"><h2>Админ панель – Редактирование цен</h2><form id="priceForm">';

for (let item in prices) {
    const range = prices[item];
    html += `<label>${item}: 
        <input type="number" value="${range[0]}" data-item="${item}" data-type="min"> – 
        <input type="number" value="${range[1]}" data-item="${item}" data-type="max"> лей</label><br>`;
}

html += '<br><button type="submit">Сохранить</button></form></div>';
app.innerHTML = html;

document.getElementById("priceForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        const item = input.getAttribute("data-item");
        const type = input.getAttribute("data-type");
        prices[item][type === "min" ? 0 : 1] = parseInt(input.value);
    });
    alert("Цены обновлены!");
    console.log(prices);
});
