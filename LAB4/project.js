const salesByCampus = [
  { name: "East (Matt)", sales: [45, 50, 47] },
  { name: "West (Mike)", sales: [95, 73, 40] },
  { name: "Westshore (Mark)", sales: [10, 32, 24] },
  { name: "Metro (Milt)", sales: [86, 74, 80] },
];

function calculateTotalSales(sales) {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
    total += sales[i];
  }
  return total;
}

function salesByPerson() {
  let result = "";
  for (let i = 0; i < salesByCampus.length; i++) {
    const campus = salesByCampus[i];
    const totalSales = calculateTotalSales(campus.sales);
    result += `${campus.name}: $${totalSales}\n`;
  }
  alert(result);
}

function bestAndWorst() {
  let bestSalesperson = null;
  let worstSalesperson = null;
  for (let i = 0; i < salesByCampus.length; i++) {
    const campus = salesByCampus[i];
    const totalSales = calculateTotalSales(campus.sales);
    if (!bestSalesperson || totalSales > bestSalesperson.sales) {
      bestSalesperson = { name: campus.name, sales: totalSales };
    }
    if (!worstSalesperson || totalSales < worstSalesperson.sales) {
      worstSalesperson = { name: campus.name, sales: totalSales };
    }
  }
  alert(
    `Best salesperson: ${bestSalesperson.name}\nWorst salesperson: ${worstSalesperson.name}`
  );
}

function commissionsByMonth() {
  let result = "";
  for (let i = 0; i < salesByCampus.length; i++) {
    const campus = salesByCampus[i];
    const sales = campus.sales;
    let totalCommissions = 0;
    for (let j = 0; j < sales.length; j++) {
      const commission = sales[j] * 0.13;
      totalCommissions += commission;
    }
    result += `${campus.name}:\n`;
    result += `January: $${totalCommissions.toFixed(2)}\n`;
    result += `February: $${totalCommissions.toFixed(2)}\n`;
    result += `March: $${totalCommissions.toFixed(2)}\n\n`;
  }
  alert(result);
}
