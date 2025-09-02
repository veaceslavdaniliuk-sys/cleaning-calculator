const prices = {
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
let html = '<div class="container"><h2>Калькулятор услуг</h2><ul>';

for (let item in prices) {
    const range = prices[item];
    html += `<li>${item}: ${range[0]}–${range[1]} лей</li>`;
}

html += '</ul></div>';
app.innerHTML = html;
