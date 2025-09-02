function calculate() {
    let area = parseFloat(document.getElementById('area').value) || 0;
    let windows = parseFloat(document.getElementById('windows').value) || 0;
    let workers = parseFloat(document.getElementById('workers').value) || 0;
    let tariff = parseFloat(document.getElementById('tariff').value) || 700;
    let markup = parseFloat(document.getElementById('markup').value) || 0;
    let discount = parseFloat(document.getElementById('discount').value) || 0;

    // техника
    let fridge = parseInt(document.getElementById('fridge').value) * 200 || 0;
    let stove = parseInt(document.getElementById('stove').value) * 275 || 0;
    let microwave = parseInt(document.getElementById('microwave').value) * 75 || 0;

    // мебель
    let chair = parseInt(document.getElementById('chair').value) * 75 || 0;
    let armchair = parseInt(document.getElementById('armchair').value) * 175 || 0;
    let sofa_small = parseInt(document.getElementById('sofa_small').value) * 450 || 0;
    let sofa_large = parseInt(document.getElementById('sofa_large').value) * 650 || 0;
    let sofa_corner_small = parseInt(document.getElementById('sofa_corner_small').value) * 800 || 0;
    let sofa_corner_large = parseInt(document.getElementById('sofa_corner_large').value) * 1000 || 0;
    let kitchen_sofa = parseInt(document.getElementById('kitchen_sofa').value) * 700 || 0;
    let mattress1 = parseInt(document.getElementById('mattress1').value) * 400 || 0;
    let mattress2 = parseInt(document.getElementById('mattress2').value) * 600 || 0;

    // расчет
    let baseCost = area * 10 + windows * 20;
    let workersCost = workers * tariff;

    let total = baseCost + workersCost + fridge + stove + microwave + chair + armchair +
                sofa_small + sofa_large + sofa_corner_small + sofa_corner_large +
                kitchen_sofa + mattress1 + mattress2;

    let totalWithMarkup = total + (total * markup / 100);
    let totalWithDiscount = totalWithMarkup - (totalWithMarkup * discount / 100);

    document.getElementById('total').innerText = `Итого: ${totalWithDiscount.toFixed(2)} лей`;
}