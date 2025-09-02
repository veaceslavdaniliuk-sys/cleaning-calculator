function calculate() {
  let details = [];
  let total = 0;

  // Площадь
  let area = +document.getElementById('area').value;
  let areaPrice = +document.getElementById('areaPrice').value;
  let areaCost = area * areaPrice;
  if (area > 0) details.push(["Площадь ("+area+" м²)", areaCost]);
  total += areaCost;

  // Окна
  let windows = +document.getElementById('windows').value;
  let windowPrice = +document.getElementById('windowPrice').value;
  let windowCost = windows * windowPrice;
  if (windows > 0) details.push(["Окна ("+windows+" м²)", windowCost]);
  total += windowCost;

  // Техника
  let fridge = +document.getElementById('fridge').value * 200;
  if (fridge > 0) details.push(["Холодильники", fridge]);
  total += fridge;

  let oven = +document.getElementById('oven').value * 275;
  if (oven > 0) details.push(["Духовка+плита+вытяжка", oven]);
  total += oven;

  let microwave = +document.getElementById('microwave').value * 75;
  if (microwave > 0) details.push(["Микроволновки", microwave]);
  total += microwave;

  // Мебель
  let chair = +document.getElementById('chair').value * 75;
  if (chair > 0) details.push(["Стулья", chair]);
  total += chair;

  let armchair = +document.getElementById('armchair').value * 175;
  if (armchair > 0) details.push(["Кресла", armchair]);
  total += armchair;

  let sofa = +document.getElementById('sofa').value * 650;
  if (sofa > 0) details.push(["Диваны", sofa]);
  total += sofa;

  let mattress = +document.getElementById('mattress').value * 400;
  if (mattress > 0) details.push(["Матрасы", mattress]);
  total += mattress;

  // Ковролин
  let carpet = +document.getElementById('carpet').value * +document.getElementById('carpetPrice').value;
  if (carpet > 0) details.push(["Ковролин", carpet]);
  total += carpet;

  // Маржа и скидка
  let margin = +document.getElementById('margin').value;
  let discount = +document.getElementById('discount').value;

  if (margin > 0) {
    let marginValue = total * margin / 100;
    details.push(["Маржа "+margin+"%", marginValue]);
    total += marginValue;
  }

  if (discount > 0) {
    let discountValue = total * discount / 100;
    details.push(["Скидка "+discount+"%", -discountValue]);
    total -= discountValue;
  }

  // Обновляем таблицу
  let table = document.getElementById('details');
  table.innerHTML = "<tr><th>Услуга</th><th>Цена (лей)</th></tr>";
  details.forEach(row => {
    let tr = document.createElement("tr");
    tr.innerHTML = "<td>"+row[0]+"</td><td>"+Math.round(row[1])+"</td>";
    table.appendChild(tr);
  });

  document.getElementById('result').innerText = "Итог: " + Math.round(total) + " лей";
}