function calculate() {
  let area = parseFloat(document.getElementById('area').value) || 0;
  let windows = parseFloat(document.getElementById('windows').value) || 0;

  let fridge = parseInt(document.getElementById('fridge').value) || 0;
  let oven = parseInt(document.getElementById('oven').value) || 0;
  let microwave = parseInt(document.getElementById('microwave').value) || 0;

  let chair = parseInt(document.getElementById('chair').value) || 0;
  let armchair = parseInt(document.getElementById('armchair').value) || 0;
  let sofa_small = parseInt(document.getElementById('sofa_small').value) || 0;
  let sofa_large = parseInt(document.getElementById('sofa_large').value) || 0;
  let sofa_corner_short = parseInt(document.getElementById('sofa_corner_short').value) || 0;
  let sofa_corner_long = parseInt(document.getElementById('sofa_corner_long').value) || 0;
  let kitchen_sofa = parseInt(document.getElementById('kitchen_sofa').value) || 0;
  let mattress1 = parseInt(document.getElementById('mattress1').value) || 0;
  let mattress2 = parseInt(document.getElementById('mattress2').value) || 0;

  let workers = parseInt(document.getElementById('workers').value) || 0;
  let tariff = parseFloat(document.getElementById('tariff').value) || 0;
  let margin = parseFloat(document.getElementById('margin').value) || 0;
  let discount = parseFloat(document.getElementById('discount').value) || 0;

  // Базовые расценки
  let areaMin = 35, areaMax = 55;
  let windowMin = 50, windowMax = 70;
  let fridgeMin = 150, fridgeMax = 250;
  let ovenMin = 200, ovenMax = 350;
  let microwaveMin = 50, microwaveMax = 100;

  let chairMin = 50, chairMax = 100;
  let armchairMin = 150, armchairMax = 200;
  let sofaSmallMin = 400, sofaSmallMax = 500;
  let sofaLargeMin = 600, sofaLargeMax = 700;
  let sofaCornerShortMin = 700, sofaCornerShortMax = 900;
  let sofaCornerLongMin = 900, sofaCornerLongMax = 1100;
  let kitchenSofaMin = 600, kitchenSofaMax = 800;
  let mattress1Price = 400;
  let mattress2Price = 600;

  let minTotal = 
    area * areaMin + windows * windowMin +
    fridge * fridgeMin + oven * ovenMin + microwave * microwaveMin +
    chair * chairMin + armchair * armchairMin +
    sofa_small * sofaSmallMin + sofa_large * sofaLargeMin +
    sofa_corner_short * sofaCornerShortMin + sofa_corner_long * sofaCornerLongMin +
    kitchen_sofa * kitchenSofaMin + mattress1 * mattress1Price + mattress2 * mattress2Price +
    workers * tariff;

  let maxTotal = 
    area * areaMax + windows * windowMax +
    fridge * fridgeMax + oven * ovenMax + microwave * microwaveMax +
    chair * chairMax + armchair * armchairMax +
    sofa_small * sofaSmallMax + sofa_large * sofaLargeMax +
    sofa_corner_short * sofaCornerShortMax + sofa_corner_long * sofaCornerLongMax +
    kitchen_sofa * kitchenSofaMax + mattress1 * mattress1Price + mattress2 * mattress2Price +
    workers * tariff;

  // Добавляем маржу
  minTotal *= (1 + margin / 100);
  maxTotal *= (1 + margin / 100);

  // Учитываем скидку
  minTotal *= (1 - discount / 100);
  maxTotal *= (1 - discount / 100);

  document.getElementById('result').innerHTML = 
    `<p>Итого: ${minTotal.toFixed(2)} — ${maxTotal.toFixed(2)} лей</p>`;
}